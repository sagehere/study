# Course Packages

This directory is the source of truth for declarative learning content.

## Authoring workflow

1. Edit or add a `*.json` package here.
2. Run `node math/validate-course-packages.cjs`.
3. Optionally run `node math/validate-course-packages.cjs --self-test` when changing validator/schema rules.
4. Run `node math/pack-course-packages.cjs` to regenerate the offline data bundle.
5. Run `node math/pack-course-packages.cjs --check` in CI/review to ensure the bundle is current.
6. Run `node math/检查数学闯关.cjs --pedagogy` and `node math/检查数学闯关.cjs --browser` before release.

Do not edit `course-packages.generated.js` manually.

## Separation of responsibilities

- Course Package: teaching content, objectives, misconceptions, steps, hints, transitions, effects, variants and renderer declarations.
- Renderer: visual/interactive representation only; it must not decide pedagogy routing.
- Flow Engine: executes validated flow semantics and learner-state effects.
- Authoring Validator: rejects malformed or unsafe content before packaging.

## Template syntax

Only plain substitutions are allowed:

- `{{variant.field}}`
- `{{course.field}}` for fields declared in `meta`

Expressions, operators and function calls are not allowed.

## IDs and compatibility

Treat `flowId`, objective IDs, misconception IDs and step IDs as persistent data contracts. Changing `flowVersion` causes incompatible saved sessions to restart safely while retained learning evidence remains separate.
