/* =========================================================================
   fixture-b-sections.js — Long Structure(6 Sections)의 공유 콘텐츠
   -------------------------------------------------------------------------
   long-no-fan.html과 long-fan.html이 이 배열을 그대로 공유한다 — "같은 콘텐츠
   데이터, presentation만 다름"을 코드 수준에서 강제하기 위함(§10 B-1/B-2 요구사항).
   콘텐츠는 AX_Lecture js/data.js 원문 발췌(가공 없음).
   ========================================================================= */
window.FIXTURE_B_SECTIONS = [
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
      { type: 'quote', text: 'AI가 갑자기 똑똑해진 게 아니라,\n갑자기 "내가 쓸 수 있게" 됐다', by: '변곡점의 정체' },
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
      { type: 'big', word: 'AI = 유능한 인턴', sub: '빠르고 성실하지만, 검토 없이 내보내진 않는다' },
      { type: 'closing', title: '믿되, 검증하라', teaser: '그럼 어떻게 물어야 잘 나올까?' }
    ]
  },
  {
    id: "prompt-basics", title: "프롬프트의 기초", tagline: "대화가 곧 인터페이스", accent: 1,
    slides: [
      { type: 'cover', kicker: 'Section 4', title: '프롬프트의 기초', subtitle: '좋은 답은 좋은 지시에서 나온다' },
      { type: 'big', word: 'AI는\n마음을 못 읽는다', sub: '"알아서 잘"은 없다 — 주는 만큼 나온다' },
      { type: 'image', title: '프롬프트 4요소', src: 'assets/diagram-prompt-4.svg', diagram: true,
        caption: '맥락(무슨 상황) · 역할(누구처럼) · 지시(무엇을 어떻게) · 형식(어떤 모양으로).' },
      { type: 'split', title: '막연한 지시 vs 구체적 지시',
        left:  ['막연', '"신제품 홍보문구 써줘"', '→ 뻔하고 밋밋한 답'],
        right: ['구체적', '"2030 직장인 대상, 친근한 말투, SNS용 3개"', '→ 바로 쓸 만한 답'] },
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
        '음성 — 더빙·음성 안내·회의록 받아쓰기',
        '영상 — 짧은 클립·자막·편집 보조'
      ]},
      { type: 'image', title: '생성형 AI 지도', src: 'assets/diagram-genai-map.svg', diagram: true,
        caption: '다섯 갈래 — 실무의 8할은 "글"에서 시작된다.' },
      { type: 'quote', text: "도구가 많아 보여도,\n'무엇을 만드나'로 나누면 지도가 보인다", by: '오늘의 정리' },
      { type: 'closing', title: '생성형 AI, 한눈에', teaser: "지도를 봤으니 첫 목적지로. 내 자료에서 '찾는' 법부터." }
    ]
  },
  {
    id: "rag-intro", title: "지식 검색(RAG) 이해하기", tagline: "내 문서와 대화하기", accent: 2,
    slides: [
      { type: 'cover', kicker: 'Section 6', title: '지식검색 RAG', subtitle: '우리 조직에도 통할까?' },
      { type: 'quote', text: '사람이 결심하면, 이제 AI가 뜁니다.\n방향이 틀리면 — 유능한 AI가 더 빠르게 틀린 곳으로.', by: '오늘의 문제의식' },
      { type: 'bullets', title: '지식검색이란', subtitle: '먼저 찾고, 근거로 답한다', items: [
        '질문이 오면, 쌓아둔 자료에서 관련 조각을 먼저 찾는다',
        '그 조각을 "근거"로 삼아 답을 만든다',
        '핵심: 답을 지어내는 게 아니라, 찾아서 답한다'
      ]},
      { type: 'image', title: '지식검색은 이렇게 움직인다', src: 'assets/diagram-rag-flow.svg', diagram: true,
        caption: '질문 → 조각 찾기 → 근거 삼기 → 답변. 근거가 먼저다.' },
      { type: 'split', title: '찾는 일인가, 만드는 일인가?',
        left:  ['찾기', '이미 있는 걸 꺼낸다', '→ 지식검색 (RAG)'],
        right: ['만들기', '없던 걸 만든다', '→ 통째로 넣고 종합'] },
      {
        type: 'closing', title: '지식검색은\n조직의 기억을 꺼낸다',
        teaser: '찾아서 답하는 것까지가 지식검색. 그다음 — 찾은 걸로 "행동"까지 한다면?',
        // §12 link 필드 검증 슬라이드 ②: Codyssey Lecture의 실사용 패턴(마무리 슬라이드 + 외부 자료)을 그대로 재현
        link: { url: 'assets/diagram-meaning-map.svg', label: '관련 도식 더 보기' }
      }
    ]
  }
];
