# Cognitive bias design catalog

Use this catalog to generate and test hypotheses about a specific decision moment. Do not infer a person's internal state from a behavior alone. The terminology and examples are synthesized from the supplied source; repeated entries are merged, and the descriptions are working design heuristics rather than claims that every effect is equally established in every context.

## Contents

- [Attention, memory, and experience](#attention-memory-and-experience)
- [Choice architecture and perceived value](#choice-architecture-and-perceived-value)
- [Time, commitment, and self-regulation](#time-commitment-and-self-regulation)
- [Social judgment and source effects](#social-judgment-and-source-effects)
- [Belief, probability, and evidence](#belief-probability-and-evidence)
- [Control, automation, and causal attribution](#control-automation-and-causal-attribution)
- [Comprehension and problem solving](#comprehension-and-problem-solving)

## Attention, memory, and experience

| Bias or observation | Working mechanism | Design signals | Ethical response |
| --- | --- | --- | --- |
| Availability heuristic | Easy-to-recall examples feel more frequent or likely. | Recent incidents, vivid stories, or prominent examples dominate risk judgments. | Pair vivid cases with representative frequencies, time ranges, and base rates. |
| Attentional bias | Emotionally salient, threatening, or belief-congruent cues capture attention. | Alarming headlines, badges, or personally relevant content crowds out other information. | Preserve hierarchy without sensationalism; test whether essential information is still noticed. |
| Availability cascade | Public repetition increases perceived truth and triggers more repetition. | Repeated claims, repost counts, or trending labels substitute for evidence. | Show provenance and independent corroboration; avoid equating repetition with validity. |
| Frequency illusion | Newly noticed things seem suddenly more common. | Users report that a feature, threat, or trend is “everywhere” after first exposure. | Show longitudinal frequency and explain changes in attention or detection. |
| Primacy effect | Early information receives disproportionate attention or recall. | First plan, result, question, or onboarding step frames later judgment. | Put essential, decision-relevant facts first; rotate order in research. |
| Recency effect | Recent information receives disproportionate attention or recall. | The last interaction or result dominates an overall assessment. | Summarize the full period and avoid ending on an unrepresentative metric. |
| Peak-end rule | The most intense moment and ending disproportionately shape remembered experience. | A severe error or strong finale dominates satisfaction. | Repair painful peaks and design honest, useful closure; do not neglect the middle. |
| Duration neglect | Duration receives too little weight in retrospective evaluation. | A long mediocre experience is judged mainly by a brief high or low. | Measure cumulative burden and time, not recalled satisfaction alone. |
| Negativity bias | Negative information receives more attention and weight than comparable positive information. | One bad review or error overshadows a larger positive pattern. | Give representative distributions and recovery context without hiding criticism. |
| Mere exposure effect | Repeated exposure can increase familiarity and preference. | Repeated recommendations, branding, or defaults become preferred without comparison. | Provide frequency controls and meaningful alternatives; monitor fatigue. |
| Humor effect | Humorous material is often more memorable. | Jokes or playful examples become the remembered teaching cue. | Use humor to reinforce accurate content; avoid trivializing serious consequences. |
| Novelty bias | New or exciting stimuli attract disproportionate attention. | “New” badges and feature launches displace more useful familiar tools. | Use novelty to aid discovery, then measure durable value after the novelty window. |
| Zeigarnik effect | Incomplete or interrupted tasks remain mentally salient. | Unfinished progress, badges, or open loops repeatedly pull users back. | Make completion optional, pausable, and dismissible; avoid anxiety-inducing loops. |
| Focusing effect | One salient attribute is overweighted while other relevant factors are neglected. | Price, security, speed, or a single metric dominates a multi-factor decision. | Make tradeoffs comparable and surface omitted criteria. |
| Focusing illusion | People have many goals and demands beyond the product. | Plans assume unrealistic attention, motivation, or product centrality. | Minimize required attention, support interruption, and design for re-entry. |

## Choice architecture and perceived value

| Bias | Working mechanism | Design signals | Ethical response |
| --- | --- | --- | --- |
| Default effect | People disproportionately keep a preselected option. | Checked boxes, recommended settings, auto-renewal, or preselected plans. | Use welfare-aligned defaults, disclose them, and make alternatives and reversal easy. |
| Framing effect | Equivalent information produces different judgments when presented differently. | Gain/loss wording, percentages without denominators, or monthly rather than total cost. | Show materially equivalent frames and absolute values where consequential. |
| Anchoring bias | The first salient value becomes a reference point. | An expensive plan, list price, initial estimate, or suggested amount appears first. | Use relevant, defensible anchors and show a comparable range. |
| Decoy effect | An inferior option changes preference between other options. | A plan exists mainly to make the target plan look superior. | Remove dominated options or explain genuine use cases; compare total value transparently. |
| Choice overload | Too many poorly structured options increase difficulty or deferral. | Long undifferentiated lists, filters, templates, or configuration steps. | Curate by goal, progressively disclose detail, preserve search and a full-list path. |
| Ambiguity aversion | Unclear probabilities, rules, or outcomes make options less attractive. | Vague pricing, cancellation, risk, delivery, or feature eligibility. | Clarify uncertainty and ranges; distinguish unknown from unavailable. |
| Loss aversion | A loss feels more consequential than an equal gain. | “Lose your progress,” expiring benefits, or deletion warnings. | State real consequences proportionately; provide export, undo, grace periods, and neutral exit language. |
| Endowment effect | Ownership increases perceived value. | Saved data, custom spaces, or acquired entitlements make switching harder. | Support portability and reversible trials; do not hold user-created value hostage. |
| Denomination effect | Smaller units or abstract currency feel easier to spend. | Per-day prices, tokens, credits, chips, or fragmented fees obscure total cost. | Show real-currency totals, unit conversions, and cumulative spend. |
| Attribute substitution | An easy-to-evaluate proxy replaces a harder relevant judgment. | Polish stands in for security; brand or school stands in for quality or skill. | Surface decision-relevant evidence and label proxies as proxies. |
| Information bias | More information is assumed to improve a decision even when irrelevant. | Feature dumps, excessive dashboards, or repeated research delay commitment. | Prioritize diagnostic information and explain what would change the decision. |
| Status quo bias | Keeping the current state feels preferable even when alternatives may be better. | Migration, switching, or settings changes are avoided despite evidence. | Reduce switching and rollback costs; compare current and proposed states explicitly. |
| Familiarity bias | Familiar options are preferred over unfamiliar alternatives. | Known brands, patterns, or workflows win without a quality comparison. | Preserve useful conventions while making the new model learnable and trialable. |

## Time, commitment, and self-regulation

| Bias | Working mechanism | Design signals | Ethical response |
| --- | --- | --- | --- |
| Present bias | Immediate outcomes receive disproportionate weight. | Quick rewards displace long-term goals. | Connect small immediate feedback to a user-chosen long-term outcome. |
| Hyperbolic discounting | The relative preference for now rises sharply as a reward becomes immediate. | Plans made for later collapse when temptation becomes immediate. | Add cooling-off, commitment, scheduling, or reminders chosen in advance by the user. |
| Sunk cost fallacy | Prior investment drives further investment despite poor future value. | Time, money, training, or streaks justify continuing. | Frame choices around future costs and benefits; make exit and export easy. |
| Commitment bias | Prior public or internal commitment resists contradictory evidence. | Teams defend a roadmap or users continue a subscription because they committed. | Set review criteria and exit conditions before commitment. |
| Consistency bias | People seek consistency with past beliefs and actions. | Streaks or identity language pressure irrelevant continuation. | Let goals evolve; offer pause, reset, and re-commitment without shame. |
| Choice-supportive bias | Chosen options gain remembered strengths and rejected options gain remembered weaknesses. | Post-selection reviews ignore tradeoffs or dismissed alternatives. | Preserve the original comparison and revisit it against current needs. |
| Post-purchase rationalization | Emotionally influenced choices are later justified with selective logic. | Buyers invent benefits after an impulsive purchase. | Add confirmation summaries, cooling-off, easy cancellation, and post-use value checks. |
| Restraint bias | People overestimate future impulse control. | Plans rely on willpower against notifications, spending, or temptation. | Offer user-controlled limits, friction, and environmental supports. |
| Empathy gap | People mispredict behavior in a different emotional or motivational state. | Calm-state planning ignores hunger, fatigue, urgency, or excitement. | Test in realistic states and allow advance safeguards and later revision. |
| IKEA effect | Personal effort or creation increases perceived value. | Customization creates attachment independent of objective quality. | Use meaningful co-creation, preserve portability, and still test usability and outcomes. |

## Social judgment and source effects

| Bias | Working mechanism | Design signals | Ethical response |
| --- | --- | --- | --- |
| Social proof | Others' behavior is treated as evidence of the right choice. | Ratings, enrollment, purchase counts, or “popular” labels. | Use real, relevant, contextualized data and show sample size and recency. |
| Bandwagon effect | Apparent popularity drives adoption or belief. | Trending labels, viral counts, or adoption claims create momentum. | Avoid popularity as a substitute for fit; offer goal-based comparisons. |
| Authority bias | Authority or credentials receive excessive trust. | Expert, celebrity, or institutional endorsement overrides fit or evidence. | Disclose expertise scope, conflicts, evidence, and uncertainty. |
| Halo effect | A favorable global impression spills into judgments of specific traits. | Brand affection, polish, or one good experience implies quality elsewhere. | Evaluate important traits separately with direct evidence. |
| Horn effect | A negative global impression spills into harsher judgments of specific traits. | Disliked brands or one bad experience taint unrelated evaluation. | Blind the source when practical and assess the claim or feature independently. |
| Reactive devaluation | An idea is devalued because it comes from an adversary or disliked source. | Identical proposals receive different reactions by attribution. | Compare anonymized proposals against predeclared criteria. |
| False consensus effect | People overestimate how widely others share their beliefs or behavior. | Designers or vocal communities stand in for the target population. | Sample relevant users and report distributions, not anecdotes alone. |
| Identifiable victim effect | One vivid person motivates more action than an anonymous group. | A single story outweighs aggregate need. | Pair consented stories with scale, representativeness, and impact data. |
| Compassion fade | Emotional response can decline as the number of people in need grows. | Large statistics produce less action than one story. | Connect individual stories to systemic scope without exploiting suffering. |
| Cheerleader effect | An item or person can appear more favorable in a group context. | Bundles, candidate sets, or profile groups alter attractiveness. | Evaluate important items individually and in representative sets. |
| Fundamental attribution error | Others' behavior is over-attributed to character and under-attributed to context. | Missed tasks imply laziness; errors imply incompetence. | Surface workload, constraints, system state, and opportunity before judging. |
| Self-enhancement bias | People prefer information and actions that preserve a positive self-image. | Profiles, sharing, or feedback is shaped toward appearing competent or kind. | Make honest self-presentation safe and avoid public shame as motivation. |
| Illusion of transparency | People overestimate how visible their intent or internal state is to others. | Designers assume users understand an icon; collaborators assume rationale is obvious. | Externalize rationale, status, emotion, and next steps in clear language. |

## Belief, probability, and evidence

| Bias | Working mechanism | Design signals | Ethical response |
| --- | --- | --- | --- |
| Confirmation bias | Congruent evidence is sought, noticed, or interpreted preferentially. | Research, feeds, or dashboards emphasize supportive evidence. | Seek disconfirming evidence, rival hypotheses, and balanced samples. |
| Belief bias | Argument quality is judged by whether the conclusion feels believable. | A familiar conclusion makes weak reasoning seem strong. | Separate premise validity, evidence quality, and conclusion appeal. |
| Backfire effect | Corrective evidence may sometimes intensify a threatened prior belief. | Identity-threatening correction produces defensiveness. | Avoid assuming this response; test respectful corrections, shared goals, and trusted messengers. |
| Conservatism bias | Beliefs update too little when new evidence arrives. | Teams retain an old product judgment after conditions improve. | Define update thresholds and revisit priors with current evidence. |
| Base rate fallacy | Specific case details crowd out general prevalence. | One review, symptom, or success story dominates a prediction. | Show relevant base rates alongside case-specific evidence. |
| Representativeness heuristic | Resemblance to a prototype substitutes for probability. | Visual polish, stereotypes, or category cues imply security, fit, or quality. | Use validated attributes and representative outcome data. |
| Conjunction fallacy | A detailed conjunction feels more likely than its broader constituent event. | Rich scenarios or multi-factor forecasts feel precise and probable. | Show component probabilities and explain that added conditions cannot increase probability. |
| Illusory correlation | Unrelated variables are perceived as associated. | Rituals, filters, or app use are credited for outcomes without evidence. | Show controlled comparisons and distinguish correlation from causation. |
| Clustering illusion | Random clusters are mistaken for meaningful patterns. | Streaks or chart shapes drive decisions without statistical support. | Add uncertainty, expected random variation, and longer time windows. |
| Gambler's fallacy | Past independent random outcomes are believed to change the next outcome. | A losing streak makes a win feel “due.” | State independence and current odds; avoid “due” messaging. |
| Optimism bias | Positive outcomes are overestimated and negative outcomes underestimated. | Security, investing, scheduling, or launch plans omit realistic failure modes. | Add premortems, ranges, contingency plans, and representative outcomes. |
| Hard-easy effect | Confidence is too high on perceived easy tasks and too low on hard tasks. | Effort estimates or self-assessments are miscalibrated by perceived difficulty. | Use performance feedback, ranges, and task-specific calibration. |
| Outcome bias | Decision quality is judged by the result rather than information available at the time. | A lucky win validates a poor process; a sound decision is blamed after bad luck. | Record rationale, probabilities, and constraints before outcomes arrive. |

## Control, automation, and causal attribution

| Bias or effect | Working mechanism | Design signals | Ethical response |
| --- | --- | --- | --- |
| Illusion of control | Personal control over chance-driven outcomes is overestimated. | Gestures, rituals, frequent trading, or controls imply influence over randomness. | Distinguish controllable inputs from random outcomes and disclose odds. |
| Automation bias | Automated suggestions receive excessive deference. | Users accept AI, GPS, grammar, or scoring output without review. | Show uncertainty, provenance, override paths, and high-risk verification steps. |
| Placebo effect | Expectation contributes to a perceived benefit independent of an active mechanism. | Branding or claims produce self-reported improvement without objective change. | Do not make unsupported efficacy claims; measure objective and subjective outcomes separately. |

## Comprehension and problem solving

| Bias | Working mechanism | Design signals | Ethical response |
| --- | --- | --- | --- |
| Curse of knowledge | Experts underestimate what novices do not know. | Jargon, skipped setup, hidden prerequisites, or expert-only navigation. | Test with novices, define terms, stage complexity, and provide examples. |
| Functional fixedness | Familiar uses constrain recognition of new uses. | Users cannot map an existing tool or concept to a new task. | Demonstrate varied use cases and let people start from goals rather than tool categories. |
