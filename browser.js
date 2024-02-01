// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var o=r,i=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function u(r){return Object.keys(Object(r))}var c=void 0!==Object.keys,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var y,d="function"==typeof Symbol?Symbol:void 0,h="function"==typeof d?d.toStringTag:"",b=l()?function(r){var e,t,n;if(null==r)return s.call(r);t=r[h],e=g(r,h);try{r[h]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[h]=t:delete r[h],n}:function(r){return s.call(r)};function v(r){return"[object Arguments]"===b(r)}y=function(){return v(arguments)}();var w=y,m="function"==typeof Object.defineProperty?Object.defineProperty:null,j=Object.defineProperty;function O(r){return"number"==typeof r}function S(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function _(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+S(o):S(o)+r,n&&(r="-"+r)),r}var E=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function T(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!O(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===k.call(r.specifier)?k.call(t):E.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function x(r){return"string"==typeof r}var I=Math.abs,P=String.prototype.toLowerCase,A=String.prototype.toUpperCase,V=String.prototype.replace,F=/e\+(\d)$/,N=/e-(\d)$/,$=/^(\d+)$/,C=/^(\d+)e/,B=/\.0$/,L=/\.0*e/,R=/(\..*[^0])0*e/;function G(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!O(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":I(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=V.call(t,R,"$1e"),t=V.call(t,L,"e"),t=V.call(t,B,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=V.call(t,F,"e+0$1"),t=V.call(t,N,"e-0$1"),r.alternate&&(t=V.call(t,$,"$1."),t=V.call(t,C,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===A.call(r.specifier)?A.call(t):P.call(t)}function W(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function X(r,e,t){var n=e-r.length;return n<0?r:r=t?r+W(n):W(n)+r}var Z=String.fromCharCode,M=isNaN,Y=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function H(r){var e,t,n,o,i,a,u,c,f;if(!Y(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(x(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,M(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,M(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=T(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!M(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=M(i)?String(n.arg):Z(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=G(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=X(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function q(r){var e,t,n,o;for(t=[],o=0,n=z.exec(r);n;)(e=r.slice(o,z.lastIndex-n[0].length)).length&&t.push(e),t.push(D(n)),o=z.lastIndex,n=z.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function J(r){return"string"==typeof r}function K(r){var e,t,n;if(!J(r))throw new TypeError(K("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=q(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return H.apply(null,t)}var Q,rr=Object.prototype,er=rr.toString,tr=rr.__defineGetter__,nr=rr.__defineSetter__,or=rr.__lookupGetter__,ir=rr.__lookupSetter__;Q=function(){try{return m({},"x",{}),!0}catch(r){return!1}}()?j:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===er.call(r))throw new TypeError(K("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===er.call(t))throw new TypeError(K("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(or.call(r,e)||ir.call(r,e)?(n=r.__proto__,r.__proto__=rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&tr&&tr.call(r,e,t.get),a&&nr&&nr.call(r,e,t.set),r};var ar=Q;function ur(r,e,t){ar(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function cr(r){return"string"==typeof r}var fr=String.prototype.valueOf,lr=l();function sr(r){return"object"==typeof r&&(r instanceof String||(lr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===b(r)))}function pr(r){return cr(r)||sr(r)}function gr(r){return"number"==typeof r}ur(pr,"isPrimitive",cr),ur(pr,"isObject",sr);var yr=Number,dr=yr.prototype.toString,hr=l();function br(r){return"object"==typeof r&&(r instanceof yr||(hr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function vr(r){return gr(r)||br(r)}function wr(r){return r!=r}function mr(r){return gr(r)&&wr(r)}function jr(r){return br(r)&&wr(r.valueOf())}function Or(r){return mr(r)||jr(r)}ur(vr,"isPrimitive",gr),ur(vr,"isObject",br),ur(Or,"isPrimitive",mr),ur(Or,"isObject",jr);var Sr=Number.POSITIVE_INFINITY,_r=yr.NEGATIVE_INFINITY,Er=Math.floor;function kr(r){return Er(r)===r}function Tr(r){return r<Sr&&r>_r&&kr(r)}function xr(r){return gr(r)&&Tr(r)}function Ir(r){return br(r)&&Tr(r.valueOf())}function Pr(r){return xr(r)||Ir(r)}ur(Pr,"isPrimitive",xr),ur(Pr,"isObject",Ir);var Ar,Vr=Object.prototype.propertyIsEnumerable,Fr=!Vr.call("beep","0");function Nr(r,e){var t;return null!=r&&(!(t=Vr.call(r,e))&&Fr&&pr(r)?!mr(e=+e)&&xr(e)&&e>=0&&e<r.length:t)}Ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};var $r,Cr=Ar;$r=w?v:function(r){return null!==r&&"object"==typeof r&&!Cr(r)&&"number"==typeof r.length&&kr(r.length)&&r.length>=0&&r.length<=4294967295&&g(r,"callee")&&!Nr(r,"callee")};var Br=$r,Lr=Array.prototype.slice;function Rr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(K("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);ur(Rr,"isObjectLikeArray",Gr);var Wr=Nr((function(){}),"prototype"),Xr=!Nr({toString:null},"toString");function Zr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&kr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Mr(r,e,t){var n,o;if(!Zr(r)&&!cr(r))throw new TypeError(K("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!xr(t))throw new TypeError(K("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Or(e)){for(;o<n;o++)if(Or(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Yr=/./;function Ur(r){return"boolean"==typeof r}var Hr=Boolean,zr=Boolean.prototype.toString,Dr=l();function qr(r){return"object"==typeof r&&(r instanceof Hr||(Dr?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function Jr(r){return Ur(r)||qr(r)}function Kr(){return new Function("return this;")()}ur(Jr,"isPrimitive",Ur),ur(Jr,"isObject",qr);var Qr="object"==typeof self?self:null,re="object"==typeof window?window:null,ee="object"==typeof globalThis?globalThis:null,te=function(r){if(arguments.length){if(!Ur(r))throw new TypeError(K("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Kr()}if(ee)return ee;if(Qr)return Qr;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ne=te.document&&te.document.childNodes,oe=Int8Array;function ie(){return/^\s*function\s*([^(]*)/i}var ae=/^\s*function\s*([^(]*)/i;function ue(r){var e,t,n,o;if(("Object"===(t=b(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ae.exec(n.toString()))return e[1]}return Rr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ur(ie,"REGEXP",ae);var ce="function"==typeof Yr||"object"==typeof oe||"function"==typeof ne?function(r){return ue(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?ue(r).toLowerCase():e};function fe(r){return r.constructor&&r.constructor.prototype===r}var le,se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe="undefined"==typeof window?void 0:window,ge=function(){var r;if("undefined"===ce(pe))return!1;for(r in pe)try{-1===Mr(se,r)&&g(pe,r)&&null!==pe[r]&&"object"===ce(pe[r])&&fe(pe[r])}catch(r){return!0}return!1}(),ye="undefined"!=typeof window,de=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];le=c?function(){return 2!==(u(arguments)||"").length}(1,2)?function(r){return Br(r)?u(Lr.call(r)):u(r)}:u:function(r){var e,t,n,o,i,a,u;if(o=[],Br(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!g(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(0==(n="function"==typeof r)&&!Rr(r))return o;t=Wr&&n}for(i in r)t&&"prototype"===i||!g(r,i)||o.push(String(i));if(Xr)for(e=function(r){if(!1===ye&&!ge)return fe(r);try{return fe(r)}catch(r){return!1}}(r),u=0;u<de.length;u++)a=de[u],e&&"constructor"===a||!g(r,a)||o.push(String(a));return o};var he,be=le;he=i?function(r){return a(t(r))}:function(r){return be(t(r))};var ve,we,me=he,je=Object.getPrototypeOf;we=Object.getPrototypeOf,ve="function"===ce(we)?je:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===b(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Oe=ve;function Se(r){return null==r?null:(r=t(r),Oe(r))}function _e(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}return function(r){var e,n,i,a;if(null==r)return[];n=t(r),e=[];do{for(i=me(n),a=0;a<i.length;a++)!1===_e(e,i[a])&&e.push(i[a]);for(i=o(n),a=0;a<i.length;a++)!1===_e(e,i[a])&&e.push(i[a]);n=Se(n)}while(n);return e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).propertiesIn=e();
//# sourceMappingURL=browser.js.map
