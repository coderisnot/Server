"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[9972,4546],{77796:(t,e,n)=>{n.d(e,{K:()=>r});const a=["post","showcase","carousel"],r={type:{type:String,required:!0,validator:t=>"string"==typeof t&&a.includes(t)},id:{type:String,required:!0},date:{type:Number,required:!1,default:void 0},expiryDate:{type:Number,required:!1,default:void 0},headline:{type:Object,required:!1,default:()=>null},link:{type:String,required:!1,default:()=>null}}},74640:(t,e,n)=>{n.d(e,{O:()=>i});var a=n(53334),r=n(85471);const i=t=>{const e=(0,a.Z0)();return(0,r.EW)((()=>t?.value?((t,e)=>t[e]??t[e.split("_")[0]]??t.en??null)(t.value,e):null))}},32940:(t,e,n)=>{n.d(e,{A:()=>s});var a=n(71354),r=n.n(a),i=n(76314),o=n.n(i)()(r());o.push([t.id,"h3[data-v-564cd4c4]{font-size:24px;font-weight:600;margin-block:0 1em}.app-discover-carousel__wrapper[data-v-564cd4c4]{display:flex}.app-discover-carousel__button[data-v-564cd4c4]{color:var(--color-text-maxcontrast);position:absolute;top:calc(50% - 22px)}.app-discover-carousel__button-wrapper[data-v-564cd4c4]{position:relative}.app-discover-carousel__button--next[data-v-564cd4c4]{inset-inline-end:-54px}.app-discover-carousel__button--previous[data-v-564cd4c4]{inset-inline-start:-54px}.app-discover-carousel__tabs[data-v-564cd4c4]{display:flex;flex-direction:row;justify-content:center}.app-discover-carousel__tabs>*[data-v-564cd4c4]{color:var(--color-text-maxcontrast)}","",{version:3,sources:["webpack://./apps/settings/src/components/AppStoreDiscover/CarouselType.vue"],names:[],mappings:"AACA,oBACC,cAAA,CACA,eAAA,CACA,kBAAA,CAIA,iDACC,YAAA,CAGD,gDACC,mCAAA,CACA,iBAAA,CACA,oBAAA,CAEA,wDACC,iBAAA,CAID,sDACC,sBAAA,CAED,0DACC,wBAAA,CAIF,8CACC,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,gDACC,mCAAA",sourcesContent:["\nh3 {\n\tfont-size: 24px;\n\tfont-weight: 600;\n\tmargin-block: 0 1em;\n}\n\n.app-discover-carousel {\n\t&__wrapper {\n\t\tdisplay: flex;\n\t}\n\n\t&__button {\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tposition: absolute;\n\t\ttop: calc(50% - 22px); // 50% minus half of button height\n\n\t\t&-wrapper {\n\t\t\tposition: relative;\n\t\t}\n\n\t\t// See padding of discover section\n\t\t&--next {\n\t\t\tinset-inline-end: -54px;\n\t\t}\n\t\t&--previous {\n\t\t\tinset-inline-start: -54px;\n\t\t}\n\t}\n\n\t&__tabs {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\n\t\t> * {\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=o},21201:(t,e,n)=>{n.d(e,{A:()=>s});var a=n(71354),r=n.n(a),i=n(76314),o=n.n(i)()(r());o.push([t.id,".app-discover-post[data-v-cf6ad2b0]{max-height:300px;width:100%;background-color:var(--color-primary-element-light);border-radius:var(--border-radius-rounded);display:flex;flex-direction:row;justify-content:start}.app-discover-post--reverse[data-v-cf6ad2b0]{flex-direction:row-reverse}.app-discover-post h3[data-v-cf6ad2b0],.app-discover-post h4[data-v-cf6ad2b0]{font-size:24px;font-weight:600;margin-block:0 1em}.app-discover-post__text[data-v-cf6ad2b0]{display:block;width:100%;padding:var(--border-radius-rounded);overflow-y:scroll}.app-discover-post:has(.app-discover-post__media) .app-discover-post__text[data-v-cf6ad2b0]{padding-block-end:0}.app-discover-post__media[data-v-cf6ad2b0]{display:block;overflow:hidden;max-width:450px;border-radius:var(--border-radius-rounded)}.app-discover-post__media--fullwidth[data-v-cf6ad2b0]{max-width:unset;max-height:unset}.app-discover-post__media--end[data-v-cf6ad2b0]{border-end-start-radius:0;border-start-start-radius:0}.app-discover-post__media--start[data-v-cf6ad2b0]{border-end-end-radius:0;border-start-end-radius:0}.app-discover-post__media img[data-v-cf6ad2b0],.app-discover-post__media-element[data-v-cf6ad2b0]{height:100%;width:100%;object-fit:cover;object-position:center}.app-discover-post__play-icon[data-v-cf6ad2b0]{position:absolute;top:-46px;inset-inline-end:-46px}.app-discover-post__play-icon-wrapper[data-v-cf6ad2b0]{position:relative;top:-50%;inset-inline-start:-50%}.app-discover-post--small.app-discover-post[data-v-cf6ad2b0]{flex-direction:column;max-height:500px}.app-discover-post--small.app-discover-post--reverse[data-v-cf6ad2b0]{flex-direction:column-reverse}.app-discover-post--small .app-discover-post__text[data-v-cf6ad2b0]{flex:1 1 50%}.app-discover-post--small .app-discover-post__media[data-v-cf6ad2b0]{min-width:100%}.app-discover-post--small .app-discover-post__media--end[data-v-cf6ad2b0]{border-radius:var(--border-radius-rounded);border-start-end-radius:0;border-start-start-radius:0}.app-discover-post--small .app-discover-post__media--start[data-v-cf6ad2b0]{border-radius:var(--border-radius-rounded);border-end-end-radius:0;border-end-start-radius:0}","",{version:3,sources:["webpack://./apps/settings/src/components/AppStoreDiscover/PostType.vue"],names:[],mappings:"AACA,oCACC,gBAAA,CACA,UAAA,CACA,mDAAA,CACA,0CAAA,CAEA,YAAA,CACA,kBAAA,CACA,qBAAA,CAEA,6CACC,0BAAA,CAGD,8EACC,cAAA,CACA,eAAA,CACA,kBAAA,CAGD,0CACC,aAAA,CACA,UAAA,CACA,oCAAA,CACA,iBAAA,CAID,4FACC,mBAAA,CAGD,2CACC,aAAA,CACA,eAAA,CAEA,eAAA,CACA,0CAAA,CAEA,sDACC,eAAA,CACA,gBAAA,CAGD,gDACC,yBAAA,CACA,2BAAA,CAGD,kDACC,uBAAA,CACA,yBAAA,CAGD,kGACC,WAAA,CACA,UAAA,CACA,gBAAA,CACA,sBAAA,CAIF,+CAOC,iBAAA,CACA,SAAA,CACA,sBAAA,CARA,uDACC,iBAAA,CACA,QAAA,CACA,uBAAA,CAUF,6DACC,qBAAA,CACA,gBAAA,CAEA,sEACC,6BAAA,CAKD,oEACC,YAAA,CAGD,qEACC,cAAA,CAEA,0EACC,0CAAA,CACA,yBAAA,CACA,2BAAA,CAGD,4EACC,0CAAA,CACA,uBAAA,CACA,yBAAA",sourcesContent:["\n.app-discover-post {\n\tmax-height: 300px;\n\twidth: 100%;\n\tbackground-color: var(--color-primary-element-light);\n\tborder-radius: var(--border-radius-rounded);\n\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: start;\n\n\t&--reverse {\n\t\tflex-direction: row-reverse;\n\t}\n\n\th3, h4 {\n\t\tfont-size: 24px;\n\t\tfont-weight: 600;\n\t\tmargin-block: 0 1em;\n\t}\n\n\t&__text {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tpadding: var(--border-radius-rounded);\n\t\toverflow-y: scroll;\n\t}\n\n\t// If there is media next to the text we do not want a padding on the bottom as this looks weird when scrolling\n\t&:has(&__media) &__text {\n\t\tpadding-block-end: 0;\n\t}\n\n\t&__media {\n\t\tdisplay: block;\n\t\toverflow: hidden;\n\n\t\tmax-width: 450px;\n\t\tborder-radius: var(--border-radius-rounded);\n\n\t\t&--fullwidth {\n\t\t\tmax-width: unset;\n\t\t\tmax-height: unset;\n\t\t}\n\n\t\t&--end {\n\t\t\tborder-end-start-radius: 0;\n\t\t\tborder-start-start-radius: 0;\n\t\t}\n\n\t\t&--start {\n\t\t\tborder-end-end-radius: 0;\n\t\t\tborder-start-end-radius: 0;\n\t\t}\n\n\t\timg, &-element {\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tobject-position: center;\n\t\t}\n\t}\n\n\t&__play-icon {\n\t\t&-wrapper {\n\t\t\tposition: relative;\n\t\t\ttop: -50%;\n\t\t\tinset-inline-start: -50%;\n\t\t}\n\n\t\tposition: absolute;\n\t\ttop: -46px; // half of the icon height\n\t\tinset-inline-end: -46px; // half of the icon width\n\t}\n}\n\n.app-discover-post--small {\n\t&.app-discover-post {\n\t\tflex-direction: column;\n\t\tmax-height: 500px;\n\n\t\t&--reverse {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\t}\n\n\t.app-discover-post {\n\t\t&__text {\n\t\t\tflex: 1 1 50%;\n\t\t}\n\n\t\t&__media {\n\t\t\tmin-width: 100%;\n\n\t\t\t&--end {\n\t\t\t\tborder-radius: var(--border-radius-rounded);\n\t\t\t\tborder-start-end-radius: 0;\n\t\t\t\tborder-start-start-radius: 0;\n\t\t\t}\n\n\t\t\t&--start {\n\t\t\t\tborder-radius: var(--border-radius-rounded);\n\t\t\t\tborder-end-end-radius: 0;\n\t\t\t\tborder-end-start-radius: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=o},98945:(t,e,n)=>{n.d(e,{A:()=>s});var a=n(71354),r=n.n(a),i=n(76314),o=n.n(i)()(r());o.push([t.id,"\n.slide-in-enter-active,\n.slide-in-leave-active,\n.slide-out-enter-active,\n.slide-out-leave-active {\n  transition: all .4s ease-out;\n}\n.slide-in-leave-to,\n.slide-out-enter {\n  opacity: 0;\n  transform: translateX(50%);\n}\n.slide-in-enter,\n.slide-out-leave-to {\n  opacity: 0;\n  transform: translateX(-50%);\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/AppStoreDiscover/CarouselType.vue"],names:[],mappings:";AA2LA;;;;EAIA,4BAAA;AACA;AAEA;;EAEA,UAAA;EACA,0BAAA;AACA;AAEA;;EAEA,UAAA;EACA,2BAAA;AACA",sourcesContent:['\x3c!--\n  - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n--\x3e\n<template>\n\t<section :aria-roledescription="t(\'settings\', \'Carousel\')" :aria-labelledby="headingId ? `${headingId}` : undefined">\n\t\t<h3 v-if="headline" :id="headingId">\n\t\t\t{{ translatedHeadline }}\n\t\t</h3>\n\t\t<div class="app-discover-carousel__wrapper">\n\t\t\t<div class="app-discover-carousel__button-wrapper">\n\t\t\t\t<NcButton class="app-discover-carousel__button app-discover-carousel__button--previous"\n\t\t\t\t\ttype="tertiary-no-background"\n\t\t\t\t\t:aria-label="t(\'settings\', \'Previous slide\')"\n\t\t\t\t\t:disabled="!hasPrevious"\n\t\t\t\t\t@click="currentIndex -= 1">\n\t\t\t\t\t<template #icon>\n\t\t\t\t\t\t<NcIconSvgWrapper :path="mdiChevronLeft" />\n\t\t\t\t\t</template>\n\t\t\t\t</NcButton>\n\t\t\t</div>\n\n\t\t\t<Transition :name="transitionName" mode="out-in">\n\t\t\t\t<PostType v-bind="shownElement"\n\t\t\t\t\t:key="shownElement.id ?? currentIndex"\n\t\t\t\t\t:aria-labelledby="`${internalId}-tab-${currentIndex}`"\n\t\t\t\t\t:dom-id="`${internalId}-tabpanel-${currentIndex}`"\n\t\t\t\t\tinline\n\t\t\t\t\trole="tabpanel" />\n\t\t\t</Transition>\n\n\t\t\t<div class="app-discover-carousel__button-wrapper">\n\t\t\t\t<NcButton class="app-discover-carousel__button app-discover-carousel__button--next"\n\t\t\t\t\ttype="tertiary-no-background"\n\t\t\t\t\t:aria-label="t(\'settings\', \'Next slide\')"\n\t\t\t\t\t:disabled="!hasNext"\n\t\t\t\t\t@click="currentIndex += 1">\n\t\t\t\t\t<template #icon>\n\t\t\t\t\t\t<NcIconSvgWrapper :path="mdiChevronRight" />\n\t\t\t\t\t</template>\n\t\t\t\t</NcButton>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="app-discover-carousel__tabs" role="tablist" :aria-label="t(\'settings\', \'Choose slide to display\')">\n\t\t\t<NcButton v-for="index of content.length"\n\t\t\t\t:id="`${internalId}-tab-${index}`"\n\t\t\t\t:key="index"\n\t\t\t\t:aria-label="t(\'settings\', \'{index} of {total}\', { index, total: content.length })"\n\t\t\t\t:aria-controls="`${internalId}-tabpanel-${index}`"\n\t\t\t\t:aria-selected="`${currentIndex === (index - 1)}`"\n\t\t\t\trole="tab"\n\t\t\t\ttype="tertiary-no-background"\n\t\t\t\t@click="currentIndex = index - 1">\n\t\t\t\t<template #icon>\n\t\t\t\t\t<NcIconSvgWrapper :path="currentIndex === (index - 1) ? mdiCircleSlice8 : mdiCircleOutline" />\n\t\t\t\t</template>\n\t\t\t</NcButton>\n\t\t</div>\n\t</section>\n</template>\n\n<script lang="ts">\nimport type { PropType } from \'vue\'\nimport type { IAppDiscoverCarousel } from \'../../constants/AppDiscoverTypes.ts\'\n\nimport { mdiChevronLeft, mdiChevronRight, mdiCircleOutline, mdiCircleSlice8 } from \'@mdi/js\'\nimport { translate as t } from \'@nextcloud/l10n\'\nimport { computed, defineComponent, nextTick, ref, watch } from \'vue\'\nimport { commonAppDiscoverProps } from \'./common.ts\'\nimport { useLocalizedValue } from \'../../composables/useGetLocalizedValue.ts\'\n\nimport NcButton from \'@nextcloud/vue/dist/Components/NcButton.js\'\nimport NcIconSvgWrapper from \'@nextcloud/vue/dist/Components/NcIconSvgWrapper.js\'\nimport PostType from \'./PostType.vue\'\n\nexport default defineComponent({\n\tname: \'CarouselType\',\n\n\tcomponents: {\n\t\tNcButton,\n\t\tNcIconSvgWrapper,\n\t\tPostType,\n\t},\n\n\tprops: {\n\t\t...commonAppDiscoverProps,\n\n\t\t/**\n\t\t * The content of the carousel\n\t\t */\n\t\tcontent: {\n\t\t\ttype: Array as PropType<IAppDiscoverCarousel[\'content\']>,\n\t\t\trequired: true,\n\t\t},\n\t},\n\n\tsetup(props) {\n\t\tconst translatedHeadline = useLocalizedValue(computed(() => props.headline))\n\n\t\tconst currentIndex = ref(Math.min(1, props.content.length - 1))\n\t\tconst shownElement = ref(props.content[currentIndex.value])\n\t\tconst hasNext = computed(() => currentIndex.value < (props.content.length - 1))\n\t\tconst hasPrevious = computed(() => currentIndex.value > 0)\n\n\t\tconst internalId = computed(() => props.id ?? (Math.random() + 1).toString(36).substring(7))\n\t\tconst headingId = computed(() => `${internalId.value}-h`)\n\n\t\tconst transitionName = ref(\'slide-in\')\n\t\twatch(() => currentIndex.value, (o, n) => {\n\t\t\tif (o < n) {\n\t\t\t\ttransitionName.value = \'slide-in\'\n\t\t\t} else {\n\t\t\t\ttransitionName.value = \'slide-out\'\n\t\t\t}\n\n\t\t\t// Wait next tick\n\t\t\tnextTick(() => {\n\t\t\t\tshownElement.value = props.content[currentIndex.value]\n\t\t\t})\n\t\t})\n\n\t\treturn {\n\t\t\tt,\n\t\t\tinternalId,\n\t\t\theadingId,\n\n\t\t\thasNext,\n\t\t\thasPrevious,\n\t\t\tcurrentIndex,\n\t\t\tshownElement,\n\n\t\t\ttransitionName,\n\n\t\t\ttranslatedHeadline,\n\n\t\t\tmdiChevronLeft,\n\t\t\tmdiChevronRight,\n\t\t\tmdiCircleOutline,\n\t\t\tmdiCircleSlice8,\n\t\t}\n\t},\n})\n<\/script>\n\n<style scoped lang="scss">\nh3 {\n\tfont-size: 24px;\n\tfont-weight: 600;\n\tmargin-block: 0 1em;\n}\n\n.app-discover-carousel {\n\t&__wrapper {\n\t\tdisplay: flex;\n\t}\n\n\t&__button {\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tposition: absolute;\n\t\ttop: calc(50% - 22px); // 50% minus half of button height\n\n\t\t&-wrapper {\n\t\t\tposition: relative;\n\t\t}\n\n\t\t// See padding of discover section\n\t\t&--next {\n\t\t\tinset-inline-end: -54px;\n\t\t}\n\t\t&--previous {\n\t\t\tinset-inline-start: -54px;\n\t\t}\n\t}\n\n\t&__tabs {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\n\t\t> * {\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t}\n\t}\n}\n</style>\n\n<style>\n.slide-in-enter-active,\n.slide-in-leave-active,\n.slide-out-enter-active,\n.slide-out-leave-active {\n  transition: all .4s ease-out;\n}\n\n.slide-in-leave-to,\n.slide-out-enter {\n  opacity: 0;\n  transform: translateX(50%);\n}\n\n.slide-in-enter,\n.slide-out-leave-to {\n  opacity: 0;\n  transform: translateX(-50%);\n}\n</style>\n'],sourceRoot:""}]);const s=o},79972:(t,e,n)=>{n.r(e),n.d(e,{default:()=>B});var a=n(9165),r=n(53334),i=n(85471),o=n(77796),s=n(74640),d=n(18740),l=n(6695),p=n(54546);const c=(0,i.pM)({name:"CarouselType",components:{NcButton:d.A,NcIconSvgWrapper:l.A,PostType:p.default},props:{...o.K,content:{type:Array,required:!0}},setup(t){const e=(0,s.O)((0,i.EW)((()=>t.headline))),n=(0,i.KR)(Math.min(1,t.content.length-1)),o=(0,i.KR)(t.content[n.value]),d=(0,i.EW)((()=>n.value<t.content.length-1)),l=(0,i.EW)((()=>n.value>0)),p=(0,i.EW)((()=>t.id??(Math.random()+1).toString(36).substring(7))),c=(0,i.EW)((()=>`${p.value}-h`)),A=(0,i.KR)("slide-in");return(0,i.wB)((()=>n.value),((e,a)=>{A.value=e<a?"slide-in":"slide-out",(0,i.dY)((()=>{o.value=t.content[n.value]}))})),{t:r.Tl,internalId:p,headingId:c,hasNext:d,hasPrevious:l,currentIndex:n,shownElement:o,transitionName:A,translatedHeadline:e,mdiChevronLeft:a.LyG,mdiChevronRight:a.mI8,mdiCircleOutline:a.h$D,mdiCircleSlice8:a.xSL}}});var A=n(85072),u=n.n(A),v=n(97825),m=n.n(v),C=n(77659),h=n.n(C),b=n(55056),f=n.n(b),_=n(10540),x=n.n(_),g=n(41113),y=n.n(g),I=n(32940),k={};k.styleTagTransform=y(),k.setAttributes=f(),k.insert=h().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=x(),u()(I.A,k),I.A&&I.A.locals&&I.A.locals;var w=n(98945),E={};E.styleTagTransform=y(),E.setAttributes=f(),E.insert=h().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=x(),u()(w.A,E),w.A&&w.A.locals&&w.A.locals;const B=(0,n(14486).A)(c,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("section",{attrs:{"aria-roledescription":t.t("settings","Carousel"),"aria-labelledby":t.headingId?`${t.headingId}`:void 0}},[t.headline?e("h3",{attrs:{id:t.headingId}},[t._v("\n\t\t"+t._s(t.translatedHeadline)+"\n\t")]):t._e(),t._v(" "),e("div",{staticClass:"app-discover-carousel__wrapper"},[e("div",{staticClass:"app-discover-carousel__button-wrapper"},[e("NcButton",{staticClass:"app-discover-carousel__button app-discover-carousel__button--previous",attrs:{type:"tertiary-no-background","aria-label":t.t("settings","Previous slide"),disabled:!t.hasPrevious},on:{click:function(e){t.currentIndex-=1}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{attrs:{path:t.mdiChevronLeft}})]},proxy:!0}])})],1),t._v(" "),e("Transition",{attrs:{name:t.transitionName,mode:"out-in"}},[e("PostType",t._b({key:t.shownElement.id??t.currentIndex,attrs:{"aria-labelledby":`${t.internalId}-tab-${t.currentIndex}`,"dom-id":`${t.internalId}-tabpanel-${t.currentIndex}`,inline:"",role:"tabpanel"}},"PostType",t.shownElement,!1))],1),t._v(" "),e("div",{staticClass:"app-discover-carousel__button-wrapper"},[e("NcButton",{staticClass:"app-discover-carousel__button app-discover-carousel__button--next",attrs:{type:"tertiary-no-background","aria-label":t.t("settings","Next slide"),disabled:!t.hasNext},on:{click:function(e){t.currentIndex+=1}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{attrs:{path:t.mdiChevronRight}})]},proxy:!0}])})],1)],1),t._v(" "),e("div",{staticClass:"app-discover-carousel__tabs",attrs:{role:"tablist","aria-label":t.t("settings","Choose slide to display")}},t._l(t.content.length,(function(n){return e("NcButton",{key:n,attrs:{id:`${t.internalId}-tab-${n}`,"aria-label":t.t("settings","{index} of {total}",{index:n,total:t.content.length}),"aria-controls":`${t.internalId}-tabpanel-${n}`,"aria-selected":`${t.currentIndex===n-1}`,role:"tab",type:"tertiary-no-background"},on:{click:function(e){t.currentIndex=n-1}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{attrs:{path:t.currentIndex===n-1?t.mdiCircleSlice8:t.mdiCircleOutline}})]},proxy:!0}],null,!0)})})),1)])}),[],!1,null,"564cd4c4",null).exports},54546:(t,e,n)=>{n.r(e),n.d(e,{default:()=>D});var a=n(9165),r=n(63814),i=n(13073),o=n(85471),s=n(77796),d=n(74640),l=n(6695),p=n(32981),c=n(40173);const A=(0,p.C)("core","apps"),u=Object.fromEntries(A.map((t=>[t.app??t.id,t.href]))),v=(0,o.pM)({name:"AppLink",components:{RouterLink:c.Wk},props:{href:{type:String,required:!0}},data:()=>({routerProps:void 0,linkProps:void 0}),watch:{href:{immediate:!0,handler(){const t=this.href.match(/^app:\/\/([^/]+)(\/.+)?$/);if(this.routerProps=void 0,this.linkProps=void 0,null===t)return void(this.linkProps={href:this.href,target:"_blank",rel:"noreferrer noopener"});const e=t[1];t[2]?this.linkProps={href:(0,r.Jv)(`/apps/${e}${t[2]}`)}:e in u?this.linkProps={href:u[e]}:this.routerProps={to:{name:"apps-details",params:{category:this.$route.params?.category??"discover",id:e}}}}}}});var m=n(14486);const C=(0,m.A)(v,(function(){var t=this,e=t._self._c;return t._self._setupProxy,t.linkProps?e("a",t._b({},"a",t.linkProps,!1),[t._t("default")],2):t.routerProps?e("RouterLink",t._b({},"RouterLink",t.routerProps,!1),[t._t("default")],2):t._e()}),[],!1,null,null,null).exports,h=(0,o.pM)({components:{AppLink:C,NcIconSvgWrapper:l.A},props:{...s.K,text:{type:Object,required:!1,default:()=>null},media:{type:Object,required:!1,default:()=>null},inline:{type:Boolean,required:!1,default:!1},domId:{type:String,required:!1,default:null}},setup(t){const e=(0,d.O)((0,o.EW)((()=>t.headline))),n=(0,d.O)((0,o.EW)((()=>t.text))),s=(0,d.O)((0,o.EW)((()=>t.media?.content))),l=(0,o.EW)((()=>null!==s.value?[s.value.src].flat():void 0)),p=(0,o.EW)((()=>s.value?.alt??"")),c=(0,o.EW)((()=>!0===l?.value?.[0].mime.startsWith("image/"))),A=(0,o.EW)((()=>!e.value&&!n.value)),u=(0,o.EW)((()=>s.value?.link??t.link)),v=(0,o.KR)(!1),m=(0,o.EW)((()=>s.value?.link&&v.value)),C=(0,o.KR)(),{width:h}=(0,i.Lhy)(C),b=(0,o.EW)((()=>h.value<600)),f=(0,o.KR)(),_=(0,i.ITo)(f,{threshold:.3});return(0,o.nT)((()=>{if(!c.value&&f.value){const t=f.value;_.value?(t.muted=!0,t.play()):(t.pause(),t.ended&&(t.currentTime=0,v.value=!1))}})),{mdiPlayCircleOutline:a.Nwy,container:C,translatedText:n,translatedHeadline:e,mediaElement:f,mediaSources:l,mediaAlt:p,mediaLink:u,hasPlaybackEnded:v,showPlayVideo:m,isFullWidth:A,isSmallWidth:b,isImage:c,generatePrivacyUrl:t=>t.startsWith("/")?t:(0,r.Jv)("/settings/api/apps/media?fileName={fileName}",{fileName:t})}}});var b=n(85072),f=n.n(b),_=n(97825),x=n.n(_),g=n(77659),y=n.n(g),I=n(55056),k=n.n(I),w=n(10540),E=n.n(w),B=n(41113),P=n.n(B),N=n(21201),S={};S.styleTagTransform=P(),S.setAttributes=k(),S.insert=y().bind(null,"head"),S.domAPI=x(),S.insertStyleElement=E(),f()(N.A,S),N.A&&N.A.locals&&N.A.locals;const D=(0,m.A)(h,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("article",{ref:"container",staticClass:"app-discover-post",class:{"app-discover-post--reverse":t.media&&"start"===t.media.alignment,"app-discover-post--small":t.isSmallWidth},attrs:{id:t.domId}},[t.headline||t.text?e(t.link?"AppLink":"div",{tag:"component",staticClass:"app-discover-post__text",attrs:{href:t.link}},[e(t.inline?"h4":"h3",{tag:"component"},[t._v("\n\t\t\t"+t._s(t.translatedHeadline)+"\n\t\t")]),t._v(" "),e("p",[t._v(t._s(t.translatedText))])],1):t._e(),t._v(" "),t.mediaSources?e(t.mediaLink?"AppLink":"div",{tag:"component",staticClass:"app-discover-post__media",class:{"app-discover-post__media--fullwidth":t.isFullWidth,"app-discover-post__media--start":"start"===t.media?.alignment,"app-discover-post__media--end":"end"===t.media?.alignment},attrs:{href:t.mediaLink}},[e(t.isImage?"picture":"video",{ref:"mediaElement",tag:"component",staticClass:"app-discover-post__media-element",attrs:{muted:!t.isImage,playsinline:!t.isImage,preload:!t.isImage&&"auto"},on:{ended:function(e){t.hasPlaybackEnded=!0}}},[t._l(t.mediaSources,(function(n){return e("source",{key:n.src,attrs:{src:t.isImage?void 0:t.generatePrivacyUrl(n.src),srcset:t.isImage?t.generatePrivacyUrl(n.src):void 0,type:n.mime}})})),t._v(" "),t.isImage?e("img",{attrs:{src:t.generatePrivacyUrl(t.mediaSources[0].src),alt:t.mediaAlt}}):t._e()],2),t._v(" "),e("div",{staticClass:"app-discover-post__play-icon-wrapper"},[!t.isImage&&t.showPlayVideo?e("NcIconSvgWrapper",{staticClass:"app-discover-post__play-icon",attrs:{path:t.mdiPlayCircleOutline,size:92}}):t._e()],1)],1):t._e()],1)}),[],!1,null,"cf6ad2b0",null).exports}}]);
//# sourceMappingURL=9972-9972.js.map?v=b7597ad74d36447b4184