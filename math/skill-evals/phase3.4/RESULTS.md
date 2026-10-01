# Phase 3.4 — Self-Audit and Auto-Revision

## Goal

Upgrade the Course Authoring Skill from “generate + deterministic validate” to a closed quality loop:

```text
author
→ deterministic Course Package validation
→ 14-point pedagogy audit
→ revise or block
→ revalidate
→ re-audit
→ ready gate
```

## Implemented quality gate

Seven dimensions are scored 0-2: source grounding, knowledge-type fit, misconception quality, H0-H4 ladder, evidence integrity, transfer quality, and renderer fit. Passing quality is 12/14, but a score cannot override critical failures.

`ready` additionally requires source grounding, evidence integrity, and renderer fit to each score 2; no source/renderer gaps; no unresolved major/critical findings; deterministic validation; fresh independent evidence; transfer evidence; and no TODO placeholders.

## Automated workflow tests

### Case A — revise → ready

A procedural scaffold is intentionally audited with a critical evidence-integrity defect: no fresh independent evidence. The first audit is valid as `decision=revise`, but `--require-ready` rejects it.

The simulated auto-revision adds a fresh independent evidence event, resolves the finding, increments `revisionRound`, re-scores the package to 14/14, changes the package to `authoringStatus=ready`, and passes the ready gate.

### Case B — pass as draft, blocked from ready

A package with total 13/14 and a disclosed renderer gap is valid as a passing draft. The same package fails `--require-ready`, proving that a high score cannot hide an unresolved renderer/runtime gap.

## Safety behavior

- Maximum automatic revision rounds: 3.
- Missing source evidence or renderer/runtime capability is a blocker, not permission to hallucinate.
- Same repaired item is not independent evidence.
- Stable IDs and already-correct evidence should survive revision.
- Audit reports retain resolved findings rather than erasing the revision history.

## Test results

```text
Skill is valid!
COURSE PACKAGE VALIDATION PASS: 4 package(s)
SKILL AUTHORING TEST PASS: 4 templates, stable IDs, validator negative case
SKILL AUDIT WORKFLOW TEST PASS: revise -> ready and pass-as-draft blocker gates
```
