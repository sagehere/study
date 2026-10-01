/* Registers u2 perimeter/area flows from declarative Course Packages. */
'use strict';
(() => {
 const meaningPkg=CoursePackageData['u2.meaning.v2'],formulaPkg=CoursePackageData['u2.formula.v2'];
 if(!meaningPkg||!formulaPkg)throw new Error('Missing u2 Course Packages');
 const meaningLoaded=CoursePackageLoader.register(meaningPkg,AreaRenderer),formulaLoaded=CoursePackageLoader.register(formulaPkg,AreaRenderer);
 globalThis.AreaPedagogy={meaning:meaningLoaded.runtime,formula:formulaLoaded.runtime,packages:{meaning:meaningPkg,formula:formulaPkg}};
})();
