# AX Lecture Experience Standard v0.1

## Definition

AX Lecture Experience는 단순 발표가 아니라 학습자가 과정 안을 이동하고, 선택하고, 진행 상태를 인지하며, 필요에 따라 실습과 완료 경험까지 갖는 과정형 Web Learning Experience다.

## Possible structure

```text
Experience
├─ Hub
├─ Room / Theme Space
├─ Module / Box
├─ Lesson
├─ Practice
├─ Progress
└─ Completion
```

이 구조는 가능한 기본 어휘이며 모든 프로젝트에 강제되지 않는다. 학습 목적과 공간 서사가 필요할 때 선택한다.

## Content architecture

과정형 강의는 필요할 때 [Knowledge Map](15_lecture_knowledge_map_authoring_standard_v0.1.md)의 Cluster를 Module 후보로 사용할 수 있다.

```text
Knowledge Map Cluster → Module candidate
```

이는 출발점일 뿐이다. Knowledge Map의 구조를 Module 구조로 그대로 복사하지 말고, 학습 경험, 선수 지식, 실습, 시간 배분에 맞춰 Module과 Lesson을 재설계한다.

## CORE candidates

- spatial narrative
- lesson navigation
- progress awareness
- typography hierarchy
- layered composition
- causal motion
- visual rhythm

## Optional capabilities

- Card Fan
- Resume
- Practice Desk
- Persona
- Rank
- XP
- Unlock
- skin unlock
- completion celebration
- diagnostics

Optional은 부재해도 Experience가 실패했다는 뜻이 아니다. 사용 시에는 학습 목적과 사용자 이해에 기여해야 한다.

## Card Fan

Experience의 Fan은 Module/Lesson 선택, 공간 이동, 과정 overview를 지원할 수 있다. Web Deck의 long-deck navigation과 역할이 같을 수도 있지만, Fan 자체는 Experience의 절대 필수요소가 아니다.

## Practice and gamification

Practice는 participant-led activity다. presenter-led인 Demo와 구분한다. Rank, XP, Unlock, Reward, Completion Celebration은 Experience 전용 Optional이며 단순 재미를 위해 자동 적용하지 않는다.

## Entry Transition

Entrance에서 Hub로 넘어갈 때는 [AX Entry Warp](13_ax_entry_transition_standard_v0.1.md)를 기본 패턴으로 사용한다. Module/Lesson 사이 이동에는 강제하지 않는다 — Entry Warp는 Entrance → Hub 진입 시 한 번만 재생되는 전환이다.

## Boundary with Web Deck

| 기준 | Web Deck | Lecture Experience |
|---|---|---|
| 목적 | 발표 / 특강 | 학습 경험 |
| 구조 | Deck → Section → Slide | Hub / Module / Lesson 등 |
| Progress | 발표 진행 | 학습 진행 |
| Resume | Optional | 상대적으로 가치 높음 |
| Card Fan | Long-Deck Optional | Module/Lesson navigation에 활용 가능 |
| Practice | 제한적 | 중요한 구성 가능 |
| Gamification | 기본 제외 | Optional |
| Completion | Closing | Completion Experience 가능 |

공통 DNA는 [Design DNA](02_design_dna.md)를 따르며, Experience 기능을 일반 Deck에 자동 이식하지 않는다.
