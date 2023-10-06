// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).propertiesIn=e()}(this,(function(){"use strict";var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var i=r,o=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function u(r){return Object.keys(Object(r))}var c=void 0!==Object.keys;var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var y="function"==typeof Symbol?Symbol:void 0,b="function"==typeof y?y.toStringTag:"";var h,d=l()?function(r){var e,t,n;if(null==r)return s.call(r);t=r[b],e=g(r,b);try{r[b]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[b]=t:delete r[b],n}:function(r){return s.call(r)};function v(r){return"[object Arguments]"===d(r)}h=function(){return v(arguments)}();var w=h,m="function"==typeof Object.defineProperty?Object.defineProperty:null;var j=Object.defineProperty;function O(r){return"number"==typeof r}function S(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function _(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+S(i):S(i)+r,n&&(r="-"+r)),r}var E=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function T(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!O(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===k.call(r.specifier)?k.call(t):E.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function x(r){return"string"==typeof r}var I=Math.abs,P=String.prototype.toLowerCase,A=String.prototype.toUpperCase,V=String.prototype.replace,F=/e\+(\d)$/,N=/e-(\d)$/,$=/^(\d+)$/,C=/^(\d+)e/,B=/\.0$/,L=/\.0*e/,R=/(\..*[^0])0*e/;function G(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!O(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":I(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=V.call(t,R,"$1e"),t=V.call(t,L,"e"),t=V.call(t,B,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=V.call(t,F,"e+0$1"),t=V.call(t,N,"e-0$1"),r.alternate&&(t=V.call(t,$,"$1."),t=V.call(t,C,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===A.call(r.specifier)?A.call(t):P.call(t)}function W(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function X(r,e,t){var n=e-r.length;return n<0?r:r=t?r+W(n):W(n)+r}var Z=String.fromCharCode,M=isNaN,Y=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function H(r){var e,t,n,i,o,a,u,c,f;if(!Y(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(x(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,M(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,M(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=T(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!M(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=M(o)?String(n.arg):Z(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=G(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=X(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function q(r){var e,t,n,i;for(t=[],i=0,n=z.exec(r);n;)(e=r.slice(i,z.lastIndex-n[0].length)).length&&t.push(e),t.push(D(n)),i=z.lastIndex,n=z.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function J(r){return"string"==typeof r}function K(r){var e,t,n;if(!J(r))throw new TypeError(K("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=q(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return H.apply(null,t)}var Q,rr=Object.prototype,er=rr.toString,tr=rr.__defineGetter__,nr=rr.__defineSetter__,ir=rr.__lookupGetter__,or=rr.__lookupSetter__;Q=function(){try{return m({},"x",{}),!0}catch(r){return!1}}()?j:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===er.call(r))throw new TypeError(K("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===er.call(t))throw new TypeError(K("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ir.call(r,e)||or.call(r,e)?(n=r.__proto__,r.__proto__=rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&tr&&tr.call(r,e,t.get),a&&nr&&nr.call(r,e,t.set),r};var ar=Q;function ur(r,e,t){ar(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function cr(r){return"string"==typeof r}var fr=String.prototype.valueOf;var lr=l();function sr(r){return"object"==typeof r&&(r instanceof String||(lr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===d(r)))}function pr(r){return cr(r)||sr(r)}function gr(r){return"number"==typeof r}ur(pr,"isPrimitive",cr),ur(pr,"isObject",sr);var yr=Number,br=yr.prototype.toString;var hr=l();function dr(r){return"object"==typeof r&&(r instanceof yr||(hr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===d(r)))}function vr(r){return gr(r)||dr(r)}function wr(r){return r!=r}function mr(r){return gr(r)&&wr(r)}function jr(r){return dr(r)&&wr(r.valueOf())}function Or(r){return mr(r)||jr(r)}ur(vr,"isPrimitive",gr),ur(vr,"isObject",dr),ur(Or,"isPrimitive",mr),ur(Or,"isObject",jr);var Sr=Number.POSITIVE_INFINITY,_r=yr.NEGATIVE_INFINITY,Er=Math.floor;function kr(r){return Er(r)===r}function Tr(r){return r<Sr&&r>_r&&kr(r)}function xr(r){return gr(r)&&Tr(r)}function Ir(r){return dr(r)&&Tr(r.valueOf())}function Pr(r){return xr(r)||Ir(r)}ur(Pr,"isPrimitive",xr),ur(Pr,"isObject",Ir);var Ar=Object.prototype.propertyIsEnumerable;var Vr,Fr=!Ar.call("beep","0");function Nr(r,e){var t;return null!=r&&(!(t=Ar.call(r,e))&&Fr&&pr(r)?!mr(e=+e)&&xr(e)&&e>=0&&e<r.length:t)}Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===d(r)};var $r,Cr=Vr;$r=w?v:function(r){return null!==r&&"object"==typeof r&&!Cr(r)&&"number"==typeof r.length&&kr(r.length)&&r.length>=0&&r.length<=4294967295&&g(r,"callee")&&!Nr(r,"callee")};var Br=$r,Lr=Array.prototype.slice;function Rr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(K("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);ur(Rr,"isObjectLikeArray",Gr);var Wr=Nr((function(){}),"prototype"),Xr=!Nr({toString:null},"toString");function Zr(r){return r!=r}function Mr(r){return gr(r)&&Zr(r)}function Yr(r){return dr(r)&&Zr(r.valueOf())}function Ur(r){return Mr(r)||Yr(r)}ur(Ur,"isPrimitive",Mr),ur(Ur,"isObject",Yr);function Hr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&kr(r.length)&&r.length>=0&&r.length<=9007199254740991}function zr(r){return"string"==typeof r}var Dr=String.prototype.valueOf;var qr=l();function Jr(r){return"object"==typeof r&&(r instanceof String||(qr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===d(r)))}function Kr(r){return zr(r)||Jr(r)}function Qr(r,e,t){var n,i;if(!Hr(r)&&!zr(r))throw new TypeError(K("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!xr(t))throw new TypeError(K("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Ur(e)){for(;i<n;i++)if(Ur(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}ur(Kr,"isPrimitive",zr),ur(Kr,"isObject",Jr);var re=/./;function ee(r){return"boolean"==typeof r}var te=Boolean,ne=Boolean.prototype.toString;var ie=l();function oe(r){return"object"==typeof r&&(r instanceof te||(ie?function(r){try{return ne.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===d(r)))}function ae(r){return ee(r)||oe(r)}function ue(){return new Function("return this;")()}ur(ae,"isPrimitive",ee),ur(ae,"isObject",oe);var ce="object"==typeof self?self:null,fe="object"==typeof window?window:null,le="object"==typeof global?global:null,se="object"==typeof globalThis?globalThis:null;var pe=function(r){if(arguments.length){if(!ee(r))throw new TypeError(K("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ue()}if(se)return se;if(ce)return ce;if(fe)return fe;if(le)return le;throw new Error("unexpected error. Unable to resolve global object.")}(),ge=pe.document&&pe.document.childNodes,ye=Int8Array;function be(){return/^\s*function\s*([^(]*)/i}var he=/^\s*function\s*([^(]*)/i;function de(r){var e,t,n,i;if(("Object"===(t=d(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=he.exec(n.toString()))return e[1]}return Rr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ur(be,"REGEXP",he);var ve="function"==typeof re||"object"==typeof ye||"function"==typeof ge?function(r){return de(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?de(r).toLowerCase():e};function we(r){return r.constructor&&r.constructor.prototype===r}var me=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],je="undefined"==typeof window?void 0:window;var Oe=function(){var r;if("undefined"===ve(je))return!1;for(r in je)try{-1===Qr(me,r)&&g(je,r)&&null!==je[r]&&"object"===ve(je[r])&&we(je[r])}catch(r){return!0}return!1}(),Se="undefined"!=typeof window;var _e,Ee=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];_e=c?function(){return 2!==(u(arguments)||"").length}(1,2)?function(r){return Br(r)?u(Lr.call(r)):u(r)}:u:function(r){var e,t,n,i,o,a,u;if(i=[],Br(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!g(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Rr(r))return i;t=Wr&&n}for(o in r)t&&"prototype"===o||!g(r,o)||i.push(String(o));if(Xr)for(e=function(r){if(!1===Se&&!Oe)return we(r);try{return we(r)}catch(r){return!1}}(r),u=0;u<Ee.length;u++)a=Ee[u],e&&"constructor"===a||!g(r,a)||i.push(String(a));return i};var ke,Te=_e;ke=o?function(r){return a(t(r))}:function(r){return Te(t(r))};var xe=ke;var Ie,Pe,Ae=Object.getPrototypeOf;Pe=Object.getPrototypeOf,Ie="function"===ve(Pe)?Ae:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===d(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ve=Ie;function Fe(r){return null==r?null:(r=t(r),Ve(r))}function Ne(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}return function(r){var e,n,o,a;if(null==r)return[];n=t(r),e=[];do{for(o=xe(n),a=0;a<o.length;a++)!1===Ne(e,o[a])&&e.push(o[a]);for(o=i(n),a=0;a<o.length;a++)!1===Ne(e,o[a])&&e.push(o[a]);n=Fe(n)}while(n);return e}}));
//# sourceMappingURL=index.js.map
