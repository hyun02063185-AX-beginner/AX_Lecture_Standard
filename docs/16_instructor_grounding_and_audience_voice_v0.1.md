# Instructor Grounding & Audience-Aware Lecture Voice v0.1

## Core canonical rule

> **AI does not invent the instructor's perspective.**

> **AI는 강사의 관점을 만들어내지 않는다. 강사가 실제로 가진 관점과 경험을 확인하고, 그것이 수강생에게 잘 전달되도록 구조화하고 표현한다.**

이 문서는 강의의 지식 구조를 정하는 [Knowledge Map](15_lecture_knowledge_map_authoring_standard_v0.1.md)과, 그 구조를 실제 청중에게 전달하는 강의 화법 사이의 경계를 정한다.

## Position in authoring flow

```text
Learning Question
→ Audience Context
→ Knowledge Map
→ Freshness Review
→ Teaching Route
→ Instructor Grounding
→ Lecture Voice
→ Web Deck / Lecture Experience
```

- **Knowledge Map**: 무엇을 어떤 관계로 가르칠지 구조화한다.
- **Instructor Grounding**: 강사의 실제 경험·경력·사례·의견·판단의 출처를 확인한다.
- **Lecture Voice**: 확인된 내용과 지식을 해당 청중이 이해하기 쉬운 말로 전달한다.

각 단계는 역할이 다르다. Knowledge Map이나 자연스러운 화법이 강사 개인의 경험과 관점을 만들어낼 근거가 되지 않는다.

## Instructor Grounding

Instructor Grounding은 강의자료에 사용되는 강사의 경험, 경력, 사례, 의견, 판단이 실제 강사에게서 나온 것인지 확인하는 과정이다.

AI는 이 과정에서 제공된 내용을 추출·분류·압축·질문으로 정리할 수 있다. 새로운 개인 경험, 경력 서사, 사례, 의견, 판단을 만들거나 보완하지 않는다.

### Allowed sources

강사의 개인 경험이나 관점은 다음 출처만 사용한다.

1. 사용자가 현재 작업에서 직접 제공한 내용
2. 사용자가 제공한 이력서, 홈페이지 원문, 기존 강의자료, 인터뷰, 메모 등 명시적 원자료
3. AI가 발견했더라도 사용자가 사실이라고 직접 확인한 내용

업계의 일반 사례, 공개 자료의 일반 지식, AI의 분석은 유용할 수 있다. 다만 강사의 개인 사례·경험·의견으로 귀속하지 않는다.

### Grounding status

필요하면 경험 또는 관점 후보마다 아래 상태를 기록한다.

| 상태 | 의미 | 강의안·슬라이드 사용 |
|---|---|---|
| `CONFIRMED` | 사용자가 현재 작업에서 직접 말하거나 확인했다 | 가능 |
| `SOURCE-BACKED` | 사용자가 제공한 원자료에 명시되어 있다 | 가능 |
| `NEEDS-CONFIRMATION` | 사용할 가능성은 있으나 사용자 확인이 필요하다 | 불가 |
| `DO-NOT-USE` | AI의 추정이거나 근거가 없다 | 불가 |

`NEEDS-CONFIRMATION`과 `DO-NOT-USE`는 실제 강의안, 발표자 노트, 슬라이드의 개인 경험·관점 표현에 넣지 않는다.

### Prohibited transformations

다음은 금지한다.

- 요약된 사용자 프로필에서 경험을 확대 추론하는 일
- 경력 연차를 근거로 수행 업무나 책임을 추정하는 일
- 강사다운 사례를 만들기 위한 가상의 개인 경험 생성
- 업계 일반 사례를 강사 개인 사례로 표현
- AI의 판단을 강사의 판단처럼 작성
- AI가 만든 관점을 1인칭 화법으로 변환
- 출처가 불분명한 경험을 `제가 해보니`처럼 쓰는 일

## Source compression warning

사용자의 이력, 홈페이지, 과거 강의 정보는 AI Context 안에서 요약되어 있을 수 있다. 요약된 개인 정보는 원자료의 대체물이 아니다.

개인 경험이 강의의 중요한 근거라면 가능한 한 제공된 원문 Source를 확인한다. 원문을 확인할 수 없으면 그 경험을 확장하거나 세부화하지 않는다. 확인이 필요하면 `NEEDS-CONFIRMATION`으로 남기고, 청중에게 공개되는 강의 콘텐츠에서는 제외한다.

