var Ru=Object.defineProperty;var Su=Object.getPrototypeOf;var Cu=Reflect.get;var fs=e=>{throw TypeError(e)};var Du=(e,t,a)=>t in e?Ru(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var bs=(e,t,a)=>Du(e,typeof t!="symbol"?t+"":t,a),vr=(e,t,a)=>t.has(e)||fs("Cannot "+a);var T=(e,t,a)=>(vr(e,t,"read from private field"),a?a.call(e):t.get(e)),de=(e,t,a)=>t.has(e)?fs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),_e=(e,t,a,i)=>(vr(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),ge=(e,t,a)=>(vr(e,t,"access private method"),a);var za=(e,t,a)=>Cu(Su(e),a,t);import{R as Ba,r as Ha}from"./chunk-6CSD65Y2-BTg7uAhj.js";import{H as Iu,M as xu}from"./hls-C6eXj4y_.js";import{C as Qa}from"./custom-media-element-BTc9lN-c.js";import{aR as O,aS as wo,aT as Wa,aU as Pr,aV as Lu,aW as Ro,aX as _s,aY as Ou,aZ as gs,a_ as Bi,a$ as Hi,b0 as Cn,b1 as Nu,b2 as Mu,b3 as Oe,b4 as Dn,b5 as Pu,b6 as me,b7 as R,b8 as $u,b9 as ar,ba as ir,bb as Wt,bc as So,bd as Co,be as ys,bf as Uu,bg as Bu,bh as Hu,bi as rr,bj as Wu,bk as nr,bl as qu,bm as Do,bn as Ku,bo as fr}from"./useAccountAtoLazyQuery-CrQUV3Wu.js";import"./index.es-BiqubXcG.js";import"./index-CWgKvBVE.js";var Yu=Object.create,Io=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,Vu=Object.getOwnPropertyNames,Gu=Object.getPrototypeOf,ju=Object.prototype.hasOwnProperty,xo=function(e,t){return function(){return e&&(t=e(e=0)),t}},he=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},Zu=function(e,t,a,i){if(t&&typeof t=="object"||typeof t=="function")for(var r=Vu(t),n=0,s=r.length,l;n<s;n++)l=r[n],!ju.call(e,l)&&l!==a&&Io(e,l,{get:(function(o){return t[o]}).bind(null,l),enumerable:!(i=Fu(t,l))||i.enumerable});return e},Ae=function(e,t,a){return a=e!=null?Yu(Gu(e)):{},Zu(!e||!e.__esModule?Io(a,"default",{value:e,enumerable:!0}):a,e)},je=he(function(e,t){var a;typeof window<"u"?a=window:typeof global<"u"?a=global:typeof self<"u"?a=self:a={},t.exports=a});function qt(e,t){return t!=null&&typeof Symbol<"u"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):qt(e,t)}var Kt=xo(function(){Kt()});function Lo(e){"@swc/helpers - typeof";return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e}var Oo=xo(function(){}),No=he(function(e,t){var a=Array.prototype.slice;t.exports=i;function i(r,n){for(("length"in r)||(r=[r]),r=a.call(r);r.length;){var s=r.shift(),l=n(s);if(l)return l;s.childNodes&&s.childNodes.length&&(r=a.call(s.childNodes).concat(r))}}}),zu=he(function(e,t){Kt(),t.exports=a;function a(i,r){if(!qt(this,a))return new a(i,r);this.data=i,this.nodeValue=i,this.length=i.length,this.ownerDocument=r||null}a.prototype.nodeType=8,a.prototype.nodeName="#comment",a.prototype.toString=function(){return"[object Comment]"}}),Qu=he(function(e,t){Kt(),t.exports=a;function a(i,r){if(!qt(this,a))return new a(i);this.data=i||"",this.length=this.data.length,this.ownerDocument=r||null}a.prototype.type="DOMTextNode",a.prototype.nodeType=3,a.prototype.nodeName="#text",a.prototype.toString=function(){return this.data},a.prototype.replaceData=function(i,r,n){var s=this.data,l=s.substring(0,i),o=s.substring(i+r,s.length);this.data=l+n+o,this.length=this.data.length}}),Mo=he(function(e,t){t.exports=a;function a(i){var r=this,n=i.type;i.target||(i.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(l){i.currentTarget=r,typeof l=="function"?l(i):l.handleEvent(i)});r.parentNode&&r.parentNode.dispatchEvent(i)}}),Po=he(function(e,t){t.exports=a;function a(i,r){var n=this;n.listeners||(n.listeners={}),n.listeners[i]||(n.listeners[i]=[]),n.listeners[i].indexOf(r)===-1&&n.listeners[i].push(r)}}),$o=he(function(e,t){t.exports=a;function a(i,r){var n=this;if(n.listeners&&n.listeners[i]){var s=n.listeners[i],l=s.indexOf(r);l!==-1&&s.splice(l,1)}}}),Xu=he(function(e,t){Oo(),t.exports=i;var a=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function i(c){switch(c.nodeType){case 3:return h(c.data);case 8:return"<!--"+c.data+"-->";default:return r(c)}}function r(c){var m=[],f=c.tagName;return c.namespaceURI==="http://www.w3.org/1999/xhtml"&&(f=f.toLowerCase()),m.push("<"+f+u(c)+l(c)),a.indexOf(f)>-1?m.push(" />"):(m.push(">"),c.childNodes.length?m.push.apply(m,c.childNodes.map(i)):c.textContent||c.innerText?m.push(h(c.textContent||c.innerText)):c.innerHTML&&m.push(c.innerHTML),m.push("</"+f+">")),m.join("")}function n(c,m){var f=Lo(c[m]);return m==="style"&&Object.keys(c.style).length>0?!0:c.hasOwnProperty(m)&&(f==="string"||f==="boolean"||f==="number")&&m!=="nodeName"&&m!=="className"&&m!=="tagName"&&m!=="textContent"&&m!=="innerText"&&m!=="namespaceURI"&&m!=="innerHTML"}function s(c){if(typeof c=="string")return c;var m="";return Object.keys(c).forEach(function(f){var _=c[f];f=f.replace(/[A-Z]/g,function(y){return"-"+y.toLowerCase()}),m+=f+":"+_+";"}),m}function l(c){var m=c.dataset,f=[];for(var _ in m)f.push({name:"data-"+_,value:m[_]});return f.length?o(f):""}function o(c){var m=[];return c.forEach(function(f){var _=f.name,y=f.value;_==="style"&&(y=s(y)),m.push(_+'="'+d(y)+'"')}),m.length?" "+m.join(" "):""}function u(c){var m=[];for(var f in c)n(c,f)&&m.push({name:f,value:c[f]});for(var _ in c._attributes)for(var y in c._attributes[_]){var b=c._attributes[_][y],g=(b.prefix?b.prefix+":":"")+y;m.push({name:g,value:b.value})}return c.className&&m.push({name:"class",value:c.className}),m.length?o(m):""}function h(c){var m="";return typeof c=="string"?m=c:c&&(m=c.toString()),m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(c){return h(c).replace(/"/g,"&quot;")}}),Uo=he(function(e,t){Kt();var a=No(),i=Mo(),r=Po(),n=$o(),s=Xu(),l="http://www.w3.org/1999/xhtml";t.exports=o;function o(u,h,d){if(!qt(this,o))return new o(u);var c=d===void 0?l:d||null;this.tagName=c===l?String(u).toUpperCase():u,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=h||null,this.namespaceURI=c,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}o.prototype.type="DOMElement",o.prototype.nodeType=1,o.prototype.appendChild=function(u){return u.parentNode&&u.parentNode.removeChild(u),this.childNodes.push(u),u.parentNode=this,u},o.prototype.replaceChild=function(u,h){u.parentNode&&u.parentNode.removeChild(u);var d=this.childNodes.indexOf(h);return h.parentNode=null,this.childNodes[d]=u,u.parentNode=this,h},o.prototype.removeChild=function(u){var h=this.childNodes.indexOf(u);return this.childNodes.splice(h,1),u.parentNode=null,u},o.prototype.insertBefore=function(u,h){u.parentNode&&u.parentNode.removeChild(u);var d=h==null?-1:this.childNodes.indexOf(h);return d>-1?this.childNodes.splice(d,0,u):this.childNodes.push(u),u.parentNode=this,u},o.prototype.setAttributeNS=function(u,h,d){var c=null,m=h,f=h.indexOf(":");if(f>-1&&(c=h.substr(0,f),m=h.substr(f+1)),this.tagName==="INPUT"&&h==="type")this.type=d;else{var _=this._attributes[u]||(this._attributes[u]={});_[m]={value:d,prefix:c}}},o.prototype.getAttributeNS=function(u,h){var d=this._attributes[u],c=d&&d[h]&&d[h].value;return this.tagName==="INPUT"&&h==="type"?this.type:typeof c!="string"?null:c},o.prototype.removeAttributeNS=function(u,h){var d=this._attributes[u];d&&delete d[h]},o.prototype.hasAttributeNS=function(u,h){var d=this._attributes[u];return!!d&&h in d},o.prototype.setAttribute=function(u,h){return this.setAttributeNS(null,u,h)},o.prototype.getAttribute=function(u){return this.getAttributeNS(null,u)},o.prototype.removeAttribute=function(u){return this.removeAttributeNS(null,u)},o.prototype.hasAttribute=function(u){return this.hasAttributeNS(null,u)},o.prototype.removeEventListener=n,o.prototype.addEventListener=r,o.prototype.dispatchEvent=i,o.prototype.focus=function(){},o.prototype.toString=function(){return s(this)},o.prototype.getElementsByClassName=function(u){var h=u.split(" "),d=[];return a(this,function(c){if(c.nodeType===1){var m=c.className||"",f=m.split(" ");h.every(function(_){return f.indexOf(_)!==-1})&&d.push(c)}}),d},o.prototype.getElementsByTagName=function(u){u=u.toLowerCase();var h=[];return a(this.childNodes,function(d){d.nodeType===1&&(u==="*"||d.tagName.toLowerCase()===u)&&h.push(d)}),h},o.prototype.contains=function(u){return a(this,function(h){return u===h})||!1}}),Ju=he(function(e,t){Kt();var a=Uo();t.exports=i;function i(r){if(!qt(this,i))return new i;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}i.prototype.type="DocumentFragment",i.prototype.nodeType=11,i.prototype.nodeName="#document-fragment",i.prototype.appendChild=a.prototype.appendChild,i.prototype.replaceChild=a.prototype.replaceChild,i.prototype.removeChild=a.prototype.removeChild,i.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),ed=he(function(e,t){t.exports=a;function a(i){}a.prototype.initEvent=function(i,r,n){this.type=i,this.bubbles=r,this.cancelable=n},a.prototype.preventDefault=function(){}}),td=he(function(e,t){Kt();var a=No(),i=zu(),r=Qu(),n=Uo(),s=Ju(),l=ed(),o=Mo(),u=Po(),h=$o();t.exports=d;function d(){if(!qt(this,d))return new d;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var c=d.prototype;c.createTextNode=function(m){return new r(m,this)},c.createElementNS=function(m,f){var _=m===null?null:String(m);return new n(f,this,_)},c.createElement=function(m){return new n(m,this)},c.createDocumentFragment=function(){return new s(this)},c.createEvent=function(m){return new l(m)},c.createComment=function(m){return new i(m,this)},c.getElementById=function(m){m=String(m);var f=a(this.childNodes,function(_){if(String(_.id)===m)return _});return f||null},c.getElementsByClassName=n.prototype.getElementsByClassName,c.getElementsByTagName=n.prototype.getElementsByTagName,c.contains=n.prototype.contains,c.removeEventListener=h,c.addEventListener=u,c.dispatchEvent=o}),ad=he(function(e,t){var a=td();t.exports=new a}),Bo=he(function(e,t){var a=typeof global<"u"?global:typeof window<"u"?window:{},i=ad(),r;typeof document<"u"?r=document:(r=a["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=a["__GLOBAL_DOCUMENT_CACHE@4"]=i)),t.exports=r});function id(e){if(Array.isArray(e))return e}function rd(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var i=[],r=!0,n=!1,s,l;try{for(a=a.call(e);!(r=(s=a.next()).done)&&(i.push(s.value),!(t&&i.length===t));r=!0);}catch(o){n=!0,l=o}finally{try{!r&&a.return!=null&&a.return()}finally{if(n)throw l}}return i}}function nd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function Ho(e,t){if(e){if(typeof e=="string")return $r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(a);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $r(e,t)}}function nt(e,t){return id(e)||rd(e,t)||Ho(e,t)||nd()}var Oa=Ae(je()),Es=Ae(je()),sd=Ae(je()),od={now:function(){var e=sd.default.performance,t=e&&e.timing,a=t&&t.navigationStart,i=typeof a=="number"&&typeof e.now=="function"?a+e.now():Date.now();return Math.round(i)}},ne=od,qa=function(){var e,t,a;if(typeof((e=Es.default.crypto)===null||e===void 0?void 0:e.getRandomValues)=="function"){a=new Uint8Array(32),Es.default.crypto.getRandomValues(a);for(var i=0;i<32;i++)a[i]=a[i]%16}else{a=[];for(var r=0;r<32;r++)a[r]=Math.random()*16|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){var u=o==="x"?a[n]:a[n]&3|8;return n++,u.toString(16)});var s=ne.now(),l=s==null?void 0:s.toString(16).substring(3);return l?t.substring(0,28)+l:t},Wo=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},Re=function(e){if(e&&typeof e.nodeName<"u")return e.muxId||(e.muxId=Wo()),e.muxId;var t;try{t=document.querySelector(e)}catch{}return t&&!t.muxId&&(t.muxId=e),(t==null?void 0:t.muxId)||e},Wi=function(e){var t;e&&typeof e.nodeName<"u"?(t=e,e=Re(t)):t=document.querySelector(e);var a=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,a]};function ld(e){if(Array.isArray(e))return $r(e)}function ud(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Se(e){return ld(e)||ud(e)||Ho(e)||dd()}var It={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},cd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,a,i,r,n,s,l=[console,e],o=(a=console.trace).bind.apply(a,Se(l)),u=(i=console.info).bind.apply(i,Se(l)),h=(r=console.debug).bind.apply(r,Se(l)),d=(n=console.warn).bind.apply(n,Se(l)),c=(s=console.error).bind.apply(s,Se(l)),m=t;return{trace:function(){for(var f=arguments.length,_=new Array(f),y=0;y<f;y++)_[y]=arguments[y];if(!(m>It.TRACE))return o.apply(void 0,Se(_))},debug:function(){for(var f=arguments.length,_=new Array(f),y=0;y<f;y++)_[y]=arguments[y];if(!(m>It.DEBUG))return h.apply(void 0,Se(_))},info:function(){for(var f=arguments.length,_=new Array(f),y=0;y<f;y++)_[y]=arguments[y];if(!(m>It.INFO))return u.apply(void 0,Se(_))},warn:function(){for(var f=arguments.length,_=new Array(f),y=0;y<f;y++)_[y]=arguments[y];if(!(m>It.WARN))return d.apply(void 0,Se(_))},error:function(){for(var f=arguments.length,_=new Array(f),y=0;y<f;y++)_[y]=arguments[y];if(!(m>It.ERROR))return c.apply(void 0,Se(_))},get level(){return m},set level(f){f!==this.level&&(m=f??t)}}},V=cd("[mux]"),br=Ae(je());function Ur(){var e=br.default.doNotTrack||br.default.navigator&&br.default.navigator.doNotTrack;return e==="1"}function x(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Kt();function re(e,t){if(!qt(e,t))throw new TypeError("Cannot call a class as a function")}function md(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Ze(e,t,a){return t&&md(e.prototype,t),e}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function sa(e){return sa=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},sa(e)}function hd(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=sa(e),e!==null););return e}function ri(e,t,a){return typeof Reflect<"u"&&Reflect.get?ri=Reflect.get:ri=function(i,r,n){var s=hd(i,r);if(s){var l=Object.getOwnPropertyDescriptor(s,r);return l.get?l.get.call(n||i):l.value}},ri(e,t,a||e)}function Br(e,t){return Br=Object.setPrototypeOf||function(a,i){return a.__proto__=i,a},Br(e,t)}function pd(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Br(e,t)}function vd(e,t){if(e==null)return{};var a={},i=Object.keys(e),r,n;for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function fd(e,t){if(e==null)return{};var a=vd(e,t),i,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function bd(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Oo();function _d(e,t){return t&&(Lo(t)==="object"||typeof t=="function")?t:x(e)}function gd(e){var t=bd();return function(){var a=sa(e),i;if(t){var r=sa(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return _d(this,i)}}var Ie=function(e){return Ka(e)[0]},Ka=function(e){if(typeof e!="string"||e==="")return["localhost"];var t=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,a=e.match(t)||[],i=a[4],r;return i&&(r=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,r]},_r=Ae(je()),yd={exists:function(){var e=_r.default.performance,t=e&&e.timing;return t!==void 0},domContentLoadedEventEnd:function(){var e=_r.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=_r.default.performance,t=e&&e.timing;return t&&t.navigationStart}},qi=yd;function ie(e,t,a){a=a===void 0?1:a,e[t]=e[t]||0,e[t]+=a}function Ki(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{},i=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),i.forEach(function(r){A(e,r,a[r])})}return e}function Ed(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a.push.apply(a,i)}return a}function In(e,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ed(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}),e}var Td=["x-cdn","content-type"],qo=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],kd=Td.concat(qo);function xn(e){e=e||"";var t={},a=e.trim().split(/[\r\n]+/);return a.forEach(function(i){if(i){var r=i.split(": "),n=r.shift();n&&(kd.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(t[n]=r.join(": "))}}),t}function Yi(e){if(e){var t=qo.find(function(a){return e[a]!==void 0});return t?e[t]:void 0}}var Ad=function(e){var t={};for(var a in e){var i=e[a],r=i["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=i["DATA-ID"].replace("io.litix.data.","");t[n]=i.VALUE}}return t},Ko=Ad,Xa=function(e){if(!e)return{};var t=qi.navigationStart(),a=e.loading,i=a?a.start:e.trequest,r=a?a.first:e.tfirst,n=a?a.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+i),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ma=function(e){if(!(!e||typeof e.getAllResponseHeaders!="function"))return xn(e.getAllResponseHeaders())},wd=function(e,t,a){var i=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(y){var b=parseInt(i.version),g;return b===1&&y.programDateTime!==null&&(g=y.programDateTime),b===0&&y.pdt!==null&&(g=y.pdt),g};if(!qi.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var l=function(y,b){return e.emit(t,y,b)},o=function(y,b){var g=b.levels,p=b.audioTracks,k=b.url,D=b.stats,I=b.networkDetails,P=b.sessionData,K={},z={};g.forEach(function(se,be){K[be]={width:se.width,height:se.height,bitrate:se.bitrate,attrs:se.attrs}}),p.forEach(function(se,be){z[be]={name:se.name,language:se.lang,bitrate:se.bitrate}});var B=Xa(D),N=B.bytesLoaded,pe=B.requestStart,Ne=B.responseStart,Me=B.responseEnd;l("requestcompleted",In(Ki({},Ko(P)),{request_event_type:y,request_bytes_loaded:N,request_start:pe,request_response_start:Ne,request_response_end:Me,request_type:"manifest",request_hostname:Ie(k),request_response_headers:ma(I),request_rendition_lists:{media:K,audio:z,video:{}}}))};a.on(i.Events.MANIFEST_LOADED,o);var u=function(y,b){var g=b.details,p=b.level,k=b.networkDetails,D=b.stats,I=Xa(D),P=I.bytesLoaded,K=I.requestStart,z=I.responseStart,B=I.responseEnd,N=g.fragments[g.fragments.length-1],pe=s(N)+n(N.duration);l("requestcompleted",{request_event_type:y,request_bytes_loaded:P,request_start:K,request_response_start:z,request_response_end:B,request_current_level:p,request_type:"manifest",request_hostname:Ie(g.url),request_response_headers:ma(k),video_holdback:g.holdBack&&n(g.holdBack),video_part_holdback:g.partHoldBack&&n(g.partHoldBack),video_part_target_duration:g.partTarget&&n(g.partTarget),video_target_duration:g.targetduration&&n(g.targetduration),video_source_is_live:g.live,player_manifest_newest_program_time:isNaN(pe)?void 0:pe})};a.on(i.Events.LEVEL_LOADED,u);var h=function(y,b){var g=b.details,p=b.networkDetails,k=b.stats,D=Xa(k),I=D.bytesLoaded,P=D.requestStart,K=D.responseStart,z=D.responseEnd;l("requestcompleted",{request_event_type:y,request_bytes_loaded:I,request_start:P,request_response_start:K,request_response_end:z,request_type:"manifest",request_hostname:Ie(g.url),request_response_headers:ma(p)})};a.on(i.Events.AUDIO_TRACK_LOADED,h);var d=function(y,b){var g=b.stats,p=b.networkDetails,k=b.frag;g=g||k.stats;var D=Xa(g),I=D.bytesLoaded,P=D.requestStart,K=D.responseStart,z=D.responseEnd,B=p?ma(p):void 0,N={request_event_type:y,request_bytes_loaded:I,request_start:P,request_response_start:K,request_response_end:z,request_hostname:p?Ie(p.responseURL):void 0,request_id:B?Yi(B):void 0,request_response_headers:B,request_media_duration:k.duration,request_url:p==null?void 0:p.responseURL};k.type==="main"?(N.request_type="media",N.request_current_level=k.level,N.request_video_width=(a.levels[k.level]||{}).width,N.request_video_height=(a.levels[k.level]||{}).height,N.request_labeled_bitrate=(a.levels[k.level]||{}).bitrate):N.request_type=k.type,l("requestcompleted",N)};a.on(i.Events.FRAG_LOADED,d);var c=function(y,b){var g=b.frag,p=g.start,k=s(g),D={currentFragmentPDT:k,currentFragmentStart:n(p)};l("fragmentchange",D)};a.on(i.Events.FRAG_CHANGED,c);var m=function(y,b){var g=b.type,p=b.details,k=b.response,D=b.fatal,I=b.frag,P=b.networkDetails,K=(I==null?void 0:I.url)||b.url||"",z=P?ma(P):void 0;if((p===i.ErrorDetails.MANIFEST_LOAD_ERROR||p===i.ErrorDetails.MANIFEST_LOAD_TIMEOUT||p===i.ErrorDetails.FRAG_LOAD_ERROR||p===i.ErrorDetails.FRAG_LOAD_TIMEOUT||p===i.ErrorDetails.LEVEL_LOAD_ERROR||p===i.ErrorDetails.LEVEL_LOAD_TIMEOUT||p===i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||p===i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||p===i.ErrorDetails.SUBTITLE_LOAD_ERROR||p===i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||p===i.ErrorDetails.KEY_LOAD_ERROR||p===i.ErrorDetails.KEY_LOAD_TIMEOUT)&&l("requestfailed",{request_error:p,request_url:K,request_hostname:Ie(K),request_id:z?Yi(z):void 0,request_type:p===i.ErrorDetails.FRAG_LOAD_ERROR||p===i.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":p===i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||p===i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":p===i.ErrorDetails.SUBTITLE_LOAD_ERROR||p===i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":p===i.ErrorDetails.KEY_LOAD_ERROR||p===i.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:k==null?void 0:k.code,request_error_text:k==null?void 0:k.text}),D){var B,N="".concat(K?"url: ".concat(K,`
`):"")+"".concat(k&&(k.code||k.text)?"response: ".concat(k.code,", ").concat(k.text,`
`):"")+"".concat(b.reason?"failure reason: ".concat(b.reason,`
`):"")+"".concat(b.level?"level: ".concat(b.level,`
`):"")+"".concat(b.parent?"parent stream controller: ".concat(b.parent,`
`):"")+"".concat(b.buffer?"buffer length: ".concat(b.buffer,`
`):"")+"".concat(b.error?"error: ".concat(b.error,`
`):"")+"".concat(b.event?"event: ".concat(b.event,`
`):"")+"".concat(b.err?"error message: ".concat((B=b.err)===null||B===void 0?void 0:B.message,`
`):"");l("error",{player_error_code:g,player_error_message:p,player_error_context:N})}};a.on(i.Events.ERROR,m);var f=function(y,b){var g=b.frag,p=g&&g._url||"";l("requestcanceled",{request_event_type:y,request_url:p,request_type:"media",request_hostname:Ie(p)})};a.on(i.Events.FRAG_LOAD_EMERGENCY_ABORTED,f);var _=function(y,b){var g=b.level,p=a.levels[g];if(p&&p.attrs&&p.attrs.BANDWIDTH){var k=p.attrs.BANDWIDTH,D,I=parseFloat(p.attrs["FRAME-RATE"]);isNaN(I)||(D=I),k?l("renditionchange",{video_source_fps:D,video_source_bitrate:k,video_source_width:p.width,video_source_height:p.height,video_source_rendition_name:p.name,video_source_codec:p==null?void 0:p.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};a.on(i.Events.LEVEL_SWITCHED,_),a._stopMuxMonitor=function(){a.off(i.Events.MANIFEST_LOADED,o),a.off(i.Events.LEVEL_LOADED,u),a.off(i.Events.AUDIO_TRACK_LOADED,h),a.off(i.Events.FRAG_LOADED,d),a.off(i.Events.FRAG_CHANGED,c),a.off(i.Events.ERROR,m),a.off(i.Events.FRAG_LOAD_EMERGENCY_ABORTED,f),a.off(i.Events.LEVEL_SWITCHED,_),a.off(i.Events.DESTROYING,a._stopMuxMonitor),delete a._stopMuxMonitor},a.on(i.Events.DESTROYING,a._stopMuxMonitor)},Rd=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},Ts=function(e,t){if(!e||!e.requestEndDate)return{};var a=Ie(e.url),i=e.url,r=e.bytesLoaded,n=new Date(e.requestStartDate).getTime(),s=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),o=isNaN(e.duration)?0:e.duration,u=typeof t.getMetricsFor=="function"?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType),h;u.length>0&&(h=xn(u[u.length-1]._responseHeaders||""));var d=h?Yi(h):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:l,requestBytesLoaded:r,requestResponseHeaders:h,requestMediaDuration:o,requestHostname:a,requestUrl:i,requestId:d}},Sd=function(e,t){var a=t.getQualityFor(e),i=t.getCurrentTrackFor(e).bitrateList;return i?{currentLevel:a,renditionWidth:i[a].width||null,renditionHeight:i[a].height||null,renditionBitrate:i[a].bandwidth}:{}},Cd=function(e){var t;return(t=e.match(/.*codecs\*?="(.*)"/))===null||t===void 0?void 0:t[1]},Dd=function(e){try{var t,a,i=(a=e.getVersion)===null||a===void 0||(t=a.call(e))===null||t===void 0?void 0:t.split(".").map(function(r){return parseInt(r)})[0];return i}catch{return!1}},Id=function(e,t,a){var i=e.log;if(!a||!a.on){i.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=Dd(a),n=function(g,p){return e.emit(t,g,p)},s=function(g){var p=g.type,k=g.data,D=(k||{}).url;n("requestcompleted",{request_event_type:p,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:Ie(D),request_url:D})};a.on("manifestLoaded",s);var l={},o=function(g){if(typeof g.getRequests!="function")return null;var p=g.getRequests({state:"executed"});return p.length===0?null:p[p.length-1]},u=function(g){var p=g.type,k=g.fragmentModel,D=g.chunk,I=o(k);h({type:p,request:I,chunk:D})},h=function(g){var p=g.type,k=g.chunk,D=g.request,I=(k||{}).mediaInfo,P=I||{},K=P.type,z=P.bitrateList;z=z||[];var B={};z.forEach(function(Pe,ue){B[ue]={},B[ue].width=Pe.width,B[ue].height=Pe.height,B[ue].bitrate=Pe.bandwidth,B[ue].attrs={}}),K==="video"?l.video=B:K==="audio"?l.audio=B:l.media=B;var N=Ts(D,a),pe=N.requestStart,Ne=N.requestResponseStart,Me=N.requestResponseEnd,se=N.requestResponseHeaders,be=N.requestMediaDuration,ot=N.requestHostname,lt=N.requestUrl,ut=N.requestId;n("requestcompleted",{request_event_type:p,request_start:pe,request_response_start:Ne,request_response_end:Me,request_bytes_loaded:-1,request_type:K+"_init",request_response_headers:se,request_hostname:ot,request_id:ut,request_url:lt,request_media_duration:be,request_rendition_lists:l})};r>=4?a.on("initFragmentLoaded",h):a.on("initFragmentLoaded",u);var d=function(g){var p=g.type,k=g.fragmentModel,D=g.chunk,I=o(k);c({type:p,request:I,chunk:D})},c=function(g){var p=g.type,k=g.chunk,D=g.request,I=k||{},P=I.mediaInfo,K=I.start,z=P||{},B=z.type,N=Ts(D,a),pe=N.requestStart,Ne=N.requestResponseStart,Me=N.requestResponseEnd,se=N.requestBytesLoaded,be=N.requestResponseHeaders,ot=N.requestMediaDuration,lt=N.requestHostname,ut=N.requestUrl,Pe=N.requestId,ue=Sd(B,a),$e=ue.currentLevel,Qe=ue.renditionWidth,pr=ue.renditionHeight,wu=ue.renditionBitrate;n("requestcompleted",{request_event_type:p,request_start:pe,request_response_start:Ne,request_response_end:Me,request_bytes_loaded:se,request_type:B,request_response_headers:be,request_hostname:lt,request_id:Pe,request_url:ut,request_media_start_time:K,request_media_duration:ot,request_current_level:$e,request_labeled_bitrate:wu,request_video_width:Qe,request_video_height:pr})};r>=4?a.on("mediaFragmentLoaded",c):a.on("mediaFragmentLoaded",d);var m={video:void 0,audio:void 0,totalBitrate:void 0},f=function(){if(m.video&&typeof m.video.bitrate=="number"){if(!(m.video.width&&m.video.height)){i.warn("have bitrate info for video but missing width/height");return}var g=m.video.bitrate;if(m.audio&&typeof m.audio.bitrate=="number"&&(g+=m.audio.bitrate),g!==m.totalBitrate)return m.totalBitrate=g,{video_source_bitrate:g,video_source_height:m.video.height,video_source_width:m.video.width,video_source_codec:Cd(m.video.codec)}}},_=function(g,p,k){if(typeof g.newQuality!="number"){i.warn("missing evt.newQuality in qualityChangeRendered event",g);return}var D=g.mediaType;if(D==="audio"||D==="video"){var I=a.getBitrateInfoListFor(D).find(function(K){var z=K.qualityIndex;return z===g.newQuality});if(!(I&&typeof I.bitrate=="number")){i.warn("missing bitrate info for ".concat(D));return}m[D]=In(Ki({},I),{codec:a.getCurrentTrackFor(D).codec});var P=f();P&&n("renditionchange",P)}};a.on("qualityChangeRendered",_);var y=function(g){var p=g.request,k=g.mediaType;p=p||{},n("requestcanceled",{request_event_type:p.type+"_"+p.action,request_url:p.url,request_type:k,request_hostname:Ie(p.url)})};a.on("fragmentLoadingAbandoned",y);var b=function(g){var p=g.error,k,D,I=(p==null||(k=p.data)===null||k===void 0?void 0:k.request)||{},P=(p==null||(D=p.data)===null||D===void 0?void 0:D.response)||{};(p==null?void 0:p.code)===27&&n("requestfailed",{request_error:I.type+"_"+I.action,request_url:I.url,request_hostname:Ie(I.url),request_type:I.mediaType,request_error_code:P.status,request_error_text:P.statusText});var K="".concat(I!=null&&I.url?"url: ".concat(I.url,`
`):"")+"".concat(P!=null&&P.status||P!=null&&P.statusText?"response: ".concat(P==null?void 0:P.status,", ").concat(P==null?void 0:P.statusText,`
`):"");n("error",{player_error_code:p==null?void 0:p.code,player_error_message:p==null?void 0:p.message,player_error_context:K})};a.on("error",b),a._stopMuxMonitor=function(){a.off("manifestLoaded",s),a.off("initFragmentLoaded",h),a.off("mediaFragmentLoaded",c),a.off("qualityChangeRendered",_),a.off("error",b),a.off("fragmentLoadingAbandoned",y),delete a._stopMuxMonitor}},xd=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},ks=0,Ld=function(){function e(){re(this,e),A(this,"_listeners",void 0)}return Ze(e,[{key:"on",value:function(t,a,i){return a._eventEmitterGuid=a._eventEmitterGuid||++ks,this._listeners=this._listeners||{},this._listeners[t]=this._listeners[t]||[],i&&(a=a.bind(i)),this._listeners[t].push(a),a}},{key:"off",value:function(t,a){var i=this._listeners&&this._listeners[t];i&&i.forEach(function(r,n){r._eventEmitterGuid===a._eventEmitterGuid&&i.splice(n,1)})}},{key:"one",value:function(t,a,i){var r=this;a._eventEmitterGuid=a._eventEmitterGuid||++ks;var n=function(){r.off(t,n),a.apply(i||this,arguments)};n._eventEmitterGuid=a._eventEmitterGuid,this.on(t,n)}},{key:"emit",value:function(t,a){var i=this;if(this._listeners){a=a||{};var r=this._listeners["before"+t]||[],n=this._listeners["before*"]||[],s=this._listeners[t]||[],l=this._listeners["after"+t]||[],o=function(u,h){u=u.slice(),u.forEach(function(d){d.call(i,{type:t},h)})};o(r,a),o(n,a),o(s,a),o(l,a)}}}]),e}(),Od=Ld,gr=Ae(je()),Nd=function(){function e(t){var a=this;re(this,e),A(this,"_playbackHeartbeatInterval",void 0),A(this,"_playheadShouldBeProgressing",void 0),A(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){a._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?a._stopPlaybackHeartbeatInterval():a._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){a._playbackHeartbeatInterval!==null&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(i,r){a._playbackHeartbeatInterval!==null&&(gr.default.clearInterval(a._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),a._playbackHeartbeatInterval=null)})}return Ze(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var t=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=gr.default.setInterval(function(){t.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(gr.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),Md=Nd,Pd=function e(t){var a=this;re(this,e),A(this,"viewErrored",void 0),t.on("viewinit",function(){a.viewErrored=!1}),t.on("error",function(i,r){try{var n=t.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(t.data.player_error_code=n.player_error_code||r.player_error_code,t.data.player_error_message=n.player_error_message||r.player_error_message,t.data.player_error_context=n.player_error_context||r.player_error_context,t.data.player_error_severity=n.player_error_severity||r.player_error_severity,t.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,a.viewErrored=!0)}catch(s){t.mux.log.warn("Exception in error translator callback.",s),a.viewErrored=!0}}),t.on("aftererror",function(){var i,r,n,s,l;(i=t.data)===null||i===void 0||delete i.player_error_code,(r=t.data)===null||r===void 0||delete r.player_error_message,(n=t.data)===null||n===void 0||delete n.player_error_context,(s=t.data)===null||s===void 0||delete s.player_error_severity,(l=t.data)===null||l===void 0||delete l.player_error_business_exception})},$d=Pd,Ud=function(){function e(t){re(this,e),A(this,"_watchTimeTrackerLastCheckedTime",void 0),A(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return Ze(e,[{key:"_updateWatchTime",value:function(t,a){var i=a.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=i),ie(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(t,a){this._updateWatchTime(t,a),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),Bd=Ud,Hd=function(){function e(t){var a=this;re(this,e),A(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),A(this,"_lastTime",void 0),A(this,"_isAdPlaying",void 0),A(this,"_callbackUpdatePlaybackTime",void 0),A(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=ne.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){a.pm.data.view_playing_time_ms_cumulative=0});var i=this._startPlaybackTimeTracking.bind(this);t.on("playing",i),t.on("adplaying",i),t.on("seeked",i),t.on("rebufferend",i);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("rebufferstart",r),t.on("adplaying",function(){a._isAdPlaying=!0}),t.on("adended",function(){a._isAdPlaying=!1}),t.on("adpause",function(){a._isAdPlaying=!1}),t.on("adbreakstart",function(){a._isAdPlaying=!1}),t.on("adbreakend",function(){a._isAdPlaying=!1}),t.on("adplay",function(){a._isAdPlaying=!1}),t.on("viewinit",function(){a._playbackTimeTrackerLastPlayheadPosition=-1,a._lastTime=ne.now(),a._isAdPlaying=!1,a._callbackUpdatePlaybackTime=null})}return Ze(e,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=ne.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var t=this.pm.data.player_playhead_time||0,a=ne.now(),i=a-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&t>this._playbackTimeTrackerLastPlayheadPosition?r=t-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=i),r>0&&r<=1e3&&ie(this.pm.data,"view_content_playback_time",r),this._callbackUpdatePlaybackTime!==null&&i>0&&i<=1e3&&(this._isAdPlaying&&ie(this.pm.data,"ad_playing_time_ms_cumulative",i),ie(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=t,this._lastTime=a}}]),e}(),Wd=Hd,qd=function(){function e(t){re(this,e),A(this,"pm",void 0),this.pm=t;var a=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",a),t.on("playbackheartbeatend",a),t.on("timeupdate",a),t.on("destroy",function(){t.off("timeupdate",a)})}return Ze(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(t,a){var i=this,r=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(a&&a.player_playhead_time)this.pm.data.player_playhead_time=a.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),e}(),Kd=qd,As=300*1e3,Yd=function e(t){if(re(this,e),!t.disableRebufferTracking){var a,i=function(n,s){r(s),a=void 0},r=function(n){if(a){var s=n.viewer_time-a;ie(t.data,"view_rebuffer_duration",s),a=n.viewer_time,t.data.view_rebuffer_duration>As&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(As,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(n,s){return r(s)}),t.on("rebufferstart",function(n,s){a||(ie(t.data,"view_rebuffer_count",1),a=s.viewer_time,t.one("rebufferend",i))}),t.on("viewinit",function(){a=void 0,t.off("rebufferend",i)})}},Fd=Yd,Vd=function(){function e(t){var a=this;re(this,e),A(this,"_lastCheckedTime",void 0),A(this,"_lastPlayheadTime",void 0),A(this,"_lastPlayheadTimeUpdatedTime",void 0),A(this,"_rebuffering",void 0),A(this,"pm",void 0),this.pm=t,!(t.disableRebufferTracking||t.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){a._cleanupRebufferTracker(null,{viewer_time:ne.now()})}))}return Ze(e,[{key:"_checkIfRebuffering",value:function(t,a){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(t,a);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(a.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(t,a,!0);return}var i=a.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=a.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(t){this._lastCheckedTime=t,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=t}},{key:"_cleanupRebufferTracker",value:function(t,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:a.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=a.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}i?this._prepareRebufferTrackerState(a.viewer_time):this._clearRebufferTrackerState()}}]),e}(),Gd=Vd,jd=function(){function e(t){var a=this;re(this,e),A(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var i=t.data,r=i.view_id;if(!i.view_program_changed){var n=function(s,l){var o=l.viewer_time;(s.type==="playing"&&typeof t.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof t.data.view_time_to_first_frame>"u"||a._inPrerollPosition()))&&a.calculateTimeToFirstFrame(o||ne.now(),r)};t.one("playing",n),t.one("adplaying",n),t.one("viewend",function(){t.off("playing",n),t.off("adplaying",n)})}})}return Ze(e,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(t,a){a===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:t}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),Zd=jd,zd=function e(t){var a=this;re(this,e),A(this,"_lastPlayerHeight",void 0),A(this,"_lastPlayerWidth",void 0),A(this,"_lastPlayheadPosition",void 0),A(this,"_lastSourceHeight",void 0),A(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){a._lastPlayheadPosition=-1});var i=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"],r=["playing","hb","renditionchange","orientationchange","playbackmodechange"];i.forEach(function(n){t.on(n,function(){if(a._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&a._lastPlayerWidth>=0&&a._lastSourceWidth>0&&a._lastPlayerHeight>=0&&a._lastSourceHeight>0){var s=t.data.player_playhead_time-a._lastPlayheadPosition;if(s<0){a._lastPlayheadPosition=-1;return}var l=Math.min(a._lastPlayerWidth/a._lastSourceWidth,a._lastPlayerHeight/a._lastSourceHeight),o=Math.max(0,l-1),u=Math.max(0,1-l);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,o),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,u),ie(t.data,"view_total_content_playback_time",s),ie(t.data,"view_total_upscaling",o*s),ie(t.data,"view_total_downscaling",u*s)}a._lastPlayheadPosition=-1})}),r.forEach(function(n){t.on(n,function(){a._lastPlayheadPosition=t.data.player_playhead_time,a._lastPlayerWidth=t.data.player_width,a._lastPlayerHeight=t.data.player_height,a._lastSourceWidth=t.data.video_source_width,a._lastSourceHeight=t.data.video_source_height})})},Qd=zd,Xd=2e3,Jd=function e(t){var a=this;re(this,e),A(this,"isSeeking",void 0),this.isSeeking=!1;var i=-1,r=function(){var n=ne.now(),s=(t.data.viewer_time||n)-(i||n);ie(t.data,"view_seek_duration",s),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,s),a.isSeeking=!1,i=-1};t.on("seeking",function(n,s){if(Object.assign(t.data,s),a.isSeeking&&s.viewer_time-i<=Xd){i=s.viewer_time;return}a.isSeeking&&r(),a.isSeeking=!0,i=s.viewer_time,ie(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){a.isSeeking&&(r(),t.send("seeked")),a.isSeeking=!1,i=-1})},ec=Jd,ws=function(e,t){e.push(t),e.sort(function(a,i){return a.viewer_time-i.viewer_time})},tc=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],ac=function(){function e(t){var a=this;re(this,e),A(this,"_adHasPlayed",void 0),A(this,"_adRequests",void 0),A(this,"_adResponses",void 0),A(this,"_currentAdRequestNumber",void 0),A(this,"_currentAdResponseNumber",void 0),A(this,"_prerollPlayTime",void 0),A(this,"_wouldBeNewAdPlay",void 0),A(this,"isAdBreak",void 0),A(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){a.isAdBreak=!1,a._currentAdRequestNumber=0,a._currentAdResponseNumber=0,a._adRequests=[],a._adResponses=[],a._adHasPlayed=!1,a._wouldBeNewAdPlay=!0,a._prerollPlayTime=void 0}),tc.forEach(function(r){return t.on(r,a._updateAdData.bind(a))});var i=function(){a.isAdBreak=!1};t.on("adbreakstart",function(){a.isAdBreak=!0}),t.on("play",i),t.on("playing",i),t.on("viewend",i),t.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+a._currentAdRequestNumber++},n),ws(a._adRequests,n),ie(t.data,"view_ad_request_count"),a.inPrerollPosition()&&(t.data.view_preroll_requested=!0,a._adHasPlayed||ie(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+a._currentAdResponseNumber++},n),ws(a._adResponses,n);var s=a.findAdRequest(n.ad_request_id);s&&ie(t.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),t.on("adplay",function(r,n){a._adHasPlayed=!0,a._wouldBeNewAdPlay&&(a._wouldBeNewAdPlay=!1,ie(t.data,"view_ad_played_count")),a.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,a._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,n.viewer_time-a._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-t.data.view_start)),a._prerollPlayTime=n.viewer_time)}),t.on("adplaying",function(r,n){a.inPrerollPosition()&&typeof t.data.view_preroll_load_time>"u"&&typeof a._prerollPlayTime<"u"&&(t.data.view_preroll_load_time=n.viewer_time-a._prerollPlayTime,t.data.view_startup_preroll_load_time=n.viewer_time-a._prerollPlayTime)}),t.on("adclicked",function(r,n){a._wouldBeNewAdPlay||ie(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(r,n){a._wouldBeNewAdPlay||ie(t.data,"view_ad_skipped_count")}),t.on("adended",function(){a._wouldBeNewAdPlay=!0}),t.on("aderror",function(){a._wouldBeNewAdPlay=!0})}return Ze(e,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(t){for(var a=0;a<this._adRequests.length;a++)if(this._adRequests[a].ad_request_id===t)return this._adRequests[a]}},{key:"_updateAdData",value:function(t,a){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&a.ad_tag_url){var i=nt(Ka(a.ad_tag_url),2),r=i[0],n=i[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&a.ad_asset_url){var s=nt(Ka(a.ad_asset_url),2),l=s[0],o=s[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=l}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=a==null?void 0:a.ad_asset_url,this.pm.data.ad_tag_url=a==null?void 0:a.ad_tag_url,this.pm.data.ad_creative_id=a==null?void 0:a.ad_creative_id,this.pm.data.ad_id=a==null?void 0:a.ad_id,this.pm.data.ad_universal_id=a==null?void 0:a.ad_universal_id,a!=null&&a.ad_type&&(this.pm.data.ad_type=a==null?void 0:a.ad_type)}}]),e}(),ic=ac,rc=function e(t){var a=this;re(this,e),A(this,"lastWallClockTime",void 0);var i=function(){a.lastWallClockTime=ne.now(),t.on("before*",r)},r=function(n){var s=ne.now(),l=a.lastWallClockTime;a.lastWallClockTime=s,s-l>3e4&&(t.emit("devicesleep",{viewer_time:l}),Object.assign(t.data,{viewer_time:l}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:s}),Object.assign(t.data,{viewer_time:s}),t.send("devicewake"))};t.one("playbackheartbeat",i),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",i)})},nc=rc,yr=Ae(je()),Yo=function(e){return e()}(function(){var e=function(){for(var a=0,i={};a<arguments.length;a++){var r=arguments[a];for(var n in r)i[n]=r[n]}return i};function t(a){function i(r,n,s){var l;if(typeof document<"u"){if(arguments.length>1){if(s=e({path:"/"},i.defaults,s),typeof s.expires=="number"){var o=new Date;o.setMilliseconds(o.getMilliseconds()+s.expires*864e5),s.expires=o}try{l=JSON.stringify(n),/^[\{\[]/.test(l)&&(n=l)}catch{}return a.write?n=a.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(l={});for(var u=document.cookie?document.cookie.split("; "):[],h=/(%[0-9A-Z]{2})+/g,d=0;d<u.length;d++){var c=u[d].split("="),m=c.slice(1).join("=");m.charAt(0)==='"'&&(m=m.slice(1,-1));try{var f=c[0].replace(h,decodeURIComponent);if(m=a.read?a.read(m,f):a(m,f)||m.replace(h,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch{}if(r===f){l=m;break}r||(l[f]=m)}catch{}}return l}}return i.set=i,i.get=function(r){return i.call(i,r)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(r,n){i(r,"",e(n,{expires:-1}))},i.withConverter=t,i}return t(function(){})}),Fo="muxData",sc=function(e){return Object.entries(e).map(function(t){var a=nt(t,2),i=a[0],r=a[1];return"".concat(i,"=").concat(r)}).join("&")},oc=function(e){return e.split("&").reduce(function(t,a){var i=nt(a.split("="),2),r=i[0],n=i[1],s=+n,l=n&&s==n?s:n;return t[r]=l,t},{})},Vo=function(){var e;try{e=oc(Yo.get(Fo)||"")}catch{e={}}return e},Go=function(e){try{Yo.set(Fo,sc(e),{expires:365})}catch{}},lc=function(){var e=Vo();return e.mux_viewer_id=e.mux_viewer_id||qa(),e.msn=e.msn||Math.random(),Go(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},uc=function(){var e=Vo(),t=ne.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=qa(),e.sst=t),e.sex=t+1500*1e3,Go(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};function dc(e,t){var a=t.beaconCollectionDomain,i=t.beaconDomain;if(a)return"https://"+a;e=e||"inferred";var r=i||"litix.io";return e.match(/^[a-z0-9]+$/)?"https://"+e+"."+r:"https://img.litix.io/a.gif"}var cc=Ae(je()),jo=function(){var e;switch(Zo()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},Zo=function(){var e=cc.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};jo.getConnectionFromAPI=Zo;var mc=jo,hc={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},pc=zo(hc),vc={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},Rs=zo(vc);function zo(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}function Hr(e){var t={},a={};return Object.keys(e).forEach(function(i){var r=!1;if(e.hasOwnProperty(i)&&e[i]!==void 0){var n=i.split("_"),s=n[0],l=pc[s];l||(V.info("Data key word `"+n[0]+"` not expected in "+i),l=s+"_"),n.splice(1).forEach(function(o){o==="url"&&(r=!0),Rs[o]?l+=Rs[o]:Number.isInteger(Number(o))?l+=o:(V.info("Data key word `"+o+"` not expected in "+i),l+="_"+o+"_")}),r?a[l]=e[i]:t[l]=e[i]}}),Object.assign(t,a)}var xt=Ae(je()),fc=Ae(Bo()),bc={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},_c=56*1024,gc=["hb","requestcompleted","requestfailed","requestcanceled"],yc="https://img.litix.io",st=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=e||yc,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},bc,t)};st.prototype.queueEvent=function(e,t){var a=Object.assign({},t);return this._eventQueue.length<=this._options.maxQueueLength||e==="eventrateexceeded"?(this._eventQueue.push(a),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};st.prototype.flushEvents=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(e&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};st.prototype.destroy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),xt.default.clearTimeout(this._sendTimeout)};st.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],Hr({mux_view_message:"event queue truncated"}));var a=this._createPayload(t);Qo(this._beaconUrl,a,!0,function(){})};st.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var a=this._createPayload(t),i=ne.now();Qo(this._beaconUrl,a,!1,function(r,n){n?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,V.info("Error sending beacon: "+n)):e._failureCount=0,e._roundTripTime=ne.now()-i,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})};st.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return e=e*Math.random(),(1+e)*this._options.baseTimeBetweenBeacons};st.prototype._startBeaconSending=function(){var e=this;xt.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=xt.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))};st.prototype._createPayload=function(e){var t=this,a={transmission_timestamp:Math.round(ne.now())};this._roundTripTime&&(a.rtt_ms=Math.round(this._roundTripTime));var i,r,n,s=function(){i=JSON.stringify({metadata:a,events:r||e}),n=i.length/1024},l=function(){return n<=t._options.maxPayloadKBSize};return s(),l()||(V.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(o){return gc.indexOf(o.e)===-1}),s()),l()||(V.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(o){for(var u in o){var h=o[u],d=50*1024;typeof h=="string"&&h.length>d&&(o[u]=h.substring(0,d))}}),s()),i};var Ec=typeof fc.default.exitPictureInPicture=="function"?function(e){return e.length<=_c}:function(e){return!1},Qo=function(e,t,a,i){if(a&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){i();return}if(xt.default.fetch){xt.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:Ec(t)}).then(function(n){return i(null,n.ok?null:"Error")}).catch(function(n){return i(null,n)});return}if(xt.default.XMLHttpRequest){var r=new xt.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return i(null,r.status!==200?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}i()},Tc=st,kc=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],Ac=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],wc=["ad_id","ad_creative_id","ad_universal_id"],Rc=["viewstart","error","ended","viewend"],Sc=600*1e3,Cc=function(){function e(t,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};re(this,e);var r,n,s,l,o,u,h,d,c,m,f,_;A(this,"mux",void 0),A(this,"envKey",void 0),A(this,"options",void 0),A(this,"eventQueue",void 0),A(this,"sampleRate",void 0),A(this,"disableCookies",void 0),A(this,"respectDoNotTrack",void 0),A(this,"previousBeaconData",void 0),A(this,"lastEventTime",void 0),A(this,"rateLimited",void 0),A(this,"pageLevelData",void 0),A(this,"viewerData",void 0),this.mux=t,this.envKey=a,this.options=i,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new Tc(dc(this.envKey,this.options));var y;this.sampleRate=(y=this.options.sampleRate)!==null&&y!==void 0?y:1;var b;this.disableCookies=(b=this.options.disableCookies)!==null&&b!==void 0?b:!1;var g;this.respectDoNotTrack=(g=this.options.respectDoNotTrack)!==null&&g!==void 0?g:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(l=this.options.platform)===null||l===void 0?void 0:l.product,viewer_device_category:"",viewer_device_manufacturer:(o=this.options.platform)===null||o===void 0?void 0:o.manufacturer,viewer_os_family:(h=this.options.platform)===null||h===void 0||(u=h.os)===null||u===void 0?void 0:u.family,viewer_os_architecture:(c=this.options.platform)===null||c===void 0||(d=c.os)===null||d===void 0?void 0:d.architecture,viewer_os_version:(f=this.options.platform)===null||f===void 0||(m=f.os)===null||m===void 0?void 0:m.version,viewer_connection_type:mc(),page_url:yr.default===null||yr.default===void 0||(_=yr.default.location)===null||_===void 0?void 0:_.href},this.viewerData=this.disableCookies?{}:lc()}return Ze(e,[{key:"send",value:function(t,a){if(!(!t||!(a!=null&&a.view_id))){if(this.respectDoNotTrack&&Ur())return V.info("Not sending `"+t+"` because Do Not Track is enabled");if(!a||typeof a!="object")return V.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:uc(),r=In(Ki({},this.pageLevelData,a,i,this.viewerData),{event:t,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,l=this._deduplicateBeaconData(t,r),o=Hr(l);if(this.lastEventTime=this.mux.utils.now(),s)return V.info("Not sending event due to sample rate restriction",t,r,o);if(this.envKey||V.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",t,r,o),!this.rateLimited)if(V.info("Sending event",t,r,o),this.rateLimited=!this.eventQueue.queueEvent(t,o),this.mux.WINDOW_UNLOADING&&t==="viewend")this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&t==="hb")this.eventQueue.flushEvents(!0);else if(Rc.indexOf(t)>=0){if(t==="error"&&a.player_error_severity==="warning")return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event="eventrateexceeded",o=Hr(r),this.eventQueue.queueEvent(r.event,o),V.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(t,a){var i=this,r={},n=a.view_id;if(n==="-1"||t==="viewstart"||t==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=Sc)r=Ki({},a),n&&(this.previousBeaconData=r),n&&t==="viewend"&&(this.previousBeaconData=null);else{var s=t.indexOf("request")===0;Object.entries(a).forEach(function(l){var o=nt(l,2),u=o[0],h=o[1];i.previousBeaconData&&(h!==i.previousBeaconData[u]||kc.indexOf(u)>-1||i.objectHasChanged(s,u,h,i.previousBeaconData[u])||i.eventRequiresKey(t,u))&&(r[u]=h,i.previousBeaconData[u]=h)})}return r}},{key:"objectHasChanged",value:function(t,a,i,r){return!t||a.indexOf("request_")!==0?!1:a==="request_response_headers"||typeof i!="object"||typeof r!="object"?!0:Object.keys(i||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(t,a){return!!(t==="renditionchange"&&a.indexOf("video_source_")===0||wc.includes(a)&&Ac.includes(t))}}]),e}(),Dc=function e(t){re(this,e);var a=0,i=0,r=0,n=0,s=0,l=0,o=0,u=function(c,m){var f=m.request_start,_=m.request_response_start,y=m.request_response_end,b=m.request_bytes_loaded;n++;var g,p;if(_?(g=_-(f??0),p=(y??0)-_):p=(y??0)-(f??0),p>0&&b&&b>0){var k=b/p*8e3;s++,i+=b,r+=p,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,k),t.data.view_average_request_throughput=i/r*8e3,t.data.view_request_count=n,g>0&&(a+=g,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,g),t.data.view_average_request_latency=a/s)}},h=function(c,m){n++,l++,t.data.view_request_count=n,t.data.view_request_failed_count=l},d=function(c,m){n++,o++,t.data.view_request_count=n,t.data.view_request_canceled_count=o};t.on("requestcompleted",u),t.on("requestfailed",h),t.on("requestcanceled",d)},Ic=Dc,xc=3600*1e3,Lc=function e(t){var a=this;re(this,e),A(this,"_lastEventTime",void 0),t.on("before*",function(i,r){var n=r.viewer_time,s=ne.now(),l=a._lastEventTime;if(a._lastEventTime=s,l&&s-l>xc){var o=Object.keys(t.data).reduce(function(h,d){return d.indexOf("video_")===0?Object.assign(h,A({},d,t.data[d])):h},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var u=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:n},o)),t.playbackHeartbeat._playheadShouldBeProgressing=u,t.playbackHeartbeat._playheadShouldBeProgressing&&i.type!=="play"&&i.type!=="adbreakstart"&&(t.emit("play",{viewer_time:n}),i.type!=="playing"&&t.emit("playing",{viewer_time:n}))}})},Oc=Lc,Nc=function e(t){re(this,e);var a=function(l){var o=Mc(l),u=Pc(l);if(o!=null&&!Ss(o,n)&&s<=u){n=o,s=u;var h={video_cdn:o};t.emit("cdnchange",h)}},i=null,r=null,n=null,s=0;t.on("viewinit",function(){i=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(l,o){var u=o==null?void 0:o.video_cdn;u&&(typeof o.video_previous_cdn>"u"||o.video_previous_cdn===null)&&(Ss(u,r)?o.video_previous_cdn=i??void 0:(o.video_previous_cdn=r??void 0,i=r,r=u))}),t.on("requestcompleted",function(l,o){a(o)})};function Ss(e,t){return(e==null?void 0:e.toLowerCase())===(t==null?void 0:t.toLowerCase())}function Mc(e){var t;return e!=null&&e.request_type&&(e.request_type==="media"||e.request_type==="video")&&!((t=e.request_response_headers)===null||t===void 0)&&t["x-cdn"]?e.request_response_headers["x-cdn"]:e!=null&&e.video_cdn?e.video_cdn:null}function Pc(e){return e!=null&&e.request_start?e.request_start:e!=null&&e.viewer_time?e.viewer_time:Date.now()}var $c=Nc,Uc=function(e){try{return JSON.parse(e),!0}catch{return!1}},Bc=function e(t){var a=this;re(this,e),A(this,"_emittingAutomaticEvent",!1),A(this,"_hasInitialized",!1),t.on("viewstart",function(){a._hasInitialized||(a._hasInitialized=!0,a._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:"standard",player_playback_mode_data:"{}"}),a._emittingAutomaticEvent=!1)}),t.on("viewend",function(){a._hasInitialized=!1}),t.on("playbackmodechange",function(i,r){a._emittingAutomaticEvent||(r.player_playback_mode_data?Uc(r.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),r.player_playback_mode_data="{}"):r.player_playback_mode_data="{}",t.data.player_playback_mode_data=r.player_playback_mode_data,t.data.player_playback_mode=r.player_playback_mode)})},Hc=Bc,Wc=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","cdnchange","playbackmodechange"],qc=new Set(["requestcompleted","requestfailed","requestcanceled"]),Kc=function(e){pd(a,e);var t=gd(a);function a(i,r,n){re(this,a);var s;s=t.call(this),A(x(s),"pageLoadEndTime",void 0),A(x(s),"pageLoadInitTime",void 0),A(x(s),"_destroyed",void 0),A(x(s),"_heartBeatTimeout",void 0),A(x(s),"adTracker",void 0),A(x(s),"dashjs",void 0),A(x(s),"data",void 0),A(x(s),"disablePlayheadRebufferTracking",void 0),A(x(s),"disableRebufferTracking",void 0),A(x(s),"errorTracker",void 0),A(x(s),"errorTranslator",void 0),A(x(s),"emitTranslator",void 0),A(x(s),"getAdData",void 0),A(x(s),"getPlayheadTime",void 0),A(x(s),"getStateData",void 0),A(x(s),"stateDataTranslator",void 0),A(x(s),"hlsjs",void 0),A(x(s),"id",void 0),A(x(s),"longResumeTracker",void 0),A(x(s),"minimumRebufferDuration",void 0),A(x(s),"mux",void 0),A(x(s),"playbackEventDispatcher",void 0),A(x(s),"playbackHeartbeat",void 0),A(x(s),"playbackHeartbeatTime",void 0),A(x(s),"playheadTime",void 0),A(x(s),"seekingTracker",void 0),A(x(s),"sustainedRebufferThreshold",void 0),A(x(s),"watchTimeTracker",void 0),A(x(s),"currentFragmentPDT",void 0),A(x(s),"currentFragmentStart",void 0),s.pageLoadInitTime=qi.navigationStart(),s.pageLoadEndTime=qi.domContentLoadedEventEnd();var l={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(c){return c},emitTranslator:function(){for(var c=arguments.length,m=new Array(c),f=0;f<c;f++)m[f]=arguments[f];return m},stateDataTranslator:function(c){return c}};s.mux=i,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(l,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),V.level=n.debug?It.DEBUG:It.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new Cc(i,n.data.env_key,n),s.data={player_instance_id:qa(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var o=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(x(s));if(s.on("viewinit",function(c,m){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,m),this._initializeViewData(),this.one("play",o),this.one("adbreakstart",o)}),s.on("videochange",function(c,m){this._resetView(m)}),s.on("programchange",function(c,m){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(m,{view_program_changed:!0})),o(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(c,m){this.currentFragmentPDT=m.currentFragmentPDT,this.currentFragmentStart=m.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var u=function(){var c=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",c&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",u,!1);var h=function(c){c.persisted||s.destroy()};window.addEventListener("pagehide",h,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",u),window.removeEventListener("pagehide",h)})}s.on("playerready",function(c,m){Object.assign(this.data,m)}),Wc.forEach(function(c){s.on(c,function(m,f){c.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,f),this._sanitizeData()}),s.on("after"+c,function(){(c!=="error"||this.errorTracker.viewErrored)&&this.send(c)})}),s.on("viewend",function(c,m){Object.assign(s.data,m)});var d=function(c){var m=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=m-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",d),s.longResumeTracker=new Oc(x(s)),s.errorTracker=new $d(x(s)),new nc(x(s)),s.seekingTracker=new ec(x(s)),s.playheadTime=new Kd(x(s)),s.playbackHeartbeat=new Md(x(s)),new Qd(x(s)),s.watchTimeTracker=new Bd(x(s)),new Wd(x(s)),s.adTracker=new ic(x(s)),new Gd(x(s)),new Fd(x(s)),new Zd(x(s)),new Ic(x(s)),new $c(x(s)),new Hc(x(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return Ze(a,[{key:"emit",value:function(i,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),l=[i,s];if(this.emitTranslator)try{l=this.emitTranslator(i,s)}catch(o){this.mux.log.warn("Exception in emit translator callback.",o)}l!=null&&l.length&&(n=ri(sa(a.prototype),"emit",this)).call.apply(n,[this].concat(Se(l)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(i){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(u){r[u]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=nt(Ka(r.video_source_url),2),l=s[0],o=s[1];r.video_source_domain=o,r.video_source_hostname=l}delete r.ad_request_id,this.playbackEventDispatcher.send(i,r),this.data.view_sequence_number++,this.data.player_sequence_number++,qc.has(i)||this._restartHeartBeat(),i==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(i){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",i)}},{key:"_updateStateData",value:function(){var i,r=this.getStateData();if(typeof this.stateDataTranslator=="function")try{r=this.stateDataTranslator(r)}catch(s){this.mux.log.warn("Exception in stateDataTranslator translator callback.",s)}if(!((i=this.data)===null||i===void 0)&&i.video_cdn&&r!=null&&r.video_cdn){r.video_cdn;var n=fd(r,["video_cdn"]);r=n}Object.assign(this.data,r),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var i=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var l=parseInt(i.data[s],10);i.data[s]=isNaN(l)?void 0:l});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(i.data[s]){var l=i.data[s].toLowerCase();(l.indexOf("data:")===0||l.indexOf("blob:")===0)&&(i.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var i=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete i.data[r]})}},{key:"_resetViewData",value:function(){var i=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete i.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var i=this,r=this.data.view_id=qa(),n=function(){r===i.data.view_id&&ie(i.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var i=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){i.data.player_is_paused||i.emit("hb")},1e4)}},{key:"addHLSJS",value:function(i){if(!i.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=i.hlsjs,wd(this.mux,this.id,i.hlsjs,{},i.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(Rd(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(i){if(!i.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=i.dashjs,Id(this.mux,this.id,i.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(xd(this.dashjs),this.dashjs=void 0)}}]),a}(Od),Yc=Kc,ha=Ae(Bo());function Fc(){return ha.default&&!!(ha.default.fullscreenElement||ha.default.webkitFullscreenElement||ha.default.mozFullScreenElement||ha.default.msFullscreenElement)}var Vc=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],Gc={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function jc(e,t,a){var i=nt(Wi(t),3),r=i[0],n=i[1],s=i[2],l=e.log,o=e.utils.getComputedStyle,u=e.utils.secondsToMs,h={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return l.error("The element of `"+n+"` was not a media element.")}else return l.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,l.warn("Already monitoring this video element, replacing existing event listeners"));var d={getPlayheadTime:function(){return u(r.currentTime)},getStateData:function(){var m,f,_,y=((m=(f=this).getPlayheadTime)===null||m===void 0?void 0:m.call(f))||u(r.currentTime),b=this.hlsjs&&this.hlsjs.url,g=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),p={player_is_paused:r.paused,player_width:parseInt(o(r,"width")),player_height:parseInt(o(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:Fc(),video_poster_url:r.poster,video_source_url:b||g||r.currentSrc,video_source_duration:u(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(_=r.getVideoPlaybackQuality)===null||_===void 0?void 0:_.call(r).droppedVideoFrames};if(r.getStartDate&&y>0){var k=r.getStartDate();if(k&&typeof k.getTime=="function"&&k.getTime()){var D=k.getTime();if(p.player_program_time=D+y,r.seekable.length>0){var I=D+r.seekable.end(r.seekable.length-1);p.player_live_edge_program_time=I}}}return p}};a=Object.assign(h,a,d),a.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},a.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(m,f){e.emit(n,m,f)},r.mux.updateData=function(m){r.mux.emit("hb",m)};var c=function(){l.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(m){r.removeEventListener(m,r.mux.listeners[m],!1)}),delete r.mux.listeners,r.mux.destroy=c,r.mux.swapElement=c,r.mux.emit=c,r.mux.addHLSJS=c,r.mux.addDashJS=c,r.mux.removeHLSJS=c,r.mux.removeDashJS=c,r.mux.updateData=c,r.mux.setEmitTranslator=c,r.mux.setStateDataTranslator=c,r.mux.setGetPlayheadTime=c,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(m){var f=nt(Wi(m),3),_=f[0],y=f[1],b=f[2];if(_){if(b!=="video"&&b!=="audio")return e.log.error("The element of `"+y+"` was not a media element.")}else return e.log.error("No element was found with the `"+y+"` query selector.");_.muxId=r.muxId,delete r.muxId,_.mux=_.mux||{},_.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(_.mux.listeners).forEach(function(g){r.removeEventListener(g,_.mux.listeners[g],!1),_.addEventListener(g,_.mux.listeners[g],!1)}),_.mux.swapElement=r.mux.swapElement,_.mux.destroy=r.mux.destroy,delete r.mux,r=_},r.mux.addHLSJS=function(m){e.addHLSJS(n,m)},r.mux.addDashJS=function(m){e.addDashJS(n,m)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(m){e.setEmitTranslator(n,m)},r.mux.setStateDataTranslator=function(m){e.setStateDataTranslator(n,m)},r.mux.setGetPlayheadTime=function(m){m||(m=a.getPlayheadTime),e.setGetPlayheadTime(n,m)},e.init(n,a),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},Vc.forEach(function(m){m==="error"&&!a.automaticErrorTracking||(r.mux.listeners[m]=function(){var f={};if(m==="error"){if(!r.error||r.error.code===1)return;f.player_error_code=r.error.code,f.player_error_message=Gc[r.error.code]||r.error.message}e.emit(n,m,f)},r.addEventListener(m,r.mux.listeners[m],!1))})}function Zc(e,t,a,i){var r=i;if(e&&typeof e[t]=="function")try{r=e[t].apply(e,a)}catch(n){V.info("safeCall error",n)}return r}var Na=Ae(je()),Ft;Na.default&&Na.default.WeakMap&&(Ft=new WeakMap);function zc(e,t){if(!e||!t||!Na.default||typeof Na.default.getComputedStyle!="function")return"";var a;return Ft&&Ft.has(e)&&(a=Ft.get(e)),a||(a=Na.default.getComputedStyle(e,null),Ft&&Ft.set(e,a)),a.getPropertyValue(t)}function Qc(e){return Math.floor(e*1e3)}var Et={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},sr=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};sr.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf(`
`);t>-1;t=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)};sr.prototype.processLine=function(e){var t=e.indexOf(":"),a=tm(e,t),i=a[0],r=a.length===2?Ln(a[1]):void 0;if(i[0]!=="#")this.currentUri.uri=i,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(i){case Et.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case Et.PART_INF:{Er(this.manifest,a),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case Et.SERVER_CONTROL:{Er(this.manifest,a),this.setHoldBack();break}case Et.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case Et.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case Et.VERSION:{Er(this.manifest,a);break}case Et.SESSION_DATA:{var l=am(a[1]),o=Ko(l);Object.assign(this.manifest.sessionData,o)}}};sr.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,a=e.targetDuration,i=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=a&&a*3,l=i&&i*2;a&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),i&&!t.hasOwnProperty(n)&&(t[n]=i*3),i&&t[n]<l&&(t[n]=l)}};var Er=function(e,t){var a=Xo(t[0].replace("#EXT-X-","")),i;em(t[1])?(i={},i=Object.assign(Jc(t[1]),i)):i=Ln(t[1]),e[a]=i},Xo=function(e){return e.toLowerCase().replace(/-(\w)/g,function(t){return t[1].toUpperCase()})},Ln=function(e){if(e.toLowerCase()==="yes"||e.toLowerCase()==="no")return e.toLowerCase()==="yes";var t=e.indexOf(":")!==-1?e:parseFloat(e);return isNaN(t)?e:t},Xc=function(e){var t={},a=e.split("=");if(a.length>1){var i=Xo(a[0]);t[i]=Ln(a[1])}return t},Jc=function(e){for(var t=e.split(","),a={},i=0;t.length>i;i++){var r=t[i],n=Xc(r);a=Object.assign(n,a)}return a},em=function(e){return e.indexOf("=")>-1},tm=function(e,t){return t===-1?[e]:[e.substring(0,t),e.substring(t+1)]},am=function(e){var t={};if(e){var a=e.search(","),i=e.slice(0,a),r=e.slice(a+1),n=[i,r];return n.forEach(function(s,l){for(var o=s.replace(/['"]+/g,"").split("="),u=0;u<o.length;u++)o[u]==="DATA-ID"&&(t["DATA-ID"]=o[1-u]),o[u]==="VALUE"&&(t.VALUE=o[1-u])}),{data:t}}},im=sr,rm={safeCall:Zc,safeIncrement:ie,getComputedStyle:zc,secondsToMs:Qc,assign:Object.assign,headersStringToObject:xn,cdnHeadersToRequestId:Yi,extractHostnameAndDomain:Ka,extractHostname:Ie,manifestParser:im,generateShortID:Wo,generateUUID:qa,now:ne.now,findMediaElement:Wi},nm=rm,sm={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},om=sm,lm="mux-embed",um="5.13.0",dm="2.1",J={},gt=function(e){var t=arguments;typeof e=="string"?gt.hasOwnProperty(e)?Oa.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),gt[e].apply(null,t)},0):V.warn("`"+e+"` is an unknown task"):typeof e=="function"?Oa.default.setTimeout(function(){e(gt)},0):V.warn("`"+e+"` is invalid.")},cm={loaded:ne.now(),NAME:lm,VERSION:um,API_VERSION:dm,PLAYER_TRACKED:!1,monitor:function(e,t){return jc(gt,e,t)},destroyMonitor:function(e){var t=nt(Wi(e),1),a=t[0];a&&a.mux&&typeof a.mux.destroy=="function"?a.mux.destroy():V.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var a=Re(e);J[a]?J[a].addHLSJS(t):V.error("A monitor for `"+a+"` has not been initialized.")},addDashJS:function(e,t){var a=Re(e);J[a]?J[a].addDashJS(t):V.error("A monitor for `"+a+"` has not been initialized.")},removeHLSJS:function(e){var t=Re(e);J[t]?J[t].removeHLSJS():V.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=Re(e);J[t]?J[t].removeDashJS():V.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){Ur()&&t&&t.respectDoNotTrack&&V.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var a=Re(e);J[a]=new Yc(gt,a,t)},emit:function(e,t,a){var i=Re(e);J[i]?(J[i].emit(t,a),t==="destroy"&&delete J[i]):V.error("A monitor for `"+i+"` has not been initialized.")},updateData:function(e,t){var a=Re(e);J[a]?J[a].emit("hb",t):V.error("A monitor for `"+a+"` has not been initialized.")},setEmitTranslator:function(e,t){var a=Re(e);J[a]?J[a].emitTranslator=t:V.error("A monitor for `"+a+"` has not been initialized.")},setStateDataTranslator:function(e,t){var a=Re(e);J[a]?J[a].stateDataTranslator=t:V.error("A monitor for `"+a+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var a=Re(e);J[a]?J[a].getPlayheadTime=t:V.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:Ur,log:V,utils:nm,events:om,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(gt,cm);typeof Oa.default<"u"&&typeof Oa.default.addEventListener=="function"&&Oa.default.addEventListener("pagehide",function(e){e.persisted||(gt.WINDOW_UNLOADING=!0)},!1);var On=gt;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var M=Iu,G={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},C={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},or=e=>e===G.VIDEO?"playback":e,ct=class Ea extends Error{constructor(t,a=Ea.MEDIA_ERR_CUSTOM,i,r){var n;super(t),this.name="MediaError",this.code=a,this.context=r,this.fatal=i??(a>=Ea.MEDIA_ERR_NETWORK&&a<=Ea.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Ea.defaultMessages[this.code])!=null?n:"")}};ct.MEDIA_ERR_ABORTED=1,ct.MEDIA_ERR_NETWORK=2,ct.MEDIA_ERR_DECODE=3,ct.MEDIA_ERR_SRC_NOT_SUPPORTED=4,ct.MEDIA_ERR_ENCRYPTED=5,ct.MEDIA_ERR_CUSTOM=100,ct.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var w=ct,mm=e=>e==null,Nn=(e,t)=>mm(t)?!1:e in t,Wr={ANY:"any",MUTED:"muted"},W={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},Ye={MSE:"mse",NATIVE:"native"},Ta={HEADER:"header",QUERY:"query",NONE:"none"},Fi=Object.values(Ta),it={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},Cs={HLS:it.M3U8};[...Object.values(it)];var uf={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},df={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},cf={DESCENDING:"desc"},hm="en",qr={code:hm},ee=(e,t,a,i,r=e)=>{r.addEventListener(t,a,i),e.addEventListener("teardown",()=>{r.removeEventListener(t,a)},{once:!0})};function pm(e,t,a){t&&a>t&&(a=t);for(let i=0;i<e.length;i++)if(e.start(i)<=a&&e.end(i)>=a)return!0;return!1}var Mn=e=>{let t=e.indexOf("?");if(t<0)return[e];let a=e.slice(0,t),i=e.slice(t);return[a,i]},lr=e=>{let{type:t}=e;if(t){let a=t.toUpperCase();return Nn(a,Cs)?Cs[a]:t}return vm(e)},Jo=e=>e==="VOD"?W.ON_DEMAND:W.LIVE,el=e=>e==="EVENT"?Number.POSITIVE_INFINITY:e==="VOD"?Number.NaN:0,vm=e=>{let{src:t}=e;if(!t)return"";let a="";try{a=new URL(t).pathname}catch{console.error("invalid url")}let i=a.lastIndexOf(".");if(i<0)return bm(e)?it.M3U8:"";let r=a.slice(i+1).toUpperCase();return Nn(r,it)?it[r]:""},fm="mux.com",bm=({src:e,customDomain:t=fm})=>{let a;try{a=new URL(`${e}`)}catch{return!1}let i=a.protocol==="https:",r=a.hostname===`stream.${t}`.toLowerCase(),n=a.pathname.split("/"),s=n.length===2,l=!(n!=null&&n[1].includes("."));return i&&r&&s&&l},Jt=e=>{let t=(e??"").split(".")[1];if(t)try{let a=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(a).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}},_m=({exp:e},t=Date.now())=>!e||e*1e3<t,gm=({sub:e},t)=>e!==t,ym=({aud:e},t)=>!e,Em=({aud:e},t)=>e!==t,tl="en";function S(e,t=!0){var a,i;let r=t&&(i=(a=qr)==null?void 0:a[e])!=null?i:e,n=t?qr.code:tl;return new Tm(r,n)}var Tm=class{constructor(t,a=(i=>(i=qr)!=null?i:tl)()){this.message=t,this.locale=a}format(t){return this.message.replace(/\{(\w+)\}/g,(a,i)=>{var r;return(r=t[i])!=null?r:""})}toString(){return this.message}},km=Object.values(Wr),Ds=e=>typeof e=="boolean"||typeof e=="string"&&km.includes(e),Am=(e,t,a)=>{let{autoplay:i}=e,r=!1,n=!1,s=Ds(i)?i:!!i,l=()=>{r||ee(t,"playing",()=>{r=!0},{once:!0})};if(l(),ee(t,"loadstart",()=>{r=!1,l(),Tr(t,s)},{once:!0}),ee(t,"loadstart",()=>{a||(e.streamType&&e.streamType!==W.UNKNOWN?n=e.streamType===W.LIVE:n=!Number.isFinite(t.duration)),Tr(t,s)},{once:!0}),a&&a.once(M.Events.LEVEL_LOADED,(o,u)=>{var h;e.streamType&&e.streamType!==W.UNKNOWN?n=e.streamType===W.LIVE:n=(h=u.details.live)!=null?h:!1}),!s){let o=()=>{!n||Number.isFinite(e.startTime)||(a!=null&&a.liveSyncPosition?t.currentTime=a.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};a&&ee(t,"play",()=>{t.preload==="metadata"?a.once(M.Events.LEVEL_UPDATED,o):o()},{once:!0})}return o=>{r||(s=Ds(o)?o:!!o,Tr(t,s))}},Tr=(e,t)=>{if(!t)return;let a=e.muted,i=()=>e.muted=a;switch(t){case Wr.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(i)});break;case Wr.MUTED:e.muted=!0,e.play().catch(i);break;default:e.play().catch(()=>{});break}},wm=({preload:e,src:t},a,i)=>{let r=d=>{d!=null&&["","none","metadata","auto"].includes(d)?a.setAttribute("preload",d):a.removeAttribute("preload")};if(!i)return r(e),r;let n=!1,s=!1,l=i.config.maxBufferLength,o=i.config.maxBufferSize,u=d=>{r(d);let c=d??a.preload;s||c==="none"||(c==="metadata"?(i.config.maxBufferLength=1,i.config.maxBufferSize=1):(i.config.maxBufferLength=l,i.config.maxBufferSize=o),h())},h=()=>{!n&&t&&(n=!0,i.loadSource(t))};return ee(a,"play",()=>{s=!0,i.config.maxBufferLength=l,i.config.maxBufferSize=o,h()},{once:!0}),u(e),u};function Rm(e,t){var a;if(!("videoTracks"in e))return;let i=new WeakMap;t.on(M.Events.MANIFEST_PARSED,function(o,u){l();let h=e.addVideoTrack("main");h.selected=!0;for(let[d,c]of u.levels.entries()){let m=h.addRendition(c.url[0],c.width,c.height,c.videoCodec,c.bitrate);i.set(c,`${d}`),m.id=`${d}`}}),t.on(M.Events.AUDIO_TRACKS_UPDATED,function(o,u){s();for(let h of u.audioTracks){let d=h.default?"main":"alternative",c=e.addAudioTrack(d,h.name,h.lang);c.id=`${h.id}`,h.default&&(c.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var o;let u=+((o=[...e.audioTracks].find(d=>d.enabled))==null?void 0:o.id),h=t.audioTracks.map(d=>d.id);u!=t.audioTrack&&h.includes(u)&&(t.audioTrack=u)}),t.on(M.Events.LEVELS_UPDATED,function(o,u){var h;let d=e.videoTracks[(h=e.videoTracks.selectedIndex)!=null?h:0];if(!d)return;let c=u.levels.map(m=>i.get(m));for(let m of e.videoRenditions)m.id&&!c.includes(m.id)&&d.removeRendition(m)});let r=o=>{let u=o.target.selectedIndex;u!=t.nextLevel&&(t.nextLevel=u)};(a=e.videoRenditions)==null||a.addEventListener("change",r);let n=()=>{for(let o of e.videoTracks)e.removeVideoTrack(o)},s=()=>{for(let o of e.audioTracks)e.removeAudioTrack(o)},l=()=>{n(),s()};t.once(M.Events.DESTROYING,l)}var kr=e=>"time"in e?e.time:e.startTime;function Sm(e,t){t.on(M.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var l,o;let u=(l=s.subtitleTrack)!=null?l:s.closedCaptions,h=t.subtitleTracks.findIndex(({lang:c,name:m,type:f})=>c==(u==null?void 0:u.lang)&&m===s.label&&f.toLowerCase()===s.kind),d=((o=s._id)!=null?o:s.default)?"default":`${s.kind}${h}`;Pn(e,s.kind,s.label,u==null?void 0:u.lang,d,s.default)})});let a=()=>{if(!t.subtitleTracks.length)return;let r=Array.from(e.textTracks).find(l=>l.id&&l.mode==="showing"&&["subtitles","captions"].includes(l.kind));if(!r)return;let n=t.subtitleTracks[t.subtitleTrack],s=n?n.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(r==null?void 0:r.id)!==s){let l=t.subtitleTracks.findIndex(({lang:o,name:u,type:h,default:d})=>r.id==="default"&&d||o==r.language&&u===r.label&&h.toLowerCase()===r.kind);t.subtitleTrack=l}(r==null?void 0:r.id)===s&&r.cues&&Array.from(r.cues).forEach(l=>{r.addCue(l)})};e.textTracks.addEventListener("change",a),t.on(M.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let l=e.textTracks.getTrackById(n);if(!l)return;let o=l.mode==="disabled";o&&(l.mode="hidden"),s.forEach(u=>{var h;(h=l.cues)!=null&&h.getCueById(u.id)||l.addCue(u)}),o&&(l.mode="disabled")}),t.once(M.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",a),e.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let i=()=>{Array.from(e.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let l="track";r.kind&&(l+=`[kind="${r.kind}"]`),r.label&&(l+=`[label="${r.label}"]`);let o=e.querySelector(l),u=(s=o==null?void 0:o.getAttribute("src"))!=null?s:"";o==null||o.removeAttribute("src"),setTimeout(()=>{o==null||o.setAttribute("src",u)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};t.once(M.Events.MANIFEST_LOADED,i),t.once(M.Events.MEDIA_ATTACHED,i)}function Pn(e,t,a,i,r,n){let s=document.createElement("track");return s.kind=t,s.label=a,i&&(s.srclang=i),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function Cm(e,t){let a=Array.prototype.find.call(e.querySelectorAll("track"),i=>i.track===t);a==null||a.remove()}function Za(e,t,a){var i;return(i=Array.from(e.querySelectorAll("track")).find(r=>r.track.label===t&&r.track.kind===a))==null?void 0:i.track}async function al(e,t,a,i){let r=Za(e,a,i);return r||(r=Pn(e,i,a),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...t].sort((n,s)=>kr(s)-kr(n)).forEach(n=>{var s,l;let o=n.value,u=kr(n);if("endTime"in n&&n.endTime!=null)r==null||r.addCue(new VTTCue(u,n.endTime,i==="chapters"?o:JSON.stringify(o??null)));else{let h=Array.prototype.findIndex.call(r==null?void 0:r.cues,f=>f.startTime>=u),d=(s=r==null?void 0:r.cues)==null?void 0:s[h],c=d?d.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,m=(l=r==null?void 0:r.cues)==null?void 0:l[h-1];m&&(m.endTime=u),r==null||r.addCue(new VTTCue(u,c,i==="chapters"?o:JSON.stringify(o??null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var $n="cuepoints",il=Object.freeze({label:$n});async function rl(e,t,a=il){return al(e,t,a.label,"metadata")}var Kr=e=>({time:e.startTime,value:JSON.parse(e.text)});function Dm(e,t={label:$n}){let a=Za(e,t.label,"metadata");return a!=null&&a.cues?Array.from(a.cues,i=>Kr(i)):[]}function nl(e,t={label:$n}){var a,i;let r=Za(e,t.label,"metadata");if(!((a=r==null?void 0:r.activeCues)!=null&&a.length))return;if(r.activeCues.length===1)return Kr(r.activeCues[0]);let{currentTime:n}=e,s=Array.prototype.find.call((i=r.activeCues)!=null?i:[],({startTime:l,endTime:o})=>l<=n&&o>n);return Kr(s||r.activeCues[0])}async function Im(e,t=il){return new Promise(a=>{ee(e,"loadstart",async()=>{let i=await rl(e,[],t);ee(e,"cuechange",()=>{let r=nl(e);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},i),a(i)})})}var Un="chapters",sl=Object.freeze({label:Un}),Yr=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function ol(e,t,a=sl){return al(e,t,a.label,"chapters")}function xm(e,t={label:Un}){var a;let i=Za(e,t.label,"chapters");return(a=i==null?void 0:i.cues)!=null&&a.length?Array.from(i.cues,r=>Yr(r)):[]}function ll(e,t={label:Un}){var a,i;let r=Za(e,t.label,"chapters");if(!((a=r==null?void 0:r.activeCues)!=null&&a.length))return;if(r.activeCues.length===1)return Yr(r.activeCues[0]);let{currentTime:n}=e,s=Array.prototype.find.call((i=r.activeCues)!=null?i:[],({startTime:l,endTime:o})=>l<=n&&o>n);return Yr(s||r.activeCues[0])}async function Lm(e,t=sl){return new Promise(a=>{ee(e,"loadstart",async()=>{let i=await ol(e,[],t);ee(e,"cuechange",()=>{let r=ll(e);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},i),a(i)})})}function Om(e,t){if(t){let a=t.playingDate;if(a!=null)return new Date(a.getTime()-e.currentTime*1e3)}return typeof e.getStartDate=="function"?e.getStartDate():new Date(NaN)}function Nm(e,t){if(t&&t.playingDate)return t.playingDate;if(typeof e.getStartDate=="function"){let a=e.getStartDate();return new Date(a.getTime()+e.currentTime*1e3)}return new Date(NaN)}var Ma={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},Mm=e=>{if(e===G.VIDEO)return Ma.VIDEO;if(e===G.DRM)return Ma.DRM},Pm=(e,t)=>{var a,i;let r=or(e),n=`${r}Token`;return(a=t.tokens)!=null&&a[r]?(i=t.tokens)==null?void 0:i[r]:Nn(n,t)?t[n]:void 0},Vi=(e,t,a,i,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,l;if(n){let b=S("Your device appears to be offline",r),g,p=w.MEDIA_ERR_NETWORK,k=new w(b,p,!1,g);return k.errorCategory=t,k.muxCode=C.NETWORK_OFFLINE,k.data=e,k}let o="status"in e?e.status:e.code,u=Date.now(),h=w.MEDIA_ERR_NETWORK;if(o===200)return;let d=or(t),c=Pm(t,a),m=Mm(t),[f]=Mn((s=a.playbackId)!=null?s:"");if(!o||!f)return;let _=Jt(c);if(c&&!_){let b=S("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:d}),g=S("Compact JWT string: {token}",r).format({token:c}),p=new w(b,h,!0,g);return p.errorCategory=t,p.muxCode=C.NETWORK_TOKEN_MALFORMED,p.data=e,p}if(o>=500){let b=new w("",h,i??!0);return b.errorCategory=t,b.muxCode=C.NETWORK_UNKNOWN_ERROR,b}if(o===403)if(_){if(_m(_,u)){let b={timeStyle:"medium",dateStyle:"medium"},g=S("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:d}),p=S("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",b).format((l=_.exp)!=null?l:0*1e3),currentDate:new Intl.DateTimeFormat("en",b).format(u)}),k=new w(g,h,!0,p);return k.errorCategory=t,k.muxCode=C.NETWORK_TOKEN_EXPIRED,k.data=e,k}if(gm(_,f)){let b=S("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:d}),g=S("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:d,playbackId:f,tokenPlaybackId:_.sub}),p=new w(b,h,!0,g);return p.errorCategory=t,p.muxCode=C.NETWORK_TOKEN_SUB_MISMATCH,p.data=e,p}if(ym(_)){let b=S("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:d}),g=S("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:d,expectedAud:m}),p=new w(b,h,!0,g);return p.errorCategory=t,p.muxCode=C.NETWORK_TOKEN_AUD_MISSING,p.data=e,p}if(Em(_,m)){let b=S("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:d}),g=S("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:d,expectedAud:m,aud:_.aud}),p=new w(b,h,!0,g);return p.errorCategory=t,p.muxCode=C.NETWORK_TOKEN_AUD_MISMATCH,p.data=e,p}}else{let b=S("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:d,category:t}),g=S("Specified playback ID: {playbackId}",r).format({playbackId:f}),p=new w(b,h,i??!0,g);return p.errorCategory=t,p.muxCode=C.NETWORK_TOKEN_MISSING,p.data=e,p}if(o===412){let b=S("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),g=S("Specified playback ID: {playbackId}",r).format({playbackId:f}),p=new w(b,h,i??!0,g);return p.errorCategory=t,p.muxCode=C.NETWORK_NOT_READY,p.streamType=a.streamType===W.LIVE?"live":a.streamType===W.ON_DEMAND?"on-demand":"unknown",p.data=e,p}if(o===404){let b=S("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),g=S("Specified playback ID: {playbackId}",r).format({playbackId:f}),p=new w(b,h,i??!0,g);return p.errorCategory=t,p.muxCode=C.NETWORK_NOT_FOUND,p.data=e,p}if(o===400){let b=S("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),g=S("Specified playback ID: {playbackId}",r).format({playbackId:f}),p=new w(b,h,i??!0,g);return p.errorCategory=t,p.muxCode=C.NETWORK_INVALID_URL,p.data=e,p}let y=new w("",h,i??!0);return y.errorCategory=t,y.muxCode=C.NETWORK_UNKNOWN_ERROR,y.data=e,y},Is=M.DefaultConfig.capLevelController,ul=class dl extends Is{constructor(t){super(t)}get levels(){var t;return(t=this.hls.levels)!=null?t:[]}getValidLevels(t){return this.levels.filter((a,i)=>this.isLevelAllowed(a)&&i<=t)}getMaxLevel(t){let a=super.getMaxLevel(t),i=this.getValidLevels(t);if(!i[a])return a;let r=Math.min(i[a].width,i[a].height),n=dl.minMaxResolution;return r>=n?a:Is.getMaxLevelByMediaSize(i,n*(16/9),n)}};ul.minMaxResolution=720;var $m=ul,Um=$m,ni={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},Bm=e=>{if(e.includes("fps"))return ni.FAIRPLAY;if(e.includes("playready"))return ni.PLAYREADY;if(e.includes("widevine"))return ni.WIDEVINE},Hm=e=>{let t=e.split(`
`).find((a,i,r)=>i&&r[i-1].startsWith("#EXT-X-STREAM-INF"));return fetch(t).then(a=>a.status!==200?Promise.reject(a):a.text())},Wm=e=>{let t=e.split(`
`).filter(i=>i.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let a={};for(let i of t){let r=Km(i),n=r["DATA-ID"];n&&(a[n]={...r})}return{sessionData:a}},qm=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function Km(e){let t=[...e.matchAll(qm)];return Object.fromEntries(t.map(([,a,i])=>[a,i]))}var Ym=e=>{var t,a,i;let r=e.split(`
`),n=(a=((t=r.find(u=>u.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?t:"").split(":")[1])==null?void 0:a.trim(),s=Jo(n),l=el(n),o;if(s===W.LIVE){let u=r.find(h=>h.startsWith("#EXT-X-PART-INF"));if(u)o=+u.split(":")[1].split("=")[1]*2;else{let h=r.find(c=>c.startsWith("#EXT-X-TARGETDURATION")),d=(i=h==null?void 0:h.split(":"))==null?void 0:i[1];o=+(d??6)*3}}return{streamType:s,targetLiveWindow:l,liveEdgeStartOffset:o}},Fm=async(e,t)=>{if(t===it.MP4)return{streamType:W.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===it.M3U8){let a=await fetch(e);if(!a.ok)return Promise.reject(a);let i=await a.text(),r=await Hm(i);return{...Wm(i),...Ym(r)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},Vm=async(e,t,a=lr({src:e}))=>{var i,r,n,s;let{streamType:l,targetLiveWindow:o,liveEdgeStartOffset:u,sessionData:h}=await Fm(e,a),d=h==null?void 0:h["com.apple.hls.chapters"];(d!=null&&d.URI||d!=null&&d.VALUE.toLocaleLowerCase().startsWith("http"))&&Bn((i=d.URI)!=null?i:d.VALUE,t),((r=X.get(t))!=null?r:{}).liveEdgeStartOffset=u,((n=X.get(t))!=null?n:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=X.get(t))!=null?s:{}).streamType=l,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Bn=async(e,t)=>{var a,i;try{let r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((a=n==null?void 0:n[0])!=null&&a.metadata))return;for(let o of n[0].metadata)o.key&&o.value&&(s[o.key]=o.value);((i=X.get(t))!=null?i:{}).metadata=s;let l=new CustomEvent("muxmetadata");t.dispatchEvent(l)}catch(r){console.error(r)}},Gm=e=>{var t;let a=e.type,i=Jo(a),r=el(a),n,s=!!((t=e.partList)!=null&&t.length);return i===W.LIVE&&(n=s?e.partTarget*2:e.targetduration*3),{streamType:i,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},jm=(e,t,a)=>{var i,r,n,s,l,o,u,h;let{streamType:d,targetLiveWindow:c,liveEdgeStartOffset:m,lowLatency:f}=Gm(e);if(d===W.LIVE){f?(a.config.backBufferLength=(i=a.userConfig.backBufferLength)!=null?i:4,a.config.maxFragLookUpTolerance=(r=a.userConfig.maxFragLookUpTolerance)!=null?r:.001,a.config.abrBandWidthUpFactor=(n=a.userConfig.abrBandWidthUpFactor)!=null?n:a.config.abrBandWidthFactor):a.config.backBufferLength=(s=a.userConfig.backBufferLength)!=null?s:8;let _=Object.freeze({get length(){return t.seekable.length},start(y){return t.seekable.start(y)},end(y){var b;return y>this.length||y<0||Number.isFinite(t.duration)?t.seekable.end(y):(b=a.liveSyncPosition)!=null?b:t.seekable.end(y)}});((l=X.get(t))!=null?l:{}).seekable=_}((o=X.get(t))!=null?o:{}).liveEdgeStartOffset=m,((u=X.get(t))!=null?u:{}).targetLiveWindow=c,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((h=X.get(t))!=null?h:{}).streamType=d,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},xs,Ls,Zm=(Ls=(xs=globalThis==null?void 0:globalThis.navigator)==null?void 0:xs.userAgent)!=null?Ls:"",Os,Ns,Ms,zm=(Ms=(Ns=(Os=globalThis==null?void 0:globalThis.navigator)==null?void 0:Os.userAgentData)==null?void 0:Ns.platform)!=null?Ms:"",Ps,$s,Us,Ja=(Us=($s=(Ps=globalThis==null?void 0:globalThis.navigator)==null?void 0:Ps.userAgentData)==null?void 0:$s.brands)==null?void 0:Us[0],Qm=Zm.toLowerCase().includes("android")||["x11","android"].some(e=>zm.toLowerCase().includes(e)),Xm=e=>{var t;return!!e.canPlayType("application/vnd.apple.mpegurl")&&(Ja==null?void 0:Ja.brand)==="Google Chrome"&&parseInt((t=Ja==null?void 0:Ja.version)!=null?t:"0")>=141},X=new WeakMap,rt="mux.com",Bs,Hs,cl=(Hs=(Bs=M).isSupported)==null?void 0:Hs.call(Bs),Jm=e=>Qm||Xm(e),Hn=()=>On.utils.now(),eh=On.utils.generateUUID,Fr=({playbackId:e,customDomain:t=rt,maxResolution:a,minResolution:i,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:l,assetEndTime:o,playbackToken:u,tokens:{playback:h=u}={},extraSourceParams:d={}}={})=>{if(!e)return;let[c,m=""]=Mn(e),f=new URL(`https://stream.${t}/${c}.m3u8${m}`);return h||f.searchParams.has("token")?(f.searchParams.forEach((_,y)=>{y!="token"&&f.searchParams.delete(y)}),h&&f.searchParams.set("token",h)):(a&&f.searchParams.set("max_resolution",a),i&&(f.searchParams.set("min_resolution",i),a&&+a.slice(0,-1)<+i.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",i,"maxResolution",a)),r&&f.searchParams.set("rendition_order",r),n&&f.searchParams.set("program_start_time",`${n}`),s&&f.searchParams.set("program_end_time",`${s}`),l&&f.searchParams.set("asset_start_time",`${l}`),o&&f.searchParams.set("asset_end_time",`${o}`),Object.entries(d).forEach(([_,y])=>{y!=null&&f.searchParams.set(_,y)})),f.toString()},ur=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},Wn=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},th=e=>{var t,a,i;return(t=e==null?void 0:e.metadata)!=null&&t.video_id?e.metadata.video_id:gl(e)&&(i=(a=ur(e.playbackId))!=null?a:Wn(e.src))!=null?i:e.src},ml=e=>{var t;return(t=X.get(e))==null?void 0:t.error},ah=e=>{var t;return(t=X.get(e))==null?void 0:t.metadata},Vr=e=>{var t,a;return(a=(t=X.get(e))==null?void 0:t.streamType)!=null?a:W.UNKNOWN},ih=e=>{var t,a;return(a=(t=X.get(e))==null?void 0:t.targetLiveWindow)!=null?a:Number.NaN},qn=e=>{var t,a;return(a=(t=X.get(e))==null?void 0:t.seekable)!=null?a:e.seekable},rh=e=>{var t;let a=(t=X.get(e))==null?void 0:t.liveEdgeStartOffset;if(typeof a!="number")return Number.NaN;let i=qn(e);return i.length?i.end(i.length-1)-a:Number.NaN},Kn=.034,nh=(e,t,a=Kn)=>Math.abs(e-t)<=a,hl=(e,t,a=Kn)=>e>t||nh(e,t,a),sh=(e,t=Kn)=>e.paused&&hl(e.currentTime,e.duration,t),pl=(e,t)=>{var a,i,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?(i=(a=t.levels)==null?void 0:a[t.currentLevel])==null?void 0:i.details:(r=t.levels.find(d=>!!d.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let l=s[s.length-1];if(e.currentTime<=l.start)return!1;let o=l.start+l.duration/2,u=e.buffered.start(e.buffered.length-1),h=e.buffered.end(e.buffered.length-1);return o>u&&o<h},vl=(e,t)=>e.ended||e.loop?e.ended:t&&pl(e,t)?!0:sh(e),oh=(e,t,a)=>{fl(t,a,e);let{metadata:i={}}=e,{view_session_id:r=eh()}=i,n=th(e);i.view_session_id=r,i.video_id=n,e.metadata=i;let s=h=>{var d;(d=t.mux)==null||d.emit("hb",{view_drm_type:h})};e.drmTypeCb=s,X.set(t,{retryCount:0});let l=lh(e,t),o=wm(e,t,l);e!=null&&e.muxDataKeepSession&&t!=null&&t.mux&&!t.mux.deleted?l&&t.mux.addHLSJS({hlsjs:l,Hls:l?M:void 0}):ph(e,t,l),vh(e,t,l),Im(t),Lm(t);let u=Am(e,t,l);return{engine:l,setAutoplay:u,setPreload:o}},fl=(e,t,a)=>{let i=t==null?void 0:t.engine;e!=null&&e.mux&&!e.mux.deleted&&(a!=null&&a.muxDataKeepSession?i&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),i&&(i.detachMedia(),i.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",El),e.removeEventListener("error",Gr),e.removeEventListener("durationchange",yl),X.delete(e),e.dispatchEvent(new Event("teardown")))};function bl(e,t){var a;let i=lr(e);if(i!==it.M3U8)return!0;let r=!i||((a=t.canPlayType(i))!=null?a:!0),{preferPlayback:n}=e,s=n===Ye.MSE,l=n===Ye.NATIVE,o=cl&&(s||Jm(t));return r&&(l||!o)}var lh=(e,t)=>{let{debug:a,streamType:i,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:l={}}=e,o=lr(e)===it.M3U8,u=bl(e,t);if(o&&!u&&cl){let h={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},d=uh(i),c=dh(e),m=[Ta.QUERY,Ta.HEADER].includes(s)?{useHeaders:s===Ta.HEADER,sessionId:n==null?void 0:n.view_session_id,contentId:n==null?void 0:n.video_id}:void 0,f=l.capLevelToPlayerSize==null?{capLevelController:Um}:{},_=new M({debug:a,startPosition:r,cmcd:m,xhrSetup:(y,b)=>{var g,p;if(s&&s!==Ta.QUERY)return;let k=new URL(b);if(!k.searchParams.has("CMCD"))return;let D=((p=(g=k.searchParams.get("CMCD"))==null?void 0:g.split(","))!=null?p:[]).filter(I=>I.startsWith("sid")||I.startsWith("cid")).join(",");k.searchParams.set("CMCD",D),y.open("GET",k)},...f,...h,...d,...c,...l});return _.on(M.Events.MANIFEST_PARSED,async function(y,b){var g,p;let k=(g=b.sessionData)==null?void 0:g["com.apple.hls.chapters"];(k!=null&&k.URI||k!=null&&k.VALUE.toLocaleLowerCase().startsWith("http"))&&Bn((p=k==null?void 0:k.URI)!=null?p:k==null?void 0:k.VALUE,t)}),_}},uh=e=>e===W.LIVE?{backBufferLength:8}:{},dh=e=>{let{tokens:{drm:t}={},playbackId:a,drmTypeCb:i}=e,r=ur(a);return!t||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:si(e,"fairplay"),serverCertificateUrl:_l(e,"fairplay")},"com.widevine.alpha":{licenseUrl:si(e,"widevine")},"com.microsoft.playready":{licenseUrl:si(e,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(l=>{var o;let u=(o=l.videoCapabilities)==null?void 0:o.map(h=>({...h,robustness:"HW_SECURE_ALL"}));return{...l,videoCapabilities:u}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(l=>{let o=Bm(n);return i==null||i(o),l}))}},ch=async e=>{let t=await fetch(e);return t.status!==200?Promise.reject(t):await t.arrayBuffer()},mh=async(e,t)=>{let a=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});if(a.status!==200)return Promise.reject(a);let i=await a.arrayBuffer();return new Uint8Array(i)},hh=(e,t)=>{ee(t,"encrypted",async a=>{try{let i=a.initDataType;if(i!=="skd"){console.error(`Received unexpected initialization data type "${i}"`);return}if(!t.mediaKeys){let o=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(h=>{var d;return(d=e.drmTypeCb)==null||d.call(e,ni.FAIRPLAY),h}).catch(()=>{let h=S("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),d=new w(h,w.MEDIA_ERR_ENCRYPTED,!0);d.errorCategory=G.DRM,d.muxCode=C.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,ke(t,d)});if(!o)return;let u=await o.createMediaKeys();try{let h=await ch(_l(e,"fairplay")).catch(d=>{if(d instanceof Response){let c=Vi(d,G.DRM,e);return console.error("mediaError",c==null?void 0:c.message,c==null?void 0:c.context),c?Promise.reject(c):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(d)});await u.setServerCertificate(h).catch(()=>{let d=S("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),c=new w(d,w.MEDIA_ERR_ENCRYPTED,!0);return c.errorCategory=G.DRM,c.muxCode=C.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(c)})}catch(h){ke(t,h);return}await t.setMediaKeys(u)}let r=a.initData;if(r==null){console.error(`Could not start encrypted playback due to missing initData in ${a.type} event`);return}let n=t.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(o=>{let u;if(o==="internal-error"){let h=S("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");u=new w(h,w.MEDIA_ERR_ENCRYPTED,!0),u.errorCategory=G.DRM,u.muxCode=C.ENCRYPTED_CDM_ERROR}else if(o==="output-restricted"||o==="output-downscaled"){let h=S("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");u=new w(h,w.MEDIA_ERR_ENCRYPTED,!1),u.errorCategory=G.DRM,u.muxCode=C.ENCRYPTED_OUTPUT_RESTRICTED}u&&ke(t,u)})});let s=await Promise.all([n.generateRequest(i,r).catch(()=>{let o=S("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),u=new w(o,w.MEDIA_ERR_ENCRYPTED,!0);u.errorCategory=G.DRM,u.muxCode=C.ENCRYPTED_GENERATE_REQUEST_FAILED,ke(t,u)}),new Promise(o=>{n.addEventListener("message",u=>{o(u.message)},{once:!0})})]).then(([,o])=>o),l=await mh(s,si(e,"fairplay")).catch(o=>{if(o instanceof Response){let u=Vi(o,G.DRM,e);return console.error("mediaError",u==null?void 0:u.message,u==null?void 0:u.context),u?Promise.reject(u):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(o)});await n.update(l).catch(()=>{let o=S("Failed to update DRM license. This may be an issue with the player or your protected content."),u=new w(o,w.MEDIA_ERR_ENCRYPTED,!0);return u.errorCategory=G.DRM,u.muxCode=C.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(u)})}catch(i){ke(t,i);return}})},si=({playbackId:e,tokens:{drm:t}={},customDomain:a=rt},i)=>{let r=ur(e);return`https://license.${a.toLocaleLowerCase().endsWith(rt)?a:rt}/license/${i}/${r}?token=${t}`},_l=({playbackId:e,tokens:{drm:t}={},customDomain:a=rt},i)=>{let r=ur(e);return`https://license.${a.toLocaleLowerCase().endsWith(rt)?a:rt}/appcert/${i}/${r}?token=${t}`},gl=({playbackId:e,src:t,customDomain:a})=>{if(e)return!0;if(typeof t!="string")return!1;let i=window==null?void 0:window.location.href,r=new URL(t,i).hostname.toLocaleLowerCase();return r.includes(rt)||!!a&&r.includes(a.toLocaleLowerCase())},ph=(e,t,a)=>{var i;let{envKey:r,disableTracking:n,muxDataSDK:s=On,muxDataSDKOptions:l={}}=e,o=gl(e);if(!n&&(r||o)){let{playerInitTime:u,playerSoftwareName:h,playerSoftwareVersion:d,beaconCollectionDomain:c,debug:m,disableCookies:f}=e,_={...e.metadata,video_title:((i=e==null?void 0:e.metadata)==null?void 0:i.video_title)||void 0},y=b=>typeof b.player_error_code=="string"?!1:typeof e.errorTranslator=="function"?e.errorTranslator(b):b;s.monitor(t,{debug:m,beaconCollectionDomain:c,hlsjs:a,Hls:a?M:void 0,automaticErrorTracking:!1,errorTranslator:y,disableCookies:f,...l,data:{...r?{env_key:r}:{},player_software_name:h,player_software:h,player_software_version:d,player_init_time:u,..._}})}},vh=(e,t,a)=>{var i,r;let n=bl(e,t),{src:s,customDomain:l=rt}=e,o=()=>{t.ended||e.disablePseudoEnded||!vl(t,a)||(pl(t,a)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},u,h,d=()=>{let c=qn(t),m,f;c.length>0&&(m=c.start(0),f=c.end(0)),(h!==f||u!==m)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=m,h=f};if(ee(t,"durationchange",d),t&&n){let c=lr(e);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(l)){let _=Wn(s),y=new URL(`https://stream.${l}/${_}/metadata.json`);Bn(y.toString(),t)}let m=()=>{if(Vr(t)!==W.LIVE||Number.isFinite(t.duration))return;let _=setInterval(d,1e3);t.addEventListener("teardown",()=>{clearInterval(_)},{once:!0}),ee(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(_)})},f=async()=>Vm(s,t,c).then(m).catch(_=>{if(_ instanceof Response){let y=Vi(_,G.VIDEO,e);if(y){ke(t,y);return}}});if(t.preload==="none"){let _=()=>{f(),t.removeEventListener("loadedmetadata",y)},y=()=>{f(),t.removeEventListener("play",_)};ee(t,"play",_,{once:!0}),ee(t,"loadedmetadata",y,{once:!0})}else f();(i=e.tokens)!=null&&i.drm?hh(e,t):ee(t,"encrypted",()=>{let _=S("Attempting to play DRM-protected content without providing a DRM token."),y=new w(_,w.MEDIA_ERR_ENCRYPTED,!0);y.errorCategory=G.DRM,y.muxCode=C.ENCRYPTED_MISSING_TOKEN,ke(t,y)},{once:!0}),t.setAttribute("src",s),e.startTime&&(((r=X.get(t))!=null?r:{}).startTime=e.startTime,t.addEventListener("durationchange",yl,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",El),t.addEventListener("error",Gr),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(m=>{m.remove()})},{once:!0}),ee(t,"pause",o),ee(t,"seeked",o),ee(t,"play",()=>{t.ended||hl(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else a&&s?(a.once(M.Events.LEVEL_LOADED,(c,m)=>{jm(m.details,t,a),d(),Vr(t)===W.LIVE&&!Number.isFinite(t.duration)&&(a.on(M.Events.LEVEL_UPDATED,d),ee(t,"durationchange",()=>{Number.isFinite(t.duration)&&a.off(M.Events.LEVELS_UPDATED,d)}))}),a.on(M.Events.ERROR,(c,m)=>{var f,_;let y=fh(m,e);if(y.muxCode===C.NETWORK_NOT_READY){let b=(f=X.get(t))!=null?f:{},g=(_=b.retryCount)!=null?_:0;if(g<6){let p=g===0?5e3:6e4,k=new w(`Retrying in ${p/1e3} seconds...`,y.code,y.fatal);Object.assign(k,y),ke(t,k),setTimeout(()=>{b.retryCount=g+1,m.details==="manifestLoadError"&&m.url&&a.loadSource(m.url)},p);return}else{b.retryCount=0;let p=new w('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',y.code,y.fatal);Object.assign(p,y),ke(t,p);return}}ke(t,y)}),a.on(M.Events.MANIFEST_LOADED,()=>{let c=X.get(t);c&&c.error&&(c.error=null,c.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",Gr),ee(t,"waiting",o),Rm(e,a),Sm(t,a),a.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function yl(e){var t;let a=e.target,i=(t=X.get(a))==null?void 0:t.startTime;if(i&&pm(a.seekable,a.duration,i)){let r=a.preload==="auto";r&&(a.preload="none"),a.currentTime=i,r&&(a.preload="auto")}}async function El(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(t!=null&&t.error))return;let{message:a,code:i}=t.error,r=new w(a,i);if(t.src&&i===w.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=ml(t))!=null?n:t.error;(s==null?void 0:s.code)===w.MEDIA_ERR_SRC_NOT_SUPPORTED&&ke(t,r)},500);return}if(t.src&&(i!==w.MEDIA_ERR_DECODE||i!==void 0))try{let{status:n}=await fetch(t.src);r.data={response:{code:n}}}catch{}ke(t,r)}function ke(e,t){var a;t.fatal&&(((a=X.get(e))!=null?a:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function Gr(e){var t,a;if(!(e instanceof CustomEvent)||!(e.detail instanceof w))return;let i=e.target,r=e.detail;!r||!r.fatal||(((t=X.get(i))!=null?t:{}).error=r,(a=i.mux)==null||a.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var fh=(e,t)=>{var a,i,r;console.error("getErrorFromHlsErrorData()",e);let n={[M.ErrorTypes.NETWORK_ERROR]:w.MEDIA_ERR_NETWORK,[M.ErrorTypes.MEDIA_ERROR]:w.MEDIA_ERR_DECODE,[M.ErrorTypes.KEY_SYSTEM_ERROR]:w.MEDIA_ERR_ENCRYPTED},s=h=>[M.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,M.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(h.details)?w.MEDIA_ERR_NETWORK:n[h.type],l=h=>{if(h.type===M.ErrorTypes.KEY_SYSTEM_ERROR)return G.DRM;if(h.type===M.ErrorTypes.NETWORK_ERROR)return G.VIDEO},o,u=s(e);if(u===w.MEDIA_ERR_NETWORK&&e.response){let h=(a=l(e))!=null?a:G.VIDEO;o=(i=Vi(e.response,h,t,e.fatal))!=null?i:new w("",u,e.fatal)}else if(u===w.MEDIA_ERR_ENCRYPTED)if(e.details===M.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let h=S("Attempting to play DRM-protected content without providing a DRM token.");o=new w(h,w.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=G.DRM,o.muxCode=C.ENCRYPTED_MISSING_TOKEN}else if(e.details===M.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let h=S("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");o=new w(h,w.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=G.DRM,o.muxCode=C.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(e.details===M.ErrorDetails.KEY_SYSTEM_NO_SESSION){let h=S("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");o=new w(h,w.MEDIA_ERR_ENCRYPTED,!0),o.errorCategory=G.DRM,o.muxCode=C.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(e.details===M.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let h=S("Failed to update DRM license. This may be an issue with the player or your protected content.");o=new w(h,w.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=G.DRM,o.muxCode=C.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(e.details===M.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let h=S("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");o=new w(h,w.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=G.DRM,o.muxCode=C.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(e.details===M.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let h=S("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");o=new w(h,w.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=G.DRM,o.muxCode=C.ENCRYPTED_CDM_ERROR}else if(e.details===M.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let h=S("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");o=new w(h,w.MEDIA_ERR_ENCRYPTED,!1),o.errorCategory=G.DRM,o.muxCode=C.ENCRYPTED_OUTPUT_RESTRICTED}else o=new w(e.error.message,w.MEDIA_ERR_ENCRYPTED,e.fatal),o.errorCategory=G.DRM,o.muxCode=C.ENCRYPTED_ERROR;else o=new w("",u,e.fatal);return o.context||(o.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${(r=e.err)==null?void 0:r.message}
`:""}`),o.data=e,o},Tl=e=>{throw TypeError(e)},Yn=(e,t,a)=>t.has(e)||Tl("Cannot "+a),oe=(e,t,a)=>(Yn(e,t,"read from private field"),a?a.call(e):t.get(e)),we=(e,t,a)=>t.has(e)?Tl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Ee=(e,t,a,i)=>(Yn(e,t,"write to private field"),t.set(e,a),a),Ar=(e,t,a)=>(Yn(e,t,"access private method"),a),bh=()=>{try{return"0.27.1"}catch{}return"UNKNOWN"},_h=bh(),gh=()=>_h,yh=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,v={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},Eh=Object.values(v),Ws=gh(),qs="mux-video",Be,ka,oi,Aa,li,ui,di,ci,mi,wa,Ra,hi,Th=class extends Qa{constructor(){super(),we(this,Ra),we(this,Be),we(this,ka),we(this,oi),we(this,Aa,{}),we(this,li,{}),we(this,ui),we(this,di),we(this,ci),we(this,mi),we(this,wa,""),Ee(this,oi,Hn()),this.nativeEl.addEventListener("muxmetadata",e=>{var t;let a=ah(this.nativeEl),i=(t=this.metadata)!=null?t:{};this.metadata={...a,...i},(a==null?void 0:a["com.mux.video.branding"])==="mux-free-plan"&&(Ee(this,wa,"default"),this.updateLogo())})}static get NAME(){return qs}static get VERSION(){return Ws}static get observedAttributes(){var e;return[...Eh,...(e=Qa.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?yh:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var t;return`
      ${Qa.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((t=e[v.LOGO])!=null?t:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(v.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Fi.includes(e)?this.setAttribute(v.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Fi.join()}`):this.removeAttribute(v.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(v.PLAYER_INIT_TIME)?+this.getAttribute(v.PLAYER_INIT_TIME):oe(this,oi)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(v.PLAYER_INIT_TIME):this.setAttribute(v.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=oe(this,ci))!=null?e:qs}set playerSoftwareName(e){Ee(this,ci,e)}get playerSoftwareVersion(){var e;return(e=oe(this,di))!=null?e:Ws}set playerSoftwareVersion(e){Ee(this,di,e)}get _hls(){var e;return(e=oe(this,Be))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=ml(this.nativeEl))!=null?e:null}get errorTranslator(){return oe(this,mi)}set errorTranslator(e){Ee(this,mi,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(v.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(v.TYPE,e):this.removeAttribute(v.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(v.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(v.DEBUG,""):this.removeAttribute(v.DEBUG))}get disableTracking(){return this.hasAttribute(v.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(v.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(v.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(v.DISABLE_COOKIES,""):this.removeAttribute(v.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(v.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(v.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(v.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(v.START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(v.START_TIME):this.setAttribute(v.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(v.PLAYBACK_ID)?this.getAttribute(v.PLAYBACK_ID):(e=Wn(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(v.PLAYBACK_ID,e):this.removeAttribute(v.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(v.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(v.MAX_RESOLUTION,e):this.removeAttribute(v.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(v.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(v.MIN_RESOLUTION,e):this.removeAttribute(v.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(v.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(v.RENDITION_ORDER,e):this.removeAttribute(v.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(v.PROGRAM_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){e==null?this.removeAttribute(v.PROGRAM_START_TIME):this.setAttribute(v.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(v.PROGRAM_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){e==null?this.removeAttribute(v.PROGRAM_END_TIME):this.setAttribute(v.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(v.ASSET_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){e==null?this.removeAttribute(v.ASSET_START_TIME):this.setAttribute(v.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(v.ASSET_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){e==null?this.removeAttribute(v.ASSET_END_TIME):this.setAttribute(v.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(v.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(v.CUSTOM_DOMAIN,e):this.removeAttribute(v.CUSTOM_DOMAIN))}get drmToken(){var e;return(e=this.getAttribute(v.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(v.DRM_TOKEN,e):this.removeAttribute(v.DRM_TOKEN))}get playbackToken(){var e,t,a,i;if(this.hasAttribute(v.PLAYBACK_TOKEN))return(e=this.getAttribute(v.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(v.PLAYBACK_ID)){let[,r]=Mn((t=this.playbackId)!=null?t:"");return(a=new URLSearchParams(r).get("token"))!=null?a:void 0}if(this.src)return(i=new URLSearchParams(this.src).get("token"))!=null?i:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(v.PLAYBACK_TOKEN,e):this.removeAttribute(v.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(v.PLAYBACK_TOKEN),t=this.getAttribute(v.DRM_TOKEN);return{...oe(this,li),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{}}}set tokens(e){Ee(this,li,e??{})}get ended(){return vl(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(v.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(v.ENV_KEY,e):this.removeAttribute(v.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(v.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(v.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(v.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(v.STREAM_TYPE))!=null?e:Vr(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(v.STREAM_TYPE,e):this.removeAttribute(v.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(v.TARGET_LIVE_WINDOW)?+this.getAttribute(v.TARGET_LIVE_WINDOW):ih(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(v.TARGET_LIVE_WINDOW):this.setAttribute(v.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(v.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,i=(e=this.nativeEl.seekable.end(0))!=null?e:0,r=(t=this.nativeEl.seekable.start(0))!=null?t:0;return Math.max(r,i-a)}return rh(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(v.LIVE_EDGE_OFFSET))return+this.getAttribute(v.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(v.LIVE_EDGE_OFFSET):this.setAttribute(v.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return qn(this.nativeEl)}async addCuePoints(e){return rl(this.nativeEl,e)}get activeCuePoint(){return nl(this.nativeEl)}get cuePoints(){return Dm(this.nativeEl)}async addChapters(e){return ol(this.nativeEl,e)}get activeChapter(){return ll(this.nativeEl)}get chapters(){return xm(this.nativeEl)}getStartDate(){return Om(this.nativeEl,this._hls)}get currentPdt(){return Nm(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(v.PREFER_PLAYBACK);if(e===Ye.MSE||e===Ye.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Ye.MSE||e===Ye.NATIVE?this.setAttribute(v.PREFER_PLAYBACK,e):this.removeAttribute(v.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![v.METADATA_URL].includes(e)).reduce((e,t)=>{let a=this.getAttribute(t);return a!=null&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...oe(this,Aa)}}set metadata(e){Ee(this,Aa,e??{}),this.mux&&this.mux.emit("hb",oe(this,Aa))}get _hlsConfig(){return oe(this,ui)}set _hlsConfig(e){Ee(this,ui,e)}get logo(){var e;return(e=this.getAttribute(v.LOGO))!=null?e:oe(this,wa)}set logo(e){e?this.setAttribute(v.LOGO,e):this.removeAttribute(v.LOGO)}load(){Ee(this,Be,oh(this,this.nativeEl,oe(this,Be)))}unload(){fl(this.nativeEl,oe(this,Be),this),Ee(this,Be,void 0)}attributeChangedCallback(e,t,a){var i,r;switch(Qa.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,a),e){case v.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case v.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let n=!!t,s=!!a;!n&&s?Ar(this,Ra,hi).call(this):n&&!s?this.unload():n&&s&&(this.unload(),Ar(this,Ra,hi).call(this));break}case"autoplay":if(a===t)break;(i=oe(this,Be))==null||i.setAutoplay(this.autoplay);break;case"preload":if(a===t)break;(r=oe(this,Be))==null||r.setPreload(a);break;case v.PLAYBACK_ID:this.src=Fr(this);break;case v.DEBUG:{let n=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=n);break}case v.METADATA_URL:a&&fetch(a).then(n=>n.json()).then(n=>this.metadata=n).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case v.STREAM_TYPE:(a==null||a!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case v.TARGET_LIVE_WINDOW:(a==null||a!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case v.LOGO:(a==null||a!==t)&&this.updateLogo();break}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let t=this.constructor.getLogoHTML(oe(this,wa)||this.logo);e.innerHTML=t}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.nativeEl&&this.src&&!oe(this,Be)&&Ar(this,Ra,hi).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Be=new WeakMap,ka=new WeakMap,oi=new WeakMap,Aa=new WeakMap,li=new WeakMap,ui=new WeakMap,di=new WeakMap,ci=new WeakMap,mi=new WeakMap,wa=new WeakMap,Ra=new WeakSet,hi=async function(){oe(this,ka)||(await Ee(this,ka,Promise.resolve()),Ee(this,ka,null),this.load())};const $t=new WeakMap;class wr extends Error{}class kh extends Error{}const Ah=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],wh=globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{const a=t.deref();a&&e(a)})}}:Set;function Rh(e){var t,a,i;(a=(t=globalThis.chrome)==null?void 0:t.cast)!=null&&a.isAvailable?(i=globalThis.cast)!=null&&i.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}function Sh(){return globalThis.chrome}function Ch(){var a;const e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if((a=globalThis.chrome)!=null&&a.cast||document.querySelector(`script[src="${e}"]`))return;const t=document.createElement("script");t.src=e,document.head.append(t)}function _t(){var e,t;return(t=(e=globalThis.cast)==null?void 0:e.framework)==null?void 0:t.CastContext.getInstance()}function Fn(){var e;return(e=_t())==null?void 0:e.getCurrentSession()}function Vn(){var e;return(e=Fn())==null?void 0:e.getSessionObj().media[0]}function Dh(e){return new Promise((t,a)=>{Vn().editTracksInfo(e,t,a)})}function Ih(e){return new Promise((t,a)=>{Vn().getStatus(e,t,a)})}function Ks(e){return _t().setOptions({...kl(),...e})}function kl(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function xh(e){if(!e)return;const t=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,a=e.match(t);return a?a[1]:null}function Lh(e){const t=e.split(`
`),a=[];for(let i=0;i<t.length;i++)if(t[i].trim().startsWith("#EXT-X-STREAM-INF")){const n=t[i+1]?t[i+1].trim():"";n&&!n.startsWith("#")&&a.push(n)}return a}function Oh(e){return e.split(`
`).find(i=>!i.trim().startsWith("#")&&i.trim()!=="")}async function Nh(e){try{const a=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return Ah.some(i=>a===i)}catch(t){return console.error("Error while trying to get the Content-Type of the manifest",t),!1}}async function Mh(e){try{const t=await(await fetch(e)).text();let a=t;const i=Lh(t);if(i.length>0){const s=new URL(i[0],e).toString();a=await(await fetch(s)).text()}const r=Oh(a);return xh(r)}catch(t){console.error("Error while trying to parse the manifest playlist",t);return}}const pi=new wh,dt=new WeakSet;let ae;Rh(()=>{var e,t,a,i;if(!((t=(e=globalThis.chrome)==null?void 0:e.cast)!=null&&t.isAvailable)){console.debug("chrome.cast.isAvailable",(i=(a=globalThis.chrome)==null?void 0:a.cast)==null?void 0:i.isAvailable);return}ae||(ae=cast.framework,_t().addEventListener(ae.CastContextEventType.CAST_STATE_CHANGED,r=>{pi.forEach(n=>{var s,l;return(l=(s=$t.get(n)).onCastStateChanged)==null?void 0:l.call(s,r)})}),_t().addEventListener(ae.CastContextEventType.SESSION_STATE_CHANGED,r=>{pi.forEach(n=>{var s,l;return(l=(s=$t.get(n)).onSessionStateChanged)==null?void 0:l.call(s,r)})}),pi.forEach(r=>{var n,s;return(s=(n=$t.get(r)).init)==null?void 0:s.call(n)}))});let Ys=0;var H,ja,fe,tt,Mt,Pt,bt,tr,j,At,Al,wl,jr,Rl,Zr,Sl,zr;class Ph extends EventTarget{constructor(a){super();de(this,j);de(this,H);de(this,ja);de(this,fe);de(this,tt);de(this,Mt,"disconnected");de(this,Pt,!1);de(this,bt,new Set);de(this,tr,new WeakMap);_e(this,H,a),pi.add(this),$t.set(this,{init:()=>ge(this,j,Zr).call(this),onCastStateChanged:()=>ge(this,j,jr).call(this),onSessionStateChanged:()=>ge(this,j,Rl).call(this),getCastPlayer:()=>T(this,j,At)}),ge(this,j,Zr).call(this)}get state(){return T(this,Mt)}async watchAvailability(a){if(T(this,H).disableRemotePlayback)throw new wr("disableRemotePlayback attribute is present.");return T(this,tr).set(a,++Ys),T(this,bt).add(a),queueMicrotask(()=>a(ge(this,j,wl).call(this))),Ys}async cancelWatchAvailability(a){if(T(this,H).disableRemotePlayback)throw new wr("disableRemotePlayback attribute is present.");a?T(this,bt).delete(a):T(this,bt).clear()}async prompt(){var i,r,n,s;if(T(this,H).disableRemotePlayback)throw new wr("disableRemotePlayback attribute is present.");if(!((r=(i=globalThis.chrome)==null?void 0:i.cast)!=null&&r.isAvailable))throw new kh("The RemotePlayback API is disabled on this platform.");const a=dt.has(T(this,H));dt.add(T(this,H)),Ks(T(this,H).castOptions),Object.entries(T(this,tt)).forEach(([l,o])=>{T(this,fe).controller.addEventListener(l,o)});try{await _t().requestSession()}catch(l){if(a||dt.delete(T(this,H)),l==="cancel")return;throw new Error(l)}(s=(n=$t.get(T(this,H)))==null?void 0:n.loadOnPrompt)==null||s.call(n)}}H=new WeakMap,ja=new WeakMap,fe=new WeakMap,tt=new WeakMap,Mt=new WeakMap,Pt=new WeakMap,bt=new WeakMap,tr=new WeakMap,j=new WeakSet,At=function(){if(dt.has(T(this,H)))return T(this,fe)},Al=function(){dt.has(T(this,H))&&(Object.entries(T(this,tt)).forEach(([a,i])=>{T(this,fe).controller.removeEventListener(a,i)}),dt.delete(T(this,H)),T(this,H).muted=T(this,fe).isMuted,T(this,H).currentTime=T(this,fe).savedPlayerState.currentTime,T(this,fe).savedPlayerState.isPaused===!1&&T(this,H).play())},wl=function(){var i;const a=(i=_t())==null?void 0:i.getCastState();return a&&a!=="NO_DEVICES_AVAILABLE"},jr=function(){const a=_t().getCastState();if(dt.has(T(this,H))&&a==="CONNECTING"&&(_e(this,Mt,"connecting"),this.dispatchEvent(new Event("connecting"))),!T(this,Pt)&&(a!=null&&a.includes("CONNECT"))){_e(this,Pt,!0);for(let i of T(this,bt))i(!0)}else if(T(this,Pt)&&(!a||a==="NO_DEVICES_AVAILABLE")){_e(this,Pt,!1);for(let i of T(this,bt))i(!1)}},Rl=async function(){var i;const{SESSION_RESUMED:a}=ae.SessionState;if(_t().getSessionState()===a&&T(this,H).castSrc===((i=Vn())==null?void 0:i.media.contentId)){dt.add(T(this,H)),Object.entries(T(this,tt)).forEach(([r,n])=>{T(this,fe).controller.addEventListener(r,n)});try{await Ih(new chrome.cast.media.GetStatusRequest)}catch(r){console.error(r)}T(this,tt)[ae.RemotePlayerEventType.IS_PAUSED_CHANGED](),T(this,tt)[ae.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},Zr=function(){!ae||T(this,ja)||(_e(this,ja,!0),Ks(T(this,H).castOptions),T(this,H).textTracks.addEventListener("change",()=>ge(this,j,zr).call(this)),ge(this,j,jr).call(this),_e(this,fe,new ae.RemotePlayer),new ae.RemotePlayerController(T(this,fe)),_e(this,tt,{[ae.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:a})=>{a===!0?(_e(this,Mt,"connected"),this.dispatchEvent(new Event("connect"))):(ge(this,j,Al).call(this),_e(this,Mt,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[ae.RemotePlayerEventType.DURATION_CHANGED]:()=>{T(this,H).dispatchEvent(new Event("durationchange"))},[ae.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{T(this,H).dispatchEvent(new Event("volumechange"))},[ae.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{T(this,H).dispatchEvent(new Event("volumechange"))},[ae.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var a;(a=T(this,j,At))!=null&&a.isMediaLoaded&&T(this,H).dispatchEvent(new Event("timeupdate"))},[ae.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{T(this,H).dispatchEvent(new Event("resize"))},[ae.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{T(this,H).dispatchEvent(new Event(this.paused?"pause":"play"))},[ae.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var a,i;((a=T(this,j,At))==null?void 0:a.playerState)!==chrome.cast.media.PlayerState.PAUSED&&T(this,H).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[(i=T(this,j,At))==null?void 0:i.playerState]))},[ae.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var a;(a=T(this,j,At))!=null&&a.isMediaLoaded&&(await Promise.resolve(),ge(this,j,Sl).call(this))}}))},Sl=function(){ge(this,j,zr).call(this)},zr=async function(){var c,m,f;if(!T(this,j,At))return;const i=(((c=T(this,fe).mediaInfo)==null?void 0:c.tracks)??[]).filter(({type:_})=>_===chrome.cast.media.TrackType.TEXT),r=[...T(this,H).textTracks].filter(({kind:_})=>_==="subtitles"||_==="captions"),n=i.map(({language:_,name:y,trackId:b})=>{const{mode:g}=r.find(p=>p.language===_&&p.label===y)??{};return g?{mode:g,trackId:b}:!1}).filter(Boolean),l=n.filter(({mode:_})=>_!=="showing").map(({trackId:_})=>_),o=n.find(({mode:_})=>_==="showing"),u=((f=(m=Fn())==null?void 0:m.getSessionObj().media[0])==null?void 0:f.activeTrackIds)??[];let h=u;if(u.length&&(h=h.filter(_=>!l.includes(_))),o!=null&&o.trackId&&(h=[...h,o.trackId]),h=[...new Set(h)],!((_,y)=>_.length===y.length&&_.every(b=>y.includes(b)))(u,h))try{const _=new chrome.cast.media.EditTracksInfoRequest(h);await Dh(_)}catch(_){console.error(_)}};const $h=e=>{var t,a,i,r,n,s,$,Cl;return t=class extends e{constructor(){super(...arguments);de(this,s);de(this,a,{paused:!1});de(this,i,kl());de(this,r);de(this,n)}get remote(){return T(this,n)?T(this,n):Sh()?(this.disableRemotePlayback||Ch(),$t.set(this,{loadOnPrompt:()=>ge(this,s,Cl).call(this)}),_e(this,n,new Ph(this))):super.remote}attributeChangedCallback(d,c,m){if(super.attributeChangedCallback(d,c,m),d==="cast-receiver"&&m){T(this,i).receiverApplicationId=m;return}if(T(this,s,$))switch(d){case"cast-stream-type":case"cast-src":this.load();break}}async load(){var y;if(!T(this,s,$))return super.load();const d=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);d.customData=this.castCustomData;const c=[...this.querySelectorAll("track")].filter(({kind:b,src:g})=>g&&(b==="subtitles"||b==="captions")),m=[];let f=0;if(c.length&&(d.tracks=c.map(b=>{const g=++f;m.length===0&&b.track.mode==="showing"&&m.push(g);const p=new chrome.cast.media.Track(g,chrome.cast.media.TrackType.TEXT);return p.trackContentId=b.src,p.trackContentType="text/vtt",p.subtype=b.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,p.name=b.label,p.language=b.srclang,p})),this.castStreamType==="live"?d.streamType=chrome.cast.media.StreamType.LIVE:d.streamType=chrome.cast.media.StreamType.BUFFERED,d.metadata=new chrome.cast.media.GenericMediaMetadata,d.metadata.title=this.title,d.metadata.images=[{url:this.poster}],Nh(this.castSrc)){const b=await Mh(this.castSrc);(b==null?void 0:b.includes("m4s"))||(b==null?void 0:b.includes("mp4"))?(d.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,d.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):b!=null&&b.includes("ts")&&(d.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,d.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}const _=new chrome.cast.media.LoadRequest(d);_.currentTime=super.currentTime??0,_.autoplay=!T(this,a).paused,_.activeTrackIds=m,await((y=Fn())==null?void 0:y.loadMedia(_)),this.dispatchEvent(new Event("volumechange"))}play(){var d;if(T(this,s,$)){T(this,s,$).isPaused&&((d=T(this,s,$).controller)==null||d.playOrPause());return}return super.play()}pause(){var d;if(T(this,s,$)){T(this,s,$).isPaused||(d=T(this,s,$).controller)==null||d.playOrPause();return}super.pause()}get castOptions(){return T(this,i)}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(d){this.castReceiver!=d&&this.setAttribute("cast-receiver",`${d}`)}get castSrc(){var d;return this.getAttribute("cast-src")??((d=this.querySelector("source"))==null?void 0:d.src)??this.currentSrc}set castSrc(d){this.castSrc!=d&&this.setAttribute("cast-src",`${d}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(d){this.setAttribute("cast-content-type",`${d}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(d){this.setAttribute("cast-stream-type",`${d}`)}get castCustomData(){return T(this,r)}set castCustomData(d){const c=typeof d;if(!["object","undefined"].includes(c)){console.error(`castCustomData must be nullish or an object but value was of type ${c}`);return}_e(this,r,d)}get readyState(){if(T(this,s,$))switch(T(this,s,$).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return T(this,s,$)?T(this,s,$).isPaused:super.paused}get muted(){var d;return T(this,s,$)?(d=T(this,s,$))==null?void 0:d.isMuted:super.muted}set muted(d){var c;if(T(this,s,$)){(d&&!T(this,s,$).isMuted||!d&&T(this,s,$).isMuted)&&((c=T(this,s,$).controller)==null||c.muteOrUnmute());return}super.muted=d}get volume(){var d;return T(this,s,$)?((d=T(this,s,$))==null?void 0:d.volumeLevel)??1:super.volume}set volume(d){var c;if(T(this,s,$)){T(this,s,$).volumeLevel=+d,(c=T(this,s,$).controller)==null||c.setVolumeLevel();return}super.volume=d}get duration(){var d,c;return T(this,s,$)&&((d=T(this,s,$))!=null&&d.isMediaLoaded)?((c=T(this,s,$))==null?void 0:c.duration)??NaN:super.duration}get currentTime(){var d,c;return T(this,s,$)&&((d=T(this,s,$))!=null&&d.isMediaLoaded)?((c=T(this,s,$))==null?void 0:c.currentTime)??0:super.currentTime}set currentTime(d){var c;if(T(this,s,$)){T(this,s,$).currentTime=d,(c=T(this,s,$).controller)==null||c.seek();return}super.currentTime=d}},a=new WeakMap,i=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,$=function(){var d,c;return(c=(d=$t.get(this.remote))==null?void 0:d.getCastPlayer)==null?void 0:c.call(d)},Cl=async function(){T(this,a).paused=za(t.prototype,this,"paused"),za(t.prototype,this,"pause").call(this),this.muted=za(t.prototype,this,"muted");try{await this.load()}catch(d){console.error(d)}},bs(t,"observedAttributes",[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),t};var Dl=e=>{throw TypeError(e)},Il=(e,t,a)=>t.has(e)||Dl("Cannot "+a),Uh=(e,t,a)=>(Il(e,t,"read from private field"),a?a.call(e):t.get(e)),Bh=(e,t,a)=>t.has(e)?Dl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Hh=(e,t,a,i)=>(Il(e,t,"write to private field"),t.set(e,a),a),xl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class e extends xl{}globalThis.DocumentFragment=e}var Wh=class extends xl{},qh={get(e){},define(e,t,a){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Wh)}},Kh={customElements:qh},Yh=typeof window>"u"||typeof globalThis.customElements>"u",Rr=Yh?Kh:globalThis,vi,Fs=class extends $h(xu(Th)){constructor(){super(...arguments),Bh(this,vi)}get autoplay(){let e=this.getAttribute("autoplay");return e===null?!1:e===""?!0:e}set autoplay(e){let t=this.autoplay;e!==t&&(e?this.setAttribute("autoplay",typeof e=="string"?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return(e=Uh(this,vi))!=null?e:this.muxCastCustomData}set castCustomData(e){Hh(this,vi,e)}};vi=new WeakMap;Rr.customElements.get("mux-video")||(Rr.customElements.define("mux-video",Fs),Rr.MuxVideoElement=Fs);var Ll=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},L=(e,t,a)=>(Ll(e,t,"read from private field"),a?a.call(e):t.get(e)),qe=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},at=(e,t,a,i)=>(Ll(e,t,"write to private field"),t.set(e,a),a),Vt,fi,wt,Sa,mt,ht,pt,Rt,Gt,bi,Ce;const Vs=1,Gs=0,Fh=1,Vh={processCallback(e,t,a){if(a){for(const[i,r]of t)if(i in a){const n=a[i];typeof n=="boolean"&&r instanceof Le&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Le?r.element[r.attributeName]=n:r.value=n}}}};class dr extends O.DocumentFragment{constructor(t,a,i=Vh){var r;super(),qe(this,Vt,void 0),qe(this,fi,void 0),this.append(t.content.cloneNode(!0)),at(this,Vt,Ol(this)),at(this,fi,i),(r=i.createCallback)==null||r.call(i,this,L(this,Vt),a),i.processCallback(this,L(this,Vt),a)}update(t){L(this,fi).processCallback(this,L(this,Vt),t)}}Vt=new WeakMap;fi=new WeakMap;const Ol=(e,t=[])=>{let a,i;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new jh;for([a,i]of Zs(r.value))if(!a)n.append(i);else{const s=new Le(e,r.name,r.namespaceURI);n.append(s),t.push([i,s])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===Vs&&!(r instanceof HTMLTemplateElement))Ol(r,t);else{const n=r.data;if(r.nodeType===Vs||n.includes("{{")){const s=[];if(n)for([a,i]of Zs(n))if(!a)s.push(new Text(i));else{const l=new ua(e);s.push(l),t.push([i,l])}else if(r instanceof HTMLTemplateElement){const l=new Pl(e,r);s.push(l),t.push([l.expression,l])}r.replaceWith(...s.flatMap(l=>l.replacementNodes||[l]))}}return t},js={},Zs=e=>{let t="",a=0,i=js[e],r=0,n;if(i)return i;for(i=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++a==1?(t&&i.push([Gs,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--a?(i.push([Fh,t.trim()]),t="",r++):t+=n||"";return t&&i.push([Gs,(a>0?"{{":"")+t]),js[e]=i},Gh=11;class Nl{get value(){return""}set value(t){}toString(){return this.value}}const Ml=new WeakMap;class jh{constructor(){qe(this,wt,[])}[Symbol.iterator](){return L(this,wt).values()}get length(){return L(this,wt).length}item(t){return L(this,wt)[t]}append(...t){for(const a of t)a instanceof Le&&Ml.set(a,this),L(this,wt).push(a)}toString(){return L(this,wt).join("")}}wt=new WeakMap;class Le extends Nl{constructor(t,a,i){super(),qe(this,Rt),qe(this,Sa,""),qe(this,mt,void 0),qe(this,ht,void 0),qe(this,pt,void 0),at(this,mt,t),at(this,ht,a),at(this,pt,i)}get attributeName(){return L(this,ht)}get attributeNamespace(){return L(this,pt)}get element(){return L(this,mt)}get value(){return L(this,Sa)}set value(t){L(this,Sa)!==t&&(at(this,Sa,t),!L(this,Rt,Gt)||L(this,Rt,Gt).length===1?t==null?L(this,mt).removeAttributeNS(L(this,pt),L(this,ht)):L(this,mt).setAttributeNS(L(this,pt),L(this,ht),t):L(this,mt).setAttributeNS(L(this,pt),L(this,ht),L(this,Rt,Gt).toString()))}get booleanValue(){return L(this,mt).hasAttributeNS(L(this,pt),L(this,ht))}set booleanValue(t){if(!L(this,Rt,Gt)||L(this,Rt,Gt).length===1)this.value=t?"":null;else throw new DOMException("Value is not fully templatized")}}Sa=new WeakMap;mt=new WeakMap;ht=new WeakMap;pt=new WeakMap;Rt=new WeakSet;Gt=function(){return Ml.get(this)};class ua extends Nl{constructor(t,a){super(),qe(this,bi,void 0),qe(this,Ce,void 0),at(this,bi,t),at(this,Ce,a?[...a]:[new Text])}get replacementNodes(){return L(this,Ce)}get parentNode(){return L(this,bi)}get nextSibling(){return L(this,Ce)[L(this,Ce).length-1].nextSibling}get previousSibling(){return L(this,Ce)[0].previousSibling}get value(){return L(this,Ce).map(t=>t.textContent).join("")}set value(t){this.replace(t)}replace(...t){const a=t.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===Gh?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);a.length||a.push(new Text),at(this,Ce,Zh(L(this,Ce)[0].parentNode,L(this,Ce),a,this.nextSibling))}}bi=new WeakMap;Ce=new WeakMap;class Pl extends ua{constructor(t,a){const i=a.getAttribute("directive")||a.getAttribute("type");let r=a.getAttribute("expression")||a.getAttribute(i)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(t),this.expression=r,this.template=a,this.directive=i}}function Zh(e,t,a,i=null){let r=0,n,s,l,o=a.length,u=t.length;for(;r<o&&r<u&&t[r]==a[r];)r++;for(;r<o&&r<u&&a[o-1]==t[u-1];)i=a[--u,--o];if(r==u)for(;r<o;)e.insertBefore(a[r++],i);if(r==o)for(;r<u;)e.removeChild(t[r++]);else{for(n=t[r];r<o;)l=a[r++],s=n?n.nextSibling:i,n==l?n=s:r<o&&a[r]==s?(e.replaceChild(l,n),n=s):e.insertBefore(l,n);for(;n!=i;)s=n.nextSibling,e.removeChild(n),n=s}return a}const zs={string:e=>String(e)};class $l{constructor(t){this.template=t,this.state=void 0}}const Lt=new WeakMap,Ot=new WeakMap,Qr={partial:(e,t)=>{t[e.expression]=new $l(e.template)},if:(e,t)=>{var a;if(Ul(e.expression,t))if(Lt.get(e)!==e.template){Lt.set(e,e.template);const i=new dr(e.template,t,Gn);e.replace(i),Ot.set(e,i)}else(a=Ot.get(e))==null||a.update(t);else e.replace(""),Lt.delete(e),Ot.delete(e)}},zh=Object.keys(Qr),Gn={processCallback(e,t,a){var i,r;if(a)for(const[n,s]of t){if(s instanceof Pl){if(!s.directive){const o=zh.find(u=>s.template.hasAttribute(u));o&&(s.directive=o,s.expression=s.template.getAttribute(o))}(i=Qr[s.directive])==null||i.call(Qr,s,a);continue}let l=Ul(n,a);if(l instanceof $l){Lt.get(s)!==l.template?(Lt.set(s,l.template),l=new dr(l.template,l.state,Gn),s.value=l,Ot.set(s,l)):(r=Ot.get(s))==null||r.update(l.state);continue}l?(s instanceof Le&&s.attributeName.startsWith("aria-")&&(l=String(l)),s instanceof Le?typeof l=="boolean"?s.booleanValue=l:typeof l=="function"?s.element[s.attributeName]=l:s.value=l:(s.value=l,Lt.delete(s),Ot.delete(s))):s instanceof Le?s.value=void 0:(s.value=void 0,Lt.delete(s),Ot.delete(s))}}},Qs={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var a;return(a=zs[t])==null?void 0:a.call(zs,e)}};function Qh(e){return Xh(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function Ul(e,t={}){var a,i,r,n,s,l,o;const u=Qh(e);if(u.length===0||u.some(({type:h})=>!h))return pa(e);if(((a=u[0])==null?void 0:a.token)===">"){const h=t[(i=u[1])==null?void 0:i.token];if(!h)return pa(e);const d={...t};h.state=d;const c=u.slice(2);for(let m=0;m<c.length;m+=3){const f=(r=c[m])==null?void 0:r.token,_=(n=c[m+1])==null?void 0:n.token,y=(s=c[m+2])==null?void 0:s.token;f&&_==="="&&(d[f]=va(y,t))}return h}if(u.length===1)return ei(u[0])?va(u[0].token,t):pa(e);if(u.length===2){const h=(l=u[0])==null?void 0:l.token,d=Qs[h];if(!d||!ei(u[1]))return pa(e);const c=va(u[1].token,t);return d(c)}if(u.length===3){const h=(o=u[1])==null?void 0:o.token,d=Qs[h];if(!d||!ei(u[0])||!ei(u[2]))return pa(e);const c=va(u[0].token,t);if(h==="|")return d(c,u[2].token);const m=va(u[2].token,t);return d(c,m)}}function pa(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function ei({type:e}){return["number","boolean","string","param"].includes(e)}function va(e,t){const a=e[0],i=e.slice(-1);return e==="true"||e==="false"?e==="true":a===i&&["'",'"'].includes(a)?e.slice(1,-1):wo(e)?parseFloat(e):t[e]}function Xh(e,t){let a,i,r;const n=[];for(;e;){r=null,a=e.length;for(const s in t)i=t[s].exec(e),i&&i.index<a&&(r={token:i[0],type:s,matches:i.slice(1)},a=i.index);a&&n.push({token:e.substr(0,a),type:void 0}),r&&n.push(r),e=e.substr(a+(r?r.token.length:0))}return n}var jn=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Xr=(e,t,a)=>(jn(e,t,"read from private field"),a?a.call(e):t.get(e)),fa=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Nt=(e,t,a,i)=>(jn(e,t,"write to private field"),t.set(e,a),a),Sr=(e,t,a)=>(jn(e,t,"access private method"),a),ea,_i,ta,Jr,Bl,gi,en;const Cr={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Hl=Wa.createElement("template");Hl.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class cr extends O.HTMLElement{constructor(){super(),fa(this,Jr),fa(this,gi),fa(this,ea,void 0),fa(this,_i,void 0),fa(this,ta,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const t=new MutationObserver(a=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||a.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(Cr[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});t.observe(this,{attributes:!0}),t.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(Pr.BREAKPOINTS_COMPUTED,this.render),Sr(this,Jr,Bl).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var t;return(t=Xr(this,ea))!=null?t:this.constructor.template}set template(t){if(t===null){this.removeAttribute("template");return}typeof t=="string"?this.setAttribute("template",t):t instanceof HTMLTemplateElement&&(Nt(this,ea,t),Nt(this,ta,null),this.createRenderer())}get props(){var t,a,i;const r=[...Array.from((a=(t=this.mediaController)==null?void 0:t.attributes)!=null?a:[]).filter(({name:s})=>Cr[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const l=(i=Cr[s.name])!=null?i:Lu(s.name);let{value:o}=s;o!=null?(wo(o)&&(o=parseFloat(o)),n[l]=o===""?!0:o):n[l]=!1}return n}attributeChangedCallback(t,a,i){t==="template"&&a!=i&&Sr(this,gi,en).call(this)}connectedCallback(){Sr(this,gi,en).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Xr(this,_i)&&(Nt(this,_i,this.template),this.renderer=new dr(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Hl.content.cloneNode(!0),this.renderer))}render(){var t;(t=this.renderer)==null||t.update(this.props)}}ea=new WeakMap;_i=new WeakMap;ta=new WeakMap;Jr=new WeakSet;Bl=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};gi=new WeakSet;en=function(){var e;const t=this.getAttribute("template");if(!t||t===Xr(this,ta))return;const a=this.getRootNode(),i=(e=a==null?void 0:a.getElementById)==null?void 0:e.call(a,t);if(i){Nt(this,ta,t),Nt(this,ea,i),this.createRenderer();return}Jh(t)&&(Nt(this,ta,t),ep(t).then(r=>{const n=Wa.createElement("template");n.innerHTML=r,Nt(this,ea,n),this.createRenderer()}).catch(console.error))};cr.observedAttributes=["template"];cr.processor=Gn;function Jh(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function ep(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}O.customElements.get("media-theme")||O.customElements.define("media-theme",cr);function tp({anchor:e,floating:t,placement:a}){const i=ap({anchor:e,floating:t}),{x:r,y:n}=rp(i,a);return{x:r,y:n}}function ap({anchor:e,floating:t}){return{anchor:ip(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function ip(e,t){var a;const i=e.getBoundingClientRect(),r=(a=t==null?void 0:t.getBoundingClientRect())!=null?a:{x:0,y:0};return{x:i.x-r.x,y:i.y-r.y,width:i.width,height:i.height}}function rp({anchor:e,floating:t},a){const i=np(a)==="x"?"y":"x",r=i==="y"?"height":"width",n=Wl(a),s=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,o=e[r]/2-t[r]/2;let u;switch(n){case"top":u={x:s,y:e.y-t.height};break;case"bottom":u={x:s,y:e.y+e.height};break;case"right":u={x:e.x+e.width,y:l};break;case"left":u={x:e.x-t.width,y:l};break;default:u={x:e.x,y:e.y}}switch(a.split("-")[1]){case"start":u[i]-=o;break;case"end":u[i]+=o;break}return u}function Wl(e){return e.split("-")[0]}function np(e){return["top","bottom"].includes(Wl(e))?"y":"x"}class Zn extends Event{constructor({action:t="auto",relatedTarget:a,...i}){super("invoke",i),this.action=t,this.relatedTarget=a}}class sp extends Event{constructor({newState:t,oldState:a,...i}){super("toggle",i),this.newState=t,this.oldState=a}}var zn=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},U=(e,t,a)=>(zn(e,t,"read from private field"),a?a.call(e):t.get(e)),Y=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},He=(e,t,a,i)=>(zn(e,t,"write to private field"),t.set(e,a),a),F=(e,t,a)=>(zn(e,t,"access private method"),a),We,Ut,yt,yi,Ei,Bt,Ya,tn,ql,Gi,Qn,ji,Ti,an,rn,Kl,nn,Yl,sn,Fl,aa,ia,ra,Fa,Zi,Xn,on,Vl,Jn,Gl,ln,jl,es,Zl,un,zl,dn,Ql,Pa,zi,cn,Xl,$a,Qi,ki,mn;function oa({type:e,text:t,value:a,checked:i}){const r=Wa.createElement("media-chrome-menu-item");r.type=e,r.part.add("menu-item"),r.part.add(e),r.value=a,r.checked=i;const n=Wa.createElement("span");return n.textContent=t,r.append(n),r}function Ht(e,t){let a=e.querySelector(`:scope > [slot="${t}"]`);if((a==null?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a)return a=a.cloneNode(!0),a;const i=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return i?i.cloneNode(!0):""}function op(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const Tt={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class ze extends O.HTMLElement{constructor(){if(super(),Y(this,tn),Y(this,Gi),Y(this,Ti),Y(this,rn),Y(this,nn),Y(this,sn),Y(this,ra),Y(this,Zi),Y(this,on),Y(this,Jn),Y(this,ln),Y(this,es),Y(this,un),Y(this,dn),Y(this,Pa),Y(this,cn),Y(this,$a),Y(this,ki),Y(this,We,null),Y(this,Ut,null),Y(this,yt,null),Y(this,yi,new Set),Y(this,Ei,void 0),Y(this,Bt,!1),Y(this,Ya,null),Y(this,ji,()=>{const t=U(this,yi),a=new Set(this.items);for(const i of t)a.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of a)t.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));He(this,yi,a)}),Y(this,aa,()=>{F(this,ra,Fa).call(this),F(this,Zi,Xn).call(this,!1)}),Y(this,ia,()=>{F(this,ra,Fa).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=Ro(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),He(this,Ei,new MutationObserver(U(this,ji))),U(this,Ei).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[Tt.DISABLED,Tt.HIDDEN,Tt.STYLE,Tt.ANCHOR,_s.MEDIA_CONTROLLER]}static formatMenuItemText(t,a){return t}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(t){switch(t.type){case"slotchange":F(this,tn,ql).call(this,t);break;case"invoke":F(this,rn,Kl).call(this,t);break;case"click":F(this,on,Vl).call(this,t);break;case"toggle":F(this,ln,jl).call(this,t);break;case"focusout":F(this,un,zl).call(this,t);break;case"keydown":F(this,dn,Ql).call(this,t);break}}connectedCallback(){var t,a;He(this,Ya,Ou(this.shadowRoot,":host")),F(this,Ti,an).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),He(this,We,gs(this)),(a=(t=U(this,We))==null?void 0:t.associateElement)==null||a.call(t,this),this.hidden||(Bi(Va(this),U(this,aa)),Bi(this,U(this,ia))),F(this,Gi,Qn).call(this)}disconnectedCallback(){var t,a;Hi(Va(this),U(this,aa)),Hi(this,U(this,ia)),this.disable(),(a=(t=U(this,We))==null?void 0:t.unassociateElement)==null||a.call(t,this),He(this,We,null)}attributeChangedCallback(t,a,i){var r,n,s,l;t===Tt.HIDDEN&&i!==a?(U(this,Bt)||He(this,Bt,!0),this.hidden?F(this,sn,Fl).call(this):F(this,nn,Yl).call(this),this.dispatchEvent(new sp({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):t===_s.MEDIA_CONTROLLER?(a&&((n=(r=U(this,We))==null?void 0:r.unassociateElement)==null||n.call(r,this),He(this,We,null)),i&&this.isConnected&&(He(this,We,gs(this)),(l=(s=U(this,We))==null?void 0:s.associateElement)==null||l.call(s,this))):t===Tt.DISABLED&&i!==a?i==null?this.enable():this.disable():t===Tt.STYLE&&i!==a&&F(this,Ti,an).call(this)}formatMenuItemText(t,a){return this.constructor.formatMenuItemText(t,a)}get anchor(){return this.getAttribute("anchor")}set anchor(t){this.setAttribute("anchor",`${t}`)}get anchorElement(){var t;return this.anchor?(t=Cn(this))==null?void 0:t.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(lp)}get radioGroupItems(){return this.items.filter(t=>t.role==="menuitemradio")}get checkedItems(){return this.items.filter(t=>t.checked)}get value(){var t,a;return(a=(t=this.checkedItems[0])==null?void 0:t.value)!=null?a:""}set value(t){const a=this.items.find(i=>i.value===t);a&&F(this,ki,mn).call(this,a)}focus(){if(He(this,Ut,Nu()),this.items.length){F(this,$a,Qi).call(this,this.items[0]),this.items[0].focus();return}const t=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');t==null||t.focus()}handleSelect(t){var a;const i=F(this,Pa,zi).call(this,t);i&&(F(this,ki,mn).call(this,i,i.type==="checkbox"),U(this,yt)&&!this.hidden&&((a=U(this,Ut))==null||a.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(t){var a,i;const{key:r}=t,n=this.items,s=(i=(a=F(this,Pa,zi).call(this,t))!=null?a:F(this,cn,Xl).call(this))!=null?i:n[0],l=n.indexOf(s);let o=Math.max(0,l);r==="ArrowDown"?o++:r==="ArrowUp"?o--:t.key==="Home"?o=0:t.key==="End"&&(o=n.length-1),o<0&&(o=n.length-1),o>n.length-1&&(o=0),F(this,$a,Qi).call(this,n[o]),n[o].focus()}}We=new WeakMap;Ut=new WeakMap;yt=new WeakMap;yi=new WeakMap;Ei=new WeakMap;Bt=new WeakMap;Ya=new WeakMap;tn=new WeakSet;ql=function(e){const t=e.target;for(const a of t.assignedNodes({flatten:!0}))a.nodeType===3&&a.textContent.trim()===""&&a.remove();["header","title"].includes(t.name)&&F(this,Gi,Qn).call(this),t.name||U(this,ji).call(this)};Gi=new WeakSet;Qn=function(){const e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=t.assignedNodes().length===0&&e.assignedNodes().length===0};ji=new WeakMap;Ti=new WeakSet;an=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),a=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",a==="row"?"":"width:0")};rn=new WeakSet;Kl=function(e){He(this,yt,e.relatedTarget),Dn(this,e.relatedTarget)||(this.hidden=!this.hidden)};nn=new WeakSet;Yl=function(){var e;(e=U(this,yt))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Bi(Va(this),U(this,aa)),Bi(this,U(this,ia))};sn=new WeakSet;Fl=function(){var e;(e=U(this,yt))==null||e.setAttribute("aria-expanded","false"),Hi(Va(this),U(this,aa)),Hi(this,U(this,ia))};aa=new WeakMap;ia=new WeakMap;ra=new WeakSet;Fa=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:a}=tp({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const r=Va(this).getBoundingClientRect(),n=r.width-t-e,s=r.height-a-this.offsetHeight,{style:l}=U(this,Ya);l.setProperty("position","absolute"),l.setProperty("right",`${Math.max(0,n)}px`),l.setProperty("--_menu-bottom",`${s}px`);const o=getComputedStyle(this),h=l.getPropertyValue("--_menu-bottom")===o.bottom?s:parseFloat(o.bottom),d=r.height-h-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)};Zi=new WeakSet;Xn=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),a=t==null?void 0:t.querySelector('[role="menu"]'),{style:i}=U(this,Ya);if(e||i.setProperty("--media-menu-transition-in","none"),a){const r=a.offsetHeight,n=Math.max(a.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),F(this,ra,Fa).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),F(this,ra,Fa).call(this);i.removeProperty("--media-menu-transition-in")};on=new WeakSet;Vl=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(U(this,Jn,Gl))){(t=U(this,Ut))==null||t.focus(),this.hidden=!0;return}const a=F(this,Pa,zi).call(this,e);!a||a.hasAttribute("disabled")||(F(this,$a,Qi).call(this,a),this.handleSelect(e))};Jn=new WeakSet;Gl=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(a=>a.matches('button[part~="back"]'))};ln=new WeakSet;jl=function(e){if(e.target===this)return;F(this,es,Zl).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const a of t)a.invokeTargetElement!=e.target&&e.newState=="open"&&a.getAttribute("aria-expanded")=="true"&&!a.invokeTargetElement.hidden&&a.invokeTargetElement.dispatchEvent(new Zn({relatedTarget:a}));for(const a of t)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);F(this,Zi,Xn).call(this,!0)};es=new WeakSet;Zl=function(){const t=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!t)};un=new WeakSet;zl=function(e){var t;Dn(this,e.relatedTarget)||(U(this,Bt)&&((t=U(this,Ut))==null||t.focus()),U(this,yt)&&U(this,yt)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};dn=new WeakSet;Ql=function(e){var t,a,i,r,n;const{key:s,ctrlKey:l,altKey:o,metaKey:u}=e;if(!(l||o||u)&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),s==="Tab"){if(U(this,Bt)){this.hidden=!0;return}e.shiftKey?(a=(t=this.previousElementSibling)==null?void 0:t.focus)==null||a.call(t):(r=(i=this.nextElementSibling)==null?void 0:i.focus)==null||r.call(i),this.blur()}else s==="Escape"?((n=U(this,Ut))==null||n.focus(),U(this,Bt)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(e):this.handleMove(e)};Pa=new WeakSet;zi=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};cn=new WeakSet;Xl=function(){return this.items.find(e=>e.tabIndex===0)};$a=new WeakSet;Qi=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};ki=new WeakSet;mn=function(e,t){const a=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(i=>i.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((i,r)=>i!=a[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};ze.shadowRootOptions={mode:"open"};ze.getTemplateHTML=op;function lp(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e==null?void 0:e.role)}function Va(e){var t;return(t=e.getAttribute("bounds")?Mu(e,`#${e.getAttribute("bounds")}`):Oe(e)||e.parentElement)!=null?t:e}O.customElements.get("media-chrome-menu")||O.customElements.define("media-chrome-menu",ze);var ts=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Fe=(e,t,a)=>(ts(e,t,"read from private field"),a?a.call(e):t.get(e)),Xe=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Dr=(e,t,a,i)=>(ts(e,t,"write to private field"),t.set(e,a),a),xe=(e,t,a)=>(ts(e,t,"access private method"),a),Ai,Ua,hn,Jl,Xi,as,is,eu,Ve,la,Ga,pn,tu,wi,vn;function up(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function dp(e){return""}const ye={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class da extends O.HTMLElement{constructor(){if(super(),Xe(this,hn),Xe(this,Xi),Xe(this,is),Xe(this,la),Xe(this,pn),Xe(this,wi),Xe(this,Ai,!1),Xe(this,Ua,void 0),Xe(this,Ve,()=>{var t,a;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),r=(t=this.submenuElement.checkedItems)==null?void 0:t[0],n=(a=r==null?void 0:r.dataset.description)!=null?a:r==null?void 0:r.text,s=Wa.createElement("span");s.textContent=n??"",i.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=Ro(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[ye.TYPE,ye.DISABLED,ye.CHECKED,ye.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),ba(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(t){switch(t.type){case"slotchange":xe(this,hn,Jl).call(this,t);break;case"click":this.handleClick(t);break;case"keydown":xe(this,pn,tu).call(this,t);break;case"keyup":xe(this,la,Ga).call(this,t);break}}attributeChangedCallback(t,a,i){t===ye.CHECKED&&ba(this)&&!Fe(this,Ai)?this.setAttribute("aria-checked",i!=null?"true":"false"):t===ye.TYPE&&i!==a?this.role="menuitem"+i:t===ye.DISABLED&&i!==a&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(ye.DISABLED)||this.enable(),this.role="menuitem"+this.type,Dr(this,Ua,fn(this,this.parentNode)),xe(this,wi,vn).call(this),this.submenuElement&&xe(this,Xi,as).call(this)}disconnectedCallback(){this.disable(),xe(this,wi,vn).call(this),Dr(this,Ua,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=Cn(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var t;return(t=this.getAttribute(ye.TYPE))!=null?t:""}set type(t){this.setAttribute(ye.TYPE,`${t}`)}get value(){var t;return(t=this.getAttribute(ye.VALUE))!=null?t:this.text}set value(t){this.setAttribute(ye.VALUE,t)}get text(){var t;return((t=this.textContent)!=null?t:"").trim()}get checked(){if(ba(this))return this.getAttribute("aria-checked")==="true"}set checked(t){ba(this)&&(Dr(this,Ai,!0),this.setAttribute("aria-checked",t?"true":"false"),t?this.part.add("checked"):this.part.remove("checked"))}handleClick(t){ba(this)||this.invokeTargetElement&&Dn(this,t.target)&&this.invokeTargetElement.dispatchEvent(new Zn({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}Ai=new WeakMap;Ua=new WeakMap;hn=new WeakSet;Jl=function(e){const t=e.target;if(!(t!=null&&t.name))for(const i of t.assignedNodes({flatten:!0}))i instanceof Text&&i.textContent.trim()===""&&i.remove();t.name==="submenu"&&(this.submenuElement?xe(this,Xi,as).call(this):xe(this,is,eu).call(this))};Xi=new WeakSet;as=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Fe(this,Ve)),this.submenuElement.addEventListener("addmenuitem",Fe(this,Ve)),this.submenuElement.addEventListener("removemenuitem",Fe(this,Ve)),Fe(this,Ve).call(this)};is=new WeakSet;eu=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Fe(this,Ve)),this.submenuElement.removeEventListener("addmenuitem",Fe(this,Ve)),this.submenuElement.removeEventListener("removemenuitem",Fe(this,Ve)),Fe(this,Ve).call(this)};Ve=new WeakMap;la=new WeakSet;Ga=function(e){const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",xe(this,la,Ga));return}this.handleClick(e)};pn=new WeakSet;tu=function(e){const{metaKey:t,altKey:a,key:i}=e;if(t||a||!this.keysUsed.includes(i)){this.removeEventListener("keyup",xe(this,la,Ga));return}this.addEventListener("keyup",xe(this,la,Ga),{once:!0})};wi=new WeakSet;vn=function(){var e;const t=(e=Fe(this,Ua))==null?void 0:e.radioGroupItems;if(!t)return;let a=t.filter(i=>i.getAttribute("aria-checked")==="true").pop();a||(a=t[0]);for(const i of t)i.setAttribute("aria-checked","false");a==null||a.setAttribute("aria-checked","true")};da.shadowRootOptions={mode:"open"};da.getTemplateHTML=up;da.getSuffixSlotInnerHTML=dp;function ba(e){return e.type==="radio"||e.type==="checkbox"}function fn(e,t){if(!e)return null;const{host:a}=e.getRootNode();return!t&&a?fn(e,a):t!=null&&t.items?t:fn(t,t==null?void 0:t.parentNode)}O.customElements.get("media-chrome-menu-item")||O.customElements.define("media-chrome-menu-item",da);function cp(e){return`
    ${ze.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class au extends ze{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Oe(this).querySelector("media-settings-menu-button")}}au.getTemplateHTML=cp;O.customElements.get("media-settings-menu")||O.customElements.define("media-settings-menu",au);function mp(e){return`
    ${da.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function hp(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class mr extends da{}mr.shadowRootOptions={mode:"open"};mr.getTemplateHTML=mp;mr.getSuffixSlotInnerHTML=hp;O.customElements.get("media-settings-menu-item")||O.customElements.define("media-settings-menu-item",mr);class ca extends Pu{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=Cn(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):null}handleClick(){var t;(t=this.invokeTargetElement)==null||t.dispatchEvent(new Zn({relatedTarget:this}))}}O.customElements.get("media-chrome-menu-button")||O.customElements.define("media-chrome-menu-button",ca);function pp(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function vp(){return me("Settings")}class rs extends ca{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",me("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Oe(this).querySelector("media-settings-menu")}}rs.getSlotTemplateHTML=pp;rs.getTooltipContentHTML=vp;O.customElements.get("media-settings-menu-button")||O.customElements.define("media-settings-menu-button",rs);var ns=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},iu=(e,t,a)=>(ns(e,t,"read from private field"),a?a.call(e):t.get(e)),ti=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},bn=(e,t,a,i)=>(ns(e,t,"write to private field"),t.set(e,a),a),ai=(e,t,a)=>(ns(e,t,"access private method"),a),Ca,Ji,Ri,_n,Si,gn;class fp extends ze{constructor(){super(...arguments),ti(this,Ri),ti(this,Si),ti(this,Ca,[]),ti(this,Ji,void 0)}static get observedAttributes(){return[...super.observedAttributes,R.MEDIA_AUDIO_TRACK_LIST,R.MEDIA_AUDIO_TRACK_ENABLED,R.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===R.MEDIA_AUDIO_TRACK_ENABLED&&a!==i?this.value=i:t===R.MEDIA_AUDIO_TRACK_LIST&&a!==i&&(bn(this,Ca,$u(i??"")),ai(this,Ri,_n).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ai(this,Si,gn))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ai(this,Si,gn))}get anchorElement(){var t;return this.anchor!=="auto"?super.anchorElement:(t=Oe(this))==null?void 0:t.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return iu(this,Ca)}set mediaAudioTrackList(t){bn(this,Ca,t),ai(this,Ri,_n).call(this)}get mediaAudioTrackEnabled(){var t;return(t=ar(this,R.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){ir(this,R.MEDIA_AUDIO_TRACK_ENABLED,t)}}Ca=new WeakMap;Ji=new WeakMap;Ri=new WeakSet;_n=function(){if(iu(this,Ji)===JSON.stringify(this.mediaAudioTrackList))return;bn(this,Ji,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="";for(const t of e){const a=this.formatMenuItemText(t.label,t),i=oa({type:"radio",text:a,value:`${t.id}`,checked:t.enabled});i.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(i)}};Si=new WeakSet;gn=function(){if(this.value==null)return;const e=new O.CustomEvent(Wt.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};O.customElements.get("media-audio-track-menu")||O.customElements.define("media-audio-track-menu",fp);const bp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function _p(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${bp}</slot>
  `}function gp(){return me("Audio")}const Xs=e=>{const t=me("Audio");e.setAttribute("aria-label",t)};class ss extends ca{static get observedAttributes(){return[...super.observedAttributes,R.MEDIA_AUDIO_TRACK_ENABLED,R.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Xs(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===R.MEDIA_LANG&&Xs(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=Oe(this))==null?void 0:t.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var t;return(t=ar(this,R.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){ir(this,R.MEDIA_AUDIO_TRACK_ENABLED,t)}}ss.getSlotTemplateHTML=_p;ss.getTooltipContentHTML=gp;O.customElements.get("media-audio-track-menu-button")||O.customElements.define("media-audio-track-menu-button",ss);var os=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},yp=(e,t,a)=>(os(e,t,"read from private field"),t.get(e)),Ir=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Ep=(e,t,a,i)=>(os(e,t,"write to private field"),t.set(e,a),a),xr=(e,t,a)=>(os(e,t,"access private method"),a),er,yn,ru,Ci,En;const Tp=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function kp(e){return`
    ${ze.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${Tp}</slot>
  `}class nu extends ze{constructor(){super(...arguments),Ir(this,yn),Ir(this,Ci),Ir(this,er,void 0)}static get observedAttributes(){return[...super.observedAttributes,R.MEDIA_SUBTITLES_LIST,R.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===R.MEDIA_SUBTITLES_LIST&&a!==i?xr(this,yn,ru).call(this):t===R.MEDIA_SUBTITLES_SHOWING&&a!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",xr(this,Ci,En))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",xr(this,Ci,En))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Oe(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Js(this,R.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){eo(this,R.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Js(this,R.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){eo(this,R.MEDIA_SUBTITLES_SHOWING,t)}}er=new WeakMap;yn=new WeakSet;ru=function(){var e;if(yp(this,er)===JSON.stringify(this.mediaSubtitlesList))return;Ep(this,er,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const t=!this.value,a=oa({type:"radio",text:this.formatMenuItemText(me("Off")),value:"off",checked:t});a.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(a);const i=this.mediaSubtitlesList;for(const r of i){const n=oa({type:"radio",text:this.formatMenuItemText(r.label,r),value:ys(r),checked:this.value==ys(r)});n.prepend(Ht(this,"checked-indicator")),((e=r.kind)!=null?e:"subs")==="captions"&&n.append(Ht(this,"captions-indicator")),this.defaultSlot.append(n)}};Ci=new WeakSet;En=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(R.MEDIA_SUBTITLES_SHOWING),a=this.value!==t;if(e!=null&&e.length&&a&&this.dispatchEvent(new O.CustomEvent(Wt.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!a)return;const i=new O.CustomEvent(Wt.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(i)};nu.getTemplateHTML=kp;const Js=(e,t)=>{const a=e.getAttribute(t);return a?So(a):[]},eo=(e,t,a)=>{if(!(a!=null&&a.length)){e.removeAttribute(t);return}const i=Co(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};O.customElements.get("media-captions-menu")||O.customElements.define("media-captions-menu",nu);const Ap=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,wp=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Rp(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Ap}</slot>
      <slot name="off">${wp}</slot>
    </slot>
  `}function Sp(){return me("Captions")}const to=e=>{e.setAttribute("data-captions-enabled",Uu(e).toString())},ao=e=>{e.setAttribute("aria-label",me("closed captions"))};class ls extends ca{static get observedAttributes(){return[...super.observedAttributes,R.MEDIA_SUBTITLES_LIST,R.MEDIA_SUBTITLES_SHOWING,R.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),ao(this),to(this)}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===R.MEDIA_SUBTITLES_SHOWING?to(this):t===R.MEDIA_LANG&&ao(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=Oe(this))==null?void 0:t.querySelector("media-captions-menu")}get mediaSubtitlesList(){return io(this,R.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){ro(this,R.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return io(this,R.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){ro(this,R.MEDIA_SUBTITLES_SHOWING,t)}}ls.getSlotTemplateHTML=Rp;ls.getTooltipContentHTML=Sp;const io=(e,t)=>{const a=e.getAttribute(t);return a?So(a):[]},ro=(e,t,a)=>{if(!(a!=null&&a.length)){e.removeAttribute(t);return}const i=Co(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};O.customElements.get("media-captions-menu-button")||O.customElements.define("media-captions-menu-button",ls);var su=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},jt=(e,t,a)=>(su(e,t,"read from private field"),a?a.call(e):t.get(e)),Lr=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},_a=(e,t,a)=>(su(e,t,"access private method"),a),ft,Da,Di,Ii,Tn;const Or={RATES:"rates"};class Cp extends ze{constructor(){super(),Lr(this,Da),Lr(this,Ii),Lr(this,ft,new Bu(this,Or.RATES,{defaultValue:Hu})),_a(this,Da,Di).call(this)}static get observedAttributes(){return[...super.observedAttributes,R.MEDIA_PLAYBACK_RATE,Or.RATES]}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===R.MEDIA_PLAYBACK_RATE&&a!=i?this.value=i:t===Or.RATES&&a!=i&&(jt(this,ft).value=i,_a(this,Da,Di).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",_a(this,Ii,Tn))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",_a(this,Ii,Tn))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Oe(this).querySelector("media-playback-rate-menu-button")}get rates(){return jt(this,ft)}set rates(t){t?Array.isArray(t)?jt(this,ft).value=t.join(" "):typeof t=="string"&&(jt(this,ft).value=t):jt(this,ft).value="",_a(this,Da,Di).call(this)}get mediaPlaybackRate(){return rr(this,R.MEDIA_PLAYBACK_RATE,Wu)}set mediaPlaybackRate(t){nr(this,R.MEDIA_PLAYBACK_RATE,t)}}ft=new WeakMap;Da=new WeakSet;Di=function(){this.defaultSlot.textContent="";for(const e of jt(this,ft)){const t=oa({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(t)}};Ii=new WeakSet;Tn=function(){if(!this.value)return;const e=new O.CustomEvent(Wt.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};O.customElements.get("media-playback-rate-menu")||O.customElements.define("media-playback-rate-menu",Cp);const xi=1;function Dp(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||xi}x</slot>
  `}function Ip(){return me("Playback rate")}class us extends ca{static get observedAttributes(){return[...super.observedAttributes,R.MEDIA_PLAYBACK_RATE]}constructor(){var t;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(t=this.mediaPlaybackRate)!=null?t:xi}x`}attributeChangedCallback(t,a,i){if(super.attributeChangedCallback(t,a,i),t===R.MEDIA_PLAYBACK_RATE){const r=i?+i:Number.NaN,n=Number.isNaN(r)?xi:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",me("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Oe(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return rr(this,R.MEDIA_PLAYBACK_RATE,xi)}set mediaPlaybackRate(t){nr(this,R.MEDIA_PLAYBACK_RATE,t)}}us.getSlotTemplateHTML=Dp;us.getTooltipContentHTML=Ip;O.customElements.get("media-playback-rate-menu-button")||O.customElements.define("media-playback-rate-menu-button",us);var ds=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},Ia=(e,t,a)=>(ds(e,t,"read from private field"),a?a.call(e):t.get(e)),ii=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},no=(e,t,a,i)=>(ds(e,t,"write to private field"),t.set(e,a),a),Yt=(e,t,a)=>(ds(e,t,"access private method"),a),xa,Xt,Zt,La,Li,kn;class xp extends ze{constructor(){super(...arguments),ii(this,Zt),ii(this,Li),ii(this,xa,[]),ii(this,Xt,{})}static get observedAttributes(){return[...super.observedAttributes,R.MEDIA_RENDITION_LIST,R.MEDIA_RENDITION_SELECTED,R.MEDIA_RENDITION_UNAVAILABLE,R.MEDIA_HEIGHT]}static formatMenuItemText(t,a){return super.formatMenuItemText(t,a)}static formatRendition(t,{showBitrate:a=!1}={}){const i=`${Math.min(t.width,t.height)}p`;if(a&&t.bitrate){const r=t.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${i} (${n})`}return this.formatMenuItemText(i,t)}static compareRendition(t,a){var i,r;return a.height===t.height?((i=a.bitrate)!=null?i:0)-((r=t.bitrate)!=null?r:0):a.height-t.height}attributeChangedCallback(t,a,i){super.attributeChangedCallback(t,a,i),t===R.MEDIA_RENDITION_SELECTED&&a!==i?(this.value=i??"auto",Yt(this,Zt,La).call(this)):t===R.MEDIA_RENDITION_LIST&&a!==i?(no(this,xa,qu(i)),Yt(this,Zt,La).call(this)):t===R.MEDIA_HEIGHT&&a!==i&&Yt(this,Zt,La).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Yt(this,Li,kn))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Yt(this,Li,kn))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Oe(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return Ia(this,xa)}set mediaRenditionList(t){no(this,xa,t),Yt(this,Zt,La).call(this)}get mediaRenditionSelected(){return ar(this,R.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){ir(this,R.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return rr(this,R.MEDIA_HEIGHT)}set mediaHeight(t){nr(this,R.MEDIA_HEIGHT,t)}compareRendition(t,a){return this.constructor.compareRendition(t,a)}formatMenuItemText(t,a){return this.constructor.formatMenuItemText(t,a)}formatRendition(t,a){return this.constructor.formatRendition(t,a)}showRenditionBitrate(t){return this.mediaRenditionList.some(a=>a!==t&&a.height===t.height&&a.bitrate!==t.bitrate)}}xa=new WeakMap;Xt=new WeakMap;Zt=new WeakSet;La=function(){if(Ia(this,Xt).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&Ia(this,Xt).mediaHeight===this.mediaHeight)return;Ia(this,Xt).mediaRenditionList=JSON.stringify(this.mediaRenditionList),Ia(this,Xt).mediaHeight=this.mediaHeight;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(s=>s.id===this.mediaRenditionSelected);for(const s of e)s.selected=s===t;this.defaultSlot.textContent="";const a=!this.mediaRenditionSelected;for(const s of e){const l=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),o=oa({type:"radio",text:l,value:`${s.id}`,checked:s.selected&&!a});o.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(o)}const i=t&&this.showRenditionBitrate(t),r=a?t?this.formatMenuItemText(`${me("Auto")} • ${this.formatRendition(t,{showBitrate:i})}`,t):this.formatMenuItemText(`${me("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(me("Auto")),n=oa({type:"radio",text:r,value:"auto",checked:a});n.dataset.description=r,n.prepend(Ht(this,"checked-indicator")),this.defaultSlot.append(n)};Li=new WeakSet;kn=function(){if(this.value==null)return;const e=new O.CustomEvent(Wt.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};O.customElements.get("media-rendition-menu")||O.customElements.define("media-rendition-menu",xp);const Lp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function Op(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Lp}</slot>
  `}function Np(){return me("Quality")}class cs extends ca{static get observedAttributes(){return[...super.observedAttributes,R.MEDIA_RENDITION_SELECTED,R.MEDIA_RENDITION_UNAVAILABLE,R.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",me("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Oe(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ar(this,R.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){ir(this,R.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return rr(this,R.MEDIA_HEIGHT)}set mediaHeight(t){nr(this,R.MEDIA_HEIGHT,t)}}cs.getSlotTemplateHTML=Op;cs.getTooltipContentHTML=Np;O.customElements.get("media-rendition-menu-button")||O.customElements.define("media-rendition-menu-button",cs);var ou=e=>{throw TypeError(e)},ms=(e,t,a)=>t.has(e)||ou("Cannot "+a),q=(e,t,a)=>(ms(e,t,"read from private field"),a?a.call(e):t.get(e)),De=(e,t,a)=>t.has(e)?ou("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Ge=(e,t,a,i)=>(ms(e,t,"write to private field"),t.set(e,a),a),te=(e,t,a)=>(ms(e,t,"access private method"),a),hr=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends hr{}globalThis.DocumentFragment=e}var hs=class extends hr{},Mp=class extends hr{},Pp={get(e){},define(e,t,a){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(hs)}},Oi,$p=class{constructor(t,a={}){De(this,Oi),Ge(this,Oi,a==null?void 0:a.detail)}get detail(){return q(this,Oi)}initCustomEvent(){}};Oi=new WeakMap;function Up(e,t){return new hs}var lu={document:{createElement:Up},DocumentFragment,customElements:Pp,CustomEvent:$p,EventTarget:hr,HTMLElement:hs,HTMLVideoElement:Mp},uu=typeof window>"u"||typeof globalThis.customElements>"u",Ke=uu?lu:globalThis,ps=uu?lu.document:globalThis.document;function Bp(e){let t="";return Object.entries(e).forEach(([a,i])=>{i!=null&&(t+=`${An(a)}: ${i}; `)}),t?t.trim():void 0}function An(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function du(e){return e.replace(/[-_]([a-z])/g,(t,a)=>a.toUpperCase())}function ve(e){if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}function cu(e){let t=Hp(e).toString();return t?"?"+t:""}function Hp(e){let t={};for(let a in e)e[a]!=null&&(t[a]=e[a]);return new URLSearchParams(t)}var mu=(e,t)=>!e||!t?!1:e.contains(t)?!0:mu(e,t.getRootNode().host),hu="mux.com",Wp=()=>{try{return"3.7.0"}catch{}return"UNKNOWN"},qp=Wp(),pu=()=>qp,Kp=(e,{token:t,customDomain:a=hu,thumbnailTime:i,programTime:r}={})=>{var n;let s=t==null?i:void 0,{aud:l}=(n=Jt(t))!=null?n:{};if(!(t&&l!=="t"))return`https://image.${a}/${e}/thumbnail.webp${cu({token:t,time:s,program_time:r})}`},Yp=(e,{token:t,customDomain:a=hu,programStartTime:i,programEndTime:r}={})=>{var n;let{aud:s}=(n=Jt(t))!=null?n:{};if(!(t&&s!=="s"))return`https://image.${a}/${e}/storyboard.vtt${cu({token:t,format:"webp",program_start_time:i,program_end_time:r})}`},vs=e=>{if(e){if([W.LIVE,W.ON_DEMAND].includes(e))return e;if(e!=null&&e.includes("live"))return W.LIVE}},Fp={crossorigin:"crossOrigin",playsinline:"playsInline"};function Vp(e){var t;return(t=Fp[e])!=null?t:du(e)}var zt,Qt,ce,Gp=class{constructor(t,a){De(this,zt),De(this,Qt),De(this,ce,[]),Ge(this,zt,t),Ge(this,Qt,a)}[Symbol.iterator](){return q(this,ce).values()}get length(){return q(this,ce).length}get value(){var t;return(t=q(this,ce).join(" "))!=null?t:""}set value(t){var a;t!==this.value&&(Ge(this,ce,[]),this.add(...(a=t==null?void 0:t.split(" "))!=null?a:[]))}toString(){return this.value}item(t){return q(this,ce)[t]}values(){return q(this,ce).values()}keys(){return q(this,ce).keys()}forEach(t){q(this,ce).forEach(t)}add(...t){var a,i;t.forEach(r=>{this.contains(r)||q(this,ce).push(r)}),!(this.value===""&&!((a=q(this,zt))!=null&&a.hasAttribute(`${q(this,Qt)}`)))&&((i=q(this,zt))==null||i.setAttribute(`${q(this,Qt)}`,`${this.value}`))}remove(...t){var a;t.forEach(i=>{q(this,ce).splice(q(this,ce).indexOf(i),1)}),(a=q(this,zt))==null||a.setAttribute(`${q(this,Qt)}`,`${this.value}`)}contains(t){return q(this,ce).includes(t)}toggle(t,a){return typeof a<"u"?a?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,a){this.remove(t),this.add(a)}};zt=new WeakMap,Qt=new WeakMap,ce=new WeakMap;var vu=`[mux-player ${pu()}]`;function et(...e){console.warn(vu,...e)}function Te(...e){console.error(vu,...e)}function fu(e){var t;let a=(t=e.message)!=null?t:"";e.context&&(a+=` ${e.context}`),e.file&&(a+=` ${S("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),et(a)}var le={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},St={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},so=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),jp=Object.values(le).filter(e=>le.PLAYSINLINE!==e),Zp=Object.values(St),zp=[...jp,...Zp],Qp=class extends Ke.HTMLElement{static get observedAttributes(){return zp}constructor(){super()}attributeChangedCallback(e,t,a){var i,r;switch(e){case St.MUTED:{this.media&&(this.media.muted=a!=null,this.media.defaultMuted=a!=null);return}case St.VOLUME:{let n=(i=ve(a))!=null?i:1;this.media&&(this.media.volume=n);return}case St.PLAYBACKRATE:{let n=(r=ve(a))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var e,t;return(t=(e=this.media)==null?void 0:e.play())!=null?t:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return(t=(e=this.media)==null?void 0:e.paused)!=null?t:!0}get duration(){var e,t;return(t=(e=this.media)==null?void 0:e.duration)!=null?t:NaN}get ended(){var e,t;return(t=(e=this.media)==null?void 0:e.ended)!=null?t:!1}get buffered(){var e,t;return(t=(e=this.media)==null?void 0:e.buffered)!=null?t:so}get seekable(){var e,t;return(t=(e=this.media)==null?void 0:e.seekable)!=null?t:so}get readyState(){var e,t;return(t=(e=this.media)==null?void 0:e.readyState)!=null?t:0}get videoWidth(){var e,t;return(t=(e=this.media)==null?void 0:e.videoWidth)!=null?t:0}get videoHeight(){var e,t;return(t=(e=this.media)==null?void 0:e.videoHeight)!=null?t:0}get currentSrc(){var e,t;return(t=(e=this.media)==null?void 0:e.currentSrc)!=null?t:""}get currentTime(){var e,t;return(t=(e=this.media)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return(t=(e=this.media)==null?void 0:e.volume)!=null?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return(t=(e=this.media)==null?void 0:e.playbackRate)!=null?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=ve(this.getAttribute(St.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(St.PLAYBACKRATE,`${e}`):this.removeAttribute(St.PLAYBACKRATE)}get crossOrigin(){return ga(this,le.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(le.CROSSORIGIN,`${e}`)}get autoplay(){return ga(this,le.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(le.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(le.AUTOPLAY)}get loop(){return ga(this,le.LOOP)!=null}set loop(e){e?this.setAttribute(le.LOOP,""):this.removeAttribute(le.LOOP)}get muted(){var e,t;return(t=(e=this.media)==null?void 0:e.muted)!=null?t:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return ga(this,le.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(le.MUTED,""):this.removeAttribute(le.MUTED)}get playsInline(){return ga(this,le.PLAYSINLINE)!=null}set playsInline(e){Te("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(le.PRELOAD,e):this.removeAttribute(le.PRELOAD)}};function ga(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var oo=Qp,Xp=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,ya=new WeakMap,Jp=class bu{constructor(t,a){this.element=t,this.type=a,this.element.addEventListener(this.type,this);let i=ya.get(this.element);i&&i.set(this.type,this)}set(t){if(typeof t=="function")this.handleEvent=t.bind(this.element);else if(typeof t=="object"&&typeof t.handleEvent=="function")this.handleEvent=t.handleEvent.bind(t);else{this.element.removeEventListener(this.type,this);let a=ya.get(this.element);a&&a.delete(this.type)}}static for(t){ya.has(t.element)||ya.set(t.element,new Map);let a=t.attributeName.slice(2),i=ya.get(t.element);return i&&i.has(a)?i.get(a):new bu(t.element,a)}};function ev(e,t){return e instanceof Le&&e.attributeName.startsWith("on")?(Jp.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0):!1}function tv(e,t){return t instanceof _u&&e instanceof ua?(t.renderInto(e),!0):!1}function av(e,t){return t instanceof DocumentFragment&&e instanceof ua?(t.childNodes.length&&e.replace(...t.childNodes),!0):!1}function iv(e,t){if(e instanceof Le){let a=e.attributeNamespace,i=e.element.getAttributeNS(a,e.attributeName);return String(t)!==i&&(e.value=String(t)),!0}return e.value=String(t),!0}function rv(e,t){if(e instanceof Le&&t instanceof Element){let a=e.element;return a[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),a[e.attributeName]=t),!0}return!1}function nv(e,t){if(typeof t=="boolean"&&e instanceof Le){let a=e.attributeNamespace,i=e.element.hasAttributeNS(a,e.attributeName);return t!==i&&(e.booleanValue=t),!0}return!1}function sv(e,t){return t===!1&&e instanceof ua?(e.replace(""),!0):!1}function ov(e,t){rv(e,t)||nv(e,t)||ev(e,t)||sv(e,t)||tv(e,t)||av(e,t)||iv(e,t)}var Nr=new Map,lo=new WeakMap,uo=new WeakMap,_u=class{constructor(t,a,i){this.strings=t,this.values=a,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(Nr.has(this.stringsKey))return Nr.get(this.stringsKey);{let t=ps.createElement("template"),a=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,r,n)=>i+r+(n<a?`{{ ${n} }}`:""),""),Nr.set(this.stringsKey,t),t}}renderInto(t){var a;let i=this.template;if(lo.get(t)!==i){lo.set(t,i);let n=new dr(i,this.values,this.processor);uo.set(t,n),t instanceof ua?t.replace(...n.children):t.appendChild(n);return}let r=uo.get(t);(a=r==null?void 0:r.update)==null||a.call(r,this.values)}},lv={processCallback(e,t,a){var i;if(a){for(let[r,n]of t)if(r in a){let s=(i=a[r])!=null?i:"";ov(n,s)}}}};function Ni(e,...t){return new _u(e,t,lv)}function uv(e,t){e.renderInto(t)}var dv=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},cv=e=>Ni`
  <style>
    ${dv(e)}
    ${Xp}
  </style>
  ${vv(e)}
`,mv=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return vs(e.streamType)==="live"&&(t+=" noarrowleft noarrowright"),t},hv={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},pv=Object.values(hv).join(", "),vv=e=>{var t,a,i,r,n,s,l,o,u,h,d,c,m,f,_,y,b,g,p,k,D,I,P,K,z,B,N,pe,Ne,Me,se,be,ot,lt,ut,Pe,ue;return Ni`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${(t=e.defaultStreamType)!=null?t:!1}"
    hotkeys="${mv(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!((a=e.streamType)!=null&&a.includes(W.LIVE))&&e.targetLiveWindow!==0}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${(i=e.audio)!=null?i:!1}"
    style="${(r=Bp({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${(n=e.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=e.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(l=e.playbackRates)!=null?l:!1}"
    defaultshowremainingtime="${(o=e.defaultShowRemainingTime)!=null?o:!1}"
    defaultduration="${(u=e.defaultDuration)!=null?u:!1}"
    hideduration="${(h=e.hideDuration)!=null?h:!1}"
    title="${(d=e.title)!=null?d:!1}"
    videotitle="${(c=e.videoTitle)!=null?c:!1}"
    proudlydisplaymuxbadge="${(m=e.proudlyDisplayMuxBadge)!=null?m:!1}"
    exportparts="${pv}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(f=e.noHotKeys)!=null?f:!1}"
      target-live-window="${(_=e.targetLiveWindow)!=null?_:!1}"
      stream-type="${(y=vs(e.streamType))!=null?y:!1}"
      crossorigin="${(b=e.crossOrigin)!=null?b:""}"
      playsinline
      autoplay="${(g=e.autoplay)!=null?g:!1}"
      muted="${(p=e.muted)!=null?p:!1}"
      loop="${(k=e.loop)!=null?k:!1}"
      preload="${(D=e.preload)!=null?D:!1}"
      debug="${(I=e.debug)!=null?I:!1}"
      prefer-cmcd="${(P=e.preferCmcd)!=null?P:!1}"
      disable-tracking="${(K=e.disableTracking)!=null?K:!1}"
      disable-cookies="${(z=e.disableCookies)!=null?z:!1}"
      prefer-playback="${(B=e.preferPlayback)!=null?B:!1}"
      start-time="${e.startTime!=null?e.startTime:!1}"
      beacon-collection-domain="${(N=e.beaconCollectionDomain)!=null?N:!1}"
      player-init-time="${(pe=e.playerInitTime)!=null?pe:!1}"
      player-software-name="${(Ne=e.playerSoftwareName)!=null?Ne:!1}"
      player-software-version="${(Me=e.playerSoftwareVersion)!=null?Me:!1}"
      env-key="${(se=e.envKey)!=null?se:!1}"
      custom-domain="${(be=e.customDomain)!=null?be:!1}"
      src="${e.src?e.src:e.playbackId?Fr(e):!1}"
      cast-src="${e.src?e.src:e.playbackId?Fr(e):!1}"
      cast-receiver="${(ot=e.castReceiver)!=null?ot:!1}"
      drm-token="${(ut=(lt=e.tokens)==null?void 0:lt.drm)!=null?ut:!1}"
      exportparts="video"
      disable-pseudo-ended="${(Pe=e.disablePseudoEnded)!=null?Pe:!1}"
    >
      ${e.storyboard?Ni`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:Ni``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${e.poster?e.poster:!1}"
        placeholdersrc="${(ue=e.placeholder)!=null?ue:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},gu=e=>e.charAt(0).toUpperCase()+e.slice(1),fv=(e,t=!1)=>{var a,i;if(e.muxCode){let r=gu((a=e.errorCategory)!=null?a:"video"),n=or((i=e.errorCategory)!=null?i:G.VIDEO);if(e.muxCode===C.NETWORK_OFFLINE)return S("Your device appears to be offline",t);if(e.muxCode===C.NETWORK_TOKEN_EXPIRED)return S("{category} URL has expired",t).format({category:r});if([C.NETWORK_TOKEN_SUB_MISMATCH,C.NETWORK_TOKEN_AUD_MISMATCH,C.NETWORK_TOKEN_AUD_MISSING,C.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return S("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===C.NETWORK_TOKEN_MISSING)return S("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===C.NETWORK_NOT_FOUND)return S("{category} does not exist",t).format({category:r});if(e.muxCode===C.NETWORK_NOT_READY){let s=e.streamType==="live"?"Live stream":"Video";return S("{mediaType} is not currently available",t).format({mediaType:s})}}if(e.code){if(e.code===w.MEDIA_ERR_NETWORK)return S("Network Error",t);if(e.code===w.MEDIA_ERR_DECODE)return S("Media Error",t);if(e.code===w.MEDIA_ERR_SRC_NOT_SUPPORTED)return S("Source Not Supported",t)}return S("Error",t)},bv=(e,t=!1)=>{var a,i;if(e.muxCode){let r=gu((a=e.errorCategory)!=null?a:"video"),n=or((i=e.errorCategory)!=null?i:G.VIDEO);return e.muxCode===C.NETWORK_OFFLINE?S("Check your internet connection and try reloading this video.",t):e.muxCode===C.NETWORK_TOKEN_EXPIRED?S("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===C.NETWORK_TOKEN_SUB_MISMATCH?S("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===C.NETWORK_TOKEN_MALFORMED?S("{category} URL is formatted incorrectly",t).format({category:r}):[C.NETWORK_TOKEN_AUD_MISMATCH,C.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?S("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[C.NETWORK_TOKEN_MISSING,C.NETWORK_INVALID_URL].includes(e.muxCode)?S("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===C.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===w.MEDIA_ERR_NETWORK||e.code===w.MEDIA_ERR_DECODE||(e.code,w.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},_v=(e,t=!1)=>{let a=fv(e,t).toString(),i=bv(e,t).toString();return{title:a,message:i}},gv=e=>{if(e.muxCode){if(e.muxCode===C.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===C.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([C.NETWORK_TOKEN_AUD_MISMATCH,C.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===C.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===C.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===C.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===C.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===w.MEDIA_ERR_NETWORK)return"";if(e.code===w.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===w.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},co=(e,t)=>{let a=gv(e);return{message:e.message,context:e.context,file:a}},yv=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,wn=ps.createElement("template");"innerHTML"in wn&&(wn.innerHTML=yv);var mo,ho,yu=class extends cr{};yu.template=(ho=(mo=wn.content)==null?void 0:mo.children)==null?void 0:ho[0];Ke.customElements.get("media-theme-gerwig")||Ke.customElements.define("media-theme-gerwig",yu);var Ev="gerwig",Je={SRC:"src",POSTER:"poster"},E={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},Rn=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","proudlydisplaymuxbadge"];function Tv(e,t){var a,i;return{src:!e.playbackId&&e.src,playbackId:e.playbackId,hasSrc:!!e.playbackId||!!e.src||!!e.currentSrc,poster:e.poster,storyboard:e.storyboard,storyboardSrc:e.getAttribute(E.STORYBOARD_SRC),placeholder:e.getAttribute("placeholder"),themeTemplate:Av(e),thumbnailTime:!e.tokens.thumbnail&&e.thumbnailTime,autoplay:e.autoplay,crossOrigin:e.crossOrigin,loop:e.loop,noHotKeys:e.hasAttribute(E.NOHOTKEYS),hotKeys:e.getAttribute(E.HOTKEYS),muted:e.muted,paused:e.paused,preload:e.preload,envKey:e.envKey,preferCmcd:e.preferCmcd,debug:e.debug,disableTracking:e.disableTracking,disableCookies:e.disableCookies,tokens:e.tokens,beaconCollectionDomain:e.beaconCollectionDomain,maxResolution:e.maxResolution,minResolution:e.minResolution,programStartTime:e.programStartTime,programEndTime:e.programEndTime,assetStartTime:e.assetStartTime,assetEndTime:e.assetEndTime,renditionOrder:e.renditionOrder,metadata:e.metadata,playerInitTime:e.playerInitTime,playerSoftwareName:e.playerSoftwareName,playerSoftwareVersion:e.playerSoftwareVersion,startTime:e.startTime,preferPlayback:e.preferPlayback,audio:e.audio,defaultStreamType:e.defaultStreamType,targetLiveWindow:e.getAttribute(v.TARGET_LIVE_WINDOW),streamType:vs(e.getAttribute(v.STREAM_TYPE)),primaryColor:e.getAttribute(E.PRIMARY_COLOR),secondaryColor:e.getAttribute(E.SECONDARY_COLOR),accentColor:e.getAttribute(E.ACCENT_COLOR),forwardSeekOffset:e.forwardSeekOffset,backwardSeekOffset:e.backwardSeekOffset,defaultHiddenCaptions:e.defaultHiddenCaptions,defaultDuration:e.defaultDuration,defaultShowRemainingTime:e.defaultShowRemainingTime,hideDuration:wv(e),playbackRates:e.getAttribute(E.PLAYBACK_RATES),customDomain:(a=e.getAttribute(v.CUSTOM_DOMAIN))!=null?a:void 0,title:e.getAttribute(E.TITLE),videoTitle:(i=e.getAttribute(E.VIDEO_TITLE))!=null?i:e.getAttribute(E.TITLE),novolumepref:e.hasAttribute(E.NO_VOLUME_PREF),proudlyDisplayMuxBadge:e.hasAttribute(E.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:e.castReceiver,disablePseudoEnded:e.hasAttribute(E.DISABLE_PSEUDO_ENDED),...t,extraSourceParams:e.extraSourceParams}}var kv=Do.formatErrorMessage;Do.formatErrorMessage=e=>{var t,a;if(e instanceof w){let i=_v(e,!1);return`
      ${i!=null&&i.title?`<h3>${i.title}</h3>`:""}
      ${i!=null&&i.message||i!=null&&i.linkUrl?`<p>
        ${i==null?void 0:i.message}
        ${i!=null&&i.linkUrl?`<a
              href="${i.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(t=i.linkText)!=null?t:""} ${S("(opens in a new window)")}"
              >${(a=i.linkText)!=null?a:i.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return kv(e)};function Av(e){var t,a;let i=e.theme;if(i){let r=(a=(t=e.getRootNode())==null?void 0:t.getElementById)==null?void 0:a.call(t,i);if(r&&r instanceof HTMLTemplateElement)return r;i.startsWith("media-theme-")||(i=`media-theme-${i}`);let n=Ke.customElements.get(i);if(n!=null&&n.template)return n.template}}function wv(e){var t;let a=(t=e.mediaController)==null?void 0:t.querySelector("media-time-display");return a&&getComputedStyle(a).getPropertyValue("--media-duration-display-display").trim()==="none"}function po(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(a=>a.startsWith("metadata-")).reduce((a,i)=>{let r=e.getAttribute(i);return r!==null&&(a[i.replace(/^metadata-/,"").replace(/-/g,"_")]=r),a},t)}var Rv=Object.values(v),Sv=Object.values(Je),Cv=Object.values(E),vo=pu(),fo="mux-player",bo={isDialogOpen:!1},Dv={redundant_streams:!0},Mi,Pi,$i,Ct,Ui,na,Q,vt,Eu,Sn,Dt,_o,go,yo,Eo,Iv=class extends oo{constructor(){super(),De(this,Q),De(this,Mi),De(this,Pi,!1),De(this,$i,{}),De(this,Ct,!0),De(this,Ui,new Gp(this,"hotkeys")),De(this,na,{...bo,onCloseErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&te(this,Q,Sn).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&(mu(this,ps.activeElement)||e.preventDefault())}}),Ge(this,Mi,Hn()),this.attachShadow({mode:"open"}),te(this,Q,Eu).call(this),this.isConnected&&te(this,Q,vt).call(this)}static get NAME(){return fo}static get VERSION(){return vo}static get observedAttributes(){var e;return[...(e=oo.observedAttributes)!=null?e:[],...Sv,...Rv,...Cv]}get mediaTheme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return(t=(e=this.mediaTheme)==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=po(this))}attributeChangedCallback(e,t,a){switch(te(this,Q,vt).call(this),super.attributeChangedCallback(e,t,a),e){case E.HOTKEYS:q(this,Ui).value=a;break;case E.THUMBNAIL_TIME:{a!=null&&this.tokens.thumbnail&&et(S("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case E.THUMBNAIL_TOKEN:{if(a){let i=Jt(a);if(i){let{aud:r}=i,n=Ma.THUMBNAIL;r!==n&&et(S("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case E.STORYBOARD_TOKEN:{if(a){let i=Jt(a);if(i){let{aud:r}=i,n=Ma.STORYBOARD;r!==n&&et(S("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case E.DRM_TOKEN:{if(a){let i=Jt(a);if(i){let{aud:r}=i,n=Ma.DRM;r!==n&&et(S("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case v.PLAYBACK_ID:{a!=null&&a.includes("?token")&&Te(S("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:a}));break}case v.STREAM_TYPE:a&&![W.LIVE,W.ON_DEMAND,W.UNKNOWN].includes(a)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=a.includes("dvr")?Number.POSITIVE_INFINITY:0:fu({file:"invalid-stream-type.md",message:S("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):a===W.LIVE?this.getAttribute(E.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[v.PLAYBACK_ID,Je.SRC,E.PLAYBACK_TOKEN].includes(e)&&t!==a&&Ge(this,na,{...q(this,na),...bo}),te(this,Q,Dt).call(this,{[Vp(e)]:a})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(R.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Ke.CustomEvent(Wt.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,i)=>{var r;(r=this.mediaController)==null||r.addEventListener(Pr.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(R.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Ke.CustomEvent(Wt.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((t,a)=>{var i;(i=this.mediaController)==null||i.addEventListener(Pr.MEDIA_IS_FULLSCREEN,()=>t(),{once:!0})})}get preferCmcd(){var e;return(e=this.getAttribute(v.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Fi.includes(e)?this.setAttribute(v.PREFER_CMCD,e):et(`Invalid value for preferCmcd. Must be one of ${Fi.join()}`):this.removeAttribute(v.PREFER_CMCD))}get hasPlayed(){var e,t;return(t=(e=this.mediaController)==null?void 0:e.hasAttribute(R.MEDIA_HAS_PLAYED))!=null?t:!1}get inLiveWindow(){var e;return(e=this.mediaController)==null?void 0:e.hasAttribute(R.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get theme(){var e;return(e=this.getAttribute(E.THEME))!=null?e:Ev}set theme(e){this.setAttribute(E.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let a of e.getAttributeNames()){if(Rn.includes(a))continue;let i=e.getAttribute(a);t[du(a)]=i===""?!0:i}return t}set themeProps(e){var t,a;te(this,Q,vt).call(this);let i={...this.themeProps,...e};for(let r in i){if(Rn.includes(r))continue;let n=e==null?void 0:e[r];typeof n=="boolean"||n==null?(t=this.mediaTheme)==null||t.toggleAttribute(An(r),!!n):(a=this.mediaTheme)==null||a.setAttribute(An(r),n)}}get playbackId(){var e;return(e=this.getAttribute(v.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(v.PLAYBACK_ID,e):this.removeAttribute(v.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?(e=kt(this,Je.SRC))!=null?e:void 0:(t=this.getAttribute(Je.SRC))!=null?t:void 0}set src(e){e?this.setAttribute(Je.SRC,e):this.removeAttribute(Je.SRC)}get poster(){var e;let t=this.getAttribute(Je.POSTER);if(t!=null)return t;let{tokens:a}=this;if(a.playback&&!a.thumbnail){et("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return Kp(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(e=this.thumbnailTime)!=null?e:this.startTime,programTime:this.programStartTime,token:a.thumbnail})}set poster(e){e||e===""?this.setAttribute(Je.POSTER,e):this.removeAttribute(Je.POSTER)}get storyboardSrc(){var e;return(e=this.getAttribute(E.STORYBOARD_SRC))!=null?e:void 0}set storyboardSrc(e){e?this.setAttribute(E.STORYBOARD_SRC,e):this.removeAttribute(E.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[W.LIVE,W.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return Yp(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(E.AUDIO)}set audio(e){if(!e){this.removeAttribute(E.AUDIO);return}this.setAttribute(E.AUDIO,"")}get hotkeys(){return q(this,Ui)}get nohotkeys(){return this.hasAttribute(E.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(E.NOHOTKEYS);return}this.setAttribute(E.NOHOTKEYS,"")}get thumbnailTime(){return ve(this.getAttribute(E.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(E.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return(t=(e=this.getAttribute(E.VIDEO_TITLE))!=null?e:this.getAttribute(E.TITLE))!=null?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(E.VIDEO_TITLE,e):this.removeAttribute(E.VIDEO_TITLE))}get placeholder(){var e;return(e=kt(this,E.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(E.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let a=this.getAttribute(E.PRIMARY_COLOR);if(a!=null||this.mediaTheme&&(a=(t=(e=Ke.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_primary-color"))==null?void 0:t.trim(),a))return a}set primaryColor(e){this.setAttribute(E.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let a=this.getAttribute(E.SECONDARY_COLOR);if(a!=null||this.mediaTheme&&(a=(t=(e=Ke.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_secondary-color"))==null?void 0:t.trim(),a))return a}set secondaryColor(e){this.setAttribute(E.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let a=this.getAttribute(E.ACCENT_COLOR);if(a!=null||this.mediaTheme&&(a=(t=(e=Ke.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_accent-color"))==null?void 0:t.trim(),a))return a}set accentColor(e){this.setAttribute(E.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(E.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(E.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(E.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(E.PLAYBACK_RATES))return this.getAttribute(E.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(E.PLAYBACK_RATES);return}this.setAttribute(E.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=ve(this.getAttribute(E.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(E.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=ve(this.getAttribute(E.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(E.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(E.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(E.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(E.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return ve(this.getAttribute(E.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(E.DEFAULT_DURATION):this.setAttribute(E.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(v.PLAYER_INIT_TIME)?ve(this.getAttribute(v.PLAYER_INIT_TIME)):q(this,Mi)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(v.PLAYER_INIT_TIME):this.setAttribute(v.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=this.getAttribute(v.PLAYER_SOFTWARE_NAME))!=null?e:fo}get playerSoftwareVersion(){var e;return(e=this.getAttribute(v.PLAYER_SOFTWARE_VERSION))!=null?e:vo}get beaconCollectionDomain(){var e;return(e=this.getAttribute(v.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(v.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(v.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return(e=this.getAttribute(v.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(v.MAX_RESOLUTION,e):this.removeAttribute(v.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(v.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(v.MIN_RESOLUTION,e):this.removeAttribute(v.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(v.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(v.RENDITION_ORDER,e):this.removeAttribute(v.RENDITION_ORDER))}get programStartTime(){return ve(this.getAttribute(v.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(v.PROGRAM_START_TIME):this.setAttribute(v.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return ve(this.getAttribute(v.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(v.PROGRAM_END_TIME):this.setAttribute(v.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return ve(this.getAttribute(v.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(v.ASSET_START_TIME):this.setAttribute(v.ASSET_START_TIME,`${e}`)}get assetEndTime(){return ve(this.getAttribute(v.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(v.ASSET_END_TIME):this.setAttribute(v.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(E.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(E.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,a])=>(e[t]=a,e),{}):Dv}set extraSourceParams(e){e==null?this.removeAttribute(E.EXTRA_SOURCE_PARAMS):this.setAttribute(E.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return(e=this.getAttribute(v.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(v.CUSTOM_DOMAIN,e):this.removeAttribute(v.CUSTOM_DOMAIN))}get envKey(){var e;return(e=kt(this,v.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(v.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(E.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(E.NO_VOLUME_PREF,""):this.removeAttribute(E.NO_VOLUME_PREF)}get debug(){return kt(this,v.DEBUG)!=null}set debug(e){e?this.setAttribute(v.DEBUG,""):this.removeAttribute(v.DEBUG)}get disableTracking(){return kt(this,v.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(v.DISABLE_TRACKING,!!e)}get disableCookies(){return kt(this,v.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(v.DISABLE_COOKIES,""):this.removeAttribute(v.DISABLE_COOKIES)}get streamType(){var e,t,a;return(a=(t=this.getAttribute(v.STREAM_TYPE))!=null?t:(e=this.media)==null?void 0:e.streamType)!=null?a:W.UNKNOWN}set streamType(e){this.setAttribute(v.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,a;return(a=(t=this.getAttribute(E.DEFAULT_STREAM_TYPE))!=null?t:(e=this.mediaController)==null?void 0:e.getAttribute(E.DEFAULT_STREAM_TYPE))!=null?a:W.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(E.DEFAULT_STREAM_TYPE,e):this.removeAttribute(E.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(E.TARGET_LIVE_WINDOW)?+this.getAttribute(E.TARGET_LIVE_WINDOW):(t=(e=this.media)==null?void 0:e.targetLiveWindow)!=null?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(E.TARGET_LIVE_WINDOW):this.setAttribute(E.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return(e=this.media)==null?void 0:e.liveEdgeStart}get startTime(){return ve(kt(this,v.START_TIME))}set startTime(e){this.setAttribute(v.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(v.PREFER_PLAYBACK);if(e===Ye.MSE||e===Ye.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Ye.MSE||e===Ye.NATIVE?this.setAttribute(v.PREFER_PLAYBACK,e):this.removeAttribute(v.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(te(this,Q,vt).call(this),!this.media){Te("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...po(this),...e}}get _hlsConfig(){var e;return(e=this.media)==null?void 0:e._hlsConfig}set _hlsConfig(e){if(te(this,Q,vt).call(this),!this.media){Te("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(te(this,Q,vt).call(this),!this.media){Te("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(t=this.media)==null?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return(e=this.media)==null?void 0:e.activeCuePoint}get cuePoints(){var e,t;return(t=(e=this.media)==null?void 0:e.cuePoints)!=null?t:[]}addChapters(e){var t;if(te(this,Q,vt).call(this),!this.media){Te("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(t=this.media)==null?void 0:t.addChapters(e)}get activeChapter(){var e;return(e=this.media)==null?void 0:e.activeChapter}get chapters(){var e,t;return(t=(e=this.media)==null?void 0:e.chapters)!=null?t:[]}getStartDate(){var e;return(e=this.media)==null?void 0:e.getStartDate()}get currentPdt(){var e;return(e=this.media)==null?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(E.PLAYBACK_TOKEN),t=this.getAttribute(E.DRM_TOKEN),a=this.getAttribute(E.THUMBNAIL_TOKEN),i=this.getAttribute(E.STORYBOARD_TOKEN);return{...q(this,$i),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{},...a!=null?{thumbnail:a}:{},...i!=null?{storyboard:i}:{}}}set tokens(e){Ge(this,$i,e??{})}get playbackToken(){var e;return(e=this.getAttribute(E.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(E.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return(e=this.getAttribute(E.DRM_TOKEN))!=null?e:void 0}set drmToken(e){this.setAttribute(E.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(E.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(E.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(E.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(E.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,a,i){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return Pn(n,e,t,a,i)}removeTextTrack(e){var t;let a=(t=this.media)==null?void 0:t.nativeEl;if(a)return Cm(a,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}get castReceiver(){var e;return(e=this.getAttribute(E.CAST_RECEIVER))!=null?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(E.CAST_RECEIVER,e):this.removeAttribute(E.CAST_RECEIVER))}get castCustomData(){var e;return(e=this.media)==null?void 0:e.castCustomData}set castCustomData(e){if(!this.media){Te("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(E.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(E.NO_TOOLTIPS);return}this.setAttribute(E.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(E.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(E.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(E.PROUDLY_DISPLAY_MUX_BADGE)}};Mi=new WeakMap,Pi=new WeakMap,$i=new WeakMap,Ct=new WeakMap,Ui=new WeakMap,na=new WeakMap,Q=new WeakSet,vt=function(){var e,t,a,i;if(!q(this,Pi)){Ge(this,Pi,!0),te(this,Q,Dt).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Ke.HTMLElement))throw""}catch{Te("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{Te("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof Ku))throw""}catch{Te("<media-controller> failed to upgrade!")}te(this,Q,_o).call(this),te(this,Q,go).call(this),te(this,Q,yo).call(this),Ge(this,Ct,(t=(e=this.mediaController)==null?void 0:e.hasAttribute(fr.USER_INACTIVE))!=null?t:!0),te(this,Q,Eo).call(this),(a=this.media)==null||a.addEventListener("streamtypechange",()=>te(this,Q,Dt).call(this)),(i=this.media)==null||i.addEventListener("loadstart",()=>te(this,Q,Dt).call(this))}},Eu=function(){var e,t;try{(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Sn=function(e){Object.assign(q(this,na),e),te(this,Q,Dt).call(this)},Dt=function(e={}){uv(cv(Tv(this,{...q(this,na),...e})),this.shadowRoot)},_o=function(){let e=t=>{var a,i;if(!(t!=null&&t.startsWith("theme-")))return;let r=t.replace(/^theme-/,"");if(Rn.includes(r))return;let n=this.getAttribute(t);n!=null?(a=this.mediaTheme)==null||a.setAttribute(r,n):(i=this.mediaTheme)==null||i.removeAttribute(r)};new MutationObserver(t=>{for(let{attributeName:a}of t)e(a)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},go=function(){let e=t=>{var a;let i=(a=this.media)==null?void 0:a.error;if(!(i instanceof w)){let{message:n,code:s}=i??{};i=new w(n,s)}if(!(i!=null&&i.fatal)){et(i),i.data&&et(`${i.name} data:`,i.data);return}let r=co(i);r.message&&fu(r),Te(i),i.data&&Te(`${i.name} data:`,i.data),te(this,Q,Sn).call(this,{isDialogOpen:!0})};this.addEventListener("error",e),this.media&&(this.media.errorTranslator=(t={})=>{var a,i,r;if(!(((a=this.media)==null?void 0:a.error)instanceof w))return t;let n=co((i=this.media)==null?void 0:i.error);return{player_error_code:(r=this.media)==null?void 0:r.error.code,player_error_message:n.message?String(n.message):t.player_error_message,player_error_context:n.context?String(n.context):t.player_error_context}})},yo=function(){var e,t,a,i;let r=()=>te(this,Q,Dt).call(this);(t=(e=this.media)==null?void 0:e.textTracks)==null||t.addEventListener("addtrack",r),(i=(a=this.media)==null?void 0:a.textTracks)==null||i.addEventListener("removetrack",r)},Eo=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let a,i=new WeakMap,r=()=>this.streamType===W.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(o,u,h=!1)=>{r()||Array.from(o&&o.activeCues||[]).forEach(d=>{if(!(!d.snapToLines||d.line<-5||d.line>=0&&d.line<10))if(!u||this.paused){let c=d.text.split(`
`).length,m=-3;this.streamType===W.LIVE&&(m=-2);let f=m-c;if(d.line===f&&!h)return;i.has(d)||i.set(d,d.line),d.line=f}else setTimeout(()=>{d.line=i.get(d)||"auto"},500)})},s=()=>{var o,u;n(a,(u=(o=this.mediaController)==null?void 0:o.hasAttribute(fr.USER_INACTIVE))!=null?u:!1)},l=()=>{var o,u;let h=Array.from(((u=(o=this.mediaController)==null?void 0:o.media)==null?void 0:u.textTracks)||[]).filter(d=>["subtitles","captions"].includes(d.kind)&&d.mode==="showing")[0];h!==a&&(a==null||a.removeEventListener("cuechange",s)),a=h,a==null||a.addEventListener("cuechange",s),n(a,q(this,Ct))};l(),(e=this.textTracks)==null||e.addEventListener("change",l),(t=this.textTracks)==null||t.addEventListener("addtrack",l),this.addEventListener("userinactivechange",()=>{var o,u;let h=(u=(o=this.mediaController)==null?void 0:o.hasAttribute(fr.USER_INACTIVE))!=null?u:!0;q(this,Ct)!==h&&(Ge(this,Ct,h),n(a,q(this,Ct)))})};function kt(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var To=Iv,Tu=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends Tu{}globalThis.DocumentFragment=e}var xv=class extends Tu{},Lv={get(e){},define(e,t,a){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(xv)}},Ov={customElements:Lv},Nv=typeof window>"u"||typeof globalThis.customElements>"u",Mr=Nv?Ov:globalThis;Mr.customElements.get("mux-player")||(Mr.customElements.define("mux-player",To),Mr.MuxPlayerElement=To);var ku=parseInt(Ba.version)>=19,ko={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},Mv=e=>e==null,Pv=(e,t)=>Mv(t)?!1:e in t,$v=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),Uv=(e,t)=>{if(!(!ku&&typeof t=="boolean"&&!t)){if(Pv(e,ko))return ko[e];if(typeof t<"u")return/[A-Z]/.test(e)?$v(e):e}},Bv=(e,t)=>!ku&&typeof e=="boolean"?"":e,Hv=(e={})=>{let{ref:t,...a}=e;return Object.entries(a).reduce((i,[r,n])=>{let s=Uv(r,n);if(!s)return i;let l=Bv(n);return i[s]=l,i},{})};function Ao(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Wv(...e){return t=>{let a=!1,i=e.map(r=>{let n=Ao(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<i.length;r++){let n=i[r];typeof n=="function"?n():Ao(e[r],null)}}}}function qv(...e){return Ha.useCallback(Wv(...e),e)}var Kv=Object.prototype.hasOwnProperty,Yv=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:e.some((r,n)=>t[n]===r);let a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(let r=0;r<a.length;r++)if(!Kv.call(t,a[r])||!Object.is(e[a[r]],t[a[r]]))return!1;return!0},Au=(e,t,a)=>!Yv(t,e[a]),Fv=(e,t,a)=>{e[a]=t},Vv=(e,t,a,i=Fv,r=Au)=>Ha.useEffect(()=>{let n=a==null?void 0:a.current;n&&r(n,t,e)&&i(n,t,e)},[a==null?void 0:a.current,t]),Ue=Vv,Gv=()=>{try{return"3.7.0"}catch{}return"UNKNOWN"},jv=Gv(),Zv=()=>jv,Z=(e,t,a)=>Ha.useEffect(()=>{let i=t==null?void 0:t.current;if(!i||!a)return;let r=e,n=a;return i.addEventListener(r,n),()=>{i.removeEventListener(r,n)}},[t==null?void 0:t.current,a,e]),zv=Ba.forwardRef(({children:e,...t},a)=>Ba.createElement("mux-player",{suppressHydrationWarning:!0,...Hv(t),ref:a},e)),Qv=(e,t)=>{let{onAbort:a,onCanPlay:i,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:l,onLoadedMetadata:o,onProgress:u,onDurationChange:h,onVolumeChange:d,onRateChange:c,onResize:m,onWaiting:f,onPlay:_,onPlaying:y,onTimeUpdate:b,onPause:g,onSeeking:p,onSeeked:k,onStalled:D,onSuspend:I,onEnded:P,onError:K,onCuePointChange:z,onChapterChange:B,metadata:N,tokens:pe,paused:Ne,playbackId:Me,playbackRates:se,currentTime:be,themeProps:ot,extraSourceParams:lt,castCustomData:ut,_hlsConfig:Pe,...ue}=t;return Ue("tokens",pe,e),Ue("playbackId",Me,e),Ue("playbackRates",se,e),Ue("metadata",N,e),Ue("extraSourceParams",lt,e),Ue("_hlsConfig",Pe,e),Ue("themeProps",ot,e),Ue("castCustomData",ut,e),Ue("paused",Ne,e,($e,Qe)=>{Qe!=null&&(Qe?$e.pause():$e.play())},($e,Qe,pr)=>$e.hasAttribute("autoplay")&&!$e.hasPlayed?!1:Au($e,Qe,pr)),Ue("currentTime",be,e,($e,Qe)=>{Qe!=null&&($e.currentTime=Qe)}),Z("abort",e,a),Z("canplay",e,i),Z("canplaythrough",e,r),Z("emptied",e,n),Z("loadstart",e,s),Z("loadeddata",e,l),Z("loadedmetadata",e,o),Z("progress",e,u),Z("durationchange",e,h),Z("volumechange",e,d),Z("ratechange",e,c),Z("resize",e,m),Z("waiting",e,f),Z("play",e,_),Z("playing",e,y),Z("timeupdate",e,b),Z("pause",e,g),Z("seeking",e,p),Z("seeked",e,k),Z("stalled",e,D),Z("suspend",e,I),Z("ended",e,P),Z("error",e,K),Z("cuepointchange",e,z),Z("chapterchange",e,B),[ue]},Xv=Zv(),Jv="mux-player-react",ef=Ba.forwardRef((e,t)=>{var a;let i=Ha.useRef(null),r=qv(i,t),[n]=Qv(i,e),[s]=Ha.useState((a=e.playerInitTime)!=null?a:Hn());return Ba.createElement(zv,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:Jv,playerSoftwareVersion:Xv,playerInitTime:s,...n})}),gf=ef;export{uf as MaxResolution,w as MediaError,df as MinResolution,cf as RenditionOrder,gf as default,Hn as generatePlayerInitTime,Jv as playerSoftwareName,Xv as playerSoftwareVersion};
