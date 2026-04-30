var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
define(["jquery","common/geo/googleMaps","common/geo/getClosestGeoLocation"],function(o,n,t){function i(o){t.initMapsApi(o),e()}function e(){for(;C.length>0;)C.pop()()}function a(){return{center:new google.maps.LatLng(33.6744664,-112.1386465),zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0,zoomControl:!0,zoomControlOptions:{position:google.maps.ControlPosition.LEFT_BOTTOM},streetViewControl:!0,streetViewControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM}}}function r(o){var n=p(o);this.marker=new google.maps.Marker({map:this.map,position:n})}function l(){this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(s(this.address))}function s(n){var t=o("<div></div>",{text:n,css:{margin:"5px",padding:"10px",background:"white",color:"black",border:"1px solid black","line-height":"initial"}});return t.get(0)}function p(o){var n=parseFloat(o.lat()),t=parseFloat(o.lng());return new google.maps.LatLng(n,t)}function u(o){var n=p(o);this.map.setCenter(n)}function g(o,n){t.getCoordinates(o,n)}function c(o){return o.lat&&o.lng}function d(o){if(c(o)){var n=this;u.call(n,o),r.call(n,o),l.call(n)}}function f(o,n){w[o]=n}function m(o){return w[o]}function h(n,t,i){if(window.google){var e=o.extend({},a(),i||{}),r={map:new google.maps.Map(n,e),address:t,marker:null},l=m(t);l?d.call(r,l):g(t,function(o){d.call(r,o),f(t,o)})}else C.push(h.bind(null,n,t,i))}function M(){var o=n({loadUsingClient:!0});o.done(function(o){i(o)})}function v(){var o=n({loadingMode:"publish"});o.done(function(o){i(o)})}var C=[],w={};return{drawMap:h,runEditorMode:M,runPublishMode:v}});
//# sourceMappingURL=mapGenerator.js.map
}

/*
     FILE ARCHIVED ON 22:37:10 Jan 17, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:21 Apr 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.453
  load_resource: 1021.132 (2)
  PetaboxLoader3.resolve: 194.881 (2)
  PetaboxLoader3.datanode: 693.829 (2)
*/