/* Registers u6 multiplication flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u6.multiply.v2'];if(!pkg)throw new Error('Missing Course Package u6.multiply.v2');
 const loaded=CoursePackageLoader.register(pkg,MultiplyRenderer);
 globalThis.MultiplyPedagogy={...loaded,package:pkg};
})();
