var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
define(["jquery","wsbcore/helper","appconfig"],function(e,n,i){function o(e){var n="js!//maps.googleapis.com/maps/api/js?v=3.21&libraries=places,geometry";return e.loadUsingClient&&d.clientId?n+="&client="+d.clientId:d.apiKey&&(n+="&key="+(e.apiKey||d.apiKey)),n+="&language="+(e.language||d.language),n+="&callback="+(e.callbackName||d.callbackName)}function l(){require(["/i18n/resources/client","wsbcore/growl"],function(n){e("<div></div>").sfGrowl({title:n.resources.Client__Designer__Yikes_hit_a_snag,content:n.resources.Server__There_has_been_an_unexpected_error,icon:"error"})})}function a(e,n){"editor"===n&&l(),e.resolve(!1)}function r(){window.google&&(window.google=void 0)}function t(i,l){var t=o(l),c=l.loadingMode||d.loadingMode;return r(),n.require([t],e.noop,a.bind(null,i,c)),i}function c(e,n){n?u.withClientId=e:u.withApiKey=e}function g(e,n){window[e]=function(){n.resolve(window.google.maps)}}function s(n){var i=n||{},o=i.loadUsingClient?u.withClientId:u.withApiKey,l=i.callbackName||d.callbackName;return o||(o=e.Deferred(),g(l,o),t(o,i),c(o,i.loadUsingClient)),o.promise()}var d={loadUsingKey:!0,loadingMode:"editor",language:"en_US",callbackName:"onGoogleMapsReady",apiKey:i.googleMapsApiKey,clientId:i.googleMapsClientID},u={withClientId:null,withApiKey:null};return s});
//# sourceMappingURL=googleMaps.js.map
}

/*
     FILE ARCHIVED ON 22:37:11 Jan 17, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:22 Apr 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.493
  load_resource: 565.446 (2)
  PetaboxLoader3.resolve: 91.802 (2)
  PetaboxLoader3.datanode: 27.149 (2)
*/