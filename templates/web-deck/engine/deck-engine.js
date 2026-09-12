/* AX Web Deck Template v0.1 — framework-free, content-driven engine. */
(function () {
  "use strict";
  const deck = window.AX_WEB_DECK_DATA;
  const app = document.getElementById("deck-app");
  if (!app) return;
  const text = value => value == null ? "" : String(value);
  const esc = value => text(value).replace(/[&<>\"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
  const sections = Array.isArray(deck?.sections) ? deck.sections : [];
  const slides = sections.flatMap((section, sectionIndex) => (Array.isArray(section.slides) ? section.slides : []).map((slide, slideIndex) => ({ ...slide, section, sectionIndex, slideIndex })));
  if (!deck?.meta?.title || !slides.length) {
    app.innerHTML = '<main class="deck-error"><h1>Deck data needs a title and at least one slide.</h1></main>';
    console.warn("AX Web Deck validation: meta.title and sections[].slides[] are required.");
    return;
  }
  let index = 0, startX = 0, hideTimer = 0;
  const slideMarkup = item => {
    const title = esc(item.title || "Untitled slide");
    const caption = item.caption ? `<p class="deck-caption">${esc(item.caption)}</p>` : "";
    switch (item.type) {
      case "opening": return `<article class="slide slide--opening"><p class="eyebrow">${esc(deck.meta.title)}</p><h1>${title}</h1>${caption}<button data-action="next">Begin</button></article>`;
      case "section": return `<article class="slide slide--section"><p class="eyebrow">Section ${item.sectionIndex + 1}</p><h1>${title}</h1>${caption}</article>`;
      case "compare": return `<article class="slide slide--compare"><p class="eyebrow">Compare</p><h1>${title}</h1><div class="compare-grid"><section><h2>${esc(item.left?.label || "Before")}</h2><p>${esc(item.left?.text || "")}</p></section><section><h2>${esc(item.right?.label || "After")}</h2><p>${esc(item.right?.text || "")}</p></section></div>${caption}</article>`;
      case "closing": return `<article class="slide slide--closing"><p class="eyebrow">Closing</p><h1>${title}</h1>${caption}</article>`;
      default: return `<article class="slide slide--statement"><p class="eyebrow">${esc(item.section.title || "Lecture")}</p><h1>${title}</h1>${caption}</article>`;
    }
  };
  const render = () => {
    const item = slides[index];
    app.innerHTML = `<header class="deck-chrome"><span>${esc(item.section.title || deck.meta.title)}</span><span>${index + 1} / ${slides.length}</span></header><main class="deck-stage">${slideMarkup(item)}</main><footer class="deck-controls"><button data-action="prev" ${index === 0 ? "disabled" : ""}>← Previous</button><div class="deck-progress" aria-label="Presentation progress"><span style="width:${((index + 1) / slides.length) * 100}%"></span></div><button data-action="next" ${index === slides.length - 1 ? "disabled" : ""}>Next →</button><button class="fullscreen" data-action="fullscreen" aria-label="Fullscreen">⛶</button></footer>`;
    app.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => action(button.dataset.action)));
  };
  const action = name => {
    if (name === "next" && index < slides.length - 1) index += 1;
    else if (name === "prev" && index > 0) index -= 1;
    else if (name === "fullscreen" && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
    else return;
    render();
  };
  document.addEventListener("keydown", event => {
    if (["ArrowRight", " ", "PageDown"].includes(event.key)) { event.preventDefault(); action("next"); }
    if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); action("prev"); }
    if (event.key === "Escape" && document.fullscreenElement) document.exitFullscreen?.();
  });
  app.addEventListener("touchstart", event => { startX = event.touches[0].clientX; }, { passive: true });
  app.addEventListener("touchend", event => { const delta = event.changedTouches[0].clientX - startX; if (Math.abs(delta) > 48) action(delta < 0 ? "next" : "prev"); }, { passive: true });
  document.addEventListener("mousemove", () => { document.body.classList.remove("chrome-hidden"); clearTimeout(hideTimer); hideTimer = setTimeout(() => document.body.classList.add("chrome-hidden"), 1800); });

  /* Optional Entrance/Cover screen (AX Entry Warp — docs/13). A deck that
     wants a landing screen adds a #deck-cover element with a
     [data-action="enter"] button; the deck only renders once that button
     starts the entry transition. Decks without #deck-cover render
     immediately, unchanged from v0.1 behavior. */
  const cover = document.getElementById("deck-cover");
  const enterButton = cover && cover.querySelector('[data-action="enter"]');
  if (enterButton && window.startEntryTransition) {
    enterButton.addEventListener("click", () => {
      window.startEntryTransition(() => { cover.hidden = true; render(); });
    });
  } else {
    render();
  }
}());
