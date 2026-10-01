# Pedagogy Audit Rubric v0.1

Score each dimension **0-2**. Passing quality is **12/14 or higher**, but score alone never overrides a critical failure or a source/renderer gap.

| Dimension key | 0 | 1 | 2 |
|---|---|---|---|
| `sourceGrounding` | invented/contradictory | partly grounded; gaps disclosed | sequence, terms, examples, and claims trace to inspected source |
| `knowledgeTypeFit` | wrong type distorts flow | workable but stretched | type matches the main cognitive difficulty |
| `misconceptionQuality` | generic wrong/correct | plausible but broad | specific observable misconception with targeted repair |
| `hintLadder` | answer leak / not progressive | mostly progressive | H0-H4 is least-help-first and strong help is followed by fresh evidence |
| `evidenceIntegrity` | correctness only | some reasoning/independence | diagnostic → targeted repair → fresh independent → transfer |
| `transferQuality` | near-duplicate only | context/number change only | same construct under changed representation, unknown, or context |
| `rendererFit` | misleading or semantically wrong | gap correctly reported / visual omitted | renderer is cognitively useful and semantically reusable, including accessibility text |

## Critical failures

Any of these prevents a `pass` decision until fixed:

- textbook/source fact invented or contradicted;
- semantically wrong or misleading renderer;
- heavily scaffolded or same repaired item counted as independent mastery;
- final rule leaked before the evidence it is supposed to formalize;
- `ready` claimed while source questions, renderer gaps, TODOs, or known major findings remain;
- executable/unsafe Course Package content or bypass of deterministic validation.

## Ready gate

`ready` requires all of the following:

- deterministic Course Package validation passes;
- audit total >= 12;
- no critical failures;
- no unresolved major/critical findings;
- `sourceGrounding = 2`;
- `evidenceIntegrity = 2`;
- `rendererFit = 2`;
- no source or renderer gaps;
- package contains fresh independent evidence and transfer evidence;
- package contains no TODO placeholders.

A package may **pass as draft** at >=12 while still having a disclosed noncritical source/renderer gap. In that case `finalRecommendation` must remain `draft`.
