var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
define(["jquery","designer/util/util.fbSDKLoader","common/util/util.window","appconfig"],function(a,e,r,t){function o(a){r.FB.init({appId:a||"Feed-No-App-ID",xfbml:!0,version:i}),n=!(s=a?!0:!1)}function p(a){var e=r.FB;a.propertyTraversalArr&&a.propertyTraversalArr.forEach(function(a){e=e[a]}),e[a.methodName].apply(null,a.params)}var i=t.fbGraphApiVersion,n=!1,s=!1,d={"class":"fb-page","data-href":"https://web.archive.org/web/20210816220427/https://facebook.com/seeamazingplaces","data-width":180,"data-height":70,"data-hide-cover":!1,"data-show-facepile":!0,"data-show-posts":!0,"data-small-header":!1,"data-adapt-container-width":!0};return{setLocale:function(a,r){e.setLocale(a,r)},setApiGraphVersion:function(a){i=a||i},postFeeds:function(a,r,t,i,n){var d={methodName:"ui",params:[{method:"feed",name:a,display:"popup",link:r,picture:"",caption:r,description:t}]};e.processFBOperation(function(){s||o(i),p(d)},n)},likeBoxGenerator:function(r,t,i,s){var c,f={propertyTraversalArr:["XFBML"],methodName:"parse",params:[]};t?(t=a.isPlainObject(t)?t:JSON.parse(t),c=t):c=d;var l=a("<div>",t).append(a("<div>",{"class":"fb-xfbml-parse-ignore"}).append(a("<blockquote>",{cite:c["data-href"]})).append(a("<a>",{href:c["data-href"]})));l.appendTo(a(r)),e.processFBOperation(function(){n||o(),p(f),i&&"function"==typeof i&&i()},s)}}});
//# sourceMappingURL=facebookSDKHelper.js.map
}

/*
     FILE ARCHIVED ON 22:04:27 Aug 16, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:27:20 Apr 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.403
  load_resource: 213.301 (2)
  PetaboxLoader3.resolve: 141.619 (2)
  PetaboxLoader3.datanode: 69.568 (2)
*/