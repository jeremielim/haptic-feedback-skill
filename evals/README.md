# Skill evaluations

Run `npm run test:skills` to validate suite structure. Run every case through the target agent in a
clean session three times, then grade the listed outcomes from the response and emitted artifacts.
Record failures as new cases or tighter instructions; do not grade an agent on an arbitrary workflow
when it achieves the requested outcome another way.

The JSON suites are agent-agnostic by design. An execution harness must preserve each prompt exactly,
load only the named skill, isolate cases, and retain outputs and token/time data for comparison.
