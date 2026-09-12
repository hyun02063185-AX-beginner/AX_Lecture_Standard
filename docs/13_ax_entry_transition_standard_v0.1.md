# AX Entry Transition Standard v0.1

## AX Entry Warp

### Purpose

강의 첫 화면(Entrance / Cover)에서 실제 콘텐츠(Deck / Experience Hub)로 넘어갈 때, AX Lecture 계열 전체에 일관된 "입장감"을 제공하는 공통 원형 전환이다. 계열의 모든 강의가 같은 진입 리듬을 공유하게 한다.

### Golden Source

이 Visual Contract는 `MyPage`(`js/motion/pageTransition.js`, `css/base.css`의 `.page-transition`)의 실제 구현에서 확인한 값을 정본으로 한다. AX Lecture Standard의 `templates/*/engine/entry-transition.js`, `entry-transition.css`는 이 값을 엔진 형태로 재구성한 것이며, 코드를 그대로 복사하지 않고 동일한 Behavior + Visual Result를 재현한다.

### Scope

```text
Entrance → Lecture
Cover → Deck
Entrance → Experience Hub
```

### Not Scope

```text
Slide → Slide
Lesson → Lesson
Module → Module
모든 일반 Navigation
```

AX Entry Warp는 진입 시 단 한 번만 재생된다. Room/Module/Lesson 사이 이동, Slide 간 이동에는 사용하지 않는다 — 각 Template의 기존 slide/lesson transition(causal opacity+scale 등)을 그대로 유지한다.

### Anatomy

```text
Trigger (Start / Enter 버튼 클릭)
↓
Warp Overlay Activation (reflow 강제 → 다음 프레임에 활성 클래스 부여)
↓
Circular Expansion (중심에서 원형으로 확대)
↓
Screen Cover (화면 전체를 불투명하게 덮음)
↓
Destination Change / Content Activation (덮인 상태에서 콜백 실행)
↓
Warp Release (원이 계속 확대되며 투명해짐)
↓
New Screen Visible
```

### Visual Contract

MyPage Golden Transition에서 확인된 정확한 값이며, 모든 AX Template에서 동일해야 한다.

| 항목 | 값 |
|---|---|
| Overlay geometry | `position: fixed`, 중심 정렬 원, `width/height: 220vmax`, `margin: -110vmax 0 0 -110vmax`, `border-radius: 50%` |
| Duration | `1600ms` |
| Easing | `cubic-bezier(.45, 0, .2, 1)` |
| Keyframes | `0%` opacity 0 / scale 0 → `28%` opacity 1 / scale 1 (완전히 덮임) → `55%` opacity 1 / scale 1.03 (hold) → `100%` opacity 0 / scale 1.12 (release) |
| Cover point | 448ms 시점(28%)에 화면이 완전히 덮인다 |
| Destination change / cover-to-swap timing | 820ms 시점 — 화면이 완전히 덮인 상태(hold 구간) 안에서 콜백이 실행된다 |
| Release | 880ms(55%)부터 1600ms(100%)까지 서서히 투명해지며 확대되어 사라진다 |
| Background | 중심부 밝은 색 → 중간 accent → 외곽 색 → 투명(`transparent 100%`)으로 이어지는 radial-gradient |

이 표의 geometry / duration / easing / cover point / release / visual weight는 Web Deck과 Lecture Experience 두 Template 사이에서 달라지면 안 된다. 달라질 수 있는 것은 콜백이 실행하는 destination(어떤 화면을 여는가)뿐이다.

### Color

기본값은 AX 계열의 중립 웜톤이다(`--ax-warp-center`, `--ax-warp-mid`, `--ax-warp-outer` CSS 변수로 노출). 개별 강의가 자신의 Skin 색상에 맞게 이 변수를 재정의할 수 있다 — 단 duration/easing/geometry/timing은 재정의 대상이 아니다. 색상을 바꾸는 것은 Application-specific Decision이며 [Template Usage Guide](12_template_usage_guide.md)의 규칙을 따른다.

### Reduced Motion

`prefers-reduced-motion: reduce`가 감지되면 warp를 재생하지 않고 콜백을 즉시 실행한다(MyPage와 동일한 JS 게이트 방식). 별도의 CSS 애니메이션 fallback은 필요하지 않다 — Golden Source 자체가 JS 게이트만으로 충분히 대응한다.

### API

```js
startEntryTransition(() => {
  openDeck(); // 또는 openHub() 등, 호출자가 정의하는 destination
});
```

`entry-transition.js`는 화면에 아무 내용도 알지 못한다 — 강의 이름, 특정 Slide 번호, 특정 문구, 특정 이미지가 이 파일 안에 들어가지 않는다. 완전히 재사용 가능한 Entrance 전용 모듈이다.

### Engine Contract

- `window.startEntryTransition(onCovered)` — Overlay를 생성하고, 워프를 재생하고, cover point(820ms)에 `onCovered()`를 호출하고, 애니메이션 종료 후 Overlay를 제거한다.
- `window.AXEntryWarp` — `start`, `reducedMotion`, `NAVIGATION_DELAY_MS`, `TOTAL_DURATION_MS`를 노출하는 네임스페이스.
- `#deck-cover` / `#experience-cover`가 있고 그 안에 `[data-action="enter"]` 버튼이 있으면, 각 Engine은 그 버튼 클릭 시 `startEntryTransition`을 실행한 뒤 Cover를 숨기고 콘텐츠를 렌더링한다. Cover가 없으면 Engine은 v0.1과 동일하게 즉시 렌더링한다(하위 호환).
