/* Registers u4 reverse/error-analysis flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u4.reverse.v2'];if(!pkg)throw new Error('Missing Course Package u4.reverse.v2');
 const loaded=CoursePackageLoader.register(pkg,{});
 globalThis.ReversePedagogy={...loaded,package:pkg};
})();
