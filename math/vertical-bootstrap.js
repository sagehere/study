/* Registers u1 long-division flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u1.vertical.v2'];if(!pkg)throw new Error('Missing Course Package u1.vertical.v2');
 const loaded=CoursePackageLoader.register(pkg,DivisionRenderer);
 globalThis.VerticalPedagogy={...loaded,package:pkg};
})();
