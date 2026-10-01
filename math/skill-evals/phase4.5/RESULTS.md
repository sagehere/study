# Phase 4.5 — Fourth Small-Batch Production Migration

## Scope

Promoted three new textbook-grounded nodes:

- `u1.invariant.v2` — quotient invariance under simultaneous scaling.
- `u2.cut.v2` — final-boundary reasoning for cutting, joining, and wall-adjacent fencing.
- `u5.code.v2` — segmented digital codes and information-bearing fields.

All three passed Course Package validation, the 14-point pedagogy audit, `--require-ready`, state-machine regression, and offline browser E2E before release.

## u1.invariant

Grounded in textbook pp.13-15. The key source is the exploration table built from `270÷30=9`, comparing `540÷60`, `810÷90`, `54÷6`, and `27÷3`.

Production scope intentionally stays narrower than the legacy node copy: the ready flow teaches only the textbook-supported quotient-invariance rule. It does **not** claim the project's extra remainder-rescaling statement as a textbook conclusion.

The flow diagnoses three conditions explicitly:

- both dividend and divisor must change;
- they must change by the same factor;
- the common multiplier/divisor must be nonzero.

Fresh independent evidence: compare `720÷80` and `72÷8`. Transfer: simplify `3600÷45` by dividing both terms by 5.

## u2.cut

Grounded in textbook pp.25-26, 33, and 40-41. These pages repeatedly require learners to reason about the *final* perimeter/material boundary after cutting, joining, or using a wall as one side of a fence.

A generic `boundaryTrace` renderer was retained from interrupted work after review. It carries no routing logic and accepts arbitrary segment names with `counted`/excluded semantics. Accessibility text states which segments count and which do not.

The flow unifies three misconceptions:

- adding every visible/original edge, including internal seams;
- assuming any cut necessarily makes perimeter longer;
- applying full rectangle perimeter when one or more sides are walls and require no fence material.

Fresh independent evidence: a rectangle with two adjacent wall sides. Transfer: two 3 cm squares joined into one rectangle, excluding the shared seam.

## u5.code

Grounded in textbook pp.82-85. The textbook explicitly treats identity numbers and school numbers as structured information fields rather than numerical magnitude. Its student-code example maps `202603321` to 2026 enrollment, class 03, number 32, male; the final digit uses 1/2 for male/female.

A generic `codeSegments` renderer was retained after review. During validation, its initial argument name `code` was rejected by the executable-field safety rule. The validator was **not** relaxed; the renderer API was renamed to neutral `rawValue`, preserving the DSL safety boundary.

The flow repairs:

- treating code digits as ordinary quantities;
- arbitrary segmentation instead of schema-based segmentation;
- misunderstanding leading zeroes as magnitude rather than fixed-width formatting.

Fresh independent evidence: decode textbook item `202704302`. Transfer: encode “2028 enrollment, class 05, number 07, male” as `202805071`.

## Interruption recovery

A previous interrupted Phase 4.5 attempt left generic renderer files, registry edits, and partial tests in the working tree. Valid generic work was reviewed and reused; duplicate script tags and stale flow/test paths were removed. Course Package design was re-grounded from the textbook rather than inheriting the interrupted draft blindly.

## Acceptance

```text
COURSE PACKAGE VALIDATION PASS: 18 package(s)
COURSE AUDIT TEST PASS: 12 ready audit(s)
PACK CHECK PASS: 18 course package(s)
PASS: Phase 4.5 audited u1.invariant/u2.cut/u5.code production migration plus existing declarative flows.
PASS: offline browser, legacy suite plus Phase 4.5 u1.invariant/u2.cut/u5.code and existing audited pedagogy flows, resume/mobile/rollback.
```

`learning-flow-engine.js` required no Phase 4.5 changes.
