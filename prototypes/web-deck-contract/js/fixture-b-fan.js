/* fixture-b-fan.js — Long Structure, Card Fan ON, Resume OFF(검증용)
   fixture-b-nofan.js와 sections 배열이 완전히 동일한 참조다(window.FIXTURE_B_SECTIONS) —
   presentation 블록만 다르다. 이 두 파일의 차이가 §9/§10의 핵심 증거다:
   Card Fan 유무·Resume 유무는 콘텐츠 데이터가 아니라 presentation 옵션일 뿐이다. */
window.DECK = {
  meta: {
    id: "long-demo-fan",
    title: "AX 실무 입문 — 핵심 6장",
    subtitle: "생각의 순서를 바꾸는 6개 주제",
    kicker: "WEB DECK · {N} Sections"
  },
  presentation: {
    sectionNavigator: "fan",
    resume: false
  },
  sections: window.FIXTURE_B_SECTIONS
};
