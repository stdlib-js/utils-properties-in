// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var i=r,o=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function c(r){return Object.keys(Object(r))}var u=void 0!==Object.keys;function l(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var f=l();function s(){return f&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(r,e){return null!=r&&g.call(r,e)}var h="function"==typeof Symbol?Symbol:void 0,y="function"==typeof h?h.toStringTag:"";var b=s()?function(r){var e,t,n;if(null==r)return p.call(r);t=r[y],e=d(r,y);try{r[y]=void 0}catch(e){return p.call(r)}return n=p.call(r),e?r[y]=t:delete r[y],n}:function(r){return p.call(r)};function v(r){return"[object Arguments]"===b(r)}var w=function(){return v(arguments)}(),m="function"==typeof Object.defineProperty?Object.defineProperty:null;var j=Object.defineProperty;function _(r){return"number"==typeof r}function E(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function S(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+E(i):E(i)+r,n&&(r="-"+r)),r}var O=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function x(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!_(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=S(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=S(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===k.call(r.specifier)?k.call(t):O.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function T(r){return"string"==typeof r}var A=Math.abs,I=String.prototype.toLowerCase,V=String.prototype.toUpperCase,P=String.prototype.replace,F=/e\+(\d)$/,$=/e-(\d)$/,C=/^(\d+)$/,N=/^(\d+)e/,B=/\.0$/,L=/\.0*e/,R=/(\..*[^0])0*e/;function G(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!_(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":A(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=P.call(t,R,"$1e"),t=P.call(t,L,"e"),t=P.call(t,B,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=P.call(t,F,"e+0$1"),t=P.call(t,$,"e-0$1"),r.alternate&&(t=P.call(t,C,"$1."),t=P.call(t,N,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===V.call(r.specifier)?V.call(t):I.call(t)}function W(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Z(r,e,t){var n=e-r.length;return n<0?r:r=t?r+W(n):W(n)+r}var X=String.fromCharCode,M=isNaN,U=Array.isArray;function Y(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function z(r){var e,t,n,i,o,a,c,u,l;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(T(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Y(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,M(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,M(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=x(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!M(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=M(o)?String(n.arg):X(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=G(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=S(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Z(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function q(r){var e,t,n,i;for(t=[],i=0,n=H.exec(r);n;)(e=r.slice(i,H.lastIndex-n[0].length)).length&&t.push(e),t.push(D(n)),i=H.lastIndex,n=H.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function J(r){return"string"==typeof r}function K(r){var e,t;if(!J(r))throw new TypeError(K("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[q(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return z.apply(null,e)}var Q,rr=Object.prototype,er=rr.toString,tr=rr.__defineGetter__,nr=rr.__defineSetter__,ir=rr.__lookupGetter__,or=rr.__lookupSetter__;Q=function(){try{return m({},"x",{}),!0}catch(r){return!1}}()?j:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===er.call(r))throw new TypeError(K("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===er.call(t))throw new TypeError(K("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ir.call(r,e)||or.call(r,e)?(n=r.__proto__,r.__proto__=rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&tr&&tr.call(r,e,t.get),a&&nr&&nr.call(r,e,t.set),r};var ar=Q;function cr(r,e,t){ar(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ur(r){return"string"==typeof r}var lr=String.prototype.valueOf;var fr=s();function sr(r){return"object"==typeof r&&(r instanceof String||(fr?function(r){try{return lr.call(r),!0}catch(r){return!1}}(r):"[object String]"===b(r)))}function pr(r){return ur(r)||sr(r)}function gr(r){return"number"==typeof r}cr(pr,"isPrimitive",ur),cr(pr,"isObject",sr);var dr=Number,hr=dr.prototype.toString;var yr=s();function br(r){return"object"==typeof r&&(r instanceof dr||(yr?function(r){try{return hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function vr(r){return gr(r)||br(r)}function wr(r){return r!=r}function mr(r){return gr(r)&&wr(r)}function jr(r){return br(r)&&wr(r.valueOf())}function _r(r){return mr(r)||jr(r)}cr(vr,"isPrimitive",gr),cr(vr,"isObject",br),cr(_r,"isPrimitive",mr),cr(_r,"isObject",jr);var Er=Number.POSITIVE_INFINITY,Sr=dr.NEGATIVE_INFINITY,Or=Math.floor;function kr(r){return Or(r)===r}function xr(r){return r<Er&&r>Sr&&kr(r)}function Tr(r){return gr(r)&&xr(r)}function Ar(r){return br(r)&&xr(r.valueOf())}function Ir(r){return Tr(r)||Ar(r)}cr(Ir,"isPrimitive",Tr),cr(Ir,"isObject",Ar);var Vr=Object.prototype.propertyIsEnumerable;var Pr,Fr=!Vr.call("beep","0");function $r(r,e){var t;return null!=r&&(!(t=Vr.call(r,e))&&Fr&&pr(r)?!mr(e=+e)&&Tr(e)&&e>=0&&e<r.length:t)}Pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};var Cr,Nr=Pr;Cr=w?v:function(r){return null!==r&&"object"==typeof r&&!Nr(r)&&"number"==typeof r.length&&kr(r.length)&&r.length>=0&&r.length<=4294967295&&d(r,"callee")&&!$r(r,"callee")};var Br=Cr,Lr=Array.prototype.slice;function Rr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(K("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Nr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);cr(Rr,"isObjectLikeArray",Gr);var Wr=$r((function(){}),"prototype"),Zr=!$r({toString:null},"toString");function Xr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&kr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Mr(r,e,t){var n,i;if(!Xr(r)&&!ur(r))throw new TypeError(K("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Tr(t))throw new TypeError(K("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(_r(e)){for(;i<n;i++)if(_r(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Ur=/./;function Yr(r){return"boolean"==typeof r}var zr=Boolean,Hr=Boolean.prototype.toString;var Dr=s();function qr(r){return"object"==typeof r&&(r instanceof zr||(Dr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function Jr(r){return Yr(r)||qr(r)}function Kr(){return new Function("return this;")()}cr(Jr,"isPrimitive",Yr),cr(Jr,"isObject",qr);var Qr="object"==typeof self?self:null,re="object"==typeof window?window:null,ee="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},te="object"==typeof ee?ee:null,ne="object"==typeof globalThis?globalThis:null;var ie=function(r){if(arguments.length){if(!Yr(r))throw new TypeError(K("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Kr()}if(ne)return ne;if(Qr)return Qr;if(re)return re;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ie.document&&ie.document.childNodes,ae=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function le(r){var e,t,n,i;if(("Object"===(t=b(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ue.exec(n.toString()))return e[1]}return Rr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}cr(ce,"REGEXP",ue);var fe="function"==typeof Ur||"object"==typeof ae||"function"==typeof oe?function(r){return le(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?le(r).toLowerCase():e};function se(r){return r.constructor&&r.constructor.prototype===r}var pe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ge="undefined"==typeof window?void 0:window;var de=function(){var r;if("undefined"===fe(ge))return!1;for(r in ge)try{-1===Mr(pe,r)&&d(ge,r)&&null!==ge[r]&&"object"===fe(ge[r])&&se(ge[r])}catch(r){return!0}return!1}(),he="undefined"!=typeof window;var ye,be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ye=u?function(){return 2!==(c(arguments)||"").length}(1,2)?function(r){return Br(r)?c(Lr.call(r)):c(r)}:c:function(r){var e,t,n,i,o,a,c;if(i=[],Br(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!d(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Rr(r))return i;t=Wr&&n}for(o in r)t&&"prototype"===o||!d(r,o)||i.push(String(o));if(Zr)for(e=function(r){if(!1===he&&!de)return se(r);try{return se(r)}catch(r){return!1}}(r),c=0;c<be.length;c++)a=be[c],e&&"constructor"===a||!d(r,a)||i.push(String(a));return i};var ve,we=ye;ve=o?function(r){return a(t(r))}:function(r){return we(t(r))};var me=ve,je=/./,_e="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ee=Object.defineProperty;function Se(r){return"number"==typeof r}function Oe(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ke(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Oe(i):Oe(i)+r,n&&(r="-"+r)),r}var xe=String.prototype.toLowerCase,Te=String.prototype.toUpperCase;function Ae(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Se(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ke(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ke(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Te.call(r.specifier)?Te.call(t):xe.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ie(r){return"string"==typeof r}var Ve=Math.abs,Pe=String.prototype.toLowerCase,Fe=String.prototype.toUpperCase,$e=String.prototype.replace,Ce=/e\+(\d)$/,Ne=/e-(\d)$/,Be=/^(\d+)$/,Le=/^(\d+)e/,Re=/\.0$/,Ge=/\.0*e/,We=/(\..*[^0])0*e/;function Ze(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Se(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ve(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$e.call(t,We,"$1e"),t=$e.call(t,Ge,"e"),t=$e.call(t,Re,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$e.call(t,Ce,"e+0$1"),t=$e.call(t,Ne,"e-0$1"),r.alternate&&(t=$e.call(t,Be,"$1."),t=$e.call(t,Le,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Fe.call(r.specifier)?Fe.call(t):Pe.call(t)}function Xe(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Me(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Xe(n):Xe(n)+r}var Ue=String.fromCharCode,Ye=isNaN,ze=Array.isArray;function He(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function De(r){var e,t,n,i,o,a,c,u,l;if(!ze(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(Ie(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=He(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ye(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ye(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Ae(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ye(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ye(o)?String(n.arg):Ue(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ze(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ke(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Me(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var qe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Je(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ke(r){var e,t,n,i;for(t=[],i=0,n=qe.exec(r);n;)(e=r.slice(i,qe.lastIndex-n[0].length)).length&&t.push(e),t.push(Je(n)),i=qe.lastIndex,n=qe.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Qe(r){return"string"==typeof r}function rt(r){var e,t;if(!Qe(r))throw new TypeError(rt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Ke(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return De.apply(null,e)}var et,tt=Object.prototype,nt=tt.toString,it=tt.__defineGetter__,ot=tt.__defineSetter__,at=tt.__lookupGetter__,ct=tt.__lookupSetter__;et=function(){try{return _e({},"x",{}),!0}catch(r){return!1}}()?Ee:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===nt.call(r))throw new TypeError(rt("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===nt.call(t))throw new TypeError(rt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(at.call(r,e)||ct.call(r,e)?(n=r.__proto__,r.__proto__=tt,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&it&&it.call(r,e,t.get),a&&ot&&ot.call(r,e,t.set),r};var ut=et;function lt(r,e,t){ut(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ft(r){return"boolean"==typeof r}var st=l();function pt(){return st&&"symbol"==typeof Symbol.toStringTag}var gt=Object.prototype.toString;var dt="function"==typeof h?h.toStringTag:"";var ht=pt()?function(r){var e,t,n;if(null==r)return gt.call(r);t=r[dt],e=d(r,dt);try{r[dt]=void 0}catch(e){return gt.call(r)}return n=gt.call(r),e?r[dt]=t:delete r[dt],n}:function(r){return gt.call(r)},yt=Boolean,bt=Boolean.prototype.toString;var vt=pt();function wt(r){return"object"==typeof r&&(r instanceof yt||(vt?function(r){try{return bt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ht(r)))}function mt(r){return ft(r)||wt(r)}function jt(){return new Function("return this;")()}lt(mt,"isPrimitive",ft),lt(mt,"isObject",wt);var _t="object"==typeof self?self:null,Et="object"==typeof window?window:null,St="object"==typeof ee?ee:null,Ot="object"==typeof globalThis?globalThis:null;var kt=function(r){if(arguments.length){if(!ft(r))throw new TypeError(rt("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return jt()}if(Ot)return Ot;if(_t)return _t;if(Et)return Et;if(St)return St;throw new Error("unexpected error. Unable to resolve global object.")}(),xt=kt.document&&kt.document.childNodes,Tt=Int8Array;function At(){return/^\s*function\s*([^(]*)/i}var It,Vt=/^\s*function\s*([^(]*)/i;lt(At,"REGEXP",Vt),It=Array.isArray?Array.isArray:function(r){return"[object Array]"===ht(r)};var Pt=It;function Ft(r){return null!==r&&"object"==typeof r}var $t=function(r){if("function"!=typeof r)throw new TypeError(rt("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Pt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ft);function Ct(r){var e,t,n,i;if(("Object"===(t=ht(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Vt.exec(n.toString()))return e[1]}return Ft(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}lt(Ft,"isObjectLikeArray",$t);var Nt="function"==typeof je||"object"==typeof Tt||"function"==typeof xt?function(r){return Ct(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ct(r).toLowerCase():e};var Bt,Lt,Rt=Object.getPrototypeOf;Lt=Object.getPrototypeOf,Bt="function"===Nt(Lt)?Rt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===ht(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Gt=Bt;function Wt(r){return null==r?null:(r=t(r),Gt(r))}function Zt(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}function Xt(r){var e,n,o,a;if(null==r)return[];n=t(r),e=[];do{for(o=me(n),a=0;a<o.length;a++)!1===Zt(e,o[a])&&e.push(o[a]);for(o=i(n),a=0;a<o.length;a++)!1===Zt(e,o[a])&&e.push(o[a]);n=Wt(n)}while(n);return e}export{Xt as default};
//# sourceMappingURL=mod.js.map