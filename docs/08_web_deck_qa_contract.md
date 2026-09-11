# Web Deck QA Contract

QA는 기능 확인뿐 아니라 AX Lecture Design DNA가 실제 브라우저에서 유지되는지 확인하는 계약이다.

## Data

- required validation
- `undefined` / `null` 노출 0
- optional field의 safe fallback

## Presentation

- keyboard navigation
- swipe
- fullscreen
- progress
- chrome auto-hide
- causal transition

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
- closing state

각 적용 사례는 해당 repository의 QA 기록과 screenshot을 자체적으로 보관할 수 있으나, 본 Standard repository는 근거 없이 그것을 복제하지 않는다.
