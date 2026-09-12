/* =========================================================================
   fan.js — Sprint 3: Card Fan은 presentation option일 뿐, Engine 조건문이 아니다
   -------------------------------------------------------------------------
   이 파일은 Deck.getSections()만 참조한다 — CURRICULUM/window.DECK_SECTIONS를
   전혀 모른다. 이 파일 자체는 "Section 개수가 몇 개면 켠다" 같은 판단을 하지
   않는다 — 그 판단은 deck-main.js가 fixture의 presentation.sectionNavigator
   값을 읽어서 내리고, dealFan()은 호출되면 그릴 뿐이다(§9).
   Sprint 2 room.js 유래 카드 기하·모션 수치는 이번에도 바꾸지 않았다.
   ========================================================================= */
(function () {
  "use strict";

  const fanOverlay = document.getElementById("fan-overlay");
  const fanCardsEl = document.getElementById("fan-cards");
  const fanTitle = document.getElementById("fan-title");
  const fanClose = document.getElementById("fan-close");

  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function dealFan() {
    const sections = Deck.getSections();
    const meta = Deck.getMeta();
    fanTitle.textContent = `${meta.title || ""} — Section을 선택하세요`;
    fanCardsEl.innerHTML = "";

    const n = sections.length;
    const spread = 40;
    const step = n > 1 ? spread / (n - 1) : 0;
    const start = -spread / 2;

    sections.forEach((sec, i) => {
      const angle = start + step * i;
      const card = document.createElement("div");
      card.className = "card" + (window.Progress.has(sec.id) ? " seen" : "");
      card.style.setProperty("--card-accent", `var(--cyan)`);
      card.dataset.sectionId = sec.id;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      // Sprint 3: 필수는 아니지만(§13) 화면에 보이는 모든 필드는 esc()로 안전하게 —
      // Sprint 1 Codyssey Lecture 카드 렌더에서 실측된 undefined 노출 사고를 재발시키지 않는다.
      card.setAttribute("aria-label", `${esc(sec.title)} — Section 입장`);
      card.innerHTML = `
        <div class="card__no">Section ${i + 1}</div>
        <div class="card__title">${esc(sec.title)}</div>
        <div class="card__tag">${esc(sec.tagline || "")}</div>
        <span class="card__seen">✓ 완료</span>`;

      const finalTransform = `rotate(${angle}deg) translateY(-46px)`;
      const hoverTransform = `rotate(${angle}deg) translateY(-70px) scale(1.05)`;
      card.dataset.final = finalTransform;
      card.style.zIndex = i + 1;

      const lift = () => {
        if (!card.classList.contains("dealt")) return;
        card.style.transform = hoverTransform;
        card.style.zIndex = 40;
      };
      const drop = () => {
        if (!card.classList.contains("dealt")) return;
        card.style.transform = finalTransform;
        card.style.zIndex = i + 1;
      };
      card.addEventListener("mouseenter", lift);
      card.addEventListener("mouseleave", drop);
      card.addEventListener("focus", lift);
      card.addEventListener("blur", drop);
      card.addEventListener("click", () => selectCard(sec));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectCard(sec); }
      });

      fanCardsEl.appendChild(card);
    });

    fanOverlay.classList.add("is-open");
    const k = 2; // sayu 고정 프로토타입(fxScale과 동일 값, §07)
    requestAnimationFrame(() => {
      [...fanCardsEl.children].forEach((card, i) => {
        card.style.transform = "rotate(0deg) translateY(120px) scale(.9)";
        setTimeout(() => {
          card.classList.add("dealt");
          card.style.transform = card.dataset.final;
        }, (40 + i * 60) * k);
      });
    });
  }

  function closeFanDOM() {
    fanOverlay.classList.remove("is-open");
  }

  function selectCard(section) {
    App.Router.go("deck/" + Deck.sectionIndexOf(section.id));
  }

  function refreshCardsSeen() {
    document.querySelectorAll(".card").forEach(card => {
      card.classList.toggle("seen", window.Progress.has(card.dataset.sectionId));
    });
  }

  fanClose.addEventListener("click", () => App.Router.go("start"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fanOverlay.classList.contains("is-open")) App.Router.go("start");
  });

  window.dealFan = dealFan;
  window.closeFanDOM = closeFanDOM;
  window.refreshCardsSeen = refreshCardsSeen;
})();
