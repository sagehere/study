# Phase 4.7-C — Historical Production Audit Backfill

## Goal

Normalize the six early production Course Packages to the current Phase 3.4+ release standard without stylistic rewrites or unnecessary architecture changes:

- `u1.trial.v2`
- `u2.meaning.v2`
- `u2.formula.v2`
- `u3.price.v2`
- `u5.round.v2`
- `u6.multiply.v2`

The target was not “create six JSON audit files.” The target was to verify that every package truly supports current source, evidence, transfer, renderer, and misconception requirements before granting a ready audit.

## Audit outcomes

All six packages now pass:

```text
14/14
revisionRound = 1
decision = pass
finalRecommendation = ready
```

### u1.trial

The original pilot already contained the strongest later-stage contracts:

- explanation evidence;
- targeted misconception repair;
- deterministic fresh variants after repair;
- explicit `INDEPENDENT_PASS`;
- explicit `TRANSFER_PASS`;
- generic `ratioBar` / `compareBars` renderers.

No routing change was needed. Phase 4.7-C only adds current-format ready/source metadata and a formal audit.

### u2.meaning

The early flow already had a genuinely independent conceptual contrast: a square can have perimeter `16 cm` and area `16 cm²` without those quantities being equal.

Two evidence-contract gaps were corrected:

- direct success now emits `INDEPENDENT_PASS` in addition to the old `EXPLANATION_PASS`;
- a learner who fails that contrast and completes repair must pass a fresh playground scenario (boundary fence vs interior surfacing) before formalization.

Transfer remains the existing room-decoration scenario.

### u2.formula

The existing perimeter/area derivation and unit repair were retained. The early flow lacked a separate post-formalization independent task, so one fresh item was inserted:

```text
7 cm × 5 cm rectangle
perimeter = 24 cm
area = 35 cm²
```

Only after this task emits `INDEPENDENT_PASS` does the learner continue to the existing `8 m × 4 m` transfer scenario.

### u3.price

The existing composite shopping problem was already strong independent evidence on the direct path. It now emits `INDEPENDENT_PASS` explicitly.

The repaired path previously jumped straight from subtotal repair to transfer. It now receives a fresh item first:

```text
5 boxes × 8 notebooks = 40 notebooks
160 yuan ÷ 40 = 4 yuan/notebook
```

This ensures repair is followed by fresh evidence rather than being mistaken for mastery.

### u5.round

The existing reverse-interval task is now explicit independent evidence on the direct path.

The repaired path previously moved directly from boundary repair to transfer. It now receives a fresh reverse-range item:

```text
rounds to 12万
115000 ≤ n < 125000
```

This preserves the half-open interval concept and records `INDEPENDENT_PASS` before the existing transfer.

### u6.multiply

This Skill-generated package already satisfied the current standard:

- ready/source metadata;
- place-value misconception model;
- generic partial-product renderer;
- fresh independent evidence;
- zero-handling repair;
- transfer evidence.

No flow revision was required; only the formal audit report was added.

## Inventory result

After the six audit backfills:

```text
26/26 production Course Packages
26/26 ready audits
0 unmigrated nodes
0 audit backfills
```

The generated inventory now states:

```text
Phase 5 gate status: SATISFIED.
```

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 26 package(s)
COURSE AUDIT TEST PASS: 26 ready audit(s)
MIGRATION INVENTORY CHECK PASS: 26/26 production, 26 ready-audited, 0 remaining, 0 audit backfills
PACK CHECK PASS: 26 course package(s)
PASS: offline browser, all 26 production pedagogy flows with Phase 4.7-C audit-normalized evidence, resume/mobile/offline/rollback.
```

## Architecture result

Phase 4.7-C required:

```text
learning-flow-engine.js   0 changes
Renderer Registry          0 changes
new renderer               none
new DSL operator            none
```

The only production-flow changes were the minimum evidence-contract revisions required to make early packages satisfy the same standard as later packages.

## Phase 4 closeout

Phase 4 is now complete. Phase 5 may begin with a uniform baseline:

- every legacy knowledge node has a production Course Package;
- every production Course Package passes deterministic validation;
- every package has a passing ready audit;
- all flows retain offline/mobile/rollback acceptance;
- no node-specific logic has leaked into the generic Flow Engine.
