(()=>{var je=e=>{mapboxgl.accessToken="pk.eyJ1IjoiZGV2cml0aWsiLCJhIjoiY2xpbXUybmg2MHVzbDNobW0xa2lsdTFndSJ9.V2iTPWHPHPK021uRJxqbPA";let t=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",scrollZoom:!1}),r=new mapboxgl.LngLatBounds;e.forEach(o=>{let n=document.createElement("div");n.className="marker",new mapboxgl.Marker({element:n,anchor:"bottom"}).setLngLat(o.coordinates).addTo(t),new mapboxgl.Popup({offset:30,closeOnClick:!1,focusAfterOpen:!1}).setLngLat(o.coordinates).setHTML(`<p>Day ${o.day}: ${o.description}</p>`).addTo(t),r.extend(o.coordinates)}),t.fitBounds(r,{padding:{top:200,bottom:150,left:100,right:100}})};function v(e,t){return function(){return e.apply(t,arguments)}}var{toString:vt}=Object.prototype,{getPrototypeOf:ge}=Object,Q=(e=>t=>{let r=vt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>Q(t)===e),Z=e=>t=>typeof t===e,{isArray:D}=Array,M=Z("undefined");function Mt(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var ve=A("ArrayBuffer");function qt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ve(e.buffer),t}var Jt=Z("string"),R=Z("function"),Me=Z("number"),ee=e=>e!==null&&typeof e=="object",Vt=e=>e===!0||e===!1,Y=e=>{if(Q(e)!=="object")return!1;let t=ge(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},zt=A("Date"),Wt=A("File"),Kt=A("Blob"),$t=A("FileList"),Gt=e=>ee(e)&&R(e.pipe),Xt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=Q(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Yt=A("URLSearchParams"),Qt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let o,n;if(typeof e!="object"&&(e=[e]),D(e))for(o=0,n=e.length;o<n;o++)t.call(null,e[o],o,e);else{let s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length,u;for(o=0;o<i;o++)u=s[o],t.call(null,e[u],u,e)}}function qe(e,t){t=t.toLowerCase();let r=Object.keys(e),o=r.length,n;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}var Je=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ve=e=>!M(e)&&e!==Je;function xe(){let{caseless:e}=Ve(this)&&this||{},t={},r=(o,n)=>{let s=e&&qe(t,n)||n;Y(t[s])&&Y(o)?t[s]=xe(t[s],o):Y(o)?t[s]=xe({},o):D(o)?t[s]=o.slice():t[s]=o};for(let o=0,n=arguments.length;o<n;o++)arguments[o]&&q(arguments[o],r);return t}var Zt=(e,t,r,{allOwnKeys:o}={})=>(q(t,(n,s)=>{r&&R(n)?e[s]=v(n,r):e[s]=n},{allOwnKeys:o}),e),er=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),tr=(e,t,r,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},rr=(e,t,r,o)=>{let n,s,i,u={};if(t=t||{},e==null)return t;do{for(n=Object.getOwnPropertyNames(e),s=n.length;s-- >0;)i=n[s],(!o||o(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=r!==!1&&ge(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},or=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let o=e.indexOf(t,r);return o!==-1&&o===r},nr=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Me(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},sr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ge(Uint8Array)),ir=(e,t)=>{let o=(e&&e[Symbol.iterator]).call(e),n;for(;(n=o.next())&&!n.done;){let s=n.value;t.call(e,s[0],s[1])}},ar=(e,t)=>{let r,o=[];for(;(r=e.exec(t))!==null;)o.push(r);return o},cr=A("HTMLFormElement"),ur=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,n){return o.toUpperCase()+n}),He=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),lr=A("RegExp"),ze=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),o={};q(r,(n,s)=>{t(n,s,e)!==!1&&(o[s]=n)}),Object.defineProperties(e,o)},fr=e=>{ze(e,(t,r)=>{if(R(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let o=e[r];if(R(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},mr=(e,t)=>{let r={},o=n=>{n.forEach(s=>{r[s]=!0})};return D(e)?o(e):o(String(e).split(t)),r},dr=()=>{},pr=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ee="abcdefghijklmnopqrstuvwxyz",Ie="0123456789",We={DIGIT:Ie,ALPHA:Ee,ALPHA_DIGIT:Ee+Ee.toUpperCase()+Ie},hr=(e=16,t=We.ALPHA_DIGIT)=>{let r="",{length:o}=t;for(;e--;)r+=t[Math.random()*o|0];return r};function yr(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var br=e=>{let t=new Array(10),r=(o,n)=>{if(ee(o)){if(t.indexOf(o)>=0)return;if(!("toJSON"in o)){t[n]=o;let s=D(o)?[]:{};return q(o,(i,u)=>{let m=r(i,n+1);!M(m)&&(s[u]=m)}),t[n]=void 0,s}}return o};return r(e,0)},wr=A("AsyncFunction"),Er=e=>e&&(ee(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:D,isArrayBuffer:ve,isBuffer:Mt,isFormData:Xt,isArrayBufferView:qt,isString:Jt,isNumber:Me,isBoolean:Vt,isObject:ee,isPlainObject:Y,isUndefined:M,isDate:zt,isFile:Wt,isBlob:Kt,isRegExp:lr,isFunction:R,isStream:Gt,isURLSearchParams:Yt,isTypedArray:sr,isFileList:$t,forEach:q,merge:xe,extend:Zt,trim:Qt,stripBOM:er,inherits:tr,toFlatObject:rr,kindOf:Q,kindOfTest:A,endsWith:or,toArray:nr,forEachEntry:ir,matchAll:ar,isHTMLForm:cr,hasOwnProperty:He,hasOwnProp:He,reduceDescriptors:ze,freezeMethods:fr,toObjectSet:mr,toCamelCase:ur,noop:dr,toFiniteNumber:pr,findKey:qe,global:Je,isContextDefined:Ve,ALPHABET:We,generateString:hr,isSpecCompliantForm:yr,toJSONObject:br,isAsyncFn:wr,isThenable:Er};function _(e,t,r,o,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),o&&(this.request=o),n&&(this.response=n)}a.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ke=_.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$e[e]={value:e}});Object.defineProperties(_,$e);Object.defineProperty(Ke,"isAxiosError",{value:!0});_.from=(e,t,r,o,n,s)=>{let i=Object.create(Ke);return a.toFlatObject(e,i,function(m){return m!==Error.prototype},u=>u!=="isAxiosError"),_.call(i,e.message,t,r,o,n),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var p=_;var te=null;function Se(e){return a.isPlainObject(e)||a.isArray(e)}function Xe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ge(e,t,r){return e?e.concat(t).map(function(n,s){return n=Xe(n),!r&&s?"["+n+"]":n}).join(r?".":""):t}function xr(e){return a.isArray(e)&&!e.some(Se)}var gr=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Sr(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(te||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,C){return!a.isUndefined(C[h])});let o=r.metaTokens,n=r.visitor||l,s=r.dots,i=r.indexes,m=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(n))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!m&&a.isBlob(f))throw new p("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?m&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,C){let O=f;if(f&&!C&&typeof f=="object"){if(a.endsWith(h,"{}"))h=o?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&xr(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(O=a.toArray(f)))return h=Xe(h),O.forEach(function(X,It){!(a.isUndefined(X)||X===null)&&t.append(i===!0?Ge([h],It,s):i===null?h:h+"[]",c(X))}),!1}return Se(f)?!0:(t.append(Ge(C,h,s),c(f)),!1)}let d=[],w=Object.assign(gr,{defaultVisitor:l,convertValue:c,isVisitable:Se});function y(f,h){if(!a.isUndefined(f)){if(d.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(f),a.forEach(f,function(O,k){(!(a.isUndefined(O)||O===null)&&n.call(t,O,a.isString(k)?k.trim():k,h,w))===!0&&y(O,h?h.concat(k):[k])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}var L=Sr;function Ye(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function Qe(e,t){this._pairs=[],e&&L(e,this,t)}var Ze=Qe.prototype;Ze.append=function(t,r){this._pairs.push([t,r])};Ze.toString=function(t){let r=t?function(o){return t.call(this,o,Ye)}:Ye;return this._pairs.map(function(n){return r(n[0])+"="+r(n[1])},"").join("&")};var re=Qe;function Rr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function J(e,t,r){if(!t)return e;let o=r&&r.encode||Rr,n=r&&r.serialize,s;if(n?s=n(t,r):s=a.isURLSearchParams(t)?t.toString():new re(t,r).toString(o),s){let i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}var Re=class{constructor(){this.handlers=[]}use(t,r,o){return this.handlers.push({fulfilled:t,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(o){o!==null&&t(o)})}},Oe=Re;var oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var et=typeof URLSearchParams<"u"?URLSearchParams:re;var tt=typeof FormData<"u"?FormData:null;var rt=typeof Blob<"u"?Blob:null;var Or=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ar=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),x={isBrowser:!0,classes:{URLSearchParams:et,FormData:tt,Blob:rt},isStandardBrowserEnv:Or,isStandardBrowserWebWorkerEnv:Ar,protocols:["http","https","file","blob","url","data"]};function Ae(e,t){return L(e,new x.classes.URLSearchParams,Object.assign({visitor:function(r,o,n,s){return x.isNode&&a.isBuffer(r)?(this.append(o,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Tr(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Pr(e){let t={},r=Object.keys(e),o,n=r.length,s;for(o=0;o<n;o++)s=r[o],t[s]=e[s];return t}function Cr(e){function t(r,o,n,s){let i=r[s++],u=Number.isFinite(+i),m=s>=r.length;return i=!i&&a.isArray(n)?n.length:i,m?(a.hasOwnProp(n,i)?n[i]=[n[i],o]:n[i]=o,!u):((!n[i]||!a.isObject(n[i]))&&(n[i]=[]),t(r,o,n[i],s)&&a.isArray(n[i])&&(n[i]=Pr(n[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(o,n)=>{t(Tr(o),n,r,0)}),r}return null}var ne=Cr;var Nr={"Content-Type":void 0};function Lr(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(e)}var se={transitional:oe,adapter:["xhr","http"],transformRequest:[function(t,r){let o=r.getContentType()||"",n=o.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return n&&n?JSON.stringify(ne(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(s){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Ae(t,this.formSerializer).toString();if((u=a.isFileList(t))||o.indexOf("multipart/form-data")>-1){let m=this.env&&this.env.FormData;return L(u?{"files[]":t}:t,m&&new m,this.formSerializer)}}return s||n?(r.setContentType("application/json",!1),Lr(t)):t}],transformResponse:[function(t){let r=this.transitional||se.transitional,o=r&&r.forcedJSONParsing,n=this.responseType==="json";if(t&&a.isString(t)&&(o&&!this.responseType||n)){let i=!(r&&r.silentJSONParsing)&&n;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?p.from(u,p.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){se.headers[t]={}});a.forEach(["post","put","patch"],function(t){se.headers[t]=a.merge(Nr)});var U=se;var Fr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ot=e=>{let t={},r,o,n;return e&&e.split(`
`).forEach(function(i){n=i.indexOf(":"),r=i.substring(0,n).trim().toLowerCase(),o=i.substring(n+1).trim(),!(!r||t[r]&&Fr[r])&&(r==="set-cookie"?t[r]?t[r].push(o):t[r]=[o]:t[r]=t[r]?t[r]+", "+o:o)}),t};var nt=Symbol("internals");function V(e){return e&&String(e).trim().toLowerCase()}function ie(e){return e===!1||e==null?e:a.isArray(e)?e.map(ie):String(e)}function Br(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,o;for(;o=r.exec(e);)t[o[1]]=o[2];return t}var kr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Te(e,t,r,o,n){if(a.isFunction(o))return o.call(this,t,r);if(n&&(t=r),!!a.isString(t)){if(a.isString(o))return t.indexOf(o)!==-1;if(a.isRegExp(o))return o.test(t)}}function Dr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,o)=>r.toUpperCase()+o)}function _r(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+r,{value:function(n,s,i){return this[o].call(this,t,n,s,i)},configurable:!0})})}var j=class{constructor(t){t&&this.set(t)}set(t,r,o){let n=this;function s(u,m,c){let l=V(m);if(!l)throw new Error("header name must be a non-empty string");let d=a.findKey(n,l);(!d||n[d]===void 0||c===!0||c===void 0&&n[d]!==!1)&&(n[d||m]=ie(u))}let i=(u,m)=>a.forEach(u,(c,l)=>s(c,l,m));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!kr(t)?i(ot(t),r):t!=null&&s(r,t,o),this}get(t,r){if(t=V(t),t){let o=a.findKey(this,t);if(o){let n=this[o];if(!r)return n;if(r===!0)return Br(n);if(a.isFunction(r))return r.call(this,n,o);if(a.isRegExp(r))return r.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=V(t),t){let o=a.findKey(this,t);return!!(o&&this[o]!==void 0&&(!r||Te(this,this[o],o,r)))}return!1}delete(t,r){let o=this,n=!1;function s(i){if(i=V(i),i){let u=a.findKey(o,i);u&&(!r||Te(o,o[u],u,r))&&(delete o[u],n=!0)}}return a.isArray(t)?t.forEach(s):s(t),n}clear(t){let r=Object.keys(this),o=r.length,n=!1;for(;o--;){let s=r[o];(!t||Te(this,this[s],s,t,!0))&&(delete this[s],n=!0)}return n}normalize(t){let r=this,o={};return a.forEach(this,(n,s)=>{let i=a.findKey(o,s);if(i){r[i]=ie(n),delete r[s];return}let u=t?Dr(s):String(s).trim();u!==s&&delete r[s],r[u]=ie(n),o[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(o,n)=>{o!=null&&o!==!1&&(r[n]=t&&a.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let o=new this(t);return r.forEach(n=>o.set(n)),o}static accessor(t){let o=(this[nt]=this[nt]={accessors:{}}).accessors,n=this.prototype;function s(i){let u=V(i);o[u]||(_r(n,i),o[u]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}};j.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(j.prototype);a.freezeMethods(j);var g=j;function z(e,t){let r=this||U,o=t||r,n=g.from(o.headers),s=o.data;return a.forEach(e,function(u){s=u.call(r,s,n.normalize(),t?t.status:void 0)}),n.normalize(),s}function W(e){return!!(e&&e.__CANCEL__)}function st(e,t,r){p.call(this,e??"canceled",p.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(st,p,{__CANCEL__:!0});var F=st;function Pe(e,t,r){let o=r.config.validateStatus;!r.status||!o||o(r.status)?e(r):t(new p("Request failed with status code "+r.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var it=x.isStandardBrowserEnv?function(){return{write:function(r,o,n,s,i,u){let m=[];m.push(r+"="+encodeURIComponent(o)),a.isNumber(n)&&m.push("expires="+new Date(n).toGMTString()),a.isString(s)&&m.push("path="+s),a.isString(i)&&m.push("domain="+i),u===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(r){let o=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ce(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ne(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function K(e,t){return e&&!Ce(t)?Ne(e,t):t}var at=x.isStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),o;function n(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return o=n(window.location.href),function(i){let u=a.isString(i)?n(i):i;return u.protocol===o.protocol&&u.host===o.host}}():function(){return function(){return!0}}();function Le(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ur(e,t){e=e||10;let r=new Array(e),o=new Array(e),n=0,s=0,i;return t=t!==void 0?t:1e3,function(m){let c=Date.now(),l=o[s];i||(i=c),r[n]=m,o[n]=c;let d=s,w=0;for(;d!==n;)w+=r[d++],d=d%e;if(n=(n+1)%e,n===s&&(s=(s+1)%e),c-i<t)return;let y=l&&c-l;return y?Math.round(w*1e3/y):void 0}}var ct=Ur;function ut(e,t){let r=0,o=ct(50,250);return n=>{let s=n.loaded,i=n.lengthComputable?n.total:void 0,u=s-r,m=o(u),c=s<=i;r=s;let l={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:m||void 0,estimated:m&&i&&c?(i-s)/m:void 0,event:n};l[t?"download":"upload"]=!0,e(l)}}var jr=typeof XMLHttpRequest<"u",lt=jr&&function(e){return new Promise(function(r,o){let n=e.data,s=g.from(e.headers).normalize(),i=e.responseType,u;function m(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(n)&&(x.isStandardBrowserEnv||x.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){let y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}let l=K(e.baseURL,e.url);c.open(e.method.toUpperCase(),J(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function d(){if(!c)return;let y=g.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Pe(function(O){r(O),m()},function(O){o(O),m()},h),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(o(new p("Request aborted",p.ECONNABORTED,e,c)),c=null)},c.onerror=function(){o(new p("Network Error",p.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",h=e.transitional||oe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),o(new p(f,h.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,e,c)),c=null},x.isStandardBrowserEnv){let y=(e.withCredentials||at(l))&&e.xsrfCookieName&&it.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}n===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ut(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ut(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{c&&(o(!y||y.type?new F(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));let w=Le(l);if(w&&x.protocols.indexOf(w)===-1){o(new p("Unsupported protocol "+w+":",p.ERR_BAD_REQUEST,e));return}c.send(n||null)})};var ae={http:te,xhr:lt};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var ft={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,o;for(let n=0;n<t&&(r=e[n],!(o=a.isString(r)?ae[r.toLowerCase()]:r));n++);if(!o)throw o===!1?new p(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(ae,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!a.isFunction(o))throw new TypeError("adapter is not a function");return o},adapters:ae};function Fe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function ce(e){return Fe(e),e.headers=g.from(e.headers),e.data=z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ft.getAdapter(e.adapter||U.adapter)(e).then(function(o){return Fe(e),o.data=z.call(e,e.transformResponse,o),o.headers=g.from(o.headers),o},function(o){return W(o)||(Fe(e),o&&o.response&&(o.response.data=z.call(e,e.transformResponse,o.response),o.response.headers=g.from(o.response.headers))),Promise.reject(o)})}var mt=e=>e instanceof g?e.toJSON():e;function N(e,t){t=t||{};let r={};function o(c,l,d){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:d},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function n(c,l,d){if(a.isUndefined(l)){if(!a.isUndefined(c))return o(void 0,c,d)}else return o(c,l,d)}function s(c,l){if(!a.isUndefined(l))return o(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return o(void 0,c)}else return o(void 0,l)}function u(c,l,d){if(d in t)return o(c,l);if(d in e)return o(void 0,c)}let m={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>n(mt(c),mt(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){let d=m[l]||n,w=d(e[l],t[l],l);a.isUndefined(w)&&d!==u||(r[l]=w)}),r}var ue="1.4.0";var Be={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Be[e]=function(o){return typeof o===e||"a"+(t<1?"n ":" ")+e}});var dt={};Be.transitional=function(t,r,o){function n(s,i){return"[Axios v"+ue+"] Transitional option '"+s+"'"+i+(o?". "+o:"")}return(s,i,u)=>{if(t===!1)throw new p(n(i," has been removed"+(r?" in "+r:"")),p.ERR_DEPRECATED);return r&&!dt[i]&&(dt[i]=!0,console.warn(n(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,u):!0}};function Hr(e,t,r){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);let o=Object.keys(e),n=o.length;for(;n-- >0;){let s=o[n],i=t[s];if(i){let u=e[s],m=u===void 0||i(u,s,e);if(m!==!0)throw new p("option "+s+" must be "+m,p.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new p("Unknown option "+s,p.ERR_BAD_OPTION)}}var le={assertOptions:Hr,validators:Be};var B=le.validators,H=class{constructor(t){this.defaults=t,this.interceptors={request:new Oe,response:new Oe}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=N(this.defaults,r);let{transitional:o,paramsSerializer:n,headers:s}=r;o!==void 0&&le.assertOptions(o,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean)},!1),n!=null&&(a.isFunction(n)?r.paramsSerializer={serialize:n}:le.assertOptions(n,{encode:B.function,serialize:B.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[r.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),r.headers=g.concat(i,s);let u=[],m=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(m=m&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});let c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,d=0,w;if(!m){let f=[ce.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),w=f.length,l=Promise.resolve(r);d<w;)l=l.then(f[d++],f[d++]);return l}w=u.length;let y=r;for(d=0;d<w;){let f=u[d++],h=u[d++];try{y=f(y)}catch(C){h.call(this,C);break}}try{l=ce.call(this,y)}catch(f){return Promise.reject(f)}for(d=0,w=c.length;d<w;)l=l.then(c[d++],c[d++]);return l}getUri(t){t=N(this.defaults,t);let r=K(t.baseURL,t.url);return J(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(r,o){return this.request(N(o||{},{method:t,url:r,data:(o||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(o){return function(s,i,u){return this.request(N(u||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}H.prototype[t]=r(),H.prototype[t+"Form"]=r(!0)});var $=H;var G=class{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});let o=this;this.promise.then(n=>{if(!o._listeners)return;let s=o._listeners.length;for(;s-- >0;)o._listeners[s](n);o._listeners=null}),this.promise.then=n=>{let s,i=new Promise(u=>{o.subscribe(u),s=u}).then(n);return i.cancel=function(){o.unsubscribe(s)},i},t(function(s,i,u){o.reason||(o.reason=new F(s,i,u),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new G(function(n){t=n}),cancel:t}}},pt=G;function ke(e){return function(r){return e.apply(null,r)}}function De(e){return a.isObject(e)&&e.isAxiosError===!0}var _e={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_e).forEach(([e,t])=>{_e[t]=e});var ht=_e;function yt(e){let t=new $(e),r=v($.prototype.request,t);return a.extend(r,$.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(n){return yt(N(e,n))},r}var b=yt(U);b.Axios=$;b.CanceledError=F;b.CancelToken=pt;b.isCancel=W;b.VERSION=ue;b.toFormData=L;b.AxiosError=p;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=ke;b.isAxiosError=De;b.mergeConfig=N;b.AxiosHeaders=g;b.formToJSON=e=>ne(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=ht;b.default=b;var T=b;var{Axios:xs,AxiosError:gs,CanceledError:Ss,isCancel:Rs,CancelToken:Os,VERSION:As,all:Ts,Cancel:Ps,isAxiosError:Cs,spread:Ns,toFormData:Ls,AxiosHeaders:Fs,HttpStatusCode:Bs,formToJSON:ks,mergeConfig:Ds}=T;var bt=()=>{let e=document.querySelector(".alert");e&&e.parentElement.removeChild(e)},S=(e,t,r=5)=>{bt();let o=`<div class="alert alert--${e}">${t}</div>`;document.querySelector("body").insertAdjacentHTML("afterbegin",o),window.setTimeout(bt,r*1e3)};var E={origin:"https://api.emailjs.com",blockHeadless:!1};var I=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{};var wt=(e,t="https://api.emailjs.com")=>{if(!e)return;let r=I(e);E.publicKey=r.publicKey,E.blockHeadless=r.blockHeadless,E.blockList=r.blockList,E.limitRate=r.limitRate,E.origin=r.origin||t};var P=class{constructor(t=0,r="Network Error"){this.status=t,this.text=r}};var fe=async(e,t,r={})=>{let o=await fetch(E.origin+e,{method:"POST",headers:r,body:t}),n=await o.text(),s=new P(o.status,n);if(o.ok)return s;throw s};var me=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"};var Et=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"};var de=e=>e.webdriver||!e.languages||e.languages.length===0;var pe=()=>new P(451,"Unavailable For Headless Browser");var xt=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"};var Ir=e=>!e.list?.length||!e.watchVariable,vr=(e,t)=>e instanceof FormData?e.get(t):e[t],he=(e,t)=>{if(Ir(e))return!1;xt(e.list,e.watchVariable);let r=vr(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)};var ye=()=>new P(403,"Forbidden");var gt=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"};var Mr=(e,t,r)=>{let o=Number(r.getItem(e)||0);return t-Date.now()+o},St=(e,t,r)=>{setTimeout(()=>{r.removeItem(e)},t)},be=(e,t,r)=>{if(!r.throttle)return!1;gt(r.throttle,r.id);let o=r.id||t,n=Mr(o,r.throttle,e);return n>0?(St(o,n,e),!0):(e.setItem(o,Date.now().toString()),St(o,r.throttle,e),!1)};var we=()=>new P(429,"Too Many Requests");var Rt=(e,t,r,o)=>{let n=I(o),s=n.publicKey||E.publicKey,i=n.blockHeadless||E.blockHeadless,u={...E.blockList,...n.blockList},m={...E.limitRate,...n.limitRate};return i&&de(navigator)?Promise.reject(pe()):(me(s,e,t),Et(r),r&&he(u,r)?Promise.reject(ye()):be(localStorage,location.pathname,m)?Promise.reject(we()):fe("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:s,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))};var Ot=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"};var qr=e=>typeof e=="string"?document.querySelector(e):e,At=(e,t,r,o)=>{let n=I(o),s=n.publicKey||E.publicKey,i=n.blockHeadless||E.blockHeadless,u={...E.blockList,...n.blockList},m={...E.limitRate,...n.limitRate};if(i&&de(navigator))return Promise.reject(pe());let c=qr(r);me(s,e,t),Ot(c);let l=new FormData(c);return he(u,l)?Promise.reject(ye()):be(localStorage,location.pathname,m)?Promise.reject(we()):(l.append("lib_version","4.1.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",s),fe("/api/v1.0/email/send-form",l))};var Tt={init:wt,send:Rt,sendForm:At};var Pt=async(e,t)=>{try{(await T({method:"POST",url:"/api/v1/users/login",data:{email:e,password:t}})).data.status==="success"&&(S("success","Logged in successfully!"),window.setTimeout(()=>{location.assign("/")},1500))}catch(r){S("error",r.response.data.message)}},Ct=async(e,t,r,o)=>{try{(await T({method:"POST",url:"/api/v1/users/signup",data:{name:e,email:t,password:r,passwordConfirm:o}})).data.status==="success"&&(S("success","Account created successfully!"),window.setTimeout(()=>{location.assign("/")},1500),console.log("Executing and sending email"),Tt.send("service_mt41ue5","template_537ngt9",{first_name:"Muhammad Umer",reply_to:"umernisar3854@gmail.com",to_mail:"umernisar3854@gmail.com"},"kPtOLxwW6GAwy5lJ-").then(s=>{S(s.text)},s=>{S(s.text)}))}catch(n){S("error",n.response.data.message)}},Nt=async()=>{try{(await T({method:"GET",url:"/api/v1/users/logout"})).data.status==="success"&&location.assign("/login")}catch{S("error","Error logging out! Try again.")}};var Ue=async(e,t)=>{try{(await T({method:"PATCH",url:t==="password"?"/api/v1/users/updateMyPassword":"/api/v1/users/updateMe",data:e})).data.status==="success"&&S("success",`${t.toUpperCase()} updated successfully!`)}catch(r){S("error",r.response.data.message)}};var Ki=Stripe("pk_test_51NJCPDSJto3yYpNWpRGuE7Se7jfLa0G10MKeWh8hPWAzBWpP1tCa3CJIHbTdQ9MeBYNx60CemDFdHmJ1goU9sQcC00M4w3GJ1Y"),Lt=async e=>{try{let r=(await T(`/api/v1/bookings/checkout-session/${e}`)).data.session.url;window.location.assign(r)}catch(t){S("error",t)}};var Ft=document.getElementById("map"),Bt=document.querySelector(".form--login"),kt=document.querySelector(".form--signup"),Dt=document.querySelector(".nav__el--logout"),_t=document.querySelector(".form-user-data"),Ut=document.querySelector(".form-user-password"),jt=document.getElementById("book-tour");if(Ft){let e=JSON.parse(Ft.dataset.locations);je(e)}Bt&&Bt.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("email").value,r=document.getElementById("password").value;Pt(t,r)});kt&&kt.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("name").value,r=document.getElementById("email").value,o=document.getElementById("password").value,n=document.getElementById("password-confirm").value;Ct(t,r,o,n)});Dt&&Dt.addEventListener("click",Nt);_t&&_t.addEventListener("submit",e=>{e.preventDefault();let t=new FormData;t.append("name",document.getElementById("name").value),t.append("email",document.getElementById("email").value),t.append("photo",document.getElementById("photo").files[0]),Ue(t,"data")});Ut&&Ut.addEventListener("submit",async e=>{e.preventDefault(),document.querySelector(".btn--save-password").textContent="Updating...";let t=document.getElementById("password-current").value,r=document.getElementById("password").value,o=document.getElementById("password-confirm").value;await Ue({passwordCurrent:t,password:r,passwordConfirm:o},"password"),document.querySelector(".btn--save-password").textContent="Save password",document.getElementById("password-current").value="",document.getElementById("password").value="",document.getElementById("password-confirm").value=""});jt&&jt.addEventListener("click",e=>{e.target.textContent="Processing...";let{tourId:t}=e.target.dataset;Lt(t)});var Ht=document.querySelector("body").dataset.alert;Ht&&S("success",Ht,10);})();