## Audience context

Lecture Voice를 작성하기 전에 다음을 최소로 확인한다.

- 수강생은 누구인가?
- 선수지식 수준은 어느 정도인가?
- 이 강의를 듣는 목적은 무엇인가?
- 강의 후 무엇을 이해하거나 할 수 있어야 하는가?

이미 이 정보가 충분히 알려진 경우 다시 묻지 않는다. 화법·난이도·사례 선택에 영향을 주는데 불명확한 경우에만 사용자에게 확인한다. Audience Context는 개인 경험의 근거를 만들지 않으며, 전달 방식만 조정한다.

## Audience-aware Lecture Voice

Lecture Voice의 목적은 강사의 실제 관점과 경험, 그리고 콘텐츠의 사실을 유지한 채 해당 수강생이 편하게 듣고 이해할 수 있는 말로 전달하는 것이다. 같은 Knowledge Map이라도 초심자, 실무자, 관리자 등 Audience Context에 따라 설명 순서, 용어 풀이, 질문, 비교, 예시의 난이도는 달라질 수 있다.

자연스러운 문체를 만들기 위해 강사의 관점·판단의 강도·경험의 범위·사실관계를 바꾸지 않는다. Grounded Source가 없는 개인 화법은 일반적 또는 비귀속 표현으로 바꾸거나 삭제한다.

## Three language layers

| 언어 | 용도 | 특성 |
|---|---|---|
| **Knowledge Language** | 개념과 관계를 구조화한다 | 객관적, 관계 중심, 짧은 명사 표현 허용 |
| **Lecture Language** | 실제 강사가 청중에게 설명한다 | 말할 수 있는 문장, 청중 수준 반영, 질문·사례·비교 사용 가능; 개인 경험은 Grounded Source만 사용 |
| **Slide Language** | 화면에서 설명을 보조한다 | 더 짧고, 강사의 설명을 대체하지 않으며, 핵심 질문·문장·시각적 단서 중심 |

Lecture Voice는 Knowledge Language를 Lecture Language로, 필요하면 Slide Language로 변환하는 일이다. 이 변환은 표현과 난이도를 다루며, 강사의 관점 자체를 생성하거나 변경하지 않는다.

## AI role boundary

| 단계 | AI가 할 수 있는 일 | AI가 해서는 안 되는 일 |
|---|---|---|
| Knowledge Map | 적극적으로 제안·구조화 | 개인 경험을 Map의 근거로 추정 |
| Freshness Review | 조사·비교·검증 제안 | 검증되지 않은 최신 판단을 강사 의견으로 귀속 |
| Teaching Route | 설명 경로 제안 | 강사의 선호나 교육 철학을 근거 없이 단정 |
| Instructor Grounding | 제공 자료에서 추출·정리·확인 질문 | 개인 경험과 관점 생성 |
| Lecture Voice | Audience에 맞는 표현 변환 | 관점 자체의 생성·변경 또는 가상 1인칭 경험 작성 |

## Application guidance

강사 경험이 필요한 장면에서는 먼저 후보의 Source와 Grounding Status를 확인한다. `CONFIRMED` 또는 `SOURCE-BACKED`이면 범위를 벗어나지 않는 방식으로 Lecture Voice와 Slide Language에 반영할 수 있다. 그 외에는 확인 질문을 남기거나, 개인 귀속이 없는 일반 사례·설명으로 대체한다.

이 표준은 Authoring / Content Architecture Standard다. Web Deck Engine, Lecture Experience Engine, Entry Transition, Skin, starter JavaScript/CSS의 변경을 요구하지 않는다.

## QA

- AI가 개인 경험이나 관점을 만들어낼 여지가 남아 있지 않은가?
- 요약·기억 정보를 원자료처럼 취급하지 않는가?
- 강사 관점과 일반 지식을 구분하는가?
- `NEEDS-CONFIRMATION`, `DO-NOT-USE`를 실제 강의 콘텐츠에서 제외하는가?
- Audience 확인이 이미 알려진 정보를 반복해서 묻지 않는가?
- Knowledge Language, Lecture Language, Slide Language가 구분되는가?
- 자연스러운 문체를 이유로 강사의 관점이나 사실을 변경하지 않는가?
- Engine 변경을 전제하지 않는가?
