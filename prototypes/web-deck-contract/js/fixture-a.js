/* =========================================================================
   fixture-a.js — Standard Linear (3~4 Sections, Card Fan 없음)
   -------------------------------------------------------------------------
   콘텐츠는 AX_Lecture(/Users/hyun020631854123/AX_Lecture/js/data.js)의 실제 강의
   원고를 그대로 발췌했다(가공/치환 없음, Lorem ipsum 미사용). "상자/왜/도구" 같은
   Box 언어는 kicker에서 제거하고 중립 Section 표기로 바꿨다(docs/10 Authoring Guide
   §16-17 규칙을 이 fixture 자체가 먼저 따른다).

   Slide type은 기존 엔진의 7종(cover/big/bullets/quote/split/image/closing)을 그대로
   썼다 — docs/09에서 "권장 중립 어휘(TITLE/KEY_MESSAGE/...)"와의 대응표를 문서로만
   제공하고, 이미 검증된 렌더러 코드를 다시 발명하지 않았다(§11 원칙).
   ========================================================================= */
window.DECK = {
  meta: {
    id: "standard-linear-demo",
    title: "AX 실무 입문 — 핵심 4장",
    subtitle: "생각의 순서를 바꾸는 4개 주제",
    kicker: "WEB DECK · {N} Sections"
  },
  presentation: {
    sectionNavigator: "none",
    resume: false
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
        { type: 'split', title: '도구를 더한다 vs 일을 다시 짠다',
          left:  ['도구만 더하면', '기존 방식 그대로 + AI 살짝', '"써봤는데 별로"로 끝남'],
          right: ['일을 다시 짜면', 'AI가 잘하는 건 AI에게', '방식이 바뀌니 되돌아가지 않음'] },
        { type: 'big', word: '사람이 방향,\nAI가 초안', sub: '이 Deck 전체를 관통하는 한 줄' },
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
        { type: 'big', word: '늦지 않았다\n지금이 문턱이 가장 낮다', sub: '완벽히 이해하고 시작하는 게 아니라, 쓰면서 익힌다' },
        { type: 'closing', title: '지금인 이유 = 문턱이 무너져서', teaser: '그럼 이 새 도구를, 어떤 마음가짐으로 대해야 할까?' }
      ]
    },
    {
      id: "ax-attitude", title: "AI를 대하는 태도", tagline: "믿되, 검증하라", accent: 1,
      slides: [
        { type: 'cover', kicker: 'Section 3', title: 'AI를 대하는 태도', subtitle: '믿되, 검증하라' },
        { type: 'big', word: 'AI는\n자신 있게 틀린다', sub: '가장 위험한 건 "그럴듯한 오답"' },
        { type: 'image', title: 'AI가 답을 만드는 방식', src: 'assets/diagram-next-word.svg', diagram: true,
          caption: '"가장 그럴듯한 다음"을 고를 뿐 — 그 안에 사실 확인 장치는 없다.' },
        { type: 'split', title: '그대로 써도 되는 일 vs 반드시 검증할 일',
          left:  ['가볍게 써도 되는 일', '초안 · 브레인스토밍', '틀려도 손해가 작음'],
          right: ['반드시 검증할 일', '숫자 · 통계 · 인용 · 출처', '외부로 나가는 결과물'] },
        { type: 'big', word: 'AI = 유능한 인턴', sub: '빠르고 성실하지만, 검토 없이 내보내진 않는다' },
        {
          type: 'closing', title: '믿되, 검증하라',
          teaser: '그럼 어떻게 물어야 잘 나올까? 검증 부담을 줄이는 첫 단추는 "질문"이다.',
          // §12 link 필드 검증 슬라이드 ①: 외부 자료로 새 탭 연결
          link: { url: 'assets/diagram-next-word.svg', label: '도식 원본 보기' }
        }
      ]
    },
    {
      id: "genai-map", title: "생성형 AI 지형도", tagline: "언제 무엇을 고를까", accent: 2,
      slides: [
        { type: 'cover', kicker: 'Section 4', title: '생성형 AI 지형도', subtitle: '도구를 하나씩 보기 전에, 전체 지도부터' },
        { type: 'bullets', title: '무엇을 만드느냐로 나눈다', subtitle: '출력물이 곧 분류', items: [
          '글 — 답변·요약·초안 (가장 많이 씀)',
          '이미지 — 그림·디자인 시안·썸네일',
          '음성 — 더빙·음성 안내·회의록 받아쓰기',
          '영상 — 짧은 클립·자막·편집 보조'
        ]},
        { type: 'image', title: '생성형 AI 지도', src: 'assets/diagram-genai-map.svg', diagram: true,
          caption: '다섯 갈래 — 실무의 8할은 "글"에서 시작된다.' },
        { type: 'quote', text: "도구가 많아 보여도,\n'무엇을 만드나'로 나누면 지도가 보인다", by: '오늘의 정리' },
        // §14 Content Validation 검증용: 필수 필드(title)는 있고 teaser(optional)는 의도적으로 생략
        { type: 'closing', title: '생성형 AI, 한눈에' }
      ]
    }
  ]
};
