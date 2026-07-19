# Phase 3 — Opposition & Decisions

**Goal:** Define what prevents players from trivially achieving the goal, and ensure that
overcoming it requires meaningful decisions.

---

## Core Concepts to Apply

**Opposition** creates the need to make decisions. Without it, there's no game.

Two types:
- **Player-created opposition** — other players blocking, competing, or attacking
- **Designer-created opposition** — the game itself creates obstacles (timers, AI enemies,
  environmental hazards, random events)

**Meaningful decisions** (depth) = choices where different options lead to meaningfully
different outcomes. The hallmark of good design.

**Flow state** = the sweet spot between boredom and anxiety. Opposition should be calibrated
so the game stays in this band:
- Too easy → boredom (skill exceeds difficulty)
- Too hard → anxiety (difficulty exceeds skill)

**Core game loop** = the repeated sequence of actions a player takes each turn/round.
Example from Super Mario Bros: traverse → hit blocks → collect items → defeat enemies →
reach flag → repeat.

**Anti-patterns to flag:**
- Analysis paralysis (too many choices at once)
- False choices (one option is always obviously correct)
- Kingmaking (eliminated or weak player decides the winner with no stake)
- Runaway leader (early leader can't be caught)

---

## Questions to Work Through

### 3a. The Opposition
> "What stands between a player and their goal? What makes it *hard*?"

If stuck: "Is it other players competing with them? A game system working against them
(like a timer, a spreading hazard, shrinking resources)? Or both?"

### 3b. Decision Space
> "When it's a player's turn, roughly how many choices do they have? And do those choices
> feel meaningfully different — like, does picking option A vs. option B actually matter?"

Aim for 2–5 choices per turn. More than that risks analysis paralysis.

### 3c. Interesting Turns
Use the "working backwards" technique from Module 2:
> "Describe a really *interesting* turn in your game. What's happening, what does the player
> have to think about, and how does their choice affect someone else?"

This surfaces whether real depth exists. If they can't describe an interesting turn,
the mechanics need work.

### 3d. Core Game Loop
> "What does one full 'cycle' of your game look like — from the start of a turn to the
> end? Walk me through the steps."

Help them articulate: draw → play → resolve → pass? Move → act → react → end? The core
loop should be learnable in under a minute and repeatable without re-reading rules.

### 3e. Flow Check
> "Is there a risk that the game gets one-sided — like, once someone's ahead, they stay
> ahead? Or the opposite, where it's always totally even and no one ever feels in control?"

Prompt them to think about comeback mechanics or catch-up mechanisms if needed.

### 3f. Five Whys (if a problem surfaces)
If they describe something that sounds broken, use Five Whys:
> "Let's dig into that. Why does [problem] happen? ... And why does that happen? ..."
Guide them to the root cause, then propose a solution.

---

## Phase 3 Summary Block

```
📋 PHASE 3 COMPLETE — Opposition & Decisions
• Opposition type: [e.g., player vs. player + shrinking safe zones]
• Decision breadth per turn: [e.g., 3 action choices]
• Core game loop: [e.g., Draw card → Choose action → Resolve → Draw phase ends]
• Depth assessment: [e.g., strong — positioning choices cascade into future turns]
• Flow risks noted: [e.g., potential runaway leader; consider catch-up card]
```

Then say: "Now let's talk rules — the formal constraints that make all of this work."
