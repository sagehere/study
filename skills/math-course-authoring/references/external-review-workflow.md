# External Professional Review Workflow

## Principle

Internal `ready` means the Course Package passed the project's deterministic authoring and pedagogy audit. It does **not** mean a mathematics-education expert, frontline teacher, curriculum researcher, or classroom trial has approved it.

## Review lifecycle

1. Scaffold a review against the exact current `flowVersion` and canonical package SHA-256.
2. Preserve the reviewer observation and recommendation as review evidence. Do not rewrite reviewer criticism to make it easier to pass.
3. Triage each finding as `pending`, `accepted`, `partially-accepted`, `rejected`, or `deferred`, with rationale.
4. For accepted/partially accepted findings, record affected steps/objectives, `flowVersionPolicy`, learner-session policy, and required regression checks before changing course data.
5. Apply only the approved revision. Preserve stable IDs whenever the construct is unchanged.
6. Bump `flowVersion` whenever the teaching semantics, routing, answer logic, evidence contract, misconception repair, or renderer meaning changes enough that an in-progress saved session should restart. Metadata/audit/review bookkeeping alone does not require a bump.
7. Rerun package validation, pedagogy audit, state-machine regression, browser E2E, and any relevant Skill evals.
8. Close the review against the resolved package version/hash. Keep the historical review record permanently.
9. Regenerate external-review status. A later package change makes an older closed review stale unless it explicitly closes against that resolved package.

## Disposition rules

- `accepted`: implement the recommendation or an explicitly equivalent correction.
- `partially-accepted`: record exactly which part is adopted and which part is not.
- `rejected`: preserve the original observation and document the evidence-based reason for not changing the course.
- `deferred`: state what evidence, classroom trial, renderer capability, or product decision is needed before revisiting.

Professional feedback does not automatically override textbook facts, safety constraints, accessibility requirements, or stronger evidence. Disagreements should remain visible in the review record.

## Release language

Use these distinctions precisely:

- **internally ready**: passed Course Package validation and internal pedagogy audit.
- **external review pending**: no closed professional review covers the current version.
- **externally reviewed (current)**: a closed professional review covers the current package hash/version.
- **review stale after revision**: a prior review exists, but the current package changed afterward.

Never collapse these into a single `ready` claim.
