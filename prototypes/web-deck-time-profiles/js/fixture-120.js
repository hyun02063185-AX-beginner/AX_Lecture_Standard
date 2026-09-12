/* =========================================================================
   fixture-120.js — Web Deck 120 Profile 구조 Fixture
   -------------------------------------------------------------------------
   Section 6개(Sprint 3 fixture-b-sections.js와 동일 원문, 재사용). 마지막
   Section에 DEMO가 아니라 PRACTICE 역할 슬라이드를 명시적으로 추가해
   "강의만 120분 채우지 않는다"(§5 Web Deck 120 가설)는 원칙을 구조로
   드러냈다 — Demo(발표자 시연)와 Practice(참가자 직접 수행)를 문구로 구분.
   Closing Variant C(90분과 동일 — §13에서 "90 이상은 C가 적합"이라는
   가설을 재확인하기 위해 의도적으로 재사용).
   ========================================================================= */
window.DECK = {
  meta: {
    id: "profile-120-demo",
    title: "AX 실무 입문 — 120분 워크숍형",
    subtitle: "강의 + 짧은 실습으로 여섯 가지 기초 다지기",
    kicker: "WEB DECK 120 · {N} Sections"
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
        { type: 'quote', text: 'AX는 AI 프로젝트가 아니라,\n일하는 방식을 바꾸는 일이다', by: '오늘의 정의' },
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
        { type: 'closing', title: '지금인 이유 = 문턱이 무너져서', teaser: '그럼 이 새 도구를, 어떤 마음가짐으로 대해야 할까?' }
      ]
    },
    {
      id: "ax-attitude", title: "AI를 대하는 태도", tagline: "믿되, 검증하라", accent: 1,
      slides: [
        { type: 'cover', kicker: 'Section 3', title: 'AI를 대하는 태도', subtitle: '믿되, 검증하라' },
        { type: 'big', word: 'AI는\n자신 있게 틀린다', sub: '가장 위험한 건 "그럴듯한 오답"' },
        { type: 'split', title: '그대로 써도 되는 일 vs 반드시 검증할 일',
          left:  ['가볍게 써도 되는 일', '초안 · 브레인스토밍', '틀려도 손해가 작음'],
          right: ['반드시 검증할 일', '숫자 · 통계 · 인용 · 출처', '외부로 나가는 결과물'] },
        { type: 'closing', title: '믿되, 검증하라', teaser: '그럼 어떻게 물어야 잘 나올까?' }
      ]
    },
    {
      id: "prompt-basics", title: "프롬프트의 기초", tagline: "대화가 곧 인터페이스", accent: 1,
      slides: [
        { type: 'cover', kicker: 'Section 4', title: '프롬프트의 기초', subtitle: '좋은 답은 좋은 지시에서 나온다' },
        { type: 'image', title: '프롬프트 4요소', src: 'assets/diagram-prompt-4.svg', diagram: true,
          caption: '맥락(무슨 상황) · 역할(누구처럼) · 지시(무엇을 어떻게) · 형식(어떤 모양으로).' },
        { type: 'quote', text: 'AI를 탓하기 전에,\n내 지시가 구체적이었는지 본다', by: '오늘의 태도' },
        { type: 'closing', title: '좋은 지시가 좋은 결과를 만든다', teaser: '"좋은 지시"의 시작은 결국 "좋은 질문"이다.' }
      ]
    },
    {
      id: "genai-map", title: "생성형 AI 지형도", tagline: "언제 무엇을 고를까", accent: 2,
      slides: [
        { type: 'cover', kicker: 'Section 5', title: '생성형 AI 지형도', subtitle: '도구를 하나씩 보기 전에, 전체 지도부터' },
        { type: 'bullets', title: '무엇을 만드느냐로 나눈다', subtitle: '출력물이 곧 분류', items: [
          '글 — 답변·요약·초안 (가장 많이 씀)',
          '이미지 — 그림·디자인 시안·썸네일',
          '음성 — 더빙·음성 안내·회의록 받아쓰기'
        ]},
        { type: 'image', title: '생성형 AI 지도', src: 'assets/diagram-genai-map.svg', diagram: true,
          caption: '다섯 갈래 — 실무의 8할은 "글"에서 시작된다.' },
        { type: 'closing', title: '생성형 AI, 한눈에', teaser: "지도를 봤으니 첫 목적지로. 내 자료에서 '찾는' 법부터." }
      ]
    },
    {
      id: "rag-intro", title: "지식 검색(RAG) 이해하기", tagline: "내 문서와 대화하기", accent: 2,
      slides: [
        { type: 'cover', kicker: 'Section 6', title: '지식검색 RAG', subtitle: '우리 조직에도 통할까?' },
        { type: 'bullets', title: '지식검색이란', subtitle: '먼저 찾고, 근거로 답한다', items: [
          '질문이 오면, 쌓아둔 자료에서 관련 조각을 먼저 찾는다',
          '핵심: 답을 지어내는 게 아니라, 찾아서 답한다'
        ]},
        { type: 'image', title: '지식검색은 이렇게 움직인다', src: 'assets/diagram-rag-flow.svg', diagram: true,
          caption: '질문 → 조각 찾기 → 근거 삼기 → 답변. 근거가 먼저다.' },
        // PRACTICE — Demo(발표자 시연)와 구분되는, 참가자가 직접 수행하는 짧은 실습
        { type: 'bullets', title: '짧은 실습(10분) · 내 업무의 "찾는 자료" 후보 정리하기', subtitle: '발표자 시연이 아니라 직접 해보는 시간입니다', items: [
          '각자 최근 일주일간 "그 자료 어디 있죠?"라고 물었던 순간을 떠올려 적는다',
          '옆 사람과 1개씩 교환해 "이게 지식검색으로 될지" 서로 점검한다',
          '10분 뒤 대표 사례 2~3개를 함께 공유한다'
        ]},
        // CLOSE (Variant C — Callback + Action, 90분 Profile과 동일 방식 재사용)
        {
          type: 'closing',
          title: '지식검색은\n조직의 기억을 꺼낸다',
          teaser: '오늘 여섯 가지 기초를 다졌습니다. 다음 행동: 방금 실습에서 적은 "찾는 자료" 후보 1개를 이번 주 안에 실제로 연결해보세요.',
          link: { url: 'assets/diagram-meaning-map.svg', label: '관련 도식 다시 보기' }
        }
      ]
    }
  ]
};
