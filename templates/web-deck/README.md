# AX Web Deck Template v0.1

This template is a standalone, framework-free implementation of Deck → Section → Slide. Its engine provides safe rendering, previous/next controls, keyboard and swipe navigation, fullscreen request handling, progress, chrome auto-hide, and section-aware slide data.

## Start a new deck

1. Copy the entire `starter/` directory to a new project.
2. Edit `deck-data.js`; do not place lecture content in the engine.
3. Keep or replace `skin.css`. Copy [minimal](skins/minimal/skin.css) or [golden-warm](skins/golden-warm/skin.css) into the starter when useful.
4. Add local assets below `assets/` and refer only to paths inside the new project.
5. Run `python -m http.server 8000` from the copied starter and open `http://localhost:8000`.
6. Run the browser QA in [QA Contract](../../docs/08_web_deck_qa_contract.md), then create the new lecture's own repository.

Use [Time Profiles](../../docs/06_web_deck_time_profiles.md) to select 30/60/90/120 presentation options. `sectionNavigator` and `resume` are explicit content settings; v0.1 keeps them as data contract values and does not auto-enable them.

`engine/deck-engine.js` is the readable engine source. `starter/engine/deck-engine.js` is the identical self-contained distribution required for copying `starter/` alone.

## Entrance Transition

The starter ships with `#deck-cover` (a landing screen with a `[data-action="enter"]` button) and `engine/entry-transition.js` + `engine/entry-transition.css`, implementing the [AX Entry Warp](../../docs/13_ax_entry_transition_standard_v0.1.md) — the shared circular entrance transition used across the AX Lecture family. Clicking the cover's enter button calls `window.startEntryTransition(callback)`; the deck's first render only happens once the screen is fully covered. A deck without `#deck-cover` renders immediately, exactly as in v0.1.

Do not edit `entry-transition.js`/`.css` to add lecture-specific content — recolor via the `--ax-warp-center` / `--ax-warp-mid` / `--ax-warp-outer` CSS variables in `skin.css` if a project needs its own palette; keep duration, easing, and geometry unchanged.
