---
name: cross-platform-haptic-design
description: Design, implement, or review haptic feedback for Apple platforms and Meta Horizon OS. Use for Core Haptics, Apple system haptics, Meta Quest controller haptics, multimodal timing, accessibility, or physical-device haptic testing.
---

# Cross-Platform Haptic Design

Design haptics as semantic, multimodal feedback, not isolated vibration effects.

Read [references/best-practices.md](references/best-practices.md) before proposing, implementing, or reviewing a haptic system.

## Workflow

1. Identify the target platforms, hardware, interaction, environment, repetition rate, and accessibility needs.
2. State what each proposed haptic communicates; remove effects with no clear user value.
3. Prefer a system-provided effect when its documented meaning matches the event.
4. Define shared semantic tokens before mapping them to platform-specific effects.
5. Coordinate visual, audio, and haptic onset, duration, intensity, rhythm, material character, and spatial origin.
6. Keep the vocabulary small, causal, consistent, restrained, optional, and understandable without haptics.
7. Prototype alternatives in the complete interaction, including rapid repetition and overlapping events.
8. Test on every supported physical device; do not approve haptics from a simulator, waveform, or audio approximation alone.
9. Document the chosen mapping, parameter range, cancellation behavior, fallback, and test status.

## Output

For a design request, provide:

- Interaction inventory and the moments that merit haptics
- Small semantic token set
- Apple and Meta Horizon OS implementation mapping
- Multimodal timing and character notes
- Repetition, interruption, and cancellation rules
- Accessibility and unsupported-hardware fallbacks
- Physical-device test plan

For a review, rank issues by ambiguity, synchronization, semantic inconsistency, fatigue risk, accessibility, and hardware risk. Distinguish shared principles from platform-specific constraints.

Do not claim different actuators will feel identical. Preserve semantic equivalence while tuning output for each device.
