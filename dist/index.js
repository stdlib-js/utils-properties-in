"use strict";var a=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var s=a(function(q,u){
var f=require('@stdlib/utils-property-symbols/dist'),p=require('@stdlib/utils-property-names/dist'),v=require('@stdlib/utils-get-prototype-of/dist'),l=require('@stdlib/object-ctor/dist');function o(i,r){var e;for(e=0;e<i.length;e++)if(i[e]===r)return!0;return!1}function c(i){var r,e,n,t;if(i==null)return[];e=l(i),r=[];do{for(n=p(e),t=0;t<n.length;t++)o(r,n[t])===!1&&r.push(n[t]);for(n=f(e),t=0;t<n.length;t++)o(r,n[t])===!1&&r.push(n[t]);e=v(e)}while(e);return r}u.exports=c
});var g=s();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
