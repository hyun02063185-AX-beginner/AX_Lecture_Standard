/* =========================================================================
   deck-main.js — Sprint 2 Exp2: Room/Box 허브 없는 선형 Web Deck 오케스트레이터
   -------------------------------------------------------------------------
   AX_Lecture의 main.js(744줄, Room/Box/Fan/게이미피케이션 상태 관리 전부 포함)를
   그대로 쓰지 않고 새로 작성했다 — 이유는 §07 기술 의존성 기록 참고.
   slides.js(렌더/네비/줌/키보드/스와이프/풀스크린/크롬자동숨김)는 100% 그대로 재사용한다.
   Flow: Start → Section(=강의 하나, cover 슬라이드로 시작) → Slide → Slide
         → Section(다음 강의로 자동 이어보기) → ... → Outro(마지막 closing 슬라이드)
   ========================================================================= */
(function () {
  "use strict";

  // CURRICULUM(data.js)의 Box>Lecture 구조를 평탄화해 "Section 배열"로 재해석한다.
  // 각 Section은 기존 lecture 객체 그대로(cover로 시작·closing으로 끝나는 슬라이드 배열을
  // 이미 갖고 있음) + 소속 Box의 accent 인덱스만 덧붙인다.
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
  // Sprint 2 Exp4 대상: Progress/Resume은 최소 stub만 둔다(완료 표시·이어보기 없음).
  // 실제 Web Deck에 필요한지는 08 문서에서 별도 판단한다.
  const Progress = { mark() {} };

  const scenes = {
    start: document.getElementById("scene-start"),
    slides: document.getElementById("scene-slides")
  };
  function goScene(name) {
    Object.values(scenes).forEach(s => s && s.classList.remove("is-active"));
    if (scenes[name]) scenes[name].classList.add("is-active");
    document.documentElement.dataset.route = name;
  }
  window.App = { Router, goScene };
  window.Progress = Progress;

  function openSection(index, slideIndex) {
    const i = Math.max(0, Math.min(index, DECK_SECTIONS.length - 1));
    const sec = DECK_SECTIONS[i];
    window.openLecture(sec, sec._accentIndex, slideIndex || 0); // slides.js의 openLecture를 그대로 호출
  }

  function handleHash() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (!parts.length || parts[0] === "start") { goScene("start"); return; }
    if (parts[0] === "deck") { openSection(Number(parts[1] || 0), Number(parts[2] || 0)); return; }
    goScene("start");
  }
  window.addEventListener("hashchange", handleHash);

  function applySiteConfig() {
    const N = DECK_SECTIONS.length;
    document.title = SITE_CONFIG.siteSubtitle + " · " + SITE_CONFIG.siteName;
    const kicker = document.querySelector(".start-kicker");
    if (kicker) kicker.textContent = SITE_CONFIG.kicker.replace("{N}", N);
    const title = document.querySelector(".start-title");
    if (title) title.textContent = SITE_CONFIG.siteName;
    const sub = document.querySelector(".start-sub");
    if (sub) sub.textContent = SITE_CONFIG.tagline.replace("{N}", N);
  }

  /* ---------- 배경 캔버스 (AX_Lecture main.js:552-665를 그대로 이식, sayu 고정) ----------
     Sprint 2 Exp2: Room/Box를 없애도 "레이어드 배경감"은 Design DNA로 보존한다는 원칙(§04)에
     따라, Room 상태와 무관하게 완전히 독립적으로 동작하는 이 함수만 그대로 재사용했다. */
  function initBackground() {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;
    const STATIC_BG = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    let w, h, stars = [];
    const bgSkin = "sayu";
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
    applySiteConfig();
    window.initSlides();

    const enterBtn = document.getElementById("enter-btn");
    const warp = document.getElementById("warp");
    if (enterBtn) enterBtn.addEventListener("click", () => {
      if (warp) {
        warp.classList.add("go");
        setTimeout(() => { warp.classList.remove("go"); Router.go("deck/0"); }, 900);
      } else {
        Router.go("deck/0");
      }
    });

    handleHash();
  });
})();
