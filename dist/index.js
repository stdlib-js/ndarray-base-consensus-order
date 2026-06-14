"use strict";var s=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var f=s(function(q,a){
var v=require('@stdlib/ndarray-base-strides2order/dist'),c=require('@stdlib/array-base-zeros/dist'),m=require('@stdlib/ndarray-defaults/dist'),o=m.get("order");function u(t){return t===1?"row-major":t===2?"column-major":o}function d(t){var r,n,i,e;for(i=t.length,r=c(4),n=r.length,e=0;e<i;e++)r[v(t[e])]+=1;if(r[0]===i)return o;if(r[0]===i-1){for(e=1;e<n;e++)if(r[e]>0)return u(e)}return r[1]>r[2]?u(1):r[1]<r[2]?u(2):o}a.exports=d
});var g=f();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
