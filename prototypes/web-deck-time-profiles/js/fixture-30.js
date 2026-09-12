/* =========================================================================
   fixture-30.js — Web Deck 30 Profile 구조 Fixture
   -------------------------------------------------------------------------
   단일 핵심 메시지 전달. Section 1개, Slide Role Mix는 아래 주석대로.
   Closing Variant A(Simple Closing)를 이 Profile에서 시연한다(docs/13 §A).
   콘텐츠는 AX_Lecture 원문 발췌(가공 없음) + 30분 구조에 맞게 축약.
   ========================================================================= */
window.DECK = {
  meta: {
    id: "profile-30-demo",
    title: "AX 실무 입문 — 30분 특강",
    subtitle: "AI를 대하는 태도, 한 가지만 기억하고 가세요",
    kicker: "WEB DECK 30 · {N} Section"
  },
  presentation: {
    sectionNavigator: "none",
    resume: false
  },
  sections: [
    {
      id: "attitude-30", title: "AI를 대하는 태도", tagline: "믿되, 검증하라", accent: 1,
      slides: [
        // HOOK — 질문/문제 제기로 시작
        { type: 'quote', text: '문제는 AI가 틀리는 게 아니라,\n우리가 안 틀렸다고 믿는 것이다', by: '오늘 30분의 질문' },
        // KEY_MESSAGE — 핵심 키워드 1개
        { type: 'big', word: 'AI는\n자신 있게 틀린다', sub: '가장 위험한 건 "그럴듯한 오답"' },
        // CONCEPT — 개념 설명(다이어그램)
        { type: 'image', title: 'AI가 답을 만드는 방식', src: 'assets/diagram-next-word.svg', diagram: true,
          caption: '"가장 그럴듯한 다음"을 고를 뿐 — 그 안에 사실 확인 장치는 없다.' },
        // CASE — 짧은 사례 1개
        { type: 'bullets', title: '사례 · 회의록에 없던 결정', subtitle: '어느 팀의 아찔한 아침', items: [
          '회의록 요약을 AI에 맡겼더니, 매끄러운 정리가 나왔다',
          '그런데 "예산 증액 승인"이라는, 회의에 없던 문장이 끼어 있었다',
          '검토 없이 전체 공유됐다면? — 오늘 30분이 그 보험이다'
        ]},
        // ACT — 지금 바로 할 수 있는 행동 1개
        { type: 'bullets', title: '오늘부터 할 일 하나', subtitle: '검증 습관, 딱 하나만', items: [
          '숫자 · 고유명사 · 날짜는 원자료로 대조한다',
          '그거 하나만 습관이 되어도 절반은 막는다'
        ]},
        // CLOSE (Variant A — Simple Closing: 핵심 문장 + 종료, 별도 콜백 없음)
        { type: 'closing', title: '믿되, 검증하라' }
      ]
    }
  ]
};
