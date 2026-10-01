# Phase 4.7 — Remaining-Node Inventory and Final Migration Plan

## Inventory result

The inventory is generated from the actual legacy node list, production Course Packages, and production audit reports rather than maintained manually.

```text
26 legacy knowledge nodes
21 production Course Packages
15 production packages with ready audits
6 production packages missing formal audits
5 nodes not yet migrated
```

`math/generate-migration-inventory.cjs` produces both `inventory.json` and `INVENTORY.md`. `--check` fails when those generated artifacts are stale.

## Remaining nodes

### Final-A — low infrastructure risk

1. `u4.order` — procedural; no renderer needed. Main risk is distinguishing same-level left-to-right from two-level precedence without duplicating `bracket`/`reverse`.
2. `u5.place` — concept/representation; expected to reuse `placeValueGroups`. Main risk is separating counting-unit relationships, place value, and group structure from the already-migrated `read` node.
3. `u2.change` — concept/representation; expected to reuse `rect` / `sideSum`. Main risk is explaining fixed-perimeter/fixed-area comparison rather than turning the node into a table of memorized conclusions.

### Final-B — last capability checks

4. `u6.calculator` — procedural/metacognitive use of a calculator. Main risk is teaching input/check strategy rather than button memorization; no renderer is expected.
5. `u6.pattern` — concept/representation. This is deliberately last because the textbook pattern-explanation work is the most likely remaining node to expose a genuine representation gap. Existing `rect` / `tileRows` should be tried first; only add a generic decomposition renderer if the visual explanation truly needs it.

## Audit backfill

Six production packages predate the Phase 3.4 audit gate and therefore do not yet meet the uniform Phase 5 release standard:

- `u1.trial`
- `u2.meaning`
- `u2.formula`
- `u3.price`
- `u5.round`
- `u6.multiply`

These should be audited without rewriting them merely for stylistic consistency. If an old package fails the current ready gate, revise only the failed evidence/source/renderer contract and preserve its already-correct stable IDs and behavior.

## Recommended closeout sequence

```text
Phase 4.7-A
  u4.order + u5.place + u2.change

Phase 4.7-B
  u6.calculator + u6.pattern

Phase 4.7-C
  audit-backfill the six early production packages
  regenerate inventory
  require 26/26 production + 26/26 ready audits

then Phase 5
  full-course release acceptance
```

## Phase 5 entry gate

Do not enter Phase 5 merely because all nodes have JSON files. Entry requires:

- 26/26 production Course Packages;
- 26/26 deterministic Course Package validation;
- 26/26 ready audits, unless a package is deliberately blocked and explicitly not marked ready;
- zero unintended external runtime requests;
- legacy rollback retained until Phase 5 decides otherwise;
- no node-specific logic leaked into `learning-flow-engine.js`;
- generated migration inventory passes `--check`.
