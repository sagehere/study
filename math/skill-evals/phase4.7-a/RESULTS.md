# Phase 4.7-A — Final-A Production Migration

## Scope

Promoted the three low-infrastructure-risk remaining nodes:

- `u4.order.v2` — same-level and two-level operation order.
- `u5.place.v2` — place value, counting units, decimal progression, and four-digit groups.
- `u2.change.v2` — fixed-area/fixed-perimeter comparison and the approach-to-square pattern.

All three passed Course Package validation, 14-point audit, `--require-ready`, state-machine regression, full offline browser E2E, 390 px mobile checks, and legacy rollback.

## u4.order

Grounded in textbook p.59. The flow is deliberately separate from `u4.bracket` and `u4.reverse`:

- same-level multiplication/division is evaluated left-to-right;
- same-level addition/subtraction is evaluated left-to-right;
- when both multiplication/division and addition/subtraction appear without brackets, multiplication/division comes first.

Targeted misconceptions include “always multiply before divide”, “always add before subtract”, and “always calculate the leftmost operation regardless of level”. No renderer is needed.

## u5.place

Grounded in textbook pp.69-71 and 77-78. The flow separates four related ideas:

- the same digit represents different quantities in different positions;
- the position is a place value position, while `个/十/百/千/万...` are counting units;
- adjacent counting units have ratio 10 in the decimal system;
- from the right, every four positions form one group.

The existing generic `placeValueGroups` renderer is reused. No renderer extension is required.

## u2.change

Grounded directly in textbook pp.42-43. The source uses equal-area polyominoes, 36 unit squares arranged into rectangles/squares, and fixed-perimeter rectangle drawing to distinguish perimeter from area and discover the hidden pattern.

The production flow keeps the two experiments separate:

- fixed area: as length and width become closer, perimeter becomes shorter;
- fixed perimeter: as length and width become closer, area becomes larger.

The existing generic `rect` renderer is enough; no new visual component is introduced.

## Inventory transition

After this batch, the generated migration inventory reports:

```text
24/26 production Course Packages
18/26 ready audits
2 nodes remaining
6 early production packages still requiring audit backfill
```

The inventory generator was improved so the remaining migration plan is derived from the *current* unmigrated set. After Final-A it no longer lists already-migrated nodes; only `u6.calculator` and `u6.pattern` remain in Final-B.

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 24 package(s)
COURSE AUDIT TEST PASS: 18 ready audit(s)
MIGRATION INVENTORY CHECK PASS: 24/26 production, 18 ready-audited, 2 remaining, 6 audit backfills
PACK CHECK PASS: 24 course package(s)
PASS: Phase 4.7-A audited u4.order/u5.place/u2.change production migration plus existing declarative flows.
PASS: offline browser, legacy suite plus Phase 4.7-A u4.order/u5.place/u2.change and existing audited pedagogy flows, resume/mobile/rollback.
```

`learning-flow-engine.js` required no Phase 4.7-A changes.
Renderer Registry required no Phase 4.7-A additions.
