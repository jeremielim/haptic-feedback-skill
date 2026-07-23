---
name: cognitive-bias-design
description: Identify human cognitive biases that may shape a product, service, interface, research finding, or team design decision; evaluate their likely effects and confidence; and design ethical changes that improve comprehension, agency, decision quality, and user outcomes. Use for bias audits, behavioral design and choice architecture, critiques of onboarding, pricing, defaults, recommendations, notifications, settings, checkout, retention, offboarding, or decision-making processes. Also use to assess and safely redirect requests that propose exploiting human biases through deception, coercion, dark patterns, or vulnerable-user targeting. Do not use as the primary workflow for algorithmic/statistical bias, clinical diagnosis, or academic literature reviews.
---

# Cognitive Bias Design

Treat a bias as a testable explanation, not a label that proves why someone behaved a certain way. Use the catalog to sharpen a design decision, not to decorate a critique with terminology.

## Choose the mode

- **Identify:** Find the few biases most plausibly active in a decision or experience.
- **Evaluate:** Assess an existing proposal, outcome, or design choice for benefits, harms, and confidence.
- **Design:** Generate or revise an approach using bias-aware safeguards and supports.
- **Combined:** Identify, evaluate, and recommend when the user asks for an audit or provides no mode.

Match the depth to the request. For a narrow question, return a concise answer rather than the full audit.

## Frame the decision

Establish the following from supplied context. State material assumptions and continue when they are safe; ask one focused question only when a missing fact would change the direction substantially.

- **Actor:** Who makes the decision—user, customer, designer, researcher, reviewer, or team?
- **Goal:** What outcome is that actor trying to achieve?
- **Decision moment:** What judgment, choice, or recollection matters?
- **Options and presentation:** What is shown, hidden, ordered, preselected, repeated, or socially endorsed?
- **Context:** What do people know, own, expect, feel, or risk at that moment?
- **Evidence:** What is observed in research or data, and what is only inferred?
- **Stakes:** How consequential, reversible, and sensitive is the choice?

Audit both sides when relevant:

1. **Experience-side bias:** How the design may shape the user's judgment or action.
2. **Decision-maker bias:** How researchers, designers, or stakeholders may misread evidence or defend a prior choice.

## Build a bias shortlist

Read [references/bias-catalog.md](references/bias-catalog.md) when identifying candidate biases or proposing bias-specific changes.

1. Trace the decision through **attention → interpretation → choice → action → memory**.
2. Select three to five candidates whose mechanisms fit a concrete cue. Use fewer when one explanation is clearly sufficient.
3. For every candidate, record:
   - the design or context cue;
   - the predicted effect;
   - supporting observation, if any;
   - at least one alternative explanation or counterfactual.
4. Remove candidates supported only by a keyword, a generic demographic assumption, or the outcome itself.
5. Distinguish overlapping mechanisms instead of listing synonyms:
   - **Default effect** concerns a preselected option; **status quo bias** concerns preserving the current state.
   - **Social proof** uses evidence of others' actions; **bandwagon effect** emphasizes adoption because something appears popular.
   - **Present bias** describes disproportionate preference for now; **hyperbolic discounting** describes the steep, time-inconsistent discount pattern.
   - **Peak-end rule** concerns the peak and ending; **duration neglect** concerns underweighting duration.
   - **Focusing effect** overweights one feature; the source catalog's **focusing illusion** is used here as an attention-scarcity reminder that the product is only one part of the user's life.

Do not assume the supplied catalog ranks empirical strength. Some entries are overlapping labels or practical observations. For high-stakes claims, recommend domain research or behavioral testing.

## Evaluate the effects

Use qualitative ratings unless reliable measurements justify numbers.

| Dimension | Question |
| --- | --- |
| Mechanism fit | Is there a specific cue that could produce this effect? |
| Evidence confidence | Is the effect observed, plausible from context, or speculative? |
| Expected influence | Could it materially change attention, understanding, choice, action, or memory? |
| User alignment | Does the effect help people achieve their stated goal or mainly help the business metric? |
| Welfare risk | Could it cause financial, privacy, health, time, emotional, or opportunity harm? |
| Equity risk | Could vulnerability, language, disability, expertise, or resource constraints amplify harm? |
| Agency | Is the choice informed, voluntary, easy to reverse, and free of unreasonable friction? |

Label confidence:

- **Observed:** Direct research or behavior supports the mechanism in this context.
- **Plausible:** The cue and mechanism fit, but contextual evidence is incomplete.
- **Speculative:** The explanation is possible but weak or confounded.

Use only **Observed**, **Plausible**, or **Speculative** in the confidence field; do not substitute high, medium, or low.
Rate evidence for the **predicted behavioral effect in this specific context**, not certainty that the cue exists, the bias name fits, or the team stated an intent. An observed cue is not an observed bias effect. Without contextual research or behavior, the maximum confidence is **Plausible**; use **Speculative** when the relevant design cue itself was not supplied.

Prioritize findings with strong mechanism fit and meaningful user impact. Do not rank a speculative high-harm scenario as fact; flag it for validation.

## Design an ethical response

Choose the response based on the user's goal:

- **Reduce distortion:** Clarify probabilities, total costs, tradeoffs, consequences, and uncertainty.
- **Support follow-through:** Use reminders, progress, defaults, or timely feedback only when they serve a goal the user chose.
- **Preserve agency:** Make defaults visible, alternatives comparable, and reversal or exit easy.
- **Improve decision quality:** Reduce irrelevant options, separate evidence from endorsements, and expose base rates or assumptions.
- **Improve the team's process:** Blind sources where useful, record pre-decision reasoning, seek disconfirming evidence, and review outcomes separately from decision quality.

For each recommendation, state:

1. **Change:** The concrete design or process revision.
2. **Mechanism:** Which bias-related cue it changes and why.
3. **User benefit:** The intended improvement to comprehension, agency, or outcomes.
4. **Safeguard:** How to prevent coercion, deception, or unintended harm.
5. **Validation:** What comparison and measures would confirm the improvement.

Never recommend fake scarcity, fabricated social proof, hidden defaults, misleading decoys, obscured total prices, guilt-based cancellation friction, or targeting people when their capacity is impaired. If asked to exploit a bias, decline that tactic briefly and offer a transparent alternative that supports the user's stated intent.

## Validate the design decision

Compare the proposal with a neutral or current baseline. Test the mechanism, not just the surface treatment.

- Measure comprehension, decision confidence, task success, error recovery, and later regret or reversal.
- Include business outcomes only alongside user-outcome and guardrail metrics.
- Review cancellation, complaints, support burden, and downstream harm rather than conversion alone.
- Segment results for accessibility and vulnerability risks without using protected or sensitive traits to manipulate.
- Check whether novelty effects persist and whether repeated exposure causes fatigue.
- Record the rationale before results arrive to reduce outcome and confirmation bias.
- Prefer a reversible pilot for consequential changes.

Do not claim causality from a single metric movement or one qualitative quote.

## Return a decision-ready output

For an audit, use this compact structure:

### Decision frame

State the actor, goal, decision moment, evidence, stakes, and assumptions.

### Priority findings

| Bias hypothesis | Cue and predicted effect | Confidence | Benefit or risk | Alternative explanation |
| --- | --- | --- | --- | --- |

### Recommendation

Give the preferred decision first, followed by the change, mechanism, user benefit, safeguard, and key tradeoff.

### Validation

Specify the baseline, primary user-outcome measure, business measure if relevant, guardrail metrics, and the result that would reverse the recommendation.

When designing multiple options, compare them on the same criteria and recommend one. When evidence is insufficient, identify the smallest research step that would resolve the decision.
