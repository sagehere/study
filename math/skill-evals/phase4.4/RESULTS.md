# Phase 4.4 — Third Small-Batch Production Migration

## Scope

Promoted three structurally different nodes:

- `u1.vertical.v2` — procedural long division and remainder constraints.
- `u4.bracket.v2` — procedural nested-bracket and operation-order reasoning.
- `u5.read.v2` — concept/representation for four-digit grouping and zero-reading rules.

All three passed deterministic Course Package validation, 14-point pedagogy audit, and `--require-ready` before Runtime integration.

## u1.vertical

Grounded in textbook pp.8-9. The flow derives quotient placement from the current place-value unit, then repairs bring-down and remainder constraints separately.

Key textbook rules retained:

- if the leading part is too small, include the next digit;
- quotient digit is written above the place currently being divided;
- after subtracting, bring down the next digit when one remains;
- every remainder must be smaller than the divisor.

Fresh independent evidence: `729÷27=27`; transfer: `645÷32=20……5`.

A generic `longDivision` renderer was added to expose current dividend, quotient placement, product, remainder, and bring-down without embedding pedagogy routing.

## u4.bracket

Grounded in textbook pp.60-62. The flow distinguishes two interacting rules:

1. bracket nesting determines which layer is completed first;
2. normal operation precedence still applies inside each bracket.

The learner repairs both “ignore the bracket and compute outside first” and “inside a bracket always calculate left-to-right.”

Fresh independent evidence: `58×(20－78÷13)=812`; transfer: `42×[169－(78＋35)]=2352`.

No decorative renderer is required.

## u5.read

Grounded in textbook pp.71-76. The flow establishes the Chinese large-number structure before applying zero-reading rules:

- from the ones place, every four digits form one group;
- read groups from high to low and append 亿/万 where appropriate;
- zeros at the end of a group are not read;
- one or several internal/missing-place zeros are read as a single “零”.

Fresh independent evidence: `200600000 → 二亿零六十万`; transfer reverses representation: `六亿零四十二万五千 → 600425000`.

A generic `placeValueGroups` renderer was added for four-digit grouping with dynamic accessibility semantics.

## Runtime integration

- `u1.vertical` uses `DivisionRenderer.longDivision`.
- `u4.bracket` uses the generic Flow Engine with no visual adapter.
- `u5.read` uses `PlaceValueRenderer.placeValueGroups`.
- Thin bootstrap files register all three.
- `?pedagogyV2=0` restores all three legacy labs.

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 15 package(s)
COURSE AUDIT TEST PASS: 9 ready audit(s)
PACK CHECK PASS: 15 course package(s)
PASS: Phase 4.4 audited u1.vertical/u4.bracket/u5.read production migration plus existing declarative flows.
PASS: offline browser, legacy suite plus Phase 4.4 u1.vertical/u4.bracket/u5.read and existing audited pedagogy flows, resume/mobile/rollback.
EXIT:0
```

`learning-flow-engine.js` required no Phase 4.4 changes.
