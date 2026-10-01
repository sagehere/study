# Course Package Authoring Contract v0.1

## Purpose
Course Package is declarative data. It may describe learning flow, content, evidence, misconception repair, hints, variants and renderer calls, but it must not contain executable JavaScript.

## Stable identifiers
- `flowId`: lowercase dot/dash identifier, e.g. `u3.price.v2`.
- objective IDs: `O-...`, stable once released. A unit may intentionally share one objective across multiple node flows.
- misconception IDs: `M-...`, stable once released. IDs may be shared within one unit when the misconception is genuinely the same construct; reuse across units is forbidden.
- step IDs are local to a flow but must remain stable while learner sessions may exist.

## Hints
Every authored step that exposes hints uses exactly five slots: H0-H4. H0 is normally an empty string. H4 is the highest scaffold and schedules review unless `reviewOnH4` is false.

## Transitions and effects
Transitions may match a literal answer, `*`, or `variantAnswer`. Allowed effects are:
- `emit`
- `markObjective`
- `markMisconception`
- `resolveMisconception`
- `scheduleReview`
- `assignVariant`
- `clearVariant`
- `setFlag`

Arbitrary expressions, scripts, `eval`, `new Function`, JavaScript URLs and executable fields are forbidden.

## Renderers
Course data refers to a renderer by registered name. Arguments are data only. `visuals[]` may compose multiple registered renderer calls in order.

## Templates
Only `{{variant.<field>}}` and `{{course.<field>}}` placeholders are allowed. Templates are string substitution only; expressions, calls and operators are forbidden.

## Versioning
- `packageVersion`: authoring container format; current value `0.1.0`.
- `schemaVersion`: learner-state/schema compatibility; current value `0.2`.
- `flowVersion`: semantic version for the flow. Change it when saved sessions should restart safely because flow semantics changed.

## Authoring status
- `draft`: scaffold or incomplete teaching design; never present it as production-ready.
- `ready`: source-grounded, fully authored, validated, and reviewed.

## Publication quality gate
Before marking `ready`, verify: source grounding; stable IDs; no TODO placeholders; targeted misconceptions; H0-H4 quality; independent evidence; transfer evidence; renderer names; all transition targets; no dead ends; and deterministic validation.
