# Phase 4.2 — Promote u6.estimate After Closing Blockers

## Starting state

`u6.estimate.v2` scored 12/14 in Phase 3.3 and intentionally remained a draft because two blockers were unresolved:

1. the one-sided-bound teaching rule was not yet grounded tightly enough in inspected textbook examples;
2. no generic renderer represented an estimated bound against a decision threshold.

## Source grounding closed

The production flow was re-grounded in inspected textbook problems rather than project-only examples:

- **p.96, item 7:** 6300 characters, 115 characters/minute, 45 minutes. Even an upward estimate `120 × 50 = 6000` remains below the target, so completion is impossible.
- **p.99, item 5:** 50 calculators at 3928 yuan each with a 200,000 yuan budget. Upward-estimating unit price to 4000 gives `50 × 4000 = 200000`; the actual total is therefore no greater than budget.
- **p.102, item 2(3):** 800 m to the library, 58 m/min, 12 minutes. Upward-estimating speed to 60 gives `60 × 12 = 720 < 800`; even the route-distance upper estimate cannot reach the target.

The Course Package explicitly records that “bound/threshold” is a mathematical synthesis of these situations, not terminology claimed to be printed verbatim in the textbook.

## Renderer blocker closed

Added generic `thresholdBound` renderer. It accepts dynamic:

- estimate value and threshold;
- relation (`<`, `≤`, etc.);
- estimate/threshold labels;
- unit;
- conclusion.

Its accessibility label is generated from those same semantic fields. It is not tied to budget, food, distance, or any specific node.

## Evidence revision

The textbook library-distance item is used as fresh independent evidence and emits `INDEPENDENT_PASS`. Transfer then uses a different budget-threshold situation and emits `TRANSFER_PASS`.

A deliberately inconclusive lower-bound case remains later in the flow to teach the key rule: if the direction of the estimate cannot guarantee the conclusion, switch to a finer estimate or exact calculation.

## Audit result

```text
revisionRound = 2
sourceGrounding = 2
knowledgeTypeFit = 2
misconceptionQuality = 2
hintLadder = 2
evidenceIntegrity = 2
transferQuality = 2
rendererFit = 2
total = 14/14
decision = pass
finalRecommendation = ready
```

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 9 package(s)
COURSE AUDIT TEST PASS: 3 ready audit(s)
PACK CHECK PASS: 9 course package(s)
PASS: Phase 4.2 audited u6.estimate production migration plus existing declarative flows.
PASS: offline browser, legacy suite plus audited u3.speed/u4.reverse/u6.estimate and existing declarative pedagogy flows, resume/mobile/rollback.
```

`learning-flow-engine.js` required no Phase 4.2 changes.
