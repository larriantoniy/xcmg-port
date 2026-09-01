# Controlled manual SEO experiments

This directory is only for real controlled manual SEO experiments.

```text
OBSERVATION
↓
EVIDENCE
↓
HYPOTHESIS
↓
BASELINE
↓
PROPOSED CHANGE
↓
HUMAN APPROVAL
↓
IMPLEMENTATION
↓
GIT COMMIT
↓
DEPLOY
↓
POST-DEPLOY VALIDATION
↓
OBSERVATION WINDOW
↓
MEASUREMENT
↓
VERDICT
↓
LEARNING
```

## Rules

1. An SEO experiment must start from an observation supported by evidence.
2. LLM opinion without evidence is a hypothesis, not a fact.
3. A production change is not automatically an experiment.
4. A metric changing after a deploy does not prove causation.
5. Lack of evidence of improvement is not success.
6. If there is not enough data for a conclusion: `INSUFFICIENT_DATA`.
7. Significant production changes require human approval.
8. `SEO-EXP-001` must not be created until a concrete evidence-based opportunity exists.
