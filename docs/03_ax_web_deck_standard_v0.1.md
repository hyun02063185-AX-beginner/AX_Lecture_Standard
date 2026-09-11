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

## Scope boundary

Web Deck의 기본 구조는 Deck → Section → Slide다. Room, Box, 입장, unlock, XP, Rank는 Web Deck의 기본 언어·구조가 아니다. 작성 기준은 [Authoring Guide](05_web_deck_authoring_guide.md), 시간 적용은 [Time Profiles](06_web_deck_time_profiles.md)를 따른다.
