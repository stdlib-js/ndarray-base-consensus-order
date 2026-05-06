"use strict";var s=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var f=s(function(q,a){
var v=require('@stdlib/ndarray-base-strides2order/dist'),c=require('@stdlib/array-base-zeros/dist'),m=require('@stdlib/ndarray-defaults/dist'),u=m.get("order");function i(t){return t===1?"row-major":t===2?"column-major":u}function d(t){var r,o,n,e;for(n=t.length,r=c(4),o=r.length,e=0;e<n;e++)r[v(t[e])]+=1;if(r[0]===n)return u;if(r[0]===n-1){for(e=1;e<o;e++)if(r[e]>0)return i(e)}return r[1]>r[2]?i(1):r[1]<r[2]?i(2):u}a.exports=d
});var g=f();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
