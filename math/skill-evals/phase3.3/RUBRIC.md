# Phase 3.3 Course Authoring Skill Generalization Rubric

Each dimension is scored 0-2. Passing score: **12/14**. A package also fails immediately if it contains a textbook-fact error, uses a semantically wrong renderer, treats heavily scaffolded work as independent mastery, or claims `ready` while source questions remain.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Source grounding | invented/contradictory | partly grounded; gaps disclosed | sequence, terms, examples and claims trace to source |
| Knowledge-type fit | wrong type distorts flow | workable but stretched | type matches the main cognitive difficulty |
| Misconception quality | generic wrong/correct | plausible but broad | specific, observable misconception with targeted repair |
| H0-H4 ladder | leaks answer / not progressive | mostly progressive | least-help-first and H4 followed by fresh evidence |
| Evidence integrity | correctness only | some reasoning/independence | diagnostic → repair → fresh independent → transfer |
| Transfer quality | near-duplicate only | context change only | requires same construct under changed representation/unknown/context |
| Renderer fit | misleading/semantically wrong | renderer gap correctly reported / visual omitted | existing renderer is semantically reusable, including accessibility text |

## Critical checks

- Do not infer textbook claims from the legacy app alone.
- A corrected version of the same item is not independent evidence.
- Reusing a renderer requires checking visible labels **and** `aria-label`/captions.
- If source support is incomplete, keep `authoringStatus: draft` and record the gap.
