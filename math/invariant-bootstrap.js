/* Registers u1 quotient-invariance flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u1.invariant.v2'];if(!pkg)throw new Error('Missing Course Package u1.invariant.v2');
 const loaded=CoursePackageLoader.register(pkg,{});
 globalThis.InvariantPedagogy={...loaded,package:pkg};
})();
