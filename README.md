# Jeremie's Skills

[![skills.sh](https://skills.sh/b/jeremielim/skills)](https://skills.sh/jeremielim/skills)

A collection of agent skills for creative strategy and cross-platform product design.

## Install

```bash
npx skills@latest add jeremielim/skills
```

To install one skill, use its exact name:

```bash
npx skills@latest add jeremielim/skills --skill cross-platform-haptic-design
npx skills@latest add jeremielim/skills --skill game-designer
npx skills@latest add jeremielim/skills --skill naming
```

## Skills

- [`cross-platform-haptic-design`](skills/cross-platform-haptic-design/SKILL.md) — Design and review Apple and Meta Horizon OS haptics.
- [`game-designer`](skills/game-designer/SKILL.md) — Develop an original game with the URF Academy game-design framework.
- [`naming`](skills/naming/SKILL.md) — Generate, assess, and validate names for brands, products, and design systems.

## Evaluation

Run the structural check with:

```bash
npm run test:skills
```

The prompt suites in [`evals`](evals) contain positive, negative, and edge-case scenarios for each
skill. Run each case in a clean agent session three times and grade the stated outcomes before shipping
a skill change.
