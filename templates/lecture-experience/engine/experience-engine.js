/* AX Lecture Experience Template v0.1 — neutral Module/Lesson core. */
(function () {
  "use strict";
  const experience = window.AX_EXPERIENCE_DATA, app = document.getElementById("experience-app");
  if (!app) return;
  const text = v => v == null ? "" : String(v);
  const esc = v => text(v).replace(/[&<>\"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const modules = Array.isArray(experience?.modules) ? experience.modules : [];
  const lessons = modules.flatMap(module => (Array.isArray(module.lessons) ? module.lessons : []).map(lesson => ({ ...lesson, module })));
  if (!experience?.meta?.title || !modules.length || !lessons.length) { app.innerHTML='<main class="experience-error"><h1>Experience data needs a title, modules, and lessons.</h1></main>'; console.warn("AX Experience validation failed."); return; }
  const options = experience.options || {}, key = `ax-experience-${experience.meta.id || "sample"}`;
  let current = 0;
  if (options.resume === true) { const saved = Number(localStorage.getItem(key)); if (Number.isInteger(saved) && saved >= 0 && saved < lessons.length) current = saved; }
  const save = () => { if (options.resume === true) localStorage.setItem(key, String(current)); };
  const progress = () => `${current + 1} / ${lessons.length}`;
  const hub = () => {
    app.innerHTML = `<header class="experience-chrome"><span>${esc(experience.meta.title)}</span><span>Progress ${progress()}</span></header><main class="experience-hub"><p class="eyebrow">Learning path</p><h1>${esc(experience.meta.title)}</h1><p>${esc(experience.meta.tagline || "")}</p><div class="module-grid">${modules.map((module, moduleIndex) => `<button data-module="${moduleIndex}"><span>Module ${moduleIndex+1}</span><strong>${esc(module.title || "Untitled module")}</strong><small>${esc(module.summary || "")}</small></button>`).join("")}</div></main>`;
    app.querySelectorAll("[data-module]").forEach(button => button.addEventListener("click", () => openModule(Number(button.dataset.module))));
  };
  const openModule = moduleIndex => { const first = lessons.findIndex(item => item.module === modules[moduleIndex]); if (first >= 0) { current = first; lesson(); } };
  const lesson = () => {
    const item = lessons[current], practice = options.practice === true ? `<button data-action="practice">Try a practice prompt</button>` : "";
    app.innerHTML = `<header class="experience-chrome"><button data-action="hub">← Hub</button><span>${esc(item.module.title || "Module")}</span><span>Progress ${progress()}</span></header><main class="lesson-stage"><p class="eyebrow">Lesson ${current + 1}</p><h1>${esc(item.title || "Untitled lesson")}</h1><p class="lesson-copy">${esc(item.summary || "Add a concise lesson summary in experience-data.js.")}</p>${practice}<section class="practice-panel" hidden><h2>Practice</h2><p>${esc(item.practice || "Ask participants to apply this lesson to a small, concrete case.")}</p><button data-action="close-practice">Continue</button></section></main><footer class="experience-controls"><button data-action="prev" ${current===0 ? "disabled" : ""}>← Previous</button><div class="experience-progress"><span style="width:${((current+1)/lessons.length)*100}%"></span></div><button data-action="next" ${current===lessons.length-1 ? "disabled" : ""}>Next →</button></footer>`;
    app.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => action(button.dataset.action)));
    save();
  };
  const action = name => { if(name === "hub") return hub(); if(name === "next" && current < lessons.length-1) { current++; lesson(); } if(name === "prev" && current>0) { current--; lesson(); } if(name === "practice") app.querySelector(".practice-panel").hidden=false; if(name === "close-practice") app.querySelector(".practice-panel").hidden=true; };
  document.addEventListener("keydown", event => { if(event.key === "ArrowRight") action("next"); if(event.key === "ArrowLeft") action("prev"); if(event.key === "Escape") hub(); });

  /* Optional Entrance/Cover screen (AX Entry Warp — docs/13). An experience
     that wants a landing screen adds an #experience-cover element with a
     [data-action="enter"] button; the hub only renders once that button
     starts the entry transition. Experiences without #experience-cover
     render immediately, unchanged from v0.1 behavior. Module/Lesson moves
     are unaffected either way. */
  const cover = document.getElementById("experience-cover");
  const enterButton = cover && cover.querySelector('[data-action="enter"]');
  if (enterButton && window.startEntryTransition) {
    enterButton.addEventListener("click", () => {
      window.startEntryTransition(() => { cover.hidden = true; hub(); });
    });
  } else {
    hub();
  }
}());
