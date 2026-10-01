/* Registers u2 boundary/cut/fence flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u2.cut.v2'];if(!pkg)throw new Error('Missing Course Package u2.cut.v2');
 const loaded=CoursePackageLoader.register(pkg,BoundaryRenderer);
 globalThis.CutPedagogy={...loaded,package:pkg};
})();
