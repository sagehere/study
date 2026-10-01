# Audit Report Format v0.1

Produce one JSON object per Course Package.

```json
{
  "auditVersion": "0.1.0",
  "flowId": "u3.speed.v2",
  "revisionRound": 1,
  "scores": {
    "sourceGrounding": 2,
    "knowledgeTypeFit": 2,
    "misconceptionQuality": 2,
    "hintLadder": 2,
    "evidenceIntegrity": 2,
    "transferQuality": 2,
    "rendererFit": 2
  },
  "total": 14,
  "criticalFailures": [],
  "gaps": {
    "source": [],
    "renderer": []
  },
  "findings": [
    {
      "dimension": "evidenceIntegrity",
      "severity": "major",
      "issue": "The repaired item is being reused as independent evidence.",
      "revision": "Add a fresh item before transfer.",
      "resolved": true
    }
  ],
  "decision": "pass",
  "finalRecommendation": "ready",
  "summary": "All ready-gate requirements are satisfied."
}
```

## Decision semantics

- `pass`: total >=12, no critical failures, and no unresolved major/critical findings. The package may still remain `draft` when a disclosed noncritical gap prevents ready status.
- `revise`: the package has fixable quality failures. Apply findings, increment `revisionRound`, and audit the revised package again.
- `blocked`: progress depends on missing source evidence, a renderer/runtime capability, or another external requirement that should not be hallucinated.

## Findings

Use `severity` = `minor`, `major`, or `critical`. Findings must name a concrete defect and a concrete revision. After revising, mark old findings `resolved: true`; do not erase the audit trail merely to improve the score.

## Revision loop

Audit from the current package, not from the previous report. Re-score every dimension after each revision. Keep the final audit self-consistent with the final package. Stop after three revision rounds if the gate still does not pass; return the draft and blockers.
