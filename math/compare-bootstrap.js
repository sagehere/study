/* Registers u5 comparison/rewrite flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u5.compare.v2'];if(!pkg)throw new Error('Missing Course Package u5.compare.v2');
 const loaded=CoursePackageLoader.register(pkg,{});
 globalThis.ComparePedagogy={...loaded,package:pkg};
})();
