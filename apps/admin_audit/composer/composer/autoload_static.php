<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitAdminAudit
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\AdminAudit\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\AdminAudit\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'OCA\\AdminAudit\\Actions\\Action' => __DIR__ . '/..' . '/../lib/Actions/Action.php',
        'OCA\\AdminAudit\\Actions\\Files' => __DIR__ . '/..' . '/../lib/Actions/Files.php',
        'OCA\\AdminAudit\\Actions\\Sharing' => __DIR__ . '/..' . '/../lib/Actions/Sharing.php',
        'OCA\\AdminAudit\\Actions\\TagManagement' => __DIR__ . '/..' . '/../lib/Actions/TagManagement.php',
        'OCA\\AdminAudit\\Actions\\Trashbin' => __DIR__ . '/..' . '/../lib/Actions/Trashbin.php',
        'OCA\\AdminAudit\\Actions\\Versions' => __DIR__ . '/..' . '/../lib/Actions/Versions.php',
        'OCA\\AdminAudit\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\AdminAudit\\AuditLogger' => __DIR__ . '/..' . '/../lib/AuditLogger.php',
        'OCA\\AdminAudit\\BackgroundJobs\\Rotate' => __DIR__ . '/..' . '/../lib/BackgroundJobs/Rotate.php',
        'OCA\\AdminAudit\\IAuditLogger' => __DIR__ . '/..' . '/../lib/IAuditLogger.php',
        'OCA\\AdminAudit\\Listener\\AppManagementEventListener' => __DIR__ . '/..' . '/../lib/Listener/AppManagementEventListener.php',
        'OCA\\AdminAudit\\Listener\\AuthEventListener' => __DIR__ . '/..' . '/../lib/Listener/AuthEventListener.php',
        'OCA\\AdminAudit\\Listener\\ConsoleEventListener' => __DIR__ . '/..' . '/../lib/Listener/ConsoleEventListener.php',
        'OCA\\AdminAudit\\Listener\\CriticalActionPerformedEventListener' => __DIR__ . '/..' . '/../lib/Listener/CriticalActionPerformedEventListener.php',
        'OCA\\AdminAudit\\Listener\\FileEventListener' => __DIR__ . '/..' . '/../lib/Listener/FileEventListener.php',
        'OCA\\AdminAudit\\Listener\\GroupManagementEventListener' => __DIR__ . '/..' . '/../lib/Listener/GroupManagementEventListener.php',
        'OCA\\AdminAudit\\Listener\\SecurityEventListener' => __DIR__ . '/..' . '/../lib/Listener/SecurityEventListener.php',
        'OCA\\AdminAudit\\Listener\\SharingEventListener' => __DIR__ . '/..' . '/../lib/Listener/SharingEventListener.php',
        'OCA\\AdminAudit\\Listener\\UserManagementEventListener' => __DIR__ . '/..' . '/../lib/Listener/UserManagementEventListener.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitAdminAudit::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitAdminAudit::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitAdminAudit::$classMap;

        }, null, ClassLoader::class);
    }
}