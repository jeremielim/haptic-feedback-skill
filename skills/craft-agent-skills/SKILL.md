---
name: craft-agent-skills
description: Create, revise, package, or evaluate agent skills that use a SKILL.md file and optional scripts, references, or assets. Use when defining a skill's scope and trigger description, writing concise instructions, choosing resources, or designing and running skill evaluations. Do not use for a one-off prompt, general documentation, or ordinary code changes that do not create or improve a reusable agent skill.
---

# Craft Agent Skills

Build skills that add a durable capability or encode a real workflow preference. Optimize for reliable invocation and useful outcomes, not for exhaustive documentation.

## Shape the skill

1. Identify the user requests that should trigger the skill, nearby requests that must not trigger it, and 2–3 representative outcomes.
2. Classify the skill:
   - **Capability:** bridge a task the base model cannot do reliably.
   - **Preference:** encode a team, product, or workflow convention that must stay aligned with reality.
3. Write the frontmatter description first. State both the work performed and concrete user contexts that require it; include meaningful exclusions when the boundary is easy to confuse.
4. Keep `SKILL.md` focused on non-obvious, actionable guidance. Use directives, concise examples, and a short rationale where it helps the agent generalize. Remove background facts the agent does not need to act.
5. Match the amount of prescription to the risk:
   - State goals and constraints when multiple approaches can succeed.
   - Supply a pattern or pseudocode when a preferred approach exists.
   - Provide a tested script when ordering is fragile or the operation must be deterministic.
6. Use progressive disclosure. Keep the body under 500 lines; move conditional or detailed material into one-level-deep `references/`, reusable deterministic work into `scripts/`, and output files/templates into `assets/`.

Do not turn a flexible task into a brittle step-by-step recipe. State required outcomes and guardrails instead. Do not use a skill as a substitute for a script when exact sequencing is essential.

## Package the skill

- Use lowercase hyphen-case for the folder and frontmatter `name`.
- Include only `SKILL.md` plus resources that the agent needs repeatedly. Do not add a README, changelog, or process notes.
- Add UI metadata only when the host supports it; ensure it agrees with the current trigger description.
- Validate the package with the host's skill validator before handing it off.

## Evaluate before shipping

Define success before changing instructions. Grade results rather than the agent's exact route: verify that the result works, follows essential conventions, and uses resources efficiently.

Read [references/evaluation.md](references/evaluation.md) before designing an evaluation suite or interpreting results.

Begin with a few manual runs to expose hidden assumptions. Then use a small prompt set drawn from real work, including positive, negative, and edge cases. Run each case in a clean environment three to five times; evaluate distributions, not a single lucky run. Fix a mistimed trigger by improving the description before expanding the body.

## Deliverable

Provide the skill folder and a compact handoff that states:

- Trigger boundary: representative positive and negative prompts
- Required resources and why each exists
- Evaluation cases, success criteria, trial count, and results
- Known limitations or dependencies
- Whether the skill outperforms the same evaluation without the skill

Retire a capability skill when the unloaded baseline meets the required outcome reliably. Revalidate preference skills whenever the underlying workflow changes.
