var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
define([],function(){function o(){a||(a=new i.Geocoder)}function n(o,n){n(o?s(o):"")}function e(o,n){if(o){var e=o.geometry;n(e&&e.location||{})}else n({})}function t(t,s,r){o();var d="getCoordinates"===t?e:n,c="getCoordinates"===t?{}:"";s?a.geocode({address:s},function(o,n){var e=n===i.GeocoderStatus.OK?o[0]:s;d(e,r)}):r(c)}function s(o){var n=o;return o.formatted_address?n=o.formatted_address:o.address_components&&(n=r(o)),n}function r(o){return[o.address_components[0]&&o.address_components[0].short_name||"",o.address_components[1]&&o.address_components[1].short_name||"",o.address_components[2]&&o.address_components[2].short_name||""].join(" ")}function d(o){i?o():require(["common/geo/googleMaps"],function(n){var e=n();e.done(function(n){i=n,o()})})}var a,i=window.google&&window.google.maps;return{getClosestStreetAddress:function(o,n){d(function(){t("getAddress",o,n)})},getCoordinates:function(o,n){d(function(){t("getCoordinates",o,n)})},initMapsApi:function(o){i=o}}});
//# sourceMappingURL=getClosestGeoLocation.js.map
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
  capture_cache.get: 0.452
  load_resource: 233.115 (2)
  PetaboxLoader3.resolve: 113.777 (2)
  PetaboxLoader3.datanode: 94.349 (2)
*/