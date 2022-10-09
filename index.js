// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).propertiesIn=r()}(this,(function(){"use strict";var t,r=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols;t=r?function(t){return e(Object(t))}:function(){return[]};var n=t,o=void 0!==Object.getOwnPropertyNames,u=Object.getOwnPropertyNames;function i(t){return Object.keys(Object(t))}var f=void 0!==Object.keys;var c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return c&&"symbol"==typeof Symbol.toStringTag}var a=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function s(t,r){return null!=t&&p.call(t,r)}var y="function"==typeof Symbol?Symbol.toStringTag:"";var b,v=l()?function(t){var r,e,n;if(null==t)return a.call(t);e=t[y],r=s(t,y);try{t[y]=void 0}catch(r){return a.call(t)}return n=a.call(t),r?t[y]=e:delete t[y],n}:function(t){return a.call(t)};function g(t){return"[object Arguments]"===v(t)}b=function(){return g(arguments)}();var d=b,j="function"==typeof Object.defineProperty?Object.defineProperty:null;var h,m=Object.defineProperty,w=Object.prototype,O=w.toString,_=w.__defineGetter__,S=w.__defineSetter__,P=w.__lookupGetter__,E=w.__lookupSetter__;h=function(){try{return j({},"x",{}),!0}catch(t){return!1}}()?m:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(P.call(t,r)||E.call(t,r)?(n=t.__proto__,t.__proto__=w,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&_&&_.call(t,r,e.get),i&&S&&S.call(t,r,e.set),t};var I=h;function T(t,r,e){I(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function A(t){return"string"==typeof t}var N=String.prototype.valueOf;var k=l();function x(t){return"object"==typeof t&&(t instanceof String||(k?function(t){try{return N.call(t),!0}catch(t){return!1}}(t):"[object String]"===v(t)))}function B(t){return A(t)||x(t)}function V(t){return"number"==typeof t}T(B,"isPrimitive",A),T(B,"isObject",x);var F=Number,L=F.prototype.toString;var G=l();function Y(t){return"object"==typeof t&&(t instanceof F||(G?function(t){try{return L.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function C(t){return V(t)||Y(t)}function M(t){return t!=t}function X(t){return V(t)&&M(t)}function H(t){return Y(t)&&M(t.valueOf())}function W(t){return X(t)||H(t)}T(C,"isPrimitive",V),T(C,"isObject",Y),T(W,"isPrimitive",X),T(W,"isObject",H);var D=Number.POSITIVE_INFINITY,R=F.NEGATIVE_INFINITY,U=Math.floor;function q(t){return U(t)===t}function z(t){return t<D&&t>R&&q(t)}function J(t){return V(t)&&z(t)}function K(t){return Y(t)&&z(t.valueOf())}function Q(t){return J(t)||K(t)}T(Q,"isPrimitive",J),T(Q,"isObject",K);var Z=Object.prototype.propertyIsEnumerable;var $,tt=!Z.call("beep","0");function rt(t,r){var e;return null!=t&&(!(e=Z.call(t,r))&&tt&&B(t)?!X(r=+r)&&J(r)&&r>=0&&r<t.length:e)}$=Array.isArray?Array.isArray:function(t){return"[object Array]"===v(t)};var et,nt=$;et=d?g:function(t){return null!==t&&"object"==typeof t&&!nt(t)&&"number"==typeof t.length&&q(t.length)&&t.length>=0&&t.length<=4294967295&&s(t,"callee")&&!rt(t,"callee")};var ot=et,ut=Array.prototype.slice;function it(t){return null!==t&&"object"==typeof t}var ft=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!nt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(it);T(it,"isObjectLikeArray",ft);var ct=rt((function(){}),"prototype"),lt=!rt({toString:null},"toString");function at(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&q(t.length)&&t.length>=0&&t.length<=9007199254740991}function pt(t,r,e){var n,o;if(!at(t)&&!A(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!J(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(W(r)){for(;o<n;o++)if(W(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var st=/./;function yt(t){return"boolean"==typeof t}var bt=Boolean.prototype.toString;var vt=l();function gt(t){return"object"==typeof t&&(t instanceof Boolean||(vt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===v(t)))}function dt(t){return yt(t)||gt(t)}function jt(){return new Function("return this;")()}T(dt,"isPrimitive",yt),T(dt,"isObject",gt);var ht="object"==typeof self?self:null,mt="object"==typeof window?window:null,wt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ot="object"==typeof wt?wt:null;var _t=function(t){if(arguments.length){if(!yt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return jt()}if(ht)return ht;if(mt)return mt;if(Ot)return Ot;throw new Error("unexpected error. Unable to resolve global object.")}(),St=_t.document&&_t.document.childNodes,Pt=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;function Tt(t){var r,e,n,o;if(("Object"===(e=v(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=It.exec(n.toString()))return r[1]}return it(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}T(Et,"REGEXP",It);var At="function"==typeof st||"object"==typeof Pt||"function"==typeof St?function(t){return Tt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Tt(t).toLowerCase():r};function Nt(t){return t.constructor&&t.constructor.prototype===t}var kt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xt="undefined"==typeof window?void 0:window;var Bt=function(){var t;if("undefined"===At(xt))return!1;for(t in xt)try{-1===pt(kt,t)&&s(xt,t)&&null!==xt[t]&&"object"===At(xt[t])&&Nt(xt[t])}catch(t){return!0}return!1}(),Vt="undefined"!=typeof window;var Ft,Lt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ft=f?function(){return 2!==(i(arguments)||"").length}(1,2)?function(t){return ot(t)?i(ut.call(t)):i(t)}:i:function(t){var r,e,n,o,u,i,f;if(o=[],ot(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!s(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!it(t))return o;e=ct&&n}for(u in t)e&&"prototype"===u||!s(t,u)||o.push(String(u));if(lt)for(r=function(t){if(!1===Vt&&!Bt)return Nt(t);try{return Nt(t)}catch(t){return!1}}(t),f=0;f<Lt.length;f++)i=Lt[f],r&&"constructor"===i||!s(t,i)||o.push(String(i));return o};var Gt,Yt=Ft;Gt=o?function(t){return u(Object(t))}:function(t){return Yt(Object(t))};var Ct=Gt;var Mt,Xt,Ht=Object.getPrototypeOf;Xt=Object.getPrototypeOf,Mt="function"===At(Xt)?Ht:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===v(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Wt=Mt;function Dt(t){return null==t?null:(t=Object(t),Wt(t))}var Rt=Object;function Ut(t,r){var e;for(e=0;e<t.length;e++)if(t[e]===r)return!0;return!1}return function(t){var r,e,o,u;if(null==t)return[];e=Rt(t),r=[];do{for(o=Ct(e),u=0;u<o.length;u++)!1===Ut(r,o[u])&&r.push(o[u]);for(o=n(e),u=0;u<o.length;u++)!1===Ut(r,o[u])&&r.push(o[u]);e=Dt(e)}while(e);return r}}));
//# sourceMappingURL=index.js.map