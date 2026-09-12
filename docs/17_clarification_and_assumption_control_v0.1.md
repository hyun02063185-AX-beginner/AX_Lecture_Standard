# Clarification & Assumption Control v0.1

## Definition

Clarification Gate는 강의자료 생성에서 AI가 빈칸을 임의로 채우기 전에, 그 불확실성이 결과를 실질적으로 바꾸는지 판단하고 필요한 확인만 하는 Authoring Standard다.

> **결과를 실질적으로 바꿀 수 있는 불확실성은 사용자에게 확인하고, 표준 기본값으로 안전하게 처리할 수 있는 부분은 묻지 않는다.**

> **Ask when uncertainty can materially change the result. Do not ask when the standard already provides a safe default.**

정보가 부족한 것 자체는 문제가 아니다. 결과의 방향·난이도·구조·화법을 바꿀 수 있는 불확실성을 확인 없이 추정해 완성본에 반영하는 것이 문제다.

## Position in authoring flow

```text
Request
↓
Clarification Gate
↓
Learning Question
↓
Audience Context
↓
Knowledge Map
↓
Freshness Review
↓
Teaching Route
↓
Instructor Grounding
↓
Lecture Voice
↓
Web Deck / Lecture Experience
```

Clarification Gate는 긴 사전 인터뷰가 아니다. 빠진 정보를 찾고, 결과 영향도를 판단하고, 필요한 질문을 최소화하며, 추정 금지 영역을 보호하는 앞단의 판단 단계다.

## Uncertainty impact levels

| 수준 | 기준 | 예시 | 처리 |
|---|---|---|---|
| **LOW IMPACT** | 결과 방향을 거의 바꾸지 않는다 | 제목의 세부 표현, 섹션 이름 미세 조정, 슬라이드 수 ±1–2, 일반 UI 기본값, 이미 정한 디자인 규칙 | AI가 Standard Default 또는 합리적 판단으로 정한다. 묻지 않는다. |
| **MEDIUM IMPACT** | 일부 결과에 영향을 주지만 전체 방향은 바꾸지 않는다 | 예시 개수, 세부 섹션 순서, 특정 예제 선택, 60분 강의의 11장 또는 13장 | 기본값 또는 Best Judgment로 진행할 수 있다. 필요하면 결과에 가정을 짧게 남긴다. |
| **HIGH IMPACT** | 결과의 방향·난이도·구조·화법을 크게 바꾼다 | Audience, 선수지식, 강의 목적·시간, 실습형 여부, 기존 구조 유지/재설계, 강사 경험·관점, 기술 깊이, 최신성 재검토 범위, 산업·직무 Context, 평가·과제 | 불명확하면 사용자 확인 후 진행한다. |

## Mandatory clarification

다음 정보가 불명확하고 결과에 큰 영향을 주면 반드시 확인한다.

- **Audience**: 대상, 선수지식, 직무·역할, 기대 난이도
- **Learning Goal**: 이해할 것, 할 수 있게 될 것, 설명 중심 또는 실행 중심 여부
- **Instructor Perspective**: 강사 경험·개인 의견 사용 여부와 실제 Source의 존재
- **Delivery Context**: 강의 시간, 단일 특강 또는 회차형, 실습 포함 여부, Web Deck / Lecture Experience의 적합성

Audience는 항상 묻는 필수 질문이 아니다. Audience가 화법, 난이도, 예시, 실습 여부에 실질적 차이를 만들 때만 확인한다.

강사 경험·관점은 [Instructor Grounding & Audience-Aware Lecture Voice](16_instructor_grounding_and_audience_voice_v0.1.md)를 따른다.

```text
CONFIRMED / SOURCE-BACKED → 사용 가능
NEEDS-CONFIRMATION        → 질문
DO-NOT-USE                → 사용 금지
```

## Known information and standard defaults

이미 확인된 정보는 다시 묻지 않는다. 확인 가능한 Source는 현재 대화, 사용자가 제공한 문서, 현재 프로젝트의 Canonical, Instructor Grounding의 `CONFIRMED` / `SOURCE-BACKED` 자료다. 반복 질문은 안전성이 아니라 시간 낭비다.

다음은 기본적으로 Standard Default를 적용하며 다시 확인하지 않는다.

- 배경색의 사소한 선택, 제목 글자 크기, 기본 섹션 수
- 표준 transition, 기본 navigation, 기본 copy density
- Canonical에 이미 정해진 디자인·문서 구조 규칙

## Clarification and assumption budgets

한 번의 Clarification Gate에서는 원칙적으로 핵심 질문 **1–3개**만 우선 묻는다. 지금 알아야 하며 결과 영향이 가장 크고 서로 겹치지 않는 질문을 고른다.

AI가 추정해도 되는 범위는 Standard 디자인 규칙, 기본 문서 구조, minor wording, 비핵심 예시 수, 안전한 UI 기본값, Canonical이 이미 정한 구조다.

