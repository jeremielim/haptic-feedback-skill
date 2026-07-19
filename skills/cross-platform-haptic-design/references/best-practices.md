# Apple and Meta Horizon OS Haptic Design Best Practices

## Shared foundation

Apply these principles on both ecosystems:

1. **Purpose** — Use haptics to confirm input, communicate outcomes, mark boundaries or collisions, direct attention, reinforce material qualities, or provide an alternative sensory cue. Remove decorative effects with no clear value.
2. **Causality** — Trigger feedback at the moment of contact, activation, completion, or state change. Make its source and, where relevant, spatial origin obvious.
3. **Harmony** — Make sight, sound, and touch describe the same event. Match timing, intensity, rhythm, duration, weight, material, and continuity.
4. **Utility and restraint** — Frequent interactions need subtle feedback. Rare or consequential events may be stronger. Use tactile whitespace and prevent long, overlapping, or gratuitous effects.
5. **Consistency** — Give each pattern one stable meaning. Prefer recognized system meanings and a small vocabulary designed for recognition rather than memorization.
6. **Choice and accessibility** — Respect system settings, allow prominent haptics to be disabled or adjusted, and never make touch the only carrier of essential information.
7. **Hardware awareness** — Detect capability, provide fallbacks, and tune per actuator. Authored intensity expresses intent, not identical physical output.
8. **Physical testing** — Evaluate the final visuals, audio, interaction latency, grip, repetition, interruption, and cancellation on supported hardware.

## Multimodal character mapping

| Quality | Visual | Audio | Haptic |
|---|---|---|---|
| Light or small | Small displacement | Quiet, higher tone | Short, subtle impulse |
| Heavy or large | Greater displacement | Deeper, louder sound | Stronger, broader impact |
| Hard or rigid | Abrupt stop | Sharp click | Crisp transient |
| Soft or flexible | Eased deformation | Muted sound | Rounded, lower-sharpness pulse |
| Rough | Irregular texture | Grainy sound | Uneven or pulsing vibration |
| Smooth | Continuous motion | Even tone | Continuous, uniform sensation |
| Growing energy | Progressive animation | Rising or swelling sound | Increasing continuous feedback |

Do not pair continuous motion or audio with unrelated staccato pulses. Synchronize meaningful onset, impact, transition, and completion points.

## Tactile vocabulary

Touch is effective for brief, clear signals but weak at detailed information. Prefer a small semantic set:

| Token | Meaning | Typical character |
|---|---|---|
| `selection` | Value or focus changed | Very light transient |
| `confirmation` | Input was recognized | Short, crisp transient |
| `success` | Task completed | Distinct positive sequence |
| `warning` | Attention is required | Noticeable, restrained sequence |
| `error` | Action failed | Clearly differentiated sequence |
| `impact-light` | Small collision | Light transient |
| `impact-heavy` | Large collision | Stronger, broader transient |
| `boundary` | Limit or detent reached | Precise click |
| `texture` | Surface is being traversed | Dynamic continuous effect |

Map tokens to native platform effects. Do not force physically identical output from different actuators.

## Apple-specific guidance

- Prefer standard controls and documented system haptics when their meanings fit.
- Use selection feedback for changing values, impact feedback for collisions or snapping, and notification feedback for success, warning, and error outcomes.
- Do not repurpose a recognized system pattern for a contradictory meaning.
- Prefer short effects for discrete app events. Reserve continuous patterns for meaningful sustained interactions such as texture, resistance, proximity, or energy.
- With Core Haptics, use transient and continuous events, intensity, sharpness, dynamic parameters, and synchronized audio deliberately.
- Use AHAP assets when authored patterns benefit from portable haptic-and-audio definitions.
- Stop continuous feedback immediately when its cause ends.
- Check hardware capabilities and provide visual or audio alternatives when haptics are unavailable.
- Consider vibration interference with the camera, gyroscope, microphone, precision input, or how the device rests on a surface.
- Test Core Haptics on supported physical hardware; the simulator cannot reproduce the tactile experience.

Apple's WWDC21 framing is **causality, harmony, and utility**. The session demonstrates matching continuous feedback to progressive transformation, looping sustained textures with an advanced player, and modulating intensity from runtime state.

## Meta Horizon OS-specific guidance

- Treat controller location as part of the message. Play feedback in the controller responsible for the event; use bilateral feedback only when both hands are genuinely involved.
- Coordinate haptics with spatial visuals and audio using minimal delay. Missing or late feedback makes the system feel unresponsive.
- Use tactile whitespace: short pauses help the skin recover and make important sensations distinct.
- Avoid excessive, continuous, intense, long, or overlapping effects that create fatigue.
- Frequent interactions need subtle feedback; rare or critical interactions may be more noticeable.
- Use familiar real-world metaphors as a starting point without being limited to literal simulation. Decide whether the experience builds realism or expands perception.
- Prefer standardized system haptics when suitable and keep patterns consistent across the product.
- Test with actual controllers, different grip styles, one- and two-handed flows, rapid input, sustained effects, and overlapping systems.

## Design and review questions

For every effect, answer:

- What information does it communicate?
- What event causes it, and is the source obvious?
- Is another feedback mechanism already sufficient?
- Does a platform-standard effect have the right meaning?
- How frequently can it occur?
- Does its character agree with the visual and audio design?
- Is its spatial origin correct?
- What happens during rapid repetition, interruption, or overlap?
- Can the user disable it, and does the experience still work?
- What happens on unsupported or weaker hardware?

## Prototype and test

1. Define the event and semantic intent.
2. Review visual and audio timing before authoring touch.
3. Select a system effect or create a few meaningfully different alternatives.
4. Tune parameters live in the full interaction where tooling permits.
5. Test rapid repetition, overlap, cancellation, sound-off, and haptics-off states.
6. Test with people who have different sensitivities and accessibility needs.
7. Validate every supported physical device and record results.

## Specification template

Document each effect with:

- Semantic name and user value
- Trigger and source
- Apple implementation
- Meta Horizon OS implementation
- Pattern type, duration, rhythm, intensity, and sharpness range
- Visual and audio synchronization points
- Spatial origin
- Repetition, interruption, and cancellation policy
- Accessibility alternative and user controls
- Hardware requirements and fallback
- Physical-device test status

## Ship checklist

- The haptic has a clear purpose and cause.
- Its semantic meaning is consistent.
- Visual, audio, and touch are synchronized and harmonious.
- Strength reflects significance and frequency.
- Repetition and overlap do not create fatigue.
- Continuous feedback ends with its cause.
- Spatial origin matches the interaction.
- The product works without haptics.
- System preferences and unsupported hardware are handled.
- The effect was evaluated in context on supported physical devices.

## Primary sources

- Apple HIG: https://developer.apple.com/design/human-interface-guidelines/playing-haptics
- Apple Core Haptics: https://developer.apple.com/documentation/CoreHaptics
- WWDC21, Practice audio haptic design: https://developer.apple.com/videos/play/wwdc2021/10278/
- WWDC19, Introducing Core Haptics: https://developer.apple.com/videos/play/wwdc2019/520/
- Meta haptics overview: https://developers.meta.com/horizon/design/haptics-overview/
- Meta haptics best practices: https://developers.meta.com/horizon/design/haptics-best-practices/
