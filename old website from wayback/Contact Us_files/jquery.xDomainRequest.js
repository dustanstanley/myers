var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
define(["jquery"],function(e){if(!e.support.cors&&e.ajaxTransport&&window.XDomainRequest){var t=/^https?:\/\//i,o=/^get|post$/i,n=new RegExp("^"+location.protocol,"i"),s=/text\/html/i,r=/\/json/i,a=/\/xml/i;e.ajaxTransport("text html xml json",function(i,c){if(i.crossDomain&&i.async&&o.test(i.type)&&t.test(i.url)&&n.test(i.url)){var p=null,l=(c.dataType||"").toLowerCase();return{send:function(t,o){p=new XDomainRequest,/^\d+$/.test(c.timeout)&&(p.timeout=c.timeout),p.ontimeout=function(){o(500,"timeout")},p.onload=function(){var t="Content-Length: "+p.responseText.length+"\r\nContent-Type: "+p.contentType,n={code:200,message:"success"},i={text:p.responseText};try{if("html"===l||s.test(p.contentType))i.html=p.responseText;else if("json"===l||"text"!==l&&r.test(p.contentType))try{i.json=e.parseJSON(p.responseText)}catch(c){n.code=500,n.message="parseerror"}else if("xml"===l||"text"!==l&&a.test(p.contentType)){var m=new ActiveXObject("Microsoft.XMLDOM");m.async=!1;try{m.loadXML(p.responseText)}catch(c){m=void 0}if(!m||!m.documentElement||m.getElementsByTagName("parsererror").length)throw n.code=500,n.message="parseerror","Invalid XML: "+p.responseText;i.xml=m}}catch(u){throw u}finally{o(n.code,n.message,i,t)}},p.onprogress=function(){},p.onerror=function(){o(500,"error",{text:p.responseText})};var n="";c.data&&(n="string"===e.type(c.data)?c.data:e.param(c.data)),p.open(i.type,i.url),p.send(n)},abort:function(){p&&p.abort()}}}})}});
//# sourceMappingURL=jquery.xDomainRequest.js.map
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
  capture_cache.get: 0.314
  load_resource: 437.605 (2)
  PetaboxLoader3.resolve: 131.974 (2)
  PetaboxLoader3.datanode: 208.35 (2)
*/