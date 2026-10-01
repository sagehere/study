# Phase 4.7 — Migration Inventory

## Summary

- Total legacy knowledge nodes: **26**
- Production Course Packages: **26**
- Production packages with ready audit: **20**
- Production packages missing formal audit: **6**
- Nodes not yet migrated: **0**

## 26-node inventory

| Node | Status | Knowledge type | Renderer / gap | Grounding | Planned batch |
|---|---|---|---|---|---|
| `u1.trial` | 正式包存在，但缺正式 audit | 待补 | 已接入/由现有包定义 | 待核 | — |
| `u1.vertical` | 正式迁移 + ready audit | procedural | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u1.invariant` | 正式迁移 + ready audit | concept-representation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u1.chain` | 正式迁移 + ready audit | quantity-relation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u2.meaning` | 正式包存在，但缺正式 audit | 待补 | 已接入/由现有包定义 | 待核 | — |
| `u2.formula` | 正式包存在，但缺正式 audit | 待补 | 已接入/由现有包定义 | 待核 | — |
| `u2.units` | 正式迁移 + ready audit | concept-representation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u2.cut` | 正式迁移 + ready audit | concept-representation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u2.change` | 正式迁移 + ready audit | concept-representation | rect / sideSum（预计可复用） | 已在正式包记录 | — |
| `u3.inverse` | 正式迁移 + ready audit | quantity-relation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u3.price` | 正式包存在，但缺正式 audit | 待补 | 已接入/由现有包定义 | 待核 | — |
| `u3.speed` | 正式迁移 + ready audit | quantity-relation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u3.one` | 正式迁移 + ready audit | quantity-relation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u4.order` | 正式迁移 + ready audit | procedural | 无必要 | 已在正式包记录 | — |
| `u4.bracket` | 正式迁移 + ready audit | procedural | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u4.model` | 正式迁移 + ready audit | quantity-relation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u4.reverse` | 正式迁移 + ready audit | procedural | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u5.place` | 正式迁移 + ready audit | concept-representation | placeValueGroups（预计可复用） | 已在正式包记录 | — |
| `u5.read` | 正式迁移 + ready audit | concept-representation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u5.compare` | 正式迁移 + ready audit | concept-representation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u5.round` | 正式包存在，但缺正式 audit | 待补 | 已接入/由现有包定义 | 待核 | — |
| `u5.code` | 正式迁移 + ready audit | concept-representation | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u6.multiply` | 正式包存在，但缺正式 audit | procedural | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u6.estimate` | 正式迁移 + ready audit | boundary-concept | 已接入/由现有包定义 | 已在正式包记录 | — |
| `u6.calculator` | 正式迁移 + ready audit | procedural | 无必要；重点在输入检查/分步验证 | 已在正式包记录 | — |
| `u6.pattern` | 正式迁移 + ready audit | concept-representation | rect / tileRows；可能需新 pattern decomposition renderer | 已在正式包记录 | — |

## Remaining migration plan

All legacy nodes now have production Course Packages.

## Audit backfill before Phase 5

The following production packages predate the Phase 3.4 audit gate and must receive formal audit reports before Phase 5:

- `u1.trial` (u1-trial.json)
- `u2.meaning` (u2-meaning.json)
- `u2.formula` (u2-formula.json)
- `u3.price` (u3-price.json)
- `u5.round` (u5-round.json)
- `u6.multiply` (u6-multiply.json)

Phase 5 entry criterion: **26/26 production packages, 26/26 deterministic package validation, and 26/26 ready audits (or an explicitly documented blocker with no fake-ready status).**
