<?php
/**
 * SPDX-FileCopyrightText: 2016 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OC\Preview;

use OCP\EventDispatcher\IEventDispatcher;
use OCP\Files\File;
use OCP\Files\IAppData;
use OCP\Files\InvalidPathException;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;
use OCP\Files\SimpleFS\ISimpleFile;
use OCP\Files\SimpleFS\ISimpleFolder;
use OCP\IConfig;
use OCP\IImage;
use OCP\IPreview;
use OCP\IStreamImage;
use OCP\Preview\BeforePreviewFetchedEvent;
use OCP\Preview\IProviderV2;
use OCP\Preview\IVersionedPreviewFile;

class Generator {
	public const SEMAPHORE_ID_ALL = 0x0a11;
	public const SEMAPHORE_ID_NEW = 0x07ea;

	/** @var IPreview */
	private $previewManager;
	/** @var IConfig */
	private $config;
	/** @var IAppData */
	private $appData;
	/** @var GeneratorHelper */
	private $helper;
	/** @var IEventDispatcher */
	private $eventDispatcher;

	public function __construct(
		IConfig $config,
		IPreview $previewManager,
		IAppData $appData,
		GeneratorHelper $helper,
		IEventDispatcher $eventDispatcher,
	) {
		$this->config = $config;
		$this->previewManager = $previewManager;
		$this->appData = $appData;
		$this->helper = $helper;
		$this->eventDispatcher = $eventDispatcher;
	}

	/**
	 * Returns a preview of a file
	 *
	 * The cache is searched first and if nothing usable was found then a preview is
	 * generated by one of the providers
	 *
	 * @param File $file
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param string $mode
	 * @param string|null $mimeType
	 * @return ISimpleFile
	 * @throws NotFoundException
	 * @throws \InvalidArgumentException if the preview would be invalid (in case the original image is invalid)
	 */
	public function getPreview(File $file, $width = -1, $height = -1, $crop = false, $mode = IPreview::MODE_FILL, $mimeType = null) {
		$specification = [
			'width' => $width,
			'height' => $height,
			'crop' => $crop,
			'mode' => $mode,
		];

		$this->eventDispatcher->dispatchTyped(new BeforePreviewFetchedEvent(
			$file,
			$width,
			$height,
			$crop,
			$mode,
			$mimeType,
		));

		// since we only ask for one preview, and the generate method return the last one it created, it returns the one we want
		return $this->generatePreviews($file, [$specification], $mimeType);
	}

	/**
	 * Generates previews of a file
	 *
	 * @param File $file
	 * @param non-empty-array $specifications
	 * @param string $mimeType
	 * @return ISimpleFile the last preview that was generated
	 * @throws NotFoundException
	 * @throws \InvalidArgumentException if the preview would be invalid (in case the original image is invalid)
	 */
	public function generatePreviews(File $file, array $specifications, $mimeType = null) {
		//Make sure that we can read the file
		if (!$file->isReadable()) {
			throw new NotFoundException('Cannot read file');
		}

		if ($mimeType === null) {
			$mimeType = $file->getMimeType();
		}

		$previewFolder = $this->getPreviewFolder($file);
		// List every existing preview first instead of trying to find them one by one
		$previewFiles = $previewFolder->getDirectoryListing();

		$previewVersion = '';
		if ($file instanceof IVersionedPreviewFile) {
			$previewVersion = $file->getPreviewVersion() . '-';
		}

		// Get the max preview and infer the max preview sizes from that
		$maxPreview = $this->getMaxPreview($previewFolder, $previewFiles, $file, $mimeType, $previewVersion);
		$maxPreviewImage = null; // only load the image when we need it
		if ($maxPreview->getSize() === 0) {
			$maxPreview->delete();
			throw new NotFoundException('Max preview size 0, invalid!');
		}

		[$maxWidth, $maxHeight] = $this->getPreviewSize($maxPreview, $previewVersion);

		if ($maxWidth <= 0 || $maxHeight <= 0) {
			throw new NotFoundException('The maximum preview sizes are zero or less pixels');
		}

		$preview = null;

		foreach ($specifications as $specification) {
			$width = $specification['width'] ?? -1;
			$height = $specification['height'] ?? -1;
			$crop = $specification['crop'] ?? false;
			$mode = $specification['mode'] ?? IPreview::MODE_FILL;

			// If both width and height are -1 we just want the max preview
			if ($width === -1 && $height === -1) {
				$width = $maxWidth;
				$height = $maxHeight;
			}

			// Calculate the preview size
			[$width, $height] = $this->calculateSize($width, $height, $crop, $mode, $maxWidth, $maxHeight);

			// No need to generate a preview that is just the max preview
			if ($width === $maxWidth && $height === $maxHeight) {
				// ensure correct return value if this was the last one
				$preview = $maxPreview;
				continue;
			}

			// Try to get a cached preview. Else generate (and store) one
			try {
				try {
					$preview = $this->getCachedPreview($previewFiles, $width, $height, $crop, $maxPreview->getMimeType(), $previewVersion);
				} catch (NotFoundException $e) {
					if (!$this->previewManager->isMimeSupported($mimeType)) {
						throw new NotFoundException();
					}

					if ($maxPreviewImage === null) {
						$maxPreviewImage = $this->helper->getImage($maxPreview);
					}

					$preview = $this->generatePreview($previewFolder, $maxPreviewImage, $width, $height, $crop, $maxWidth, $maxHeight, $previewVersion);
					// New file, augment our array
					$previewFiles[] = $preview;
				}
			} catch (\InvalidArgumentException $e) {
				throw new NotFoundException('', 0, $e);
			}

			if ($preview->getSize() === 0) {
				$preview->delete();
				throw new NotFoundException('Cached preview size 0, invalid!');
			}
		}
		assert($preview !== null);

		// Free memory being used by the embedded image resource.  Without this the image is kept in memory indefinitely.
		// Garbage Collection does NOT free this memory.  We have to do it ourselves.
		if ($maxPreviewImage instanceof \OCP\Image) {
			$maxPreviewImage->destroy();
		}

		return $preview;
	}

	/**
	 * Acquire a semaphore of the specified id and concurrency, blocking if necessary.
	 * Return an identifier of the semaphore on success, which can be used to release it via
	 * {@see Generator::unguardWithSemaphore()}.
	 *
	 * @param int $semId
	 * @param int $concurrency
	 * @return false|\SysvSemaphore the semaphore on success or false on failure
	 */
	public static function guardWithSemaphore(int $semId, int $concurrency) {
		if (!extension_loaded('sysvsem')) {
			return false;
		}
		$sem = sem_get($semId, $concurrency);
		if ($sem === false) {
			return false;
		}
		if (!sem_acquire($sem)) {
			return false;
		}
		return $sem;
	}

	/**
	 * Releases the semaphore acquired from {@see Generator::guardWithSemaphore()}.
	 *
	 * @param false|\SysvSemaphore $semId the semaphore identifier returned by guardWithSemaphore
	 * @return bool
	 */
	public static function unguardWithSemaphore(false|\SysvSemaphore $semId): bool {
		if ($semId === false || !($semId instanceof \SysvSemaphore)) {
			return false;
		}
		return sem_release($semId);
	}

	/**
	 * Get the number of concurrent threads supported by the host.
	 *
	 * @return int number of concurrent threads, or 0 if it cannot be determined
	 */
	public static function getHardwareConcurrency(): int {
		static $width;

		if (!isset($width)) {
			if (function_exists('ini_get')) {
				$openBasedir = ini_get('open_basedir');
				if (empty($openBasedir) || strpos($openBasedir, '/proc/cpuinfo') !== false) {
					$width = is_readable('/proc/cpuinfo') ? substr_count(file_get_contents('/proc/cpuinfo'), 'processor') : 0;
				} else {
					$width = 0;
				}
			} else {
				$width = 0;
			}
		}
		return $width;
	}

	/**
	 * Get number of concurrent preview generations from system config
	 *
	 * Two config entries, `preview_concurrency_new` and `preview_concurrency_all`,
	 * are available. If not set, the default values are determined with the hardware concurrency
	 * of the host. In case the hardware concurrency cannot be determined, or the user sets an
	 * invalid value, fallback values are:
	 * For new images whose previews do not exist and need to be generated, 4;
	 * For all preview generation requests, 8.
	 * Value of `preview_concurrency_all` should be greater than or equal to that of
	 * `preview_concurrency_new`, otherwise, the latter is returned.
	 *
	 * @param string $type either `preview_concurrency_new` or `preview_concurrency_all`
	 * @return int number of concurrent preview generations, or -1 if $type is invalid
	 */
	public function getNumConcurrentPreviews(string $type): int {
		static $cached = [];
		if (array_key_exists($type, $cached)) {
			return $cached[$type];
		}

		$hardwareConcurrency = self::getHardwareConcurrency();
		switch ($type) {
			case 'preview_concurrency_all':
				$fallback = $hardwareConcurrency > 0 ? $hardwareConcurrency * 2 : 8;
				$concurrency_all = $this->config->getSystemValueInt($type, $fallback);
				$concurrency_new = $this->getNumConcurrentPreviews('preview_concurrency_new');
				$cached[$type] = max($concurrency_all, $concurrency_new);
				break;
			case 'preview_concurrency_new':
				$fallback = $hardwareConcurrency > 0 ? $hardwareConcurrency : 4;
				$cached[$type] = $this->config->getSystemValueInt($type, $fallback);
				break;
			default:
				return -1;
		}
		return $cached[$type];
	}

	/**
	 * @param ISimpleFolder $previewFolder
	 * @param ISimpleFile[] $previewFiles
	 * @param File $file
	 * @param string $mimeType
	 * @param string $prefix
	 * @return ISimpleFile
	 * @throws NotFoundException
	 */
	private function getMaxPreview(ISimpleFolder $previewFolder, array $previewFiles, File $file, $mimeType, $prefix) {
		// We don't know the max preview size, so we can't use getCachedPreview.
		// It might have been generated with a higher resolution than the current value.
		foreach ($previewFiles as $node) {
			$name = $node->getName();
			if (($prefix === '' || str_starts_with($name, $prefix)) && strpos($name, 'max')) {
				return $node;
			}
		}

		$maxWidth = $this->config->getSystemValueInt('preview_max_x', 4096);
		$maxHeight = $this->config->getSystemValueInt('preview_max_y', 4096);

		return $this->generateProviderPreview($previewFolder, $file, $maxWidth, $maxHeight, false, true, $mimeType, $prefix);
	}

	private function generateProviderPreview(ISimpleFolder $previewFolder, File $file, int $width, int $height, bool $crop, bool $max, string $mimeType, string $prefix) {
		$previewProviders = $this->previewManager->getProviders();
		foreach ($previewProviders as $supportedMimeType => $providers) {
			// Filter out providers that does not support this mime
			if (!preg_match($supportedMimeType, $mimeType)) {
				continue;
			}

			foreach ($providers as $providerClosure) {
				$provider = $this->helper->getProvider($providerClosure);
				if (!($provider instanceof IProviderV2)) {
					continue;
				}

				if (!$provider->isAvailable($file)) {
					continue;
				}

				$previewConcurrency = $this->getNumConcurrentPreviews('preview_concurrency_new');
				$sem = self::guardWithSemaphore(self::SEMAPHORE_ID_NEW, $previewConcurrency);
				try {
					$preview = $this->helper->getThumbnail($provider, $file, $width, $height);
				} finally {
					self::unguardWithSemaphore($sem);
				}

				if (!($preview instanceof IImage)) {
					continue;
				}

				$path = $this->generatePath($preview->width(), $preview->height(), $crop, $max, $preview->dataMimeType(), $prefix);
				try {
					$file = $previewFolder->newFile($path);
					if ($preview instanceof IStreamImage) {
						$file->putContent($preview->resource());
					} else {
						$file->putContent($preview->data());
					}
				} catch (NotPermittedException $e) {
					throw new NotFoundException();
				}

				return $file;
			}
		}

		throw new NotFoundException('No provider successfully handled the preview generation');
	}

	/**
	 * @param ISimpleFile $file
	 * @param string $prefix
	 * @return int[]
	 */
	private function getPreviewSize(ISimpleFile $file, string $prefix = '') {
		$size = explode('-', substr($file->getName(), strlen($prefix)));
		return [(int)$size[0], (int)$size[1]];
	}

	/**
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param bool $max
	 * @param string $mimeType
	 * @param string $prefix
	 * @return string
	 */
	private function generatePath($width, $height, $crop, $max, $mimeType, $prefix) {
		$path = $prefix . (string)$width . '-' . (string)$height;
		if ($crop) {
			$path .= '-crop';
		}
		if ($max) {
			$path .= '-max';
		}

		$ext = $this->getExtension($mimeType);
		$path .= '.' . $ext;
		return $path;
	}


	/**
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param string $mode
	 * @param int $maxWidth
	 * @param int $maxHeight
	 * @return int[]
	 */
	private function calculateSize($width, $height, $crop, $mode, $maxWidth, $maxHeight) {
		/*
		 * If we are not cropping we have to make sure the requested image
		 * respects the aspect ratio of the original.
		 */
		if (!$crop) {
			$ratio = $maxHeight / $maxWidth;

			if ($width === -1) {
				$width = $height / $ratio;
			}
			if ($height === -1) {
				$height = $width * $ratio;
			}

			$ratioH = $height / $maxHeight;
			$ratioW = $width / $maxWidth;

			/*
			 * Fill means that the $height and $width are the max
			 * Cover means min.
			 */
			if ($mode === IPreview::MODE_FILL) {
				if ($ratioH > $ratioW) {
					$height = $width * $ratio;
				} else {
					$width = $height / $ratio;
				}
			} elseif ($mode === IPreview::MODE_COVER) {
				if ($ratioH > $ratioW) {
					$width = $height / $ratio;
				} else {
					$height = $width * $ratio;
				}
			}
		}

		if ($height !== $maxHeight && $width !== $maxWidth) {
			/*
			 * Scale to the nearest power of four
			 */
			$pow4height = 4 ** ceil(log($height) / log(4));
			$pow4width = 4 ** ceil(log($width) / log(4));

			// Minimum size is 64
			$pow4height = max($pow4height, 64);
			$pow4width = max($pow4width, 64);

			$ratioH = $height / $pow4height;
			$ratioW = $width / $pow4width;

			if ($ratioH < $ratioW) {
				$width = $pow4width;
				$height /= $ratioW;
			} else {
				$height = $pow4height;
				$width /= $ratioH;
			}
		}

		/*
		 * Make sure the requested height and width fall within the max
		 * of the preview.
		 */
		if ($height > $maxHeight) {
			$ratio = $height / $maxHeight;
			$height = $maxHeight;
			$width /= $ratio;
		}
		if ($width > $maxWidth) {
			$ratio = $width / $maxWidth;
			$width = $maxWidth;
			$height /= $ratio;
		}

		return [(int)round($width), (int)round($height)];
	}

	/**
	 * @param ISimpleFolder $previewFolder
	 * @param ISimpleFile $maxPreview
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param int $maxWidth
	 * @param int $maxHeight
	 * @param string $prefix
	 * @return ISimpleFile
	 * @throws NotFoundException
	 * @throws \InvalidArgumentException if the preview would be invalid (in case the original image is invalid)
	 */
	private function generatePreview(ISimpleFolder $previewFolder, IImage $maxPreview, $width, $height, $crop, $maxWidth, $maxHeight, $prefix) {
		$preview = $maxPreview;
		if (!$preview->valid()) {
			throw new \InvalidArgumentException('Failed to generate preview, failed to load image');
		}

		$previewConcurrency = $this->getNumConcurrentPreviews('preview_concurrency_new');
		$sem = self::guardWithSemaphore(self::SEMAPHORE_ID_NEW, $previewConcurrency);
		try {
			if ($crop) {
				if ($height !== $preview->height() && $width !== $preview->width()) {
					//Resize
					$widthR = $preview->width() / $width;
					$heightR = $preview->height() / $height;

					if ($widthR > $heightR) {
						$scaleH = $height;
						$scaleW = $maxWidth / $heightR;
					} else {
						$scaleH = $maxHeight / $widthR;
						$scaleW = $width;
					}
					$preview = $preview->preciseResizeCopy((int)round($scaleW), (int)round($scaleH));
				}
				$cropX = (int)floor(abs($width - $preview->width()) * 0.5);
				$cropY = (int)floor(abs($height - $preview->height()) * 0.5);
				$preview = $preview->cropCopy($cropX, $cropY, $width, $height);
			} else {
				$preview = $maxPreview->resizeCopy(max($width, $height));
			}
		} finally {
			self::unguardWithSemaphore($sem);
		}


		$path = $this->generatePath($width, $height, $crop, false, $preview->dataMimeType(), $prefix);
		try {
			$file = $previewFolder->newFile($path);
			$file->putContent($preview->data());
		} catch (NotPermittedException $e) {
			throw new NotFoundException();
		}

		return $file;
	}

	/**
	 * @param ISimpleFile[] $files Array of FileInfo, as the result of getDirectoryListing()
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param string $mimeType
	 * @param string $prefix
	 * @return ISimpleFile
	 *
	 * @throws NotFoundException
	 */
	private function getCachedPreview($files, $width, $height, $crop, $mimeType, $prefix) {
		$path = $this->generatePath($width, $height, $crop, false, $mimeType, $prefix);
		foreach ($files as $file) {
			if ($file->getName() === $path) {
				return $file;
			}
		}
		throw new NotFoundException();
	}

	/**
	 * Get the specific preview folder for this file
	 *
	 * @param File $file
	 * @return ISimpleFolder
	 *
	 * @throws InvalidPathException
	 * @throws NotFoundException
	 * @throws NotPermittedException
	 */
	private function getPreviewFolder(File $file) {
		// Obtain file id outside of try catch block to prevent the creation of an existing folder
		$fileId = (string)$file->getId();

		try {
			$folder = $this->appData->getFolder($fileId);
		} catch (NotFoundException $e) {
			$folder = $this->appData->newFolder($fileId);
		}

		return $folder;
	}

	/**
	 * @param string $mimeType
	 * @return null|string
	 * @throws \InvalidArgumentException
	 */
	private function getExtension($mimeType) {
		switch ($mimeType) {
			case 'image/png':
				return 'png';
			case 'image/jpeg':
				return 'jpg';
			case 'image/webp':
				return 'webp';
			case 'image/gif':
				return 'gif';
			default:
				throw new \InvalidArgumentException('Not a valid mimetype: "' . $mimeType . '"');
		}
	}
}