# Phase 4.5 — Fourth Small-Batch Production Migration

## Scope

Promoted three structurally different nodes:

- `u1.invariant.v2` — concept/rule induction: quotient invariance under same nonzero scaling, including remainder-unit restoration as a mathematical extension.
- `u2.cut.v2` — concept/representation: final outer boundary, wall-excluded edges, internal seams, and same-area/different-perimeter reasoning.
- `u5.code.v2` — concept/representation: field-based numeric encoding where digits carry category/time/order semantics rather than ordinary magnitude.

All three passed Course Package validation, 14-point audit, and `--require-ready` before Runtime integration.

## u1.invariant

Grounded in the textbook exploration table around `270÷30=9`, `540÷60`, `810÷90`, `54÷6`, and `27÷3`. The flow delays formalization until the learner has observed both expansion and reduction and has rejected unequal scaling.

The remainder case is explicitly documented as a mathematical extension rather than a quoted textbook rule: when both dividend and divisor are scaled by the same factor, the integer quotient can remain unchanged, but the remainder belongs to the original quantity unit and scales with that unit.

Fresh evidence: `72÷8=9 → 720÷80=9`; transfer: `462÷30=15余12 → 154÷10=15余4`.

## u2.cut

Grounded in the textbook wall-garden, joined-square, composite-fence, and six-unit-square perimeter explorations. The governing strategy is “trace the final relevant outer boundary first, then calculate.”

Added generic `boundaryTrace` renderer. It labels boundary segments as counted or excluded and supports wall edges, internal seams, and other non-counted segments without embedding routing logic or a specific exercise.

Fresh evidence: an L-shaped composite boundary with side lengths 36 m and 18 m; transfer asks how to minimize perimeter for six equal unit squares by maximizing shared edges.

## u5.code

Grounded in the textbook school-numbering example (`202603321`), the decode task (`202704302`), competition numbering, room numbering, and barcode discussion. The flow makes field boundaries explicit before interpretation.

Added generic `codeSegments` renderer, driven only by a raw value and semantic field labels/values. The initial `code` argument name was rejected by the DSL executable-key guard; it was renamed to neutral `rawValue` instead of weakening the validator.

Fresh evidence: decode a new year/category/serial code; transfer reverses the process by encoding year/class/serial/sex into a fixed-field student number.

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 18 package(s)
COURSE AUDIT TEST PASS: 12 ready audit(s)
PACK CHECK PASS: 18 course package(s)
PASS: Phase 4.5 audited u1.invariant/u2.cut/u5.code production migration plus existing declarative flows.
PASS: offline browser, legacy suite plus Phase 4.5 u1.invariant/u2.cut/u5.code and existing audited pedagogy flows, resume/mobile/rollback.
```

`learning-flow-engine.js` required no Phase 4.5 changes.
