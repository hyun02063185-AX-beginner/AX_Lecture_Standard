# Design DNA

DNA는 바꾸면 AX Lecture 계열의 결 자체가 달라지는 원칙이다. 색상이나 주제별 장식보다 우선한다.

1. **Typography hierarchy** — 정보 우선순위가 즉시 보여야 한다. 제목, 보조 문장, 메타데이터의 역할을 섞지 않는다.
2. **Layered spatial composition** — 단순 flat canvas보다 background, middle, foreground의 깊이를 사용한다.
3. **Restrained composition** — 한 화면의 주요 요소 수와 시각 잡음을 제한한다.
4. **Causal motion** — 움직임에는 전환, 강조, 공간 이동처럼 읽을 수 있는 이유가 있어야 한다. Entrance → 콘텐츠 진입처럼 계열 전체가 공유해야 하는 인과적 움직임은 [AX Entry Warp](13_ax_entry_transition_standard_v0.1.md)로 대표되는 하나의 구현 패턴을 따른다 — Entry Warp 자체가 Design DNA 전체는 아니며, Causal Motion이라는 원칙이 구체화된 사례 중 하나다.
5. **Visual rhythm** — 집중 → 설명 → 비교 → 전환 → 휴식의 리듬을 설계한다.
6. **Defect-free rendering** — `undefined`, `null`, 깨진 이미지, 잘린 콘텐츠를 허용하지 않는다.

## DNA와 Skin

| 구분 | 의미 | 예시 |
|---|---|---|
| DNA | 계열의 결을 규정하는 원칙 | hierarchy, depth, restraint, motion semantics, rhythm, density |
| Skin | 콘텐츠·강의 주제에 맞춰 바꿀 수 있는 표현층 | Dark, Light, Editorial, News, Tech/Lab, Storytelling, Custom |

Editorial과 News는 architecture가 아니라 Skin이다. Skin을 바꿔도 DNA의 정보 위계, 깊이, 절제, 인과적 motion, 리듬을 잃지 않는다.
