# Lecture Knowledge Map Authoring Standard v0.1

## Definition

Lecture Knowledge Map은 강의 주제의 핵심 개념과 그 사이의 관계를 최소한으로 구조화하고, 현재 관점에서 무엇이 달라졌는지 점검한 뒤, 실제 강의에서 따라갈 설명 경로를 선택하기 위한 **Authoring / Content Architecture Standard**다.

Knowledge Map은 다음이 아니다.

- 모든 관련 용어를 담는 백과사전이나 대형 마인드맵
- 완성된 강의안 또는 슬라이드 목차
- Web Deck 또는 Lecture Experience Engine의 기능

목적은 개념 간 관계 파악, 설명 순서 결정, 빠진 선행 개념 발견, 오래된 내용과 최신 변화 검토, Teaching Route 추출이다.

## System position

Knowledge Map은 Delivery 형식보다 앞선 Authoring Layer다.

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
Delivery Format
      ↓
AX Web Deck / AX Lecture Experience
```

따라서 Map을 Engine의 하위 기능이나 두 Delivery Family 중 하나의 기능으로 표현하지 않는다. 필요할 때 두 Family가 공통으로 사용할 수 있는 콘텐츠 구조화 도구다. Map은 지식 구조를 담당하며, 앞단의 [Clarification Gate](17_clarification_and_assumption_control_v0.1.md)는 결과에 큰 영향을 주는 불확실성만 확인한다. 강사의 실제 경험·관점 Source와 Audience에 맞는 표현은 [Instructor Grounding & Audience-Aware Lecture Voice](16_instructor_grounding_and_audience_voice_v0.1.md)에서 다룬다.

## Core principles

### Minimum Useful Map

가능한 모든 개념을 넣는 대신, 강의를 설계하는 데 필요한 최소한의 관계만 만든다. 복잡성보다 설명력이 우선이다.

### Relation before volume

독립 용어 20개보다 `A → B → C`처럼 이해를 바꾸는 관계가 더 가치 있을 수 있다. 각 연결은 실제 설명, 비교, 순서 결정에 도움이 되어야 한다.

### Currentness check

작성 중 반드시 “이 개념이나 설명 방식은 지금도 같은가?”를 확인한다. 특히 기술·AI 주제에서는 새로 등장한 것, 중요도가 달라진 것, 상위 개념으로 확장된 것, 실무의 기본값이 된 것을 구분한다.

## Relation vocabulary

v0.1의 기본 관계는 아래 여덟 가지로 제한한다. 관계 종류를 더 늘려 Map 자체를 복잡하게 만들지 않는다.

| 관계 | 의미 | 예시 |
|---|---|---|
| 선행 (`prerequisite`) | A를 알아야 B를 이해하기 쉽다 | `HTML → DOM` |
| 구성 (`composition`) | A와 B가 상위 개념 C를 구성한다 | `Client + Server → Client/Server Architecture` |
| 흐름 (`flow`) | 작업 또는 정보가 순서대로 이동한다 | `Request → Server → Response` |
| 비교 (`comparison`) | 비슷하거나 대비되는 개념을 함께 이해한다 | `Library ↔ Framework` |
| 적용 (`application`) | 개념과 실제 사용처를 연결한다 | `fetch → API Request` |
| 연결 (`association`) | 직접 상하관계는 아니지만 함께 이해할 때 의미가 커진다 | `HTTP ↔ API` |
| 변화 (`evolution`) | 시간에 따라 개념이나 사용 방식이 변한다 | `Callback → Promise → async/await` |
| 영향 (`influence`) | 한 기술·패러다임이 다른 개념의 중요도 또는 사용 방식을 바꾼다 | `React → map/filter 중심 리스트 렌더링 패턴 확산` |

## Map structure

가능하면 Map은 Spine, Cluster, Bridge로 구성한다.

- **Spine**: 강의의 핵심 설명 흐름. 예: `질문 → 검색 → Context → LLM → Answer`
- **Cluster**: Spine의 한 지점을 이해하는 데 필요한 개념 묶음. 예: 검색 아래의 `Embedding`, `Vector`, `Similarity`, `Vector DB`
- **Bridge**: Cluster 사이를 잇는 중요한 관계. 예: `검색 결과 → Context → LLM 생성`

기본 깊이는 `Spine → Cluster → 필요한 세부 개념`의 3단계다. 4단계 이상으로 내려가면 별도 강의, 참고자료, 또는 용어사전으로 분리할지 검토한다.

## Time and change

시간축이 이해에 중요하면 Map에 명시한다. 이는 역사적 순서와 영향 관계를 혼동하거나, 예전 기술의 출현 시점을 잘못 말하는 일을 막는다.

```text
ES5
│
├─ Array.map / filter / reduce
│
↓
ES2015
├─ arrow function / let / const / destructuring / module
│
↓
Modern Front-end
├─ React
└─ data → UI와 map/filter 패턴의 일상화
```

예를 들어 `map`과 `filter`를 ES2015에서 처음 생긴 기능으로 서술하지 않는다. Map은 사실 확인을 대신하는 자료가 아니라, 이런 검증이 필요한 지점을 드러내는 장치다.

## Freshness review

기술·AI 강의에서는 Map을 만든 뒤 아래 분류로 Authoring Review를 한다. 이는 필수 데이터 모델이 아니라 최신성 검토용 표기다.

| 분류 | 검토 질문 |
|---|---|
| `NEW` | 새로 등장한 개념은 무엇인가? |
| `SHIFTED` | 이전부터 있었지만 중요도가 달라진 개념은 무엇인가? |
| `DECLINED` | 현재 중요성이 줄어든 개념은 무엇인가? |
| `REPLACED` | 다른 방식이 일반적인 기본값이 되었는가? |
| `STABLE` | 여전히 핵심으로 유지되는 개념은 무엇인가? |

AI에서는 `Prompt → Context → Agent → Harness → Evaluation Loop` 같은 흐름을 검토할 수 있다. 이는 단순한 선형 발전이나 대체를 단정하는 모델이 아니다. 겹쳐 존재하는 개념들 사이에서 무엇의 중요도와 관계가 달라졌는지 살피는 설명용 예시다.

## Map and Teaching Route

Map과 Teaching Route는 반드시 분리한다.

```text
Knowledge Map = 전체 관계
Teaching Route = 이번 강의에서 실제로 걸어갈 길
```

예를 들어 JavaScript Map에 ECMAScript, DOM, Array, Async, React, Tooling, Browser가 모두 있어도, 한 강의 Route는 `ES5 → ES2015 → Arrow Function → map/filter → React List Rendering`만 선택할 수 있다. Map 전체를 강의에서 모두 설명하지 않는다.

## Choosing scope

### Short lecture: Minimum Map

- 핵심 질문 1개
- 핵심 개념 5–10개
- 핵심 관계 5–10개
- 변화 또는 영향 관계 1–3개
- Teaching Route 1개

### Medium-length lecture

Spine, 주요 Cluster, 변화 관계, Teaching Route까지 작성한다.

### Course / Lecture Experience

Knowledge Map의 Cluster는 Module 후보로 사용할 수 있다.

```text
Knowledge Map Cluster → Module candidate
```

다만 Map 구조를 Module 구조로 그대로 복사하지 않는다. 학습 경험, 선수 지식, 실습, 시간 배분을 고려해 재설계한다.

## Complexity guard

Knowledge Map 때문에 기획이 무거워지면 실패다. 아래 신호가 보이면 Map을 줄인다.

- 핵심 개념보다 주변 개념이 많아진다.
- 모든 용어를 연결하려 한다.
- 관계가 실제 설명에 도움이 되지 않는다.
- 간단한 강의인데 Map 작성 시간이 강의 제작보다 길어진다.
- “있으면 좋을 것 같은 개념”이 계속 늘어난다.

원칙은 **필요한 만큼만 그린다**다.

## Relation to glossary and legacy modernization

용어사전은 개념 단위 설명이고 Knowledge Map은 개념 사이 관계다. 용어사전에 `related`, `prerequisite`, `evolution`, `comparison`, `application`, `influencedBy` 같은 메타를 둘 수는 있지만, 자동 또는 반자동 Map 생성은 이 표준의 구현 범위가 아니다.

기존 PPT, PDF, 강의노트를 현대화할 때는 다음 흐름을 권장한다.

```text
기존 자료 → 핵심 개념 추출 → 관계 추출 → 변화/영향 확인
→ 최신성 검토 → Knowledge Map → 새 Teaching Route → Delivery 형식
```

이때 “틀린 내용인가?”뿐 아니라 “중요도가 달라진 내용인가?”를 확인한다.

## Authoring recommendation

Knowledge Map은 강제 절차가 아니다. 기술 개념이 여러 개 연결되거나, 시간에 따른 변화·최신성·용어 관계가 중요하거나, 기존 강의를 개편하거나, 여러 회차로 확장할 가능성이 있을 때 먼저 작성을 권장한다.

단일 기능 설명, 매우 짧은 실습, 단순 사용법, 관계가 거의 없는 주제는 생략하고 바로 Deck 또는 Experience를 설계할 수 있다.

AI 작업자에게는 다음 질문을 권장한다.

> 이 강의는 바로 슬라이드로 구성하는 것보다 먼저 Knowledge Map을 만들면 구조나 최신성 검토에 도움이 되는가?

답이 YES이면 Map을 먼저 만들고, NO이면 Delivery 제작으로 진행한다.

## Instructor and audience boundary

Knowledge Map은 객관적 개념과 관계를 다룬다. Map에 포함된 일반 지식이나 AI의 구조화 결과를 강사 개인의 경험·사례·의견·판단으로 바꾸지 않는다. 개인 경험을 사용하거나 Audience에 맞는 Lecture Voice가 필요할 때는 [Instructor Grounding & Audience-Aware Lecture Voice](16_instructor_grounding_and_audience_voice_v0.1.md)를 적용한다.

Map 작성 중 최신 기술 흐름 중심인지 기초 개념 중심인지, 기존 구조 유지인지 변화 관계 중심 재구성인지가 결과를 크게 바꾸면 [Clarification & Assumption Control](17_clarification_and_assumption_control_v0.1.md)에 따라 확인한다. 단순 Map 작성 자체를 이유로 질문을 늘리지 않는다.

## Boundaries

이 문서는 Authoring / Content Architecture Standard다. Web Deck Engine, Lecture Experience Engine, Entry Transition, Skin, starter JavaScript/CSS를 변경하거나 그 변경을 요구하지 않는다.

## QA

- Knowledge Map을 모든 강의의 필수 절차처럼 표현하지 않았는가?
- 모든 관련 개념을 넣도록 유도하지 않는가?
- Map과 Teaching Route가 명확히 구분되는가?
- Freshness Review와 시간축 검토가 필요한 곳에 적용되는가?
- 결과를 크게 바꾸는 Map 방향만 확인하고, 사소한 구조 선택을 재질문하지 않는가?
- 일반 지식과 강사 개인의 경험·관점을 혼동하지 않는가?
- Web Deck / Lecture Experience와 역할이 겹치지 않는가?
- Engine 변경을 전제하지 않는가?
- 관련 Canonical 문서의 상대 링크가 유효한가?
