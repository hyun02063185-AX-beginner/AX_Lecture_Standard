/* =========================================================================
   fixture-90.js — Web Deck 90 Profile 구조 Fixture
   -------------------------------------------------------------------------
   Section 4개(AX_Lecture 원문 lecture 1·2·3·4 발췌). Card Fan/Resume을 켜
   "90분에서 가치가 생기는가"를 직접 관찰한다(§9). DEMO 역할 슬라이드를
   명시적으로 추가해 Case와 구분했다(§7). Closing Variant C를 시연한다(§13).
   ========================================================================= */
window.DECK = {
  meta: {
    id: "profile-90-demo",
    title: "AX 실무 입문 — 90분 심화",
    subtitle: "왜·문턱·태도·프롬프트, 네 가지 기초를 깊이 있게",
    kicker: "WEB DECK 90 · {N} Sections"
  },
  presentation: {
    sectionNavigator: "fan",
    resume: true
  },
  sections: [
    {
      id: "ax-what", title: "AX란 무엇인가", tagline: "생각의 순서를 바꾸다", accent: 0,
      slides: [
        { type: 'cover', kicker: 'Section 1', title: 'AX란 무엇인가', subtitle: 'AI가 바꾸는 건 도구가 아니라 일하는 방식' },
        { type: 'big', word: 'AX ≠ AI 도구 도입', sub: '도구를 더하는 게 아니라, 일을 다시 짜는 것' },
        { type: 'image', title: '전산화 → DX → AX, 세 개의 계단', src: 'assets/diagram-ax-stairs.svg', diagram: true,
          caption: '손을 컴퓨터로(전산화), 흩어진 것을 데이터로(DX), 그 위에서 AI가 판단을 보조(AX).' },
        { type: 'bullets', title: '사례 · 같은 도구, 다른 결과', subtitle: '두 팀에 같은 AI가 주어졌다', items: [
          'A팀: "각자 알아서 써보세요" → 3주 뒤 아무도 안 씀',
          'B팀: 주간 보고서 초안을 AI가 쓰고 사람이 다듬는 걸로 "절차를 바꿈"',
          '차이는 도구가 아니라 — 일의 순서를 바꿨는가'
        ]},
        { type: 'closing', title: 'AX는 도구가 아니라 방식이다', teaser: '그런데 왜 하필 "지금" 이 얘기가 쏟아질까?' }
      ]
    },
    {
      id: "ax-why-now", title: "왜 지금인가", tagline: "변곡점 위의 실무자", accent: 0,
      slides: [
        { type: 'cover', kicker: 'Section 2', title: '왜 지금인가', subtitle: "기술보다, '문턱'이 무너진 게 핵심" },
        { type: 'big', word: '달라진 건 성능이 아니라\n문턱이다', sub: '이제 코딩 없이, 말로 쓴다' },
        { type: 'image', title: '무너진 문턱 세 개', src: 'assets/diagram-fallen-barriers.svg', diagram: true,
          caption: '언어 장벽, 전문가 장벽, 비용 장벽이 동시에 낮아졌다.' },
        // DEMO — Case와 구분되는 "지금 함께 해보는" 역할
        { type: 'bullets', title: '실습 데모 · 문턱이 사라진 순간 체감하기', subtitle: '지금 화면을 함께 봅니다', items: [
          '한국어로 그대로 질문 → 몇 초 안에 초안 도착',
          '"프로그래밍 지식 0"으로도 결과물이 나오는 과정을 그대로 시연',
          '문턱이 없다는 걸 설명이 아니라 눈으로 확인하는 5분'
        ]},
        { type: 'closing', title: '지금인 이유 = 문턱이 무너져서', teaser: '그럼 이 새 도구를, 어떤 마음가짐으로 대해야 할까?' }
      ]
    },
    {
      id: "ax-attitude", title: "AI를 대하는 태도", tagline: "믿되, 검증하라", accent: 1,
      slides: [
        { type: 'cover', kicker: 'Section 3', title: 'AI를 대하는 태도', subtitle: '믿되, 검증하라' },
        { type: 'big', word: 'AI는\n자신 있게 틀린다', sub: '가장 위험한 건 "그럴듯한 오답"' },
        { type: 'bullets', title: '사례 · 회의록에 없던 결정', subtitle: '어느 팀의 아찔한 아침', items: [
          '회의록 요약을 AI에 맡겼더니, 매끄러운 정리가 나왔다',
          '"예산 증액 승인"이라는, 회의에 없던 문장이 끼어 있었다'
        ]},
        { type: 'split', title: '그대로 써도 되는 일 vs 반드시 검증할 일',
          left:  ['가볍게 써도 되는 일', '초안 · 브레인스토밍', '틀려도 손해가 작음'],
          right: ['반드시 검증할 일', '숫자 · 통계 · 인용 · 출처', '외부로 나가는 결과물'] },
        { type: 'closing', title: '믿되, 검증하라', teaser: '어떻게 물어야 잘 나올까? 첫 단추는 "질문"이다.' }
      ]
    },
    {
      id: "prompt-basics", title: "프롬프트의 기초", tagline: "대화가 곧 인터페이스", accent: 1,
      slides: [
        { type: 'cover', kicker: 'Section 4', title: '프롬프트의 기초', subtitle: '좋은 답은 좋은 지시에서 나온다' },
        { type: 'image', title: '프롬프트 4요소', src: 'assets/diagram-prompt-4.svg', diagram: true,
          caption: '맥락(무슨 상황) · 역할(누구처럼) · 지시(무엇을 어떻게) · 형식(어떤 모양으로).' },
        // DEMO — 4요소를 실시간으로 적용해보는 실습 데모
        { type: 'bullets', title: '실습 데모 · 막연한 지시를 그 자리에서 고쳐보기', subtitle: '청중 지시문 1개를 함께 개선', items: [
          '참가자가 실제로 썼던 막연한 프롬프트 1개를 화면에 띄운다',
          '맥락·역할·지시·형식 4요소를 하나씩 채워가며 결과가 바뀌는 걸 확인',
          '5분 투자로 결과가 확연히 달라지는 걸 그 자리에서 본다'
        ]},
        { type: 'quote', text: 'AI를 탓하기 전에,\n내 지시가 구체적이었는지 본다', by: '오늘의 태도' },
        // CLOSE (Variant C — Callback + Action Closing: 회수 메시지 + link로 구체적 다음 행동 제시)
        {
          type: 'closing',
          title: '구체적으로 주면 구체적으로 나온다',
          teaser: '오늘 다룬 네 가지 — AX는 방식, 문턱은 사라졌고, 믿되 검증하고, 구체적으로 지시한다. 다음 행동: 프롬프트 4요소 체크리스트를 오늘 업무 하나에 바로 적용해보세요.',
          link: { url: 'assets/diagram-prompt-4.svg', label: '체크리스트로 쓸 4요소 도식 다시 보기' }
        }
      ]
    }
  ]
};
