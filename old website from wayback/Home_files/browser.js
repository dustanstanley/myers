var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
define(["common/util/util.window"],function(e){var r=function(e){e=e.toLowerCase();var r=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||/(trident).*rv:([\d\.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:r[1]||"",version:r[2]||"0"}},o=r(e.navigator.userAgent),i={msie:!1,webkit:!1,opera:!1,mozilla:!1,safari:!1,chrome:!1,isIE7orLower:!1,isIE8orLower:!1,isIE9:!1,OS:e.navigator.platform,window:e};return i.isMacKeyboard=e.navigator&&-1!==String(e.navigator.appVersion).indexOf("Mac"),i.isWindowsKeyboard=!i.isMacKeyboard,"trident"===o.browser&&(o.browser="msie"),o.browser&&(i[o.browser]=!0,i.version=o.version),i.chrome?i.webkit=!0:i.webkit&&(i.safari=!0),i.majorVersion=parseInt(i.version),i.msie&&i.majorVersion<=7&&(i.isIE7orLower=!0),i.msie&&i.majorVersion<=8&&(i.isIE8orLower=!0),i.msie&&9===i.majorVersion&&(i.isIE9=!0),i});
//# sourceMappingURL=browser.js.map
}

/*
     FILE ARCHIVED ON 22:04:27 Aug 16, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:27:21 Apr 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.383
  load_resource: 158.099 (2)
  PetaboxLoader3.resolve: 94.452 (2)
  PetaboxLoader3.datanode: 43.725 (2)
*/