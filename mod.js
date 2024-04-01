// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var o=r,i=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function u(r){return Object.keys(Object(r))}var c=void 0!==Object.keys;var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var y="function"==typeof Symbol?Symbol:void 0,d="function"==typeof y?y.toStringTag:"";var h=l()?function(r){var e,t,n;if(null==r)return s.call(r);t=r[d],e=g(r,d);try{r[d]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[d]=t:delete r[d],n}:function(r){return s.call(r)};function b(r){return"[object Arguments]"===h(r)}var v=function(){return b(arguments)}(),w="function"==typeof Object.defineProperty?Object.defineProperty:null;var m=Object.defineProperty;function j(r){return"number"==typeof r}function O(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function S(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+O(o):O(o)+r,n&&(r="-"+r)),r}var _=String.prototype.toLowerCase,E=String.prototype.toUpperCase;function k(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!j(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=S(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=S(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===E.call(r.specifier)?E.call(t):_.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var x=Math.abs,I=String.prototype.toLowerCase,T=String.prototype.toUpperCase,P=String.prototype.replace,A=/e\+(\d)$/,V=/e-(\d)$/,F=/^(\d+)$/,N=/^(\d+)e/,$=/\.0$/,C=/\.0*e/,B=/(\..*[^0])0*e/;function L(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!j(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":x(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=P.call(t,B,"$1e"),t=P.call(t,C,"e"),t=P.call(t,$,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=P.call(t,A,"e+0$1"),t=P.call(t,V,"e-0$1"),r.alternate&&(t=P.call(t,F,"$1."),t=P.call(t,N,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===T.call(r.specifier)?T.call(t):I.call(t)}function R(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var G=String.fromCharCode,W=isNaN,X=Array.isArray;function Z(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function M(r){var e,t,n,o,i,a,u,c,f,l,s,p,g;if(!X(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,W(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=k(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(i)?String(n.arg):G(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=L(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=S(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+R(g):R(g)+l)),a+=n.arg||"",u+=1}return a}var Y=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function H(r){var e,t,n,o;for(t=[],o=0,n=Y.exec(r);n;)(e=r.slice(o,Y.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),o=Y.lastIndex,n=Y.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function z(r){var e,t;if("string"!=typeof r)throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[H(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return M.apply(null,e)}var D,q=Object.prototype,J=q.toString,K=q.__defineGetter__,Q=q.__defineSetter__,rr=q.__lookupGetter__,er=q.__lookupSetter__;D=function(){try{return w({},"x",{}),!0}catch(r){return!1}}()?m:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError(z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(rr.call(r,e)||er.call(r,e)?(n=r.__proto__,r.__proto__=q,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&K&&K.call(r,e,t.get),a&&Q&&Q.call(r,e,t.set),r};var tr=D;function nr(r,e,t){tr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function or(r){return"string"==typeof r}var ir=String.prototype.valueOf;var ar=l();function ur(r){return"object"==typeof r&&(r instanceof String||(ar?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object String]"===h(r)))}function cr(r){return or(r)||ur(r)}function fr(r){return"number"==typeof r}nr(cr,"isPrimitive",or),nr(cr,"isObject",ur);var lr=Number,sr=lr.prototype.toString;var pr=l();function gr(r){return"object"==typeof r&&(r instanceof lr||(pr?function(r){try{return sr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function yr(r){return fr(r)||gr(r)}function dr(r){return r!=r}function hr(r){return fr(r)&&dr(r)}function br(r){return gr(r)&&dr(r.valueOf())}function vr(r){return hr(r)||br(r)}nr(yr,"isPrimitive",fr),nr(yr,"isObject",gr),nr(vr,"isPrimitive",hr),nr(vr,"isObject",br);var wr=Number.POSITIVE_INFINITY,mr=lr.NEGATIVE_INFINITY,jr=Math.floor;function Or(r){return jr(r)===r}function Sr(r){return r<wr&&r>mr&&Or(r)}function _r(r){return fr(r)&&Sr(r)}function Er(r){return gr(r)&&Sr(r.valueOf())}function kr(r){return _r(r)||Er(r)}nr(kr,"isPrimitive",_r),nr(kr,"isObject",Er);var xr=Object.prototype.propertyIsEnumerable;var Ir,Tr=!xr.call("beep","0");function Pr(r,e){var t;return null!=r&&(!(t=xr.call(r,e))&&Tr&&cr(r)?!hr(e=+e)&&_r(e)&&e>=0&&e<r.length:t)}Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};var Ar,Vr=Ir;Ar=v?b:function(r){return null!==r&&"object"==typeof r&&!Vr(r)&&"number"==typeof r.length&&Or(r.length)&&r.length>=0&&r.length<=4294967295&&g(r,"callee")&&!Pr(r,"callee")};var Fr=Ar,Nr=Array.prototype.slice;function $r(r){return null!==r&&"object"==typeof r}var Cr=function(r){if("function"!=typeof r)throw new TypeError(z("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}($r);nr($r,"isObjectLikeArray",Cr);var Br=Pr((function(){}),"prototype"),Lr=!Pr({toString:null},"toString"),Rr=9007199254740991;function Gr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&Or(i.length)&&i.length>=0&&i.length<=Rr||or(r)))throw new TypeError(z("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!_r(t))throw new TypeError(z("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(vr(e)){for(;o<n;o++)if(vr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Wr=/./;function Xr(r){return"boolean"==typeof r}var Zr=Boolean,Mr=Boolean.prototype.toString;var Yr=l();function Ur(r){return"object"==typeof r&&(r instanceof Zr||(Yr?function(r){try{return Mr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function Hr(r){return Xr(r)||Ur(r)}nr(Hr,"isPrimitive",Xr),nr(Hr,"isObject",Ur);var zr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,qr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Jr="object"==typeof qr?qr:null,Kr="object"==typeof globalThis?globalThis:null;var Qr=function(r){if(arguments.length){if(!Xr(r))throw new TypeError(z("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Kr)return Kr;if(zr)return zr;if(Dr)return Dr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),re=Qr.document&&Qr.document.childNodes,ee=Int8Array;function te(){return/^\s*function\s*([^(]*)/i}var ne=/^\s*function\s*([^(]*)/i;function oe(r){var e,t,n,o;if(("Object"===(t=h(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ne.exec(n.toString()))return e[1]}return $r(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}nr(te,"REGEXP",ne);var ie="function"==typeof Wr||"object"==typeof ee||"function"==typeof re?function(r){return oe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?oe(r).toLowerCase():e};function ae(r){return r.constructor&&r.constructor.prototype===r}var ue=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ce="undefined"==typeof window?void 0:window;var fe=function(){var r;if("undefined"===ie(ce))return!1;for(r in ce)try{-1===Gr(ue,r)&&g(ce,r)&&null!==ce[r]&&"object"===ie(ce[r])&&ae(ce[r])}catch(r){return!0}return!1}(),le="undefined"!=typeof window;var se,pe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];se=c?function(){return 2!==(u(arguments)||"").length}(1,2)?function(r){return Fr(r)?u(Nr.call(r)):u(r)}:u:function(r){var e,t,n,o,i,a,u;if(o=[],Fr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!g(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!$r(r))return o;t=Br&&n}for(i in r)t&&"prototype"===i||!g(r,i)||o.push(String(i));if(Lr)for(e=function(r){if(!1===le&&!fe)return ae(r);try{return ae(r)}catch(r){return!1}}(r),u=0;u<pe.length;u++)a=pe[u],e&&"constructor"===a||!g(r,a)||o.push(String(a));return o};var ge,ye=se;ge=i?function(r){return a(t(r))}:function(r){return ye(t(r))};var de=ge;var he,be,ve=Object.getPrototypeOf;be=Object.getPrototypeOf,he="function"===ie(be)?ve:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var we=he;function me(r){return null==r?null:(r=t(r),we(r))}function je(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}function Oe(r){var e,n,i,a;if(null==r)return[];n=t(r),e=[];do{for(i=de(n),a=0;a<i.length;a++)!1===je(e,i[a])&&e.push(i[a]);for(i=o(n),a=0;a<i.length;a++)!1===je(e,i[a])&&e.push(i[a]);n=me(n)}while(n);return e}export{Oe as default};
//# sourceMappingURL=mod.js.map
