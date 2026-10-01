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

## Creating a new package

Generate a draft outside the official package directory:

```bash
node math/create-course-package.cjs \
  --type procedural \
  --course sujiao-math-2026 \
  --unit u1 \
  --node example \
  --title "示例知识点"
```

The default output is `math/course-drafts/`, which is ignored by Git. The scaffold contains stable objective/misconception IDs and an appropriate flow shape, but it is intentionally marked `draft`.

A draft must be authored and reviewed before publication. When complete, set `meta.authoringStatus` to `ready`, validate it, then move/publish it into `course-packages/`. Official packaging refuses invalid packages and official validation rejects a package still marked `draft`.

For tooling changes, run:

```bash
node math/test-course-authoring.cjs
node math/validate-course-packages.cjs --self-test
```