AI가 추정해서는 안 되는 범위는 강사의 경험·의견, Audience, 학습 목적, 중요한 교육 방향, 사용자 사업·조직 Context, 불확실한 최신 기술 사실, 개인 경력 세부내용, 특정 산업 경험, 사용자가 말하지 않은 사례다.

MEDIUM IMPACT 가정이 결과에 의미 있게 반영되었다면 짧게 남길 수 있다. 예: “현재 자료에는 별도 실습 요구가 없어 개념 중심 60분 특강으로 구성했습니다.” LOW IMPACT 선택까지 가정 목록으로 보고하지 않는다.

## Progressive clarification

처음에 모든 질문을 모으지 않는다.

```text
Request → 핵심 질문 → 작업 진행 → 중요한 Decision Point 발견
→ 필요 시 추가 확인 → 계속 진행
```

작업 중 추가 확인은 정상적인 협업이다. 다음 상황에서는 다시 확인을 고려한다.

- 두 방향 모두 합리적이지만 결과가 크게 달라질 때
- 기존 강의 구조 유지와 재설계 중 선택해야 할 때
- 강사의 관점이 필요한데 Source가 없을 때
- 최신성 검토가 기존 설명과 강의 메시지를 크게 바꿀 때
- Audience에 따라 난이도 차이가 커질 때
- 정해진 시간에 모든 내용을 넣을 수 없을 때

Knowledge Map 작성 중에도 최신 기술 흐름 중심인지 기초 개념 중심인지, 기존 구조를 유지할지 변화 관계 중심으로 재구성할지처럼 결과를 바꾸는 질문은 할 수 있다. 단순히 Map을 작성한다는 이유로 질문을 늘리지 않는다.

최신성 검토에서 차이가 경미하면 AI가 수정한다. 강의 메시지 자체가 바뀌면 예를 들어 “기존 역사적 흐름 유지”와 “현재 기준으로 구조 재설계”를 제시해 사용자 선택을 받는다.

## Lecture Voice and persona control

기본 Lecture Voice는 수강생이 편하게 듣고 이해할 수 있는 자연스러운 강의 화법이다. 매우 격식 있는 기업 교육, 대학 강의, 청소년 대상, 경영진 브리핑, 개발 실무자 대상 심화 강의처럼 화법 자체가 결과를 크게 바꾸는 경우에만 확인한다.

강사의 경력, 직군, 또는 “이런 수강생이라면”이라는 추정으로 경험·고민·의견을 만들지 않는다. “이 정도 경력이면 이런 사례가 있을 것이다”, “강사라면 보통 이런 의견을 갖는다”는 모두 추정 금지 영역이다. 개인 경험과 관점은 [Instructor Grounding & Audience-Aware Lecture Voice](16_instructor_grounding_and_audience_voice_v0.1.md)의 Source와 Status를 따라야 한다.

## Fast mode

사용자가 “빨리 만들어달라”, “질문 없이 초안을 달라”, “우선 진행해달라”고 명시하면 HIGH IMPACT 중 추정 금지 영역을 제외하고 Best Effort로 진행할 수 있다. 이 경우에도 강사 개인 경험을 생성하거나 사실을 왜곡하지 않으며, 중요한 가정은 결과에 짧게 표시한다.

기존 강의안을 현대화할 때도 Gate를 적용한다. 기존 자료 유지, 최신화, 완전 재설계가 서로 다른 결과를 만들면 먼저 목적을 확인한다.

## Anti-patterns

- **Questionnaire Dump**: 한 번에 10–20개 질문을 던지는 일
- **Obvious Confirmation**: 이미 Standard에 정해진 항목을 재확인하는 일
- **Fear-driven Asking**: 사소한 선택마다 사용자에게 결정을 넘기는 일
- **Hidden Guessing**: HIGH IMPACT 사항을 조용히 추정하는 일
- **Late Surprise**: 완성본 뒤에 중요한 가정을 처음 알리는 일
- **Silent Persona Invention**: 경력·직군·강사라는 이유만으로 경험, 고민, 의견을 지어내는 일

좋은 질문은 “대상과 강의 시간이 구성에 가장 큰 영향을 줍니다. 이 두 가지를 먼저 알려주세요.”처럼 영향이 큰 선택만 먼저 묻는다.

## Boundaries and QA

이 문서는 Authoring Standard다. Engine, starter, skin, transition을 변경하거나 그 변경을 요구하지 않는다.

- 질문 과잉 또는 모든 빈칸의 질문을 유도하지 않는가?
- HIGH IMPACT 불확실성만 명확히 확인하는가?
- 강사 경험 추정 금지가 유지되는가?
- Audience 질문을 항상 강제하지 않는가?
- Standard Default와 Progressive Clarification을 활용하는가?
- 중요한 가정을 완성 뒤에 처음 공개하지 않는가?
- 기존 Canonical과 충돌하지 않고 상대 링크가 유효한가?
- Engine 변경을 전제하지 않는가?
