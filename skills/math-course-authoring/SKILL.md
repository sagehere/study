---
name: math-course-authoring
description: Author and validate declarative Course Package JSON for offline primary-math learning flows. Use when ChatGPT needs to turn textbook sections, knowledge nodes, lesson goals, or existing math content into the project's Course Package format; classify a node as procedural, concept-representation, quantity-relation, or boundary-concept; define objectives, misconceptions, H0-H4 hints, repair paths, transfer evidence, variants, and renderer declarations; or review/fix an existing Course Package against the schema and authoring contract. Do not use for runtime tutoring or arbitrary JavaScript generation.
---

# Math Course Authoring

Create textbook-grounded, declarative Course Packages for the offline learning engine. Keep course knowledge in JSON and keep executable logic out of course data.

## Workflow

1. **Ground the node in source material.** Read the relevant textbook/content section before authoring. Extract the exact concept, prerequisite, representations, examples, terminology, and likely error patterns. Do not invent textbook claims or page references.
2. **Choose one knowledge type.** Read `references/knowledge-types.md` and select `procedural`, `concept-representation`, `quantity-relation`, or `boundary-concept`. If none fits, explain the gap instead of inventing a fifth type silently.
3. **Create a scaffold.** Run `scripts/scaffold_course_package.py` with course/unit/node/type. Use the generated stable IDs; do not renumber released IDs casually.
4. **Replace every placeholder with real teaching design.** Write objectives, misconceptions, prompts, choices, H0-H4 hints, transitions, evidence effects, independent checks, and transfer tasks. Prefer one main cognitive action per step.
5. **Design repair, not generic retry.** Route identifiable misconceptions to targeted repair. After strong scaffolding, require a fresh or changed item before counting independent mastery.
6. **Formalize after evidence.** Do not expose the final rule before the learner has produced enough observations/reasoning. A correct answer with an invalid reason is not full understanding.
7. **Select renderers conservatively.** Use only names from `references/renderer-registry.json`. If no renderer fits, omit the visual or report that a renderer extension is required; never invent an unregistered renderer.
8. **Keep the DSL non-executable.** Follow `references/authoring-contract.md`. Never add scripts, expressions, JavaScript URLs, `eval`, `new Function`, or arbitrary code-bearing fields.
9. **Validate deterministically.** Run `scripts/validate_course_package.py <package.json>`. Fix every error before returning a package. For multiple packages, validate them together so shared-ID rules can be checked.
10. **Return the package plus a short audit.** State the knowledge type, major objectives, targeted misconceptions, independent/transfer evidence, and any renderer or source gaps. Do not claim `ready` status if substantive TODOs or unresolved source questions remain.

## Teaching rules

- Diagnose before explaining when a compact diagnostic can reveal prior knowledge.
- Use the cycle: **predict/judge → act/compare → notice conflict → explain → formalize → independent → transfer** when appropriate; do not force every function into a separate screen.
- Prefer concrete/visual representations when they do cognitive work, then connect them to quantities, equations, and mathematical language.
- Use H0-H4 as least-help-first: H0 no help; H1 attention direction; H2 key relation/representation; H3 partial worked support; H4 full worked support. H3/H4 evidence is not independent mastery.
- Track the misconception or objective being repaired; do not reset unrelated evidence.
- Mastery evidence should distinguish correctness, independence, reasoning, transfer, and delayed retention when available.
- Keep feedback actionable and avoid leaking the next strategy in “correct” feedback.

## Package contract

Read these only as needed:

- `references/authoring-contract.md` — stable IDs, effects, templates, versions, and publish rules.
- `references/course-package.schema.json` — machine-readable structural contract.
- `references/renderer-registry.json` — allowed renderer names.
- `references/knowledge-types.md` — four knowledge-type decision guide and flow shapes.
- `references/examples.md` — compact examples distilled from the four validated pilot families.
- `references/templates/*.json` — reusable scaffold metadata used by the scaffold script.

## Output expectations

Prefer a single valid JSON object as the primary artifact. Keep `meta.authoringStatus` as `draft` until the content is genuinely authored and reviewed. Set it to `ready` only when source grounding, misconception design, hints, independent evidence, transfer evidence, renderer declarations, and validation all pass.
