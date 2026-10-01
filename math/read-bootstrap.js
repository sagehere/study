/* Registers u5 reading/writing flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u5.read.v2'];if(!pkg)throw new Error('Missing Course Package u5.read.v2');
 const loaded=CoursePackageLoader.register(pkg,PlaceValueRenderer);
 globalThis.ReadPedagogy={...loaded,package:pkg};
})();
