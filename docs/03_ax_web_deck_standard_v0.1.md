# AX Web Deck Standard v0.1

## Definition

AX Lecture 계열의 시각·인터랙션 문법을 유지하면서 Room, Box, Gamification 같은 과정형 기능 없이 일반 특강·강의·발표에 사용할 수 있는 Web Presentation Engine이다.

```text
Content
↓
Deck Contract
↓
Engine
↓
Design DNA
↓
Skin
↓
Time Profile
```

## Engine CORE

- slide rendering
- navigation
- keyboard
- swipe
- fullscreen
- presentation progress
- chrome auto-hide
- causal transition

Progress는 CORE다. Resume은 Optional이며, engine이 시간이나 slide 수로 자동 활성화하지 않는다.

## Presentation UX

```text
Default Entry Transition:
AX Entry Warp
```

Entrance/Cover에서 첫 Slide로 넘어갈 때 [AX Entry Warp](13_ax_entry_transition_standard_v0.1.md)를 기본으로 사용한다. 이는 Slide-to-slide transition(causal transition, Engine CORE)과는 별개다 — Entry Warp는 진입 시 한 번만 재생되고, Slide 간 이동에는 관여하지 않는다.

## Presentation options

```js
sectionNavigator: 'none' | 'fan'
resume: true | false
```

옵션은 저자가 명시한다. `if (duration >= 90) enableFan()`처럼 duration만으로 옵션을 자동 판단하는 규칙은 Standard에 두지 않는다.

## Long-deck optional capabilities

| Profile | Card Fan | Resume |
|---|---|---|
| 30 | OFF | OFF |
| 60 | OFF | OFF |
| 90 | boundary / selective | optional |
| 120 | optional / higher value | recommended / optional |

Card Fan과 Resume은 모두 **LONG-DECK OPTIONAL**이다. Fan은 section 수·독립성, presenter jump, overview, 비선형 이동의 가치를 기준으로 판단한다. Resume은 재진입 가치와 학습 맥락을 기준으로 판단한다. 이 표는 권장이며 [Time Profiles](06_web_deck_time_profiles.md)의 rehearsal 우선 원칙을 따른다.

## Restart Contract

`resume: false`인 Web Deck에서, Entrance/Cover로 돌아간 뒤 다시 강의를 시작하면 presentation은 항상 첫 Section·첫 Slide부터, progress·counter도 초기 상태로 시작한다. 이는 DOM을 첫 화면처럼 보이게 만드는 것이 아니라 실제 presentation state(현재 slide index, 현재 section, transient navigation state)를 초기화하는 것을 뜻한다. Entrance로 돌아가는 인터랙션을 구현하는 Deck은 이 상태 초기화 책임을 하나의 함수로 모아 처리한다.

`resume: true`인 Long Deck의 "이어보기"와 이 Restart Contract는 서로 다른 개념이다 — 이어보기는 재진입 시 마지막 위치를 복원하고, Restart는 사용자가 명시적으로 처음부터 다시 시작할 때 상태를 비운다. Resume이 있는 Deck이라도 "처음부터 다시 시작" 액션을 선택하면 이 Contract를 적용할 수 있어야 한다.

## Customization Boundary

| 바꿔도 되는 것 | 유지해야 하는 것 |
|---|---|
| Content(Deck/Section/Slide 텍스트·이미지) | Typography clamp 스케일 |
| Skin(색상·폰트·배경) | Scene 전환 문법(opacity+scale, causal motion) |
| Time Profile 선택(Section 수·Navigator·Resume·Completion Variant) | AX Entry Warp의 geometry·duration·easing |
| Closing의 title/teaser/link 내용 | Slide type의 required 필드 계약 |
| — | Room/Box 언어를 Section 카피에 쓰지 않는 원칙 |
| — | validateDeck류 검증의 경고-only 원칙(렌더링을 막지 않음) |

## Scope boundary

Web Deck의 기본 구조는 Deck → Section → Slide다. Room, Box, 입장, unlock, XP, Rank는 Web Deck의 기본 언어·구조가 아니다. 작성 기준은 [Authoring Guide](05_web_deck_authoring_guide.md), 시간 적용은 [Time Profiles](06_web_deck_time_profiles.md)를 따른다.
