# Web Deck QA Contract

QA는 기능 확인뿐 아니라 AX Lecture Design DNA가 실제 브라우저에서 유지되는지 확인하는 계약이다.

## Data

- required validation
- `undefined` / `null` 노출 0
- optional field의 safe fallback
- 배포 전 최소 점검: 모든 title 존재(deck meta·section·slide) · 핵심 메시지 존재(본문/목록 최소 1개) · image가 있으면 caption 또는 title 중 하나로 alt 확보 · link가 있으면 url 필수 · 화면에서 "undefined"/"null"/"[object Object]" 육안 확인 1회

## Presentation

- keyboard navigation
- swipe
- fullscreen
- progress
- chrome auto-hide
- causal transition

## Restart / Re-entry

이 Deck이 Entrance/Cover로 돌아가는 인터랙션(예: "처음으로" 버튼)을 구현했다면 다음을 확인한다 — `resume: false` 기준이다.

```text
Restart Test
1. deck 중간(또는 마지막 slide)까지 이동한다
2. Entrance/Cover로 복귀한다
3. 다시 진입한다
4. first section / first slide / initial progress·counter를 확인한다
```

- 최소 3회 반복해도 이전 위치가 남지 않는다(state leak 없음)
- Entrance로 돌아간 화면에서 이전 slide의 DOM이 클릭을 가로채지 않는다 — 특히 `pointer-events`처럼 부모 컨테이너가 비활성화돼도 자식 요소가 자신의 값을 따로 가지면 상속되지 않는 속성을 조심한다
- 재진입 후 keyboard(ArrowLeft가 첫 슬라이드에서 더 이전으로 가지 않음)와 progress bar/counter가 초기 상태인지 확인한다
- `resume: true`인 Deck의 "이어보기"는 이 테스트의 대상이 아니다 — 재시작(Restart)과 이어보기(Resume)는 다른 개념이다

Entrance로 돌아가는 인터랙션이 없는 Deck(v0.1 기본 엔진처럼 Cover 이후 되돌아가는 경로가 없는 경우)에는 이 테스트가 적용되지 않는다.

## Layout

기본 검증 viewport는 **1440 × 900**이다.

- horizontal overflow 없음
- text clipping 없음
- 깨진 image 없음
- caption·controls가 가려지지 않음

## Content and options

- Room/Box contamination 없음
- Opening / Closing relation 확인
- external links 정상
- `sectionNavigator` fan on/off 확인
- `resume` on/off 확인

## Visual

- typography hierarchy
- layered depth
- restraint
- motion semantics
- visual rhythm
- closing state — progress가 끝까지 채워지고 마지막 slide dot이 활성 상태로 표시되는지 확인

각 적용 사례는 해당 repository의 QA 기록과 screenshot을 자체적으로 보관할 수 있으나, 본 Standard repository는 근거 없이 그것을 복제하지 않는다.
