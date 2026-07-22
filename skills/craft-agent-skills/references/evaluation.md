# Skill evaluation

## Success criteria

Define measurable outcome checks before writing the evaluation. Use three dimensions when relevant:

- **Works:** a usable artifact, valid API result, passing test, or rendered output exists.
- **Conforms:** required conventions, APIs, policy constraints, and exclusions are respected.
- **Efficient:** retries, tool calls, tokens, and elapsed time remain proportionate to the task.

Prefer file existence, compilation, tests, parsing, API assertions, and focused pattern checks. Add a structured model judge only for criteria that cannot be checked deterministically; keep its rubric narrow and record its notes.

## Prompt set

Start with 10–20 realistic cases. Give every case its own acceptance criteria. Include:

- Core tasks the skill is expected to solve
- Edge cases and requests that conflict with a guardrail
- Requests covering supported variants or languages
- Negative controls that must not select the skill

Keep the prompt phrased as a user would phrase it. Do not embed the intended solution in the test prompt.

Use a portable case shape such as:

```json
{
  "id": "create_basic_skill",
  "prompt": "Create a skill for our deployment review process.",
  "should_trigger": true,
  "expected_checks": ["valid_frontmatter", "specific_trigger", "negative_boundary"],
  "prohibited_outcomes": ["generic_description"],
  "notes": "Require a valid, reusable skill package."
}
```

For negative controls, assert `should_trigger: false` through the host's trace or skill-selection signal when available. Also verify that the answer remains appropriate without applying the skill.

## Execution and scoring

1. Run several exploratory manual invocations. Turn each observed failure into a candidate case or check.
2. Run every case in a fresh workspace or equivalent isolated context. Do not let artifacts, conversation context, or prior outputs leak into the next run.
3. Execute three to five trials per case. Save the output, outcome checks, selection signal, runtime, and tool/token measurements when available.
4. Report each case's pass rate and the aggregate distribution. Investigate consistent failures and costly regressions.
5. Run the same suite with the skill unavailable. Use this baseline to measure whether a capability skill still adds value.

Do not score an agent down for choosing a different valid approach. Fail it only when a required outcome or constraint is missed. When selection is wrong, tighten the description before adding more instructions. When behavior is wrong despite correct selection, replace passive guidance with an explicit directive or a deterministic helper.

## Regression policy

Keep cases that caught real failures. Add a case for every user-reported defect. Once a capability suite is consistently strong, use it as a regression suite; periodically repeat the unloaded baseline and retire the skill if it no longer adds measurable value.
