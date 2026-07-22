# Phase 6 — Final Output Generation

**Goal:** Synthesize all phase summaries into a complete, polished game design document
with five deliverables.

---

## Deliverables to Produce

Generate all five deliverables in a single response only when the user requests the complete package.
When the user requests one deliverable, produce that deliverable and identify any assumptions or open
questions instead of requiring the full package.

---

### Deliverable 1 — Elevator Pitch & Theme Doc

```markdown
## 🎮 [GAME TITLE]

**Elevator Pitch**
You play as [players] who want to [goal], but [opposition].

**Theme:** [theme]
**Game Feeling:** [feeling words]
**Types of Fun:** [primary], [secondary]
**Target Players:** [description]
**Player Count:** [X–Y players]
**Game Length:** [X–Y minutes]
```

---

### Deliverable 2 — Game Design Framework Worksheet

Fill in every field. Use the exact URF Academy framework structure.

```markdown
## 📋 Game Design Framework Worksheet

### Player
- Game feeling targeted:
- Types of fun:
- Target audience:

### Goal
- Main goal / win condition:
- Mechanical representation of goal:
- Subgoals:
- Pacing notes (how often meaningful moments occur):

### Decisions & Opposition
- Type of opposition:
- Decision breadth per turn:
- Core game loop:
- Depth assessment:
- Flow risks and mitigations:

### Rules & Thematics
- Theme:
- Narrative / elevator pitch:
- Core rules (5 or fewer):
- Key piggybacking / thematic rule names:
- Complexity rating (sentences to explain):

### Interaction & Mechanics
- Player actions per turn:
- Interaction type:
- Asymmetry (if any):
- Elegance assessment (depth vs. complexity):
```

---

### Deliverable 3 — Rules Sheet

One-page format. Clear, numbered, annotated.

```markdown
## 📜 [GAME TITLE] — Rules Sheet

**Objective:** [One sentence win condition]

**Setup:**
1. [Step 1]
2. [Step 2]
...

**On Your Turn (Core Game Loop):**
1. [Step 1] — *[Why this rule exists]*
2. [Step 2] — *[Why this rule exists]*
...

**Special Rules:**
- [Rule name]: [Description] — *[Why this rule exists]*

**End Game:**
[How the game ends and how a winner is determined]

**Quick Reference:**
| Action | Effect |
|--------|--------|
| [Action] | [Effect] |
```

---

### Deliverable 4 — Structured Game Design Document

Full narrative document, ~500–800 words, covering:
- Vision statement (what this game *is* and why it's worth making)
- Player experience goals
- Core design pillars (3–5 principles that every design decision should serve)
- Mechanics breakdown with rationale
- Pacing map (beginning / middle / end feel)
- Open questions and suggested next iteration experiments

---

### Deliverable 5 — LLM Build Prompt

A self-contained prompt a developer can paste into an AI coding tool to begin building
a digital or printable version of the game.

```markdown
## 🤖 LLM Build Prompt

Paste this into Claude, ChatGPT, or a coding assistant to start building your game.

---

Build a [digital / printable paper] implementation of the following game:

**Game:** [Title]
**Elevator Pitch:** [pitch]
**Player Count:** [X–Y]
**Game Length:** [X–Y minutes]

**Core Game Loop:**
[numbered loop steps]

**Player Actions:**
[list of actions and effects]

**Win Condition:**
[exact win condition]

**Components Needed:**
[list: board, cards, tokens, dice, etc.]

**Theme & Aesthetic:**
[theme, feeling, visual direction]

**Special Rules:**
[any rules beyond the basics]

**Design Priorities (implement in this order):**
1. Get the core loop playable with placeholder art
2. Implement win/loss detection
3. Add opposition mechanics
4. Add theming and polish

**Open Questions to Resolve During Build:**
[list any unresolved design decisions from the session]
```

---

## Post-Output Options

After generating all deliverables, ask:

> "Here's your complete game design package. A few options for what's next:
> - **Iterate** — Want to revisit any section? We can dig deeper into mechanics, tweak the
>   theme, or rework any part that doesn't feel right.
> - **Prototype guide** — I can walk you through building a paper prototype of this game
>   step by step.
> - **Playtest plan** — I can help you write a structured playtest session with feedback
>   questions, like the URF Academy Lesson 4 approach.
> What would you like to do?"
