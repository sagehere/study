# Phase 4.4 — Third Small-Batch Production Migration

## Scope

Promoted three structurally different textbook-grounded nodes:

- `u1.vertical.v2` — procedural long division: quotient place, repeated divide/multiply/subtract/bring-down cycle, and remainder constraint.
- `u4.bracket.v2` — procedural operation order: parentheses priority and nested bracket order.
- `u5.read.v2` — concept/representation: four-digits-per-group place value and zero-reading rules.

All three passed Course Package validation, 14-point pedagogy audit, and `--require-ready` before Runtime integration.

## u1.vertical

Grounded in textbook pp.8-9. The flow directly follows the textbook questions and summary:

- first use the leading part of the dividend that can produce a quotient;
- write the quotient above the place currently being divided;
- repeat quotient → multiply → subtract → bring down;
- every intermediate remainder must be smaller than the divisor.

A generic `longDivision` renderer was added to expose the current dividend, product, remainder, bring-down value, and quotient place without hard-coding one exercise.

Fresh evidence: determine the highest quotient place for `593÷28`; transfer uses multiplication to verify `729÷27=27`.

## u4.bracket

Grounded in textbook pp.60-62. The flow separates two common misconceptions:

- “brackets mean blindly calculate left-to-right inside them”;
- “when both small and square brackets appear, handle the outer bracket first.”

The formalized rule is: calculate the innermost parentheses first; within every bracket level, ordinary precedence still applies.

Fresh evidence: `48×(32－17)÷30`; transfer compares an expression with and without parentheses to show that grouping changes the computed whole.

No renderer was added because symbolic grouping itself is the relevant representation.

## u5.read

Grounded in textbook pp.71-75 and 86-88. The flow establishes:

- from the right, every four digits form one group;
- read each group using ordinary four-digit reading, then append 万/亿 as appropriate;
- zeros at the end of a group are not read;
- one or several internal zeros are read as a single “零” when needed to preserve place-value structure.

A generic `placeValueGroups` renderer was added to show four-digit grouping with neutral group labels and accessible semantics.

Fresh evidence: read `40030000000`; transfer writes “六千零四万二千” as `60042000`.

## Interruption recovery

A previous interrupted Phase 4.4 attempt left partial renderer/registry/test edits in the working tree. They were inspected before reuse. Valid generic renderer work was preserved; duplicate script tags and stale test paths from the interrupted draft were removed rather than silently layered on top.

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 15 package(s)
COURSE AUDIT TEST PASS: 9 ready audit(s)
PACK CHECK PASS: 15 course package(s)
PASS: Phase 4.4 audited u1.vertical/u4.bracket/u5.read production migration plus existing declarative flows.
PASS: offline browser, legacy suite plus Phase 4.4 u1.vertical/u4.bracket/u5.read and existing audited pedagogy flows, resume/mobile/rollback.
```

`learning-flow-engine.js` required no Phase 4.4 changes.
