# Phase 4.6 — High-Pressure Logic Migration

## Scope

Promoted three nodes chosen specifically to stress orchestration rather than renderer breadth:

- `u1.chain.v2` — multi-step division / nested share structure.
- `u3.one.v2` — unitization vs aggregation by invariant quantity.
- `u4.model.v2` — text-to-relationship-model to composite expression.

All three passed Course Package validation, 14-point audit, `--require-ready`, state-machine regression, and full offline browser E2E before release.

## u1.chain

Grounded in textbook pp.10-12. The source example has 2 bookcases, 4 shelves per case, and 224 books, asking for books per shelf. The pedagogical emphasis is not “divide twice” but explicitly naming the intermediate total number of shares.

Flow structure:

- identify the total number of shares (`2×4=8` shelves);
- divide total quantity by total shares (`224÷8=28`);
- formalize that each division step removes one layer of grouping and must name what is being divided out.

Fresh independent evidence: 900 books across 6 grades with 3 classes each. Transfer: 150 tablets, 3 doses per day, 2 tablets per dose.

The existing generic `relation` renderer was sufficient; no new renderer or DSL operator was required.

## u3.one

Grounded in textbook pp.54-56. The main example uses 3 notebooks for 18 yuan and asks for 5 notebooks, explicitly teaching “unit price stays constant -> first find price per one.” Textbook exercises also include fixed-total redistribution, such as 4 flowerpots per classroom across 24 classrooms, then changing to 6 per classroom.

The flow unifies two apparently different patterns by asking what remains invariant:

- unit quantity/rate invariant -> unitize first;
- total quantity invariant -> aggregate/recover total first, then redistribute.

Fresh independent evidence: fixed trip distance with 85 km/h for 8 h, then return in 10 h. Transfer: water level drops 12 cm per 2 h; determine time for 120 cm.

Again, existing generic relation representation was sufficient.

## u4.model

Grounded in textbook pp.58 and 60-63. The textbook itself uses relationship diagrams before composite expressions.

The flow preserves that dependency chain explicitly:

1. lock the final target;
2. identify required intermediate quantities;
3. compute those quantities in dependency order;
4. only then compress the chain into a composite expression.

The independent task uses the textbook model-store problem: 600 yuan, four 126-yuan airplane models, remaining money used for 48-yuan ship models. A learner who skips the “remaining money” intermediate quantity is repaired and then receives a fresh item before transfer.

The initial Course Package used an objective key named `expression`; the DSL validator rejected it as an executable-looking field. The validator was not relaxed. The key was renamed to neutral `compose`, preserving the safety boundary.

## Runtime integration

- `u1.chain`, `u3.one`, and `u4.model` all register through thin bootstrap files.
- All three reuse existing generic renderer/runtime capabilities.
- `u1.chain` exposed one integration-order bug: its bootstrap initially loaded before `PriceRenderer`. Tests caught the missing dependency; the bootstrap was moved after the renderer without changing the engine.
- `?pedagogyV2=0` restores all three legacy labs.

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 21 package(s)
COURSE AUDIT TEST PASS: 15 ready audit(s)
PACK CHECK PASS: 21 course package(s)
PASS: Phase 4.6 audited u1.chain/u3.one/u4.model production migration plus existing declarative flows.
PASS: offline browser, legacy suite plus Phase 4.6 u1.chain/u3.one/u4.model and existing audited pedagogy flows, resume/mobile/rollback.
```

`learning-flow-engine.js` required no Phase 4.6 changes.
Renderer Registry required no Phase 4.6 additions.
