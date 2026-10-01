/* Registers u3 speed flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u3.speed.v2'];if(!pkg)throw new Error('Missing Course Package u3.speed.v2');
 const loaded=CoursePackageLoader.register(pkg,PriceRenderer);
 globalThis.SpeedPedagogy={...loaded,package:pkg};
})();
