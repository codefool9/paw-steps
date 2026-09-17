# PawSteps — Dog Training App

> Step-by-step training courses and local specialist finder for new puppy owners.

**Live Demo:** [codefool9.github.io/three-screens](https://codefool9.github.io/three-screens/)
**Repository:** [github.com/codefool9/three-screens](https://github.com/codefool9/three-screens)

---

## 1. Need, Persona, Capability & Value

**Need:** New puppy owners do not know where to start with training — they bounce between YouTube videos and Reddit threads, basic commands do not stick without a clear progression, and by 4–6 months bad habits are already set.

**Persona:** Got their first puppy in the last three months; no prior dog training experience; tries one-off YouTube videos but cannot follow through consistently; has a smartphone and uses it for everything; trains at home in short gaps — during lunch, after work, or before bed.

**Capability:** Follow a structured, step-by-step training course for their puppy.

**Fundamental Value:** Confidence — the owner feels like they are doing it right and can see their puppy actually responding to commands.

---

## 2. Three Screens

| # | Name | Job | Why it earned a slot | Design question |
|---|------|-----|----------------------|-----------------|
| 1 | Landing | Signal the core value (confidence + structure) and primary capability (start a training course) at first glance, before reading | Every prototype needs a clear entry point; this one has to communicate "guided courses for puppy owners" in under 3 seconds | Does a first-time user understand what PawSteps does without reading a paragraph? |
| 2 | Browse Courses | Let the user explore and select a course; also surfaces local specialists as a supporting option | This is where the primary capability is exercised — choosing a course. Without it, the CTA on Screen 1 has no payoff | Does filtering by goal (Obedience, Tricks, Hunting, Agility) make the right course findable? |
| 3 | Course Detail | Deliver the value: show the user exactly what a course involves (lesson list, duration, progress) so they feel confident committing | The value is not "there are courses" — it is "I know what I am signing up for and it feels manageable" | Does seeing 8 clearly named lessons make training feel less overwhelming than an open-ended YouTube search? |

---

## 3. Feedback Questions

**Need**
1. "Tell me about the last time you tried to train your dog at home — what did you actually do?" — *Prediction: Most will describe pulling up a YouTube video that trailed off after a session or two with no consistent follow-through. This rests on the Screen 1 category grid (Obedience, Tricks, Hunting, Agility): if they describe scattering across unrelated videos, that validates that the structured goal-based entry points on the landing screen close the gap the persona actually experiences.*

**Value**
2. "If you could say one or two words to describe what you would get out of an app like this, what would they be?" — *Prediction: Words like "structure," "consistency," or "knowing what to do next." This rests on the Screen 3 lesson list — eight numbered lessons with explicit titles and durations are designed to signal exactly those words. If they surface unprompted after seeing the screen, the lesson list is communicating the value correctly.*

**Persona**
3. "How often does training come up for you right now, and what are you usually doing when you try to work on it?" — *Prediction: Short sessions at home, phone in hand, usually squeezed around another activity. This rests on the 10–25 minute lesson durations shown on Screen 3: if the persona describes fitting training into small gaps, those lengths match the behavior the prototype is already sized for — and if they say sessions run longer or shorter, it flags a mismatch to fix.*

**Capability**
4. "I am going to show you this screen for five seconds. (Hide it.) What does this product do?" — *Prediction: Most will say "train your dog" or "dog training courses" — correct but shallow. This rests on Screen 1: the headline and "Start Training" CTA should produce the right answer instantly, but the "guided" and "step-by-step" signals may not land until Screen 3's lesson list is seen. A shallow answer here means the landing screen signals the topic but not the structure.*

---

## 4. Design Justification & First Read

**Affordance sentence:** "Follow a step-by-step training course to teach your puppy basic commands — or find a local specialist near you."

**Does the landing screen signal the primary capability and fundamental value at first glance, before reading?**
Yes. The oversized headline "Train your best friend, step by step" names the capability (training) and signals the value (structure → confidence) in one phrase. The paw icon and amber palette communicate pet context before a word is read. The "Start Training" button directly below reinforces the primary action so no one needs to hunt for what to do next.

**Does every element on the landing screen earn its place, or does anything compete with the primary job?**
The "Find a Local Trainer" button is the only secondary element and is visually subordinate — it uses an outline style and smaller text compared to the filled amber primary CTA. The category grid and two course preview cards both serve the primary job by giving users a fast on-ramp to browsing. Nothing on the landing screen is purely decorative.

**What information and actions belong together on each screen, and which Gestalt principle communicates that?**
- *Screen 1 — Proximity*: The headline, supporting sentence, and "Start Training" CTA sit in a tight vertical stack with no unrelated elements between them, so the user reads them as one message before anything else.
- *Screen 2 — Similarity + Common Region*: All course cards share the same shape, icon-left layout, and badge row, so the list reads as one type of content (*similarity*). The "Local Specialists" section sits below a full-width section label that creates a clear boundary between self-guided courses and expert-led options (*common region*).
- *Screen 3 — Proximity + Continuation*: Each lesson row groups a step number, title, and duration in a single horizontal line — the eye reads them as one unit. The rows stack in a numbered sequence that signals a clear progression (*continuation*).

**Do Screens 2 and 3 stay on mission?**
Screen 2 stays on mission: every element is either a course to choose from or a specialist to contact — no off-topic content. Screen 3 stays on mission: the lesson list, progress bar, and "Start Course" CTA all serve the single goal of helping the user commit to and begin the course. The specialist nudge at the bottom is a one-line supporting element, not a distraction.

**Can you return to the landing screen from everywhere?**
Yes. Screen 2 has a "← Home" back button and the Home tab in the bottom nav. Screen 3 has a "← Courses" back button, a "Home" text link in the header, and the Home tab in the bottom nav.

**What did the AI initially get wrong, skip, or oversimplify, and what did you change?**

The initial output gave equal visual weight to every element — the headline, image placeholder, CTAs, and feature list all competed at the same size and gray tone, so nothing signaled the primary capability at first glance. The fix was to make the headline the single dominant element (large, dark, no competing visual beside it) and push supporting content below.

| | [Initial commit (df7b69d)](https://github.com/codefool9/three-screens/commit/df7b69d1) | [Revised (PR #1)](https://github.com/codefool9/three-screens/pull/1) |
|-|--------------------------|----------------------------------|
| Landing | Generic gray placeholder with "[Your headline]" at the same visual weight as everything else | Oversized amber headline as sole dominant element; "Start Training" CTA directly below with nothing competing |
| Screen 2 | 4 identical skeleton cards, no content, no grouping | 9 real courses with filterable tabs; specialist section separated by common-region label |
| Screen 3 | Unlabeled skeleton lines — no indication of a lesson structure | 8 named lessons with durations, progress bar, and numbered sequence that communicates a clear path |
| Design reason | Equal weight meant no signaling — the landing screen communicated "app" but not "training courses" | Hierarchy and proximity grouping now make the capability legible before reading |

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploys to GitHub Pages automatically on every push to `main` via GitHub Actions.

GitHub Pages source is set to **GitHub Actions** (already configured).
