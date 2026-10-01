/* Registers u5 digital-code flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u5.code.v2'];if(!pkg)throw new Error('Missing Course Package u5.code.v2');
 const loaded=CoursePackageLoader.register(pkg,CodeRenderer);
 globalThis.CodePedagogy={...loaded,package:pkg};
})();
