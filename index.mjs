// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2order@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@v0.4.1-esm/index.mjs";var s=t.get("order");function n(r){return 1===r?"row-major":2===r?"column-major":s}function d(t){var d,i,o,a;for(o=t.length,i=(d=e(4)).length,a=0;a<o;a++)d[r(t[a])]+=1;if(d[0]===o)return s;if(d[0]===o-1)for(a=1;a<i;a++)if(d[a]>0)return n(a);return d[1]>d[2]?n(1):d[1]<d[2]?n(2):s}export{d as default};
//# sourceMappingURL=index.mjs.map
