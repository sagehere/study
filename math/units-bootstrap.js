/* Registers u2 area-units flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u2.units.v2'];if(!pkg)throw new Error('Missing Course Package u2.units.v2');
 const loaded=CoursePackageLoader.register(pkg,AreaRenderer);
 globalThis.UnitsPedagogy={...loaded,package:pkg};
})();
