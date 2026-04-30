var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
define([],function(){function t(t,n){this.name=t,this.Module=n,this.instances={},this.instanceNum=0}return t.prototype={create:function(t,n){return t.length&&!this.get(t)?this.instances[(n=n||{}).instanceId=++this.instanceNum]=new this.Module(t.data(this.name+"-instance",this.instanceNum),n):!1},get:function(t){return t.length?this.instances[t.data(this.name+"-instance")]:!1},destroy:function(t){var n=this.get(t);return n?(delete this.instances[n.model&&n.model.get?n.model.get("instanceId"):n.options.instanceId],!0):!1}},t});
//# sourceMappingURL=util.instances.js.map
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
  capture_cache.get: 0.504
  load_resource: 55.072
  PetaboxLoader3.resolve: 36.713
  PetaboxLoader3.datanode: 17.194
*/