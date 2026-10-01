# Phase 4.3 — Second Small-Batch Production Migration

## Scope

Promoted three textbook-grounded nodes:

- `u2.units.v2` — concept/representation: area units and conversion.
- `u3.inverse.v2` — quantity relation: multiplication/division inverse relationship.
- `u5.compare.v2` — concept/representation: number comparison, exact rewrite, and approximation-symbol semantics.

All three passed Course Package validation, 14-point pedagogy audit, and `--require-ready` before Runtime integration.

## u2.units

Grounded in textbook pp.28 and 34-36. The flow first establishes that the same area can produce different numerical results under different unit squares, then uses the 10-by-10 tiling of a 1 dm square to derive `1 dm² = 100 cm²` rather than memorizing a conversion factor.

Key misconception repair: do not copy the linear length-unit rate 10 directly into area units; area scaling happens in two dimensions.

Fresh evidence: `9 m² = 900 dm²`; transfer reverses direction with `700 cm² = 7 dm²`.

## u3.inverse

Grounded in textbook pp.45-47. The flow starts from `3 groups × 4 people = 12`, rewrites the same relation as `12 ÷ 3 = 4` and `12 ÷ 4 = 3`, then formalizes division as the inverse operation of multiplication.

Key misconception repair: distinguish “known product + one factor” from mechanically multiplying known values. A repaired learner receives a fresh symbolic inverse item before transfer.

Fresh evidence: `□ ÷ 34 = 25`; transfer: “12 jump-rope students are twice the ball-playing students.”

## u5.compare

Grounded in textbook pp.78-79 and 84-88. The flow separates three operations that students often blur:

- compare magnitude: digit count first, then highest differing place;
- exact rewrite into 万/亿 units: preserve value, use `=`;
- approximation after dropping/rounding tails: value changes, use `≈`.

Fresh evidence: `2800000000 = 28亿`; transfer compares `56万` with `559950` after normalization.

## Runtime integration

- `u2.units` reuses generic `AreaRenderer.tileRows`.
- `u3.inverse` reuses generic `PriceRenderer.relation` with neutral semantic labels.
- `u5.compare` intentionally uses no decorative renderer.
- All three register through thin bootstrap files.
- `?pedagogyV2=0` restores legacy labs for all three.

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 12 package(s)
COURSE AUDIT TEST PASS: 6 ready audit(s)
PACK CHECK PASS: 12 course package(s)
PASS: Phase 4.3 audited u2.units/u3.inverse/u5.compare production migration plus existing declarative flows.
PASS: offline browser, legacy suite plus Phase 4.3 u2.units/u3.inverse/u5.compare and existing audited pedagogy flows, resume/mobile/rollback.
```

`learning-flow-engine.js` required no Phase 4.3 changes.
