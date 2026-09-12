/* =========================================================================
   data.js — Sprint 2 프로토타입용 축약 커리큘럼
   AX_Lecture(/Users/hyun020631854123/AX_Lecture/js/data.js)의 실제 강의 원고를
   그대로 발췌했다(가공/치환 없음). 박스 2개 · 강의 3개로 축소해 Engine Boundary
   실험(Room→Box→Fan→Slide)을 가볍게 재현하기 위한 용도일 뿐, 콘텐츠 자체는
   AX Lecture 원본과 동일하다.
   ========================================================================= */

const CURRICULUM = {
  title: "AX 실무 입문",
  subtitle: "AI 전환 · 사유의 여정 (Sprint 2 축약본)",
  boxes: [
    {
      id: "why",
      name: "왜",
      theme: "AX의 시작과 마인드셋",
      accent: "#22d3ee",
      lectures: [
        {
          id: 1, title: "AX란 무엇인가", tagline: "생각의 순서를 바꾸다",
          slides: [
            { type: 'cover', kicker: '상자 1 · 왜 · 01', title: 'AX란 무엇인가', subtitle: 'AI가 바꾸는 건 도구가 아니라 일하는 방식' },
            { type: 'big', word: 'AX ≠ AI 도구 도입', sub: '도구를 더하는 게 아니라, 일을 다시 짜는 것' },
            { type: 'bullets', title: '요즘 어디서나 들리는 말', subtitle: '"우리도 AI 해야 하는 거 아니야?"', items: [
              '뉴스에도, 회의에도, 옆 팀에도 AI 이야기',
              '그런데 정작 "그래서 뭘 하자는 건지"는 흐릿하다',
              '오늘은 그 흐릿함부터 걷어낸다',
              'AX(AI Transformation) — AI "전환"이라는 말의 진짜 뜻'
            ]},
            { type: 'image', title: '전산화 → DX → AX, 세 개의 계단', src: 'assets/diagram-ax-stairs.svg', diagram: true,
              caption: '손을 컴퓨터로(전산화), 흩어진 것을 데이터로(DX), 그 위에서 AI가 판단을 보조(AX).' },
            { type: 'quote', text: 'AX는 AI 프로젝트가 아니라,\n일하는 방식을 바꾸는 일이다', by: '오늘의 정의' },
            { type: 'split', title: '도구를 더한다 vs 일을 다시 짠다',
              left:  ['도구만 더하면', '기존 방식 그대로 + AI 살짝', '"써봤는데 별로"로 끝남', '한 달 뒤 아무도 안 씀'],
              right: ['일을 다시 짜면', 'AI가 잘하는 건 AI에게', '사람은 판단·관계·책임에 집중', '방식이 바뀌니 되돌아가지 않음'] },
            { type: 'big', word: '사람이 방향,\nAI가 초안', sub: '이 강의 전체를 관통하는 한 줄' },
            { type: 'closing', title: 'AX는 도구가 아니라 방식이다', teaser: '그런데 왜 하필 "지금" 이 얘기가 쏟아질까? (다음 강: 왜 지금인가)' }
          ]
        },
        {
          id: 2, title: "왜 지금인가", tagline: "변곡점 위의 실무자",
          slides: [
            { type: 'cover', kicker: '상자 1 · 왜 · 02', title: '왜 지금인가', subtitle: "기술보다, '문턱'이 무너진 게 핵심" },
            { type: 'big', word: '달라진 건 성능이 아니라\n문턱이다', sub: '이제 코딩 없이, 말로 쓴다' },
            { type: 'image', title: '무너진 문턱 세 개', src: 'assets/diagram-fallen-barriers.svg', diagram: true,
              caption: '언어 장벽(명령어→평소 말), 전문가 장벽(개발자→누구나), 비용 장벽(수개월→몇 분).' },
            { type: 'quote', text: 'AI가 갑자기 똑똑해진 게 아니라,\n갑자기 "내가 쓸 수 있게" 됐다', by: '변곡점의 정체' },
            { type: 'split', title: '예전의 AI vs 지금의 AI',
              left:  ['예전', '전문가·개발팀의 것', '프로젝트·예산·수개월', '결과도 그들만 이해'],
              right: ['지금', '실무자 누구나', '브라우저 열고 몇 분', '말로 묻고 말로 받음'] },
            { type: 'big', word: '늦지 않았다\n지금이 문턱이 가장 낮다', sub: '완벽히 이해하고 시작하는 게 아니라, 쓰면서 익힌다' },
            { type: 'closing', title: '지금인 이유 = 문턱이 무너져서', teaser: '그럼 이 새 도구를, 어떤 마음가짐으로 대해야 할까? (다음 강: AI를 대하는 태도)' }
          ]
        },
        {
          id: 3, title: "AI를 대하는 태도", tagline: "믿되, 검증하라",
          slides: [
            { type: 'cover', kicker: '상자 1 · 왜 · 03', title: 'AI를 대하는 태도', subtitle: '믿되, 검증하라' },
            { type: 'big', word: 'AI는\n자신 있게 틀린다', sub: '가장 위험한 건 "그럴듯한 오답"' },
            { type: 'image', title: 'AI가 답을 만드는 방식', src: 'assets/diagram-next-word.svg', diagram: true,
              caption: '"가장 그럴듯한 다음"을 고를 뿐 — 그 안에 사실 확인 장치는 없다.' },
            { type: 'quote', text: '문제는 AI가 틀리는 게 아니라,\n우리가 안 틀렸다고 믿는 것이다', by: '오늘의 핵심' },
            { type: 'split', title: '그대로 써도 되는 일 vs 반드시 검증할 일',
              left:  ['가볍게 써도 되는 일', '초안 · 브레인스토밍', '말투 다듬기 · 요약', '틀려도 손해가 작음'],
              right: ['반드시 검증할 일', '숫자 · 통계 · 인용 · 출처', '법규 · 계약 · 의료 정보', '외부로 나가는 결과물'] },
            { type: 'big', word: 'AI = 유능한 인턴', sub: '빠르고 성실하지만, 검토 없이 내보내진 않는다' },
            { type: 'closing', title: '믿되, 검증하라', teaser: '그럼 어떻게 물어야 잘 나올까?\n검증 부담을 줄이는 첫 단추는 "질문"이다. (다음 강: 프롬프트의 기초)' }
          ]
        }
      ]
    },
    {
      id: "tools",
      name: "도구",
      theme: "AI 도구 지도",
      accent: "#a855f7",
      lectures: [
        {
          id: 6, title: "생성형 AI 지형도", tagline: "언제 무엇을 고를까",
          slides: [
            { type: 'cover', kicker: '상자 2 · 도구 · 06', title: '생성형 AI 지형도', subtitle: '도구를 하나씩 보기 전에, 전체 지도부터' },
            { type: 'big', word: "'생성형'이란\n만들어낸다는 뜻", sub: '찾아 보여주는 게 아니라, 없던 걸 만든다' },
            { type: 'bullets', title: '무엇을 만드느냐로 나눈다', subtitle: '출력물이 곧 분류', items: [
              '글 — 답변·요약·초안 (가장 많이 씀)',
              '이미지 — 그림·디자인 시안·썸네일',
              '음성 — 더빙·음성 안내·회의록 받아쓰기',
              '영상 — 짧은 클립·자막·편집 보조',
              '코드 — 자동화 스크립트·간단한 도구'
            ]},
            { type: 'image', title: '생성형 AI 지도', src: 'assets/diagram-genai-map.svg', diagram: true,
              caption: '다섯 갈래 — 실무의 8할은 "글"에서 시작된다.' },
            { type: 'split', title: '찾는 AI vs 만드는 AI',
              left:  ['찾는 쪽', '이미 있는 걸 꺼낸다', '검색·지식검색(RAG)', '→ 다음 강(07)'],
              right: ['만드는 쪽', '없던 걸 만든다', '글·이미지·영상 생성', '→ 오늘 본 지형도'] },
            { type: 'quote', text: "도구가 많아 보여도,\n'무엇을 만드나'로 나누면 지도가 보인다", by: '오늘의 정리' },
            { type: 'closing', title: '생성형 AI, 한눈에', teaser: "지도를 봤으니 첫 목적지로. 내 자료에서 '찾는' 법부터. (다음 강: 지식검색 RAG)" }
          ]
        }
      ]
    }
  ]
};
