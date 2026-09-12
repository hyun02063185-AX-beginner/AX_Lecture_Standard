/* =========================================================================
   deck-main.js — Sprint 2 Exp3 Variant A: Card Fan을 Section 전환 장치로 사용
   Flow: Start → Fan(4 Section 카드) → Section 슬라이드 → (Section 끝) → Fan → ...
   ========================================================================= */
(function () {
  "use strict";

  const DECK_SECTIONS = [];
  CURRICULUM.boxes.forEach((b, bi) => {
    b.lectures.forEach(l => DECK_SECTIONS.push(Object.assign({ _accentIndex: bi, _boxName: b.name }, l)));
  });
  window.DECK_SECTIONS = DECK_SECTIONS;

  const Router = {
    go(path) { location.hash = "#/" + path; },
    replace(path) { history.replaceState(null, "", "#/" + path); },
    back() { history.back(); }
  };
  window.Progress = { mark() {}, has() { return false; } }; // Exp4 대상 — 항상 미완료로 표시

  const scenes = {
    start: document.getElementById("scene-start"),
    fan: document.getElementById("scene-fan"),
    slides: document.getElementById("scene-slides")
  };
  function goScene(name) {
    Object.values(scenes).forEach(s => s && s.classList.remove("is-active"));
    if (scenes[name]) scenes[name].classList.add("is-active");
    document.documentElement.dataset.route = name;
  }
  window.App = { Router, goScene };

  function handleHash() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (!parts.length || parts[0] === "start") { goScene("start"); return; }
    if (parts[0] === "fan") { goScene("fan"); window.dealFan(); return; }
    if (parts[0] === "deck") {
      const sec = DECK_SECTIONS[Number(parts[1] || 0)];
      if (sec) window.openLecture(sec, sec._accentIndex, Number(parts[2] || 0));
      return;
    }
    goScene("start");
  }
  window.addEventListener("hashchange", handleHash);

  function applySiteConfig() {
    const N = DECK_SECTIONS.length;
    document.title = SITE_CONFIG.siteSubtitle + " · " + SITE_CONFIG.siteName;
    const kicker = document.querySelector(".start-kicker");
    if (kicker) kicker.textContent = SITE_CONFIG.kicker.replace("{N}", N);
    const sub = document.querySelector(".start-sub");
    if (sub) sub.textContent = SITE_CONFIG.tagline.replace("{N}", N);
  }

  /* ---------- 배경 캔버스 (02-linear-deck과 동일 이식) ---------- */
  function initBackground() {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;
    const STATIC_BG = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    let w, h, stars = [];
    function resize() {
      w = canvas.width = window.innerWidth * DPR;
      h = canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.min(180, Math.floor((w * h) / 26000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.5 * DPR + 0.3,
        a: Math.random(), tw: Math.random() * 0.02 + 0.004,
        dy: (Math.random() * 0.12 + 0.02) * DPR
      }));
      if (STATIC_BG) draw();
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      stars.forEach(s => {
        s.a += s.tw; const alpha = 0.35 + Math.abs(Math.sin(s.a)) * 0.65;
        s.y += s.dy * 0.6; if (s.y > h) { s.y = 0; s.x = Math.random() * w; }
        ctx.beginPath();
        ctx.fillStyle = `rgba(224,197,138,${alpha})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    function loop() { draw(); requestAnimationFrame(loop); }
    window.addEventListener("resize", resize);
    resize();
    if (STATIC_BG) draw(); else loop();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.dataset.skin = "sayu";
    window.__fxScale = () => 2;
    initBackground();
    applySiteConfig();
    window.initSlides();

    const enterBtn = document.getElementById("enter-btn");
    const warp = document.getElementById("warp");
    if (enterBtn) enterBtn.addEventListener("click", () => {
      if (warp) {
        warp.classList.add("go");
        setTimeout(() => { warp.classList.remove("go"); Router.go("fan"); }, 900);
      } else {
        Router.go("fan");
      }
    });

    handleHash();
  });
})();
