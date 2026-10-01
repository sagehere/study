# Phase 4.1 — First Small-Batch Production Migration

## Scope

Promoted only the two Phase 3.3 blind-evaluation packages that scored 14/14:

- `u3.speed.v2`
- `u4.reverse.v2`

`u6.estimate.v2` remains a draft because its source grounding and threshold-renderer gap are still explicitly unresolved.

## Ready-gate revisions

### u3.speed

The Phase 3.4 deterministic audit gate exposed a difference between human rubric scoring and machine evidence: the Phase 3.3 draft marked an objective `independent_success`, but did not emit `INDEPENDENT_PASS`; learners leaving `repairInverse` also moved directly to transfer on the same repaired construct.

Production revision:

- emit `INDEPENDENT_PASS` for direct independent inverse success;
- after inverse repair, route to a fresh `560÷80` item;
- emit fresh independent evidence only after that new item;
- retain the repaired generic `relation` accessibility semantics for speed/time/distance.

Final audit: **14/14, ready**.

### u4.reverse

The fresh independent textbook item `110－20×5＋25` added during Phase 3.3 already satisfies the new ready gate. The flow retains first-error diagnosis, targeted repair, fresh independent evidence, and bracket/order transfer.

Final audit: **14/14, ready**.

## Runtime integration

- `u3.speed` reuses the generic `relation` renderer.
- `u4.reverse` intentionally uses no decorative renderer.
- Both flows register through thin bootstrap files and the unchanged generic Flow Engine.
- `?pedagogyV2=0` still restores each legacy lab.

## Durable audit gate

`math/test-course-audits.cjs` now scans production audit reports, resolves each audit to exactly one Course Package, and runs the Skill's `validate_audit_report.py --require-ready`. A production package/audit mismatch therefore fails regression.

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 8 package(s)
COURSE AUDIT TEST PASS: 2 ready audit(s)
PACK CHECK PASS: 8 course package(s)
PASS: Phase 4.1 audited u3.speed and u4.reverse production migration plus existing declarative flows.
PASS: offline browser, legacy suite plus audited u3.speed/u4.reverse and existing declarative pedagogy flows, resume/mobile/rollback.
```

`learning-flow-engine.js` required no Phase 4.1 changes.
