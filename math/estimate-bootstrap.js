/* Registers u6 estimate flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u6.estimate.v2'];if(!pkg)throw new Error('Missing Course Package u6.estimate.v2');
 const loaded=CoursePackageLoader.register(pkg,EstimateRenderer);
 globalThis.EstimatePedagogy={...loaded,package:pkg};
})();
