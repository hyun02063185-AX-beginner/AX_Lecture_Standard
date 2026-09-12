# AX Lecture Experience Template v0.1

This neutral, framework-free starter implements a Hub, Module/Lesson navigation, progress awareness, keyboard movement, optional local resume, and an optional participant-led practice prompt. The data model deliberately uses `Experience → Module → Lesson`; Room and Box are optional user-facing metaphors, not required data fields.

## Start a new experience

1. Copy the entire `starter/` directory to a new project.
2. Edit `experience-data.js`, `skin.css`, and local `assets/` only.
3. Enable `options.practice` or `options.resume` only when they serve the learning goal.
4. Copy a skin from [spatial-dark](skins/spatial-dark/skin.css) or [light-learning](skins/light-learning/skin.css) if useful.
5. Run `python -m http.server 8000` from the copied starter and perform the [QA Contract](../../docs/08_web_deck_qa_contract.md) plus Experience checks in [Experience Standard](../../docs/09_ax_lecture_experience_standard_v0.1.md).

`engine/experience-engine.js` is the readable engine source. `starter/engine/experience-engine.js` is the identical self-contained distribution required for copying `starter/` alone.

## Entrance Transition

The starter ships with `#experience-cover` (a landing screen with a `[data-action="enter"]` button) and `engine/entry-transition.js` + `engine/entry-transition.css`, implementing the [AX Entry Warp](../../docs/13_ax_entry_transition_standard_v0.1.md) — the same shared circular entrance transition used by the Web Deck template. Clicking the cover's enter button calls `window.startEntryTransition(callback)`; the Hub only renders once the screen is fully covered. Module/Lesson navigation is unaffected. An experience without `#experience-cover` renders immediately, exactly as in v0.1.

Do not edit `entry-transition.js`/`.css` to add lecture-specific content — recolor via the `--ax-warp-center` / `--ax-warp-mid` / `--ax-warp-outer` CSS variables in `skin.css` if a project needs its own palette; keep duration, easing, and geometry unchanged.
