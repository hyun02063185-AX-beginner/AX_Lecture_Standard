/* =========================================================================
   fan.js — Sprint 2 Exp3 Variant A: Card Fan을 "Section 전환 장치"로 재배치
   -------------------------------------------------------------------------
   AX_Lecture room.js(177줄)에서 Box 그리드(buildRoom/revealBoxes/refreshBoxDots)를
   걷어내고 카드 부채꼴(dealFan/selectCard) 로직만 그대로 남겼다. 기하·모션 수치는
   1글자도 바꾸지 않았다 — 이 실험의 목적이 "카드 팬 자체를 다른 자리에 재배치해도
   같은 인상을 주는가"이므로, 카드의 시각 문법을 바꾸면 실험이 무의미해진다.
   DECK_SECTIONS(deck-main.js) 전체를 "하나의 부채꼴"로 편다 — Box 레이어 없음.
   ========================================================================= */
(function () {
  "use strict";

  const fanOverlay = document.getElementById("fan-overlay");
  const fanCardsEl = document.getElementById("fan-cards");
  const fanTitle = document.getElementById("fan-title");
  const fanClose = document.getElementById("fan-close");

  const fxScale = () => 2; // sayu 고정 프로토타입 — main.js의 fxScale()과 동일 값

  /* ---------- 카드 부채꼴 전개 ---------- */
  function dealFan() {
    const sections = window.DECK_SECTIONS || [];
    fanTitle.textContent = `${SITE_CONFIG.siteName} — Section을 선택하세요`;
    fanCardsEl.innerHTML = "";

    const n = sections.length;
    const spread = 40;
    const step = n > 1 ? spread / (n - 1) : 0;
    const start = -spread / 2;

    sections.forEach((sec, i) => {
      const angle = start + step * i;
      const card = document.createElement("div");
      card.className = "card" + (window.Progress.has(sec.id) ? " seen" : "");
      card.style.setProperty("--card-accent", CURRICULUM.boxes[sec._accentIndex].accent);
      card.dataset.lec = sec.id;
      card.dataset.box = sec._accentIndex;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${sec.title} — Section 입장`);
      card.innerHTML = `
        <div class="card__no">Section ${i + 1}</div>
        <div class="card__title">${sec.title}</div>
        <div class="card__tag">${sec.tagline}</div>
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
      card.addEventListener("click", () => selectCard(i));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectCard(i); }
      });

      fanCardsEl.appendChild(card);
    });

    fanOverlay.classList.add("is-open");
    const k = fxScale();
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

  function selectCard(sectionIndex) {
    App.Router.go("deck/" + sectionIndex);
  }

  function refreshCardsSeen() {
    document.querySelectorAll(".card").forEach(card => {
      const id = Number(card.dataset.lec);
      card.classList.toggle("seen", window.Progress.has(id));
    });
  }

  // Sprint 2 Exp3 Variant A: Fan이 곧 최상위 씬이므로 "닫기" = Start로 복귀
  fanClose.addEventListener("click", () => App.Router.go("start"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fanOverlay.classList.contains("is-open")) App.Router.go("start");
  });

  window.dealFan = dealFan;
  window.closeFanDOM = closeFanDOM;
  window.refreshCardsSeen = refreshCardsSeen;
})();
