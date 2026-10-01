# External professional reviews

Store one immutable review record per review round in `records/`.

These records represent feedback from mathematics-education experts, frontline teachers, curriculum/teaching researchers, classroom trials, or other external professional review. They are **separate from the project's internal pedagogy audit**.

Do not claim a Course Package is expert/teacher reviewed merely because `meta.authoringStatus=ready` or its internal audit is 14/14.

Use the Skill scripts to scaffold and validate records. When accepted feedback changes a Course Package, preserve the old review record, record the disposition and impact, revise the package, rerun the required gates, then close the review against the resolved package hash/version. A later package change automatically makes the old review stale for the new version.
