/* =========================================================================
   fixture-60.js — Web Deck 60 Profile 구조 Fixture
   -------------------------------------------------------------------------
   Sprint 4 작업 지시서 §5에서 "AI를 대하는 태도"가 60분 Profile의 첫 적용
   후보로 명시되어, 이 강의의 실제 AX_Lecture 원고(id:3, 14슬라이드)를
   거의 그대로 옮기고 Section 2개로 나눴다(개념 인식 → 실무 대응).
   Closing Variant B(Callback Closing)를 이 Profile에서 시연한다(docs/13 §B)
   — Opening의 quote를 Closing이 그대로 회수한다.
   ========================================================================= */
window.DECK = {
  meta: {
    id: "profile-60-demo",
    title: "AX 실무 입문 — AI를 대하는 태도",
    subtitle: "믿되, 검증하라",
    kicker: "WEB DECK 60 · {N} Sections"
  },
  presentation: {
    sectionNavigator: "none",
    resume: false
  },
  sections: [
    {
      id: "attitude-problem", title: "AI는 왜 자신 있게 틀리는가", tagline: "문제 인식", accent: 1,
      slides: [
        // HOOK — cover
        { type: 'cover', kicker: 'Section 1', title: 'AI를 대하는 태도', subtitle: '믿되, 검증하라' },
        // KEY_MESSAGE
        { type: 'big', word: 'AI는\n자신 있게 틀린다', sub: '가장 위험한 건 "그럴듯한 오답"' },
        // CONCEPT
        { type: 'image', title: 'AI가 답을 만드는 방식', src: 'assets/diagram-next-word.svg', diagram: true,
          caption: '"가장 그럴듯한 다음"을 고를 뿐 — 그 안에 사실 확인 장치는 없다.' },
        // CONCEPT(부연)
        { type: 'bullets', title: '왜 틀리는가', subtitle: '거짓말이 아니라 "지어내기"다', items: [
          'AI는 "가장 그럴듯한 다음 말"을 만든다 — 사실 확인기가 아니다',
          '몰라도 모른다고 안 하고, 매끄럽게 채워 넣는다 (환각)',
          '틀린 답도 문장은 완벽해서 더 속기 쉽다'
        ]},
        // CASE
        { type: 'bullets', title: '사례 · 회의록에 없던 결정', subtitle: '어느 팀의 아찔한 아침', items: [
          '회의록 요약을 AI에 맡겼더니, 매끄러운 정리가 나왔다',
          '그런데 "예산 증액 승인"이라는, 회의에 없던 문장이 끼어 있었다',
          '검토 없이 전체 공유됐다면? — 오늘 강의가 그 보험이다'
        ]},
        // HOOK 문장을 여기서 명시적으로 던져 Closing에서 회수한다(Callback 재료)
        { type: 'quote', text: '문제는 AI가 틀리는 게 아니라,\n우리가 안 틀렸다고 믿는 것이다', by: '오늘의 핵심 질문' }
      ]
    },
    {
      id: "attitude-practice", title: "검증을 습관으로 만들기", tagline: "실무 대응", accent: 1,
      slides: [
        { type: 'big', word: '믿는 만큼\n검증한다', sub: '속도의 도구를, 확신의 근거로 착각하지 말 것' },
        // COMPARE
        { type: 'split', title: '그대로 써도 되는 일 vs 반드시 검증할 일',
          left:  ['가볍게 써도 되는 일', '초안 · 브레인스토밍', '말투 다듬기 · 요약', '틀려도 손해가 작음'],
          right: ['반드시 검증할 일', '숫자 · 통계 · 인용 · 출처', '법규 · 계약 · 의료 정보', '외부로 나가는 결과물'] },
        // ACT — 실무 습관(짧은 실습 성격)
        { type: 'bullets', title: '실무 검증 습관 4가지', subtitle: '의심을 "절차"로 만든다', items: [
          '출처를 물어보고, 그 출처를 직접 확인한다',
          '같은 질문을 다르게 두 번 물어 답이 흔들리는지 본다',
          '숫자 · 고유명사 · 날짜는 원자료로 대조한다',
          '"모르면 모른다고 해"라고 먼저 지시한다'
        ]},
        // GUARD — 위험/오해 교정
        { type: 'bullets', title: '흔한 오해 셋', subtitle: '태도가 무너지는 지점들', items: [
          '"비싼/최신 모델은 안 틀린다" → 덜 틀릴 뿐, 원리는 같다',
          '"검증하려면 안 쓰느니만 못하다" → 검증 비용 < 오답 비용',
          '검증은 불신이 아니라, 잘 쓰는 기술이다'
        ]},
        { type: 'big', word: 'AI = 유능한 인턴', sub: '빠르고 성실하지만, 검토 없이 내보내진 않는다' },
        // CLOSE (Variant B — Callback Closing: Section 1의 quote를 결론으로 다시 가져와 연결)
        {
          type: 'closing',
          title: '믿되, 검증하라',
          teaser: '"문제는 AI가 틀리는 게 아니라, 우리가 안 틀렸다고 믿는 것이다" — 오늘 던진 이 질문을 검증 습관 4가지로 답했습니다.'
        }
      ]
    }
  ]
};
