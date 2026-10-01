---
name: math-course-authoring
description: Author, audit, revise, and validate declarative Course Package JSON for offline primary-math learning flows. Use when ChatGPT needs to turn textbook sections, knowledge nodes, lesson goals, or existing math content into the project's Course Package format; classify procedural, concept-representation, quantity-relation, or boundary-concept nodes; design objectives, misconceptions, H0-H4 hints, repair, independent/transfer evidence, variants, and renderer declarations; or review/fix an existing Course Package and produce a scored pedagogy audit. Do not use for runtime tutoring or arbitrary JavaScript generation.
---

# Math Course Authoring

Create textbook-grounded, declarative Course Packages for the offline learning engine. Keep course knowledge in JSON and executable logic out of course data.

## Mandatory workflow

1. **Ground the node in source material.** Read the relevant textbook/content section before authoring. Extract exact concepts, prerequisites, representations, examples, terminology, and likely error patterns. Do not invent textbook claims or page references. If an important teaching rule comes from project design rather than the inspected source, record that distinction and keep the package `draft` until reviewed.
2. **Choose one knowledge type.** Read `references/knowledge-types.md` and select `procedural`, `concept-representation`, `quantity-relation`, or `boundary-concept`. If none fits, report the capability gap instead of silently inventing another type.
3. **Create a scaffold.** Run `scripts/scaffold_course_package.py` with course/unit/node/type. Preserve generated stable IDs unless a verified contract error requires changing them.
4. **Author the teaching flow.** Replace every placeholder with source-grounded objectives, misconceptions, prompts, choices, H0-H4 hints, transitions, evidence effects, independent checks, transfer tasks, and only necessary representations. Prefer one main cognitive action per step.
5. **Design repair, not generic retry.** Route observable misconceptions to targeted repair. A corrected version of the same item is repair evidence, not independent evidence. After strong help, require a genuinely fresh item before counting independent mastery.
6. **Formalize after evidence.** Do not expose the final rule before the learner has produced enough observations/reasoning. A correct answer with an invalid reason is not full understanding.
7. **Select renderers conservatively.** Use only names from `references/renderer-registry.json`. Check visual labels, captions, and accessibility semantics such as `aria-label`. If no renderer fits, omit the visual and report a renderer gap; never invent an unregistered renderer.
8. **Keep the DSL non-executable.** Follow `references/authoring-contract.md`. Never add scripts, expressions, JavaScript URLs, `eval`, `new Function`, or arbitrary code-bearing fields.
9. **Run deterministic package validation.** Execute `scripts/validate_course_package.py <package.json>`. Fix every structural/semantic error before pedagogy scoring.
10. **Run the pedagogy audit.** Read `references/audit-rubric.md` and `references/audit-report-format.md`. Score all seven dimensions 0-2, record critical failures, source/renderer gaps, and actionable findings in an audit JSON.
11. **Validate the audit report.** Run `scripts/validate_audit_report.py <package.json> <audit.json>`. The script checks score arithmetic, decision consistency, ready/draft gating, package validity, and evidence-event prerequisites.
12. **Revise automatically when the audit says `revise`.** Apply findings in priority order: critical → major → minor. Preserve stable IDs and already-correct evidence. Re-run package validation, re-audit from the revised package, increment `revisionRound`, and validate the new audit. Run at most three revision rounds; if unresolved after that, return a `draft` with explicit blockers instead of lowering standards.
13. **Stop rather than hallucinate when `blocked`.** Missing source evidence, an unavailable renderer, or a DSL/runtime capability gap is not solved by inventing facts or misusing a renderer. Keep the package `draft`, describe the gap, and state what external change is needed.
14. **Promote to `ready` only through the gate.** Set `meta.authoringStatus` to `ready` only after the audit supports it, then run `scripts/validate_audit_report.py <package.json> <audit.json> --require-ready`. If the gate fails, revert to `draft` and revise or report the blocker.
15. **Return both artifacts.** Return the Course Package JSON and audit JSON, plus a short summary of knowledge type, objectives, misconceptions, independent/transfer evidence, revision rounds, score, and unresolved gaps.

## Teaching rules

- Diagnose before explaining when a compact diagnostic can reveal prior knowledge.
- Use **predict/judge → act/compare → notice conflict → explain → formalize → independent → transfer** when appropriate; do not force each function onto a separate screen.
- Prefer concrete/visual representations when they do cognitive work, then connect them to quantities, equations, and mathematical language.
- Use H0-H4 as least-help-first: H0 no help; H1 attention direction; H2 key relation/representation; H3 partial worked support; H4 full worked support. H3/H4 evidence is not independent mastery.
- Repair the current misconception/objective without resetting unrelated evidence.
- Distinguish correctness, independence, reasoning, transfer, and delayed retention when evidence is available.
- Keep feedback actionable and avoid leaking the next strategy in “correct” feedback.

## References and scripts

Read these only as needed:

- `references/authoring-contract.md` — stable IDs, effects, templates, versions, and publish rules.
- `references/course-package.schema.json` — machine-readable Course Package structure.
- `references/renderer-registry.json` — allowed renderer names.
- `references/knowledge-types.md` — four knowledge-type decision guide and flow shapes.
- `references/examples.md` — compact patterns distilled from validated pilots.
- `references/audit-rubric.md` — seven-dimension 14-point pedagogy quality gate and critical failures.
- `references/audit-report-format.md` — required audit JSON fields and decision semantics.
- `references/audit-report.schema.json` — machine-readable audit report structure.
- `references/templates/*.json` — reusable scaffold metadata.
- `scripts/scaffold_course_package.py` — deterministic scaffold and stable-ID generation.
- `scripts/validate_course_package.py` — deterministic Course Package validator.
- `scripts/validate_audit_report.py` — deterministic audit/gate validator.

## Output expectations

Use the Course Package JSON as the primary artifact and a companion audit JSON. Keep `meta.authoringStatus` as `draft` until source grounding, misconception design, H0-H4, fresh independent evidence, transfer evidence, renderer semantics, deterministic validation, and the audit gate all support `ready`. Never hide a lower score or unresolved gap by changing the audit wording.
