# Phase 3.3 Generalization Results

## u3.speed — 14/14 — PASS

- **Source grounding 2/2:** follows textbook pp.50-51: same-time comparison, same-distance comparison, then average distance per minute and the definition of speed.
- **Knowledge type 2/2:** `quantity-relation` fits because the core is unit rate plus switching the unknown among speed/time/distance.
- **Misconceptions 2/2:** separately diagnoses distance-only comparison, time-only comparison, failure to normalize to unit time, and inverse-operation role errors.
- **Hints 2/2:** attention → fixed quantity → unit-rate calculation → relation, without exposing the formula first.
- **Evidence 2/2:** diagnostic comparisons → unit-rate explanation → inverse unknown → transfer to metres/second.
- **Transfer 2/2:** changes from walking in metres/minute to sound in metres/second.
- **Renderer 2/2 after fix:** `relation` is genuinely reusable after removing its hard-coded “单价数量总价关系” accessibility label.

## u6.estimate — 12/14 — PASS AS DRAFT

- **Source grounding 1/2:** contextual multiplication/estimation is source-related, but the one-sided-bound rule is a pedagogical abstraction from the project node rather than an explicit textbook statement on the inspected pages. The package records this limitation and remains `draft`.
- **Knowledge type 2/2:** `boundary-concept` is a good fit for threshold decisions and “can this estimate guarantee the conclusion?”
- **Misconceptions 2/2:** distinguishes nearest-number habit, wrong estimate direction, estimate-as-exact, and unit/magnitude issues.
- **Hints 2/2:** consistently asks which direction gives an upper/lower guarantee before calculation.
- **Evidence 2/2:** direction diagnostic → upper/lower-bound reasoning → boundary case requiring exact calculation → rule → new budget transfer.
- **Transfer 2/2:** changes from “not enough” lower-bound proof to “enough” upper-bound proof.
- **Renderer 1/2:** existing renderers do not express generic upper/lower bounds cleanly. The Skill correctly reports an `upperLowerBound / threshold` renderer gap instead of misusing `numberLine` or price-specific `budget`.

## u4.reverse — 14/14 — PASS

- **Source grounding 2/2:** uses textbook p.59 mixed-operation error correction and a second fresh item from the same page; transfer uses the bracket contrast from pp.62-63.
- **Knowledge type 2/2:** `procedural` fits the sequence “determine order → find first error → recompute downstream → verify”.
- **Misconceptions 2/2:** distinguishes left-to-right regardless of precedence, fixing only the final line, and trusting an erroneous intermediate result.
- **Hints 2/2:** precedence → first wrong step → recomputation; no premature final-answer leak at H1/H2.
- **Evidence 2/2 after fix:** the first draft reused the repaired example too much; a fresh `110-20×5+25` independent check was added before transfer.
- **Transfer 2/2:** bracket placement changes the operation order rather than merely changing numbers.
- **Renderer 2/2:** no visual renderer is necessary; symbolic step diagnosis is clearer without decorative graphics.

## Conclusion

All three cases meet the 12/14 threshold. Two real weaknesses were found and corrected during blind evaluation: a renderer that was visually generic but semantically hard-coded for accessibility, and a repaired item being used too close to independent evidence. The estimate package intentionally remains a draft because both source grounding and renderer support still have explicit gaps.
