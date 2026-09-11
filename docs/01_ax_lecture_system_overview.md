# AX Lecture System Overview

AX Lecture System은 하나의 외형이나 engine이 아니라, 공통 Design DNA를 서로 다른 강의 목적에 적용하는 두 Standard Family다.

## AX Web Deck

일반 특강, 강의, 발표를 위한 Web Presentation Engine이다.

```text
Deck
└─ Section
   └─ Slide
```

발표자의 선형 흐름과 즉시 읽히는 메시지를 우선하며, 과정형 세계관이나 학습 공간을 전제하지 않는다. 상세 기준은 [AX Web Deck Standard v0.1](03_ax_web_deck_standard_v0.1.md)이다.

## AX Lecture Experience

과정, 학습 경험, 체험형 강의를 위한 구조다. 목적에 따라 다음 요소를 선택할 수 있다.

```text
Hub
Room
Box / Module
Card Fan
Lesson
Practice
Progress
Resume
Completion
Gamification
```

이 목록의 모든 기능이 필수라는 뜻은 아니다. 공간 이동, 선택, 실습, 완료 경험이 학습 목적에 실제로 기여할 때 사용한다. 상세 기준은 [AX Lecture Experience Standard v0.1](09_ax_lecture_experience_standard_v0.1.md)이다.

## Family boundary

Web Deck에 Room, Box, 입장, unlock 같은 Experience 언어를 기본 구조로 이식하지 않는다. 반대로 Experience는 발표 Deck의 옵션을 무조건 따라야 하지 않는다. 두 Family는 [Design DNA](02_design_dna.md)를 공유하고, 구조와 선택 기능은 목적에 맞게 분리한다.
