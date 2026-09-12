/* AX Entry Warp — shared entrance transition engine.
   Used once, from an Entrance/Cover screen into a lecture's first content
   view (Cover → Deck, Entrance → Experience Hub). Not for slide-to-slide or
   lesson-to-lesson navigation. Contains no lecture-specific content — the
   only thing a caller supplies is a callback for what to do once the
   screen is fully covered.
   Visual contract must stay identical across every AX template: geometry,
   duration, easing, cover point, and release. See
   docs/13_ax_entry_transition_standard_v0.1.md. */
(function () {
  "use strict";
  const NAVIGATION_DELAY_MS = 820;
  const TOTAL_DURATION_MS = 1600;
  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const createOverlay = () => {
    const element = document.createElement("div");
    element.className = "ax-entry-warp";
    element.setAttribute("aria-hidden", "true");
    return element;
  };

  const startEntryTransition = onCovered => {
    const done = typeof onCovered === "function" ? onCovered : () => {};
    if (reducedMotion()) { done(); return; }

    const overlay = createOverlay();
    document.body.append(overlay);

    // Force a layout flush so the keyframe animation restarts from its
    // 0% frame every time, then defer the class toggle a frame so the
    // browser has already painted the initial (invisible) state — adding
    // the class synchronously in the same task can make the covering
    // circle composite incorrectly while it is still animating.
    void overlay.offsetWidth;
    requestAnimationFrame(() => overlay.classList.add("ax-entry-warp--active"));

    window.setTimeout(done, NAVIGATION_DELAY_MS);
    window.setTimeout(() => overlay.remove(), TOTAL_DURATION_MS + 100);
  };

  window.AXEntryWarp = { start: startEntryTransition, reducedMotion, NAVIGATION_DELAY_MS, TOTAL_DURATION_MS };
  window.startEntryTransition = startEntryTransition;
}());
