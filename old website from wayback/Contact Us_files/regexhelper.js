var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
define([],function(){var t={};return t.validateEmailAddress=function(t){var e=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/i;return e.test(t)},t.validateUrl=function(t){var e=/^(page|file):([0-9a-f:\-]+)$/i,a=/^mailto:[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/i,i=/^\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|‌​]$/i;return e.test(t)?!0:a.test(t)?!0:i.test(t)},t.validateTime=function(t){var e=/^(\d|[0]\d|[1][0-2]):([0-5]\d)\s?(?:AM|PM)$/i,a=/^(\d|[0]\d|[1]\d|[2][0-3]):([0-5]\d)\s?$/i;return e.test(t)||a.test(t)},t.validateDate=function(t){if(isNaN(Date.parse(t)))return!1;var e=/^\d{1,2}[./-]\d{1,2}[./-]\d{4}$/,a=/^\d{4}[./-]\d{1,2}[./-]\d{1,2}$/;return e.test(t)||a.test(t)},t});
//# sourceMappingURL=regexhelper.js.map
}

/*
     FILE ARCHIVED ON 22:37:11 Jan 17, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:21 Apr 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 6.132
  load_resource: 398.899 (2)
  PetaboxLoader3.resolve: 136.164 (2)
  PetaboxLoader3.datanode: 219.454 (2)
*/