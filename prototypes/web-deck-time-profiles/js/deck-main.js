/* =========================================================================
   deck-main.js — Sprint 3: Contract v0.1 오케스트레이터
   -------------------------------------------------------------------------
   fixture-*.js가 정의한 전역 DECK을 읽어 라우팅·Progress·Resume·배경을 구성한다.
   Card Fan을 켤지 말지는 DECK.presentation.sectionNavigator 값을 "그대로 따를 뿐"
   — Section 개수를 세어 스스로 판단하는 조건문은 이 파일 어디에도 없다(§9).
   ========================================================================= */
(function () {
  "use strict";

  Deck.validateDeck(window.DECK); // 콘솔 경고만 — 화면 렌더를 막지 않는다(§13-14)

  const Router = {
    go(path) { location.hash = "#/" + path; },
    replace(path) { history.replaceState(null, "", "#/" + path); },
    back() { history.back(); }
  };

  /* ---------- Progress(현재 세션 한정, §20) ---------- */
  const seen = new Set();
  window.Progress = {
    mark(id) { seen.add(id); if (window.refreshCardsSeen) window.refreshCardsSeen(); },
    has(id) { return seen.has(id); }
  };

  /* ---------- Resume(presentation.resume === true 일 때만 존재, §20) ----------
     slides.js는 `if (activeSection && App.Resume)`로만 접근하므로, App.Resume을
     아예 안 만들어도(off) 크래시 없이 정상 동작한다 — "Engine이 Resume을
     강제하지 않는다"는 §20의 요구를 코드 존재 여부만으로 검증한다. */
  let AppResume;
  if (Deck.getPresentation().resume === true) {
    const KEY = "webdeck_resume_" + (Deck.getMeta().id || "default");
    const readAll = () => { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } };
    const writeAll = (o) => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} };
    AppResume = {
      get(sectionId) { return readAll()[sectionId]; },
      set(sectionId, slideIndex) { const all = readAll(); all[sectionId] = slideIndex; writeAll(all); },
      clear(sectionId) { const all = readAll(); delete all[sectionId]; writeAll(all); }
    };
  }

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
  window.App = { Router, goScene, Resume: AppResume };

  function handleHash() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (!parts.length || parts[0] === "start") { goScene("start"); return; }
    if (parts[0] === "fan") { goScene("fan"); window.dealFan(); return; }
    if (parts[0] === "deck") {
      const sec = Deck.getSectionByIndex(Number(parts[1] || 0));
      // Sprint 3: accent는 Section 데이터의 선택 필드(section.accent, 0-3)로 직접 받는다 —
      // Box 인덱스에서 파생시키지 않는다(파생시키면 다시 Box 개념에 암묵적으로 결합됨).
      if (sec) window.openSection(sec, sec.accent != null ? sec.accent : 0, Number(parts[2] || 0));
      return;
    }
    goScene("start");
  }
  window.addEventListener("hashchange", handleHash);

  function applyMeta() {
    const meta = Deck.getMeta();
    const N = Deck.getSections().length;
    document.title = meta.title || "AX Web Deck";
    const kicker = document.querySelector(".start-kicker");
    if (kicker) kicker.textContent = (meta.kicker || "WEB DECK · {N} Sections").replace("{N}", N);
    const title = document.querySelector(".start-title");
    if (title) title.textContent = meta.title || "";
    const sub = document.querySelector(".start-sub");
    if (sub) sub.textContent = meta.subtitle || "";
  }

  /* ---------- 배경 캔버스 (Sprint 2와 동일 이식, sayu 고정) ---------- */
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
    initBackground();
    applyMeta();
    window.initSlides();

    const enterBtn = document.getElementById("enter-btn");
    const warp = document.getElementById("warp");
    const nav = Deck.getPresentation().sectionNavigator; // "fan" | "none" | undefined
    if (enterBtn) enterBtn.addEventListener("click", () => {
      const dest = nav === "fan" ? "fan" : "deck/0";
      if (warp) {
        warp.classList.add("go");
        setTimeout(() => { warp.classList.remove("go"); Router.go(dest); }, 900);
      } else {
        Router.go(dest);
      }
    });

    handleHash();
  });
})();
