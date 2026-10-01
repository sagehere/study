# Phase 4.7-B — Final Production Migration

## Scope

Promoted the last two unmigrated legacy knowledge nodes:

- `u6.calculator.v2` — calculator planning, input, correction, and verification.
- `u6.pattern.v2` — pattern discovery, structural explanation, validation, and domain boundaries.

This brings production Course Package coverage to **26/26 legacy knowledge nodes**.

## u6.calculator

Grounded in textbook pp.98-99. The source explicitly uses a multi-step purchase expression with brackets, discusses calculators as useful for many-step/large-number work, introduces the CE key for correcting the current entry, and still asks learners to choose appropriate calculation methods.

The production flow therefore teaches a four-part tool-use discipline:

1. understand the mathematical structure before pressing keys;
2. preserve bracket / operation-order semantics during input;
3. correct local input errors without discarding correct prior work;
4. verify displayed results with estimation, staged calculation, inverse checks, or problem context.

Fresh independent evidence uses `(41600+640)÷128`; transfer asks when mental/simplified calculation is more appropriate than calculator use.

No renderer extension was needed.

## u6.pattern

Grounded in textbook pp.100-101. The textbook first computes `15×15`, `25×25`, `35×35`, observes the ending-25 / front-part pattern, then explicitly asks learners to explain the rule by cutting and rearranging a `25×25` area diagram. It continues with new ending-5 squares and symmetric neighboring products such as `44×46`.

The flow preserves the full inquiry sequence:

```text
multiple examples
→ notice a stable feature
→ infer the front-part rule
→ predict a fresh example
→ explain with area rearrangement
→ validate another example
→ state the domain boundary
→ transfer to a related symmetric-product structure
```

Misconception repair blocks three shallow strategies:

- simply appending `25`;
- treating a few matching examples as proof;
- applying the ending-5 rule to all squares.

## Genuine renderer gap: areaDecomposition

Existing `rect` and `tileRows` renderers could display area but could not represent the textbook-required **cut / move / rearrange** explanation. A single generic renderer was therefore added:

```text
areaDecomposition({ base, tail })
```

It represents

```text
(base + tail) × (base + tail)
→ base × (base + 2×tail) + tail²
```

by showing the same area before and after rearrangement. It contains no ending-5 logic, no course routing, and no hard-coded `25×25` rule. The Course Package supplies `base=20, tail=5` or `base=50, tail=5` as data.

This is the only Renderer Registry addition in Phase 4.7-B. `learning-flow-engine.js` remains unchanged.

## Inventory transition

After this batch:

```text
26/26 production Course Packages
20 ready audits
0 unmigrated nodes
6 early production packages requiring audit backfill
```

The generated migration inventory now has no remaining migration batch; only audit backfill remains before Phase 5.

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 26 package(s)
COURSE AUDIT TEST PASS: 20 ready audit(s)
MIGRATION INVENTORY CHECK PASS: 26/26 production, 20 ready-audited, 0 remaining, 6 audit backfills
PACK CHECK PASS: 26 course package(s)
PASS: Phase 4.7-B audited u6.calculator/u6.pattern production migration; all 26 legacy knowledge nodes now have production flows.
PASS: offline browser, all 26 production pedagogy flows including Phase 4.7-B u6.calculator/u6.pattern, resume/mobile/offline/rollback.
```

## Next gate

Phase 4.7-C is now purely quality-standard normalization: add current-format audits for the six early production packages without rewriting working flows just for stylistic uniformity. Phase 5 starts only after the inventory reports **26/26 production and 26/26 ready audits**.
