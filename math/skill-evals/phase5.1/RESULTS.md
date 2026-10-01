# Phase 5.1 — External Professional Review and Revision Readiness

## Why this phase exists

The 26 production Course Packages have passed the project's deterministic Course Package validator and internal pedagogy audit. They have **not yet been reviewed by mathematics-education experts or frontline teachers**. Phase 5 therefore begins by making that limitation explicit and by creating a durable path for later professional feedback and revision.

Internal `ready` is now explicitly defined as an internal engineering/design-quality state, not expert approval.

## New review layer

External professional review is intentionally separate from:

- `meta.authoringStatus`;
- the 14-point internal pedagogy audit;
- automated state-machine tests;
- browser/offline/mobile acceptance.

A review record is bound to the exact `flowVersion` and canonical SHA-256 of the reviewed Course Package.

## Review records

`skills/math-course-authoring/references/external-review.schema.json` and `math/schemas/external-review.schema.json` define a review record containing:

- reviewer role and review context;
- reviewed flow version and package fingerprint;
- findings with category, severity, target, observation, and recommendation;
- project disposition (`pending`, `accepted`, `partially-accepted`, `rejected`, `deferred`) plus rationale;
- revision impact, affected steps/objectives, flow-version policy, learner-session policy, and required checks;
- closure against a resolved package version/hash after internal revalidation.

Reviewer observations are preserved even when the project rejects or defers the recommendation.

## Revision compatibility

Accepted feedback is not applied directly without impact analysis.

Changes to teaching semantics, routing, answer logic, misconception repair, evidence contracts, or renderer meaning must consider a `flowVersion` bump so an in-progress learner session cannot silently continue through a materially different flow.

Metadata/audit/review bookkeeping alone does not require a flow-version bump.

## Automatic current-review status

`math/generate-external-review-status.cjs` computes whether each current production package is actually covered by professional review.

Statuses are:

- `not_reviewed`;
- `review_in_progress`;
- `reviewed_current_no_change`;
- `reviewed_current_after_revision`;
- `review_stale_after_revision`.

A closed review does not remain valid forever: if the Course Package later changes and the review was not closed against the resolved package hash/version, it becomes stale automatically.

## Initial truthful state

```text
Production flows:                         26
Externally reviewed current flows:        0
Not externally reviewed:                 26
Review in progress:                       0
Stale prior reviews:                      0
```

This is expected. The system must not describe these flows as expert-reviewed, teacher-approved, classroom-validated, or professionally endorsed at this stage.

## Skill updates

The `math-course-authoring` Skill now requires:

1. keeping internal readiness separate from external professional review;
2. scaffolding feedback against an exact package snapshot;
3. preserving original reviewer observations;
4. recording disposition and rationale;
5. planning flow/session compatibility before applying accepted feedback;
6. rerunning package, audit, state-machine, browser, and relevant Skill checks after revision;
7. closing review only against the resolved package snapshot.

New Skill resources:

```text
references/external-review-workflow.md
references/external-review.schema.json
scripts/scaffold_external_review.py
scripts/validate_external_review.py
scripts/test_external_review_workflow.py
```

## Deterministic tests

The review workflow self-test verifies:

- deterministic review-round scaffolding;
- binding to current flow version/hash;
- finding target validation;
- current-package coverage;
- detection that a later package change makes the old review stale.

The generated review-status file is also part of the authoring regression gate, so review records or package changes cannot silently leave the status report stale.

## Phase 5 roadmap

```text
Phase 5.1  professional-review/change-management infrastructure   [this phase]
Phase 5.2  release manifest, reproducibility, version/fingerprint freeze
Phase 5.3  end-to-end Skill generation and regeneration acceptance
Phase 5.4  professional-review intake pilot when real feedback arrives
Phase 5.5  revision/revalidation loop using accepted expert/teacher feedback
```

Phase 5.4/5.5 intentionally remain open for real expert and frontline-teacher input rather than simulating professional approval internally.
