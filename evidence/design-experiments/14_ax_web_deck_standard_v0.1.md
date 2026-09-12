# 14. AX Web Deck Standard v0.1

> Status: Superseded Draft — this was the Sprint 5 Canonical Standard; it has since been superseded by a leaner, actively-maintained version. Recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/03_ax_web_deck_standard_v0.1.md](../../docs/03_ax_web_deck_standard_v0.1.md). The Architecture-chain correction in §3 (Design DNA is baked into Engine code, not a separate downstream layer) is flagged as MISSING-VALUABLE in [references/canonical_gap_review.md](../../references/canonical_gap_review.md).

**AX Lecture System Standardization — Sprint 5 · Canonical Standard**

이 문서는 `01`~`13` 문서에서 검증된 결론을 하나의 정본(Canonical)으로 정리한 것이다. `01`~`13`은 증거/이력(evidence/history)으로 계속 보존하며, **이후 AI Attitude 적용·신규 강의 제작·QA는 이 문서를 기준으로 한다.** 이 문서는 v0.1이며, 실제 적용 과정에서 발견되는 문제는 §21 Standard Change Policy를 거쳐서만 반영한다.

이번 Sprint는 새 기능을 실험하지 않았다 — 모든 내용은 `01`~`13`과 `prototypes/{web-deck-boundary,web-deck-contract,web-deck-time-profiles}/`에서 이미 검증된 사실의 재정리다. 출처가 불명확한 새 주장은 추가하지 않았다.

---

## 1. Purpose

AX Web Deck은 **AX Lecture 계열(AX Lecture / AI FirstStep / Codyssey Lecture)의 시각·인터랙션 문법을 유지하면서, Room/Box/Gamification 같은 과정형(다회차 학습 경험) 기능 없이 일반 특강·강의·발표에 쓸 수 있는 Web Presentation Engine**이다(Sprint 1~4 전체의 결론을 종합한 정의).

## 2. Non-goals — AX Lecture Experience와의 차이

| | AX Lecture Experience | AX Web Deck |
|---|---|---|
| 전제 | 규모 있는 과정형 학습(다회 방문, 진행도 추적) | 1회성 특강·강의·발표 |
| 구조 | Room → Box → Card Fan → Slide | Deck → Section → Slide (Room/Box 없음) |
| 완료 개념 | Gamification(XP/Rank/Confetti/Unlock) | Presentation Completion Signal(Closing만) |
| 근거 | Sprint 1 감사(3개 원본 프로젝트) | Sprint 2 Engine Boundary Experiment |

둘은 **같은 Design DNA(§6)를 공유할 수 있지만 Format이 다르다** — 이것이 이번 Standard 전체를 관통하는 전제다(작업 지시서 §6).

## 3. Architecture

```
Content ──consumes──▶ Engine ◀──styled by── Design DNA ◀──parameterized by── Skin
                         │
                    (baked-in CSS/JS: 카드 기하, 모션 타이밍, 타이포 스케일)

Time Profile ──guides authoring of──▶ Content + Presentation Options
```

**작업 지시서 §7의 일방향 체인("Content↓Deck Contract↓Engine↓Design DNA↓Skin↓Time Profile")은 실제 실험 결과와 다르다 — 아래처럼 정정한다:**

- **Design DNA는 Engine과 분리된 별도 레이어가 아니라 Engine의 CSS/JS 안에 구조적으로 박혀 있다.** Card Fan의 40° spread·hover transform, Typography의 clamp 수치, Scene 전환의 opacity+scale은 모두 `js/slides.js`·`js/fan.js`·`css/style.css`의 코드 그 자체다(Sprint 1 §03, Sprint 3 §09 확인). "Design DNA를 지킨다"는 것은 실질적으로 "이 코드를 재사용한다"는 뜻이었다(Sprint 2 §07 — 거의 모든 실험에서 코드 변경 없이 그대로 재사용됨).
- **Skin은 Engine 아래에 있는 게 아니라 Design DNA의 CSS 변수 슬롯에 값만 꽂는 병렬 레이어다.** `data-skin` 속성 + CSS custom property 블록(Sprint 1 §03 §4 확인) — Engine 코드를 전혀 건드리지 않고 색상·폰트·배경만 바뀐다.
- **Content는 Skin이나 Design DNA에 의존하지 않는다** — Deck/Section/Slide 데이터는 어떤 Skin을 입혀도 그대로 렌더된다(Sprint 3 fixture 전부가 sayu 스킨 고정으로 실행됐지만 Skin 자체를 건드리지 않았다는 사실이 이를 방증).
- **Time Profile은 Engine에 "흘러 들어가는" 하위 레이어가 아니라, Content를 어떻게 쓸지 사람이 참고하는 저작 가이드다.** Engine 코드 어디에도 Profile/시간 개념이 없다(Sprint 4 §12 명시 확인).

### Engine
Slide rendering(7종 타입) · Navigation(해시 라우팅) · Keyboard · Swipe · Fullscreen(터치 전용) · Chrome 자동 숨김 · Presentation Progress · Motion grammar(scene 전환).

### Content
Deck → Section → Slide. text/visual(image)/link.

### Design DNA
Typography hierarchy · Layer/depth · Restrained composition · Causal motion · Visual rhythm · Defect-free rendering(§18에서 CORE 후보로 재확인).

### Skin
Color palette · background artwork(캔버스 드로우) · thematic assets · glow/blur 유무 · visual mood(fxLevel 강도 포함, Sprint 1.5 §03 확인).

### Time Profile
Content density 권장 · Navigator 권장 · Resume 권장 · Demo/Practice 비중 · Closing 권장(§9).

---

## 4. Content Contract

`docs/09_web_deck_content_contract_v0.1.md`를 정본으로 채택한다(Sprint 3 실측, Sprint 4에서 반증 없이 재사용됨).

```
Deck
 ├─ meta { id, title, subtitle, kicker }
 ├─ presentation { sectionNavigator, resume }
 └─ sections[]
       ├─ id        (required)
       ├─ title     (required)
       ├─ tagline   (optional — Fan을 쓸 때만 노출)
       ├─ accent    (optional, default 0)
       └─ slides[]  (required, 최소 1개)
             ├─ type (required, 7종: cover/big/bullets/quote/split/image/closing)
             ├─ type별 required 필드 — 09 §3 표 그대로
             └─ link (optional, 모든 type 공통 — {url, label})
```

**구현과 문서가 일치함을 확인했다**: `prototypes/web-deck-contract/js/deck-api.js`의 `SLIDE_REQUIRED` 테이블이 `09` §3 표와 정확히 같다(Sprint 3에서 직접 대조). 차이가 없으므로 "구현 우선" 판단이 필요한 지점은 없었다.

## 5. Presentation Engine

| 기능 | 근거 | 상태 |
|---|---|---|
| Navigation(해시 라우팅) | Sprint 2 Exp2, Sprint 3 | CORE |
| Keyboard(→/Space/PgDn, ←/PgUp, Esc, Home/End, +/-) | Sprint 1 §02, 전 Sprint에서 코드 변경 없이 재사용 | CORE |
| Swipe(50px 임계값) | 동일 | CORE |
| Fullscreen(터치 전용 자동 요청) | 동일 | CORE |
| Chrome 자동 숨김 | 동일, Sprint 4에서 Completion 관찰에도 재확인 | CORE |
| Presentation Progress(카운터·진행바) | Sprint 3 §09 "옵션이 아니라 계약의 기본값" | CORE |

## 6. Design DNA — CORE 목록

`docs/03_design_dna_comparison.md`(Sprint 1, 3개 원본 프로젝트에서 수치까지 일치 확인) + `docs/06_visual_baseline_validation.md`(실제 화면 CONFIRMED) 근거로 확정한다.

1. **Typography Hierarchy** — Title/Section/Lesson/Body/Caption/Key-message clamp 스케일 수치, 3개 원본에서 완전 일치(Sprint 1), Sprint 3~4 모든 fixture에서 코드 변경 없이 재사용.
2. **Layered Spatial Composition** — z-index 레이어드 배경·Card Fan 오버레이가 겹쳐 보이는 구조(Sprint 1.5 §06 CONFIRMED). 과도한 3D는 원본에도 없었다(평면 카드 + transform 회전뿐).
3. **Restrained Composition** — Start 화면 요소 4개 이내(Sprint 1 UX_원칙 §2), 한 화면에 정보 과잉 없음.
4. **Causal Motion** — 모든 전환에 "왜 움직이는가"가 있음(Sprint 1.5 §06 CONFIRMED: scene=도착, warp=문턱, 딜인=순차 등장).
5. **Visual Rhythm** — 집중-선택-설명-휴식-전환 리듬(Sprint 1 Design DNA Top10), Slide type 다양화 원칙(Sprint 4 fixture에서 재확인).
6. **Defect-free Content Rendering** — `undefined`/`null`/빈 필드 미노출. Codyssey Lecture 실사고(Sprint 1) → Sprint 3 `validateDeck()` + `esc()` 이중 방어로 대응, Sprint 3·4 전 fixture에서 노출 0건 실측.

## 7. Slide Authoring

`docs/10_web_deck_authoring_guide.md`를 정본으로 채택한다. 이번 Sprint에서 §15-16(Callback)·§13-14(Timing) 지시에 따라 두 섹션을 보강했다(변경 이력은 그 문서 자체에 기록, 기존 내용 유지).

## 8. Presentation Options

```
presentation: { sectionNavigator: "none" | "fan", resume: true | false }
```

**금지 원칙(재확인)**: `sections.length >= N → 자동 Card Fan` 같은 규칙은 Engine 어디에도 없다 — `prototypes/web-deck-contract/js/fan.js`, `prototypes/web-deck-time-profiles/js/deck-main.js` 전부 Section 개수를 세는 코드가 없음을 Sprint 3·4 양쪽에서 확인했다.

## 9. Card Fan v0.1 분류

**LONG-DECK OPTIONAL.**

> **용어 정정**: Sprint 2 문서(`07`,`08`)는 이 분류를 "LONG-DECK ONLY"라고 표기했었다. 같은 문서 안에서 Resume은 이미 "LONG-DECK OPTIONAL"로 썼던 것과 표현이 어긋나 있었고(§13 충돌 기록 참고), Sprint 3(`11`)부터 "LONG-DECK OPTIONAL"로 통일해 그 이후 계속 재확인됐다. 이 Standard는 **"LONG-DECK OPTIONAL"을 정본 용어로 채택**한다 — 판단(Room 비종속, 30~60은 부담 대비 과함, 90 이상에서 가치 상승) 자체는 Sprint 2부터 한 번도 바뀐 적이 없다.

| Profile | 권장 |
|---|---|
| 30 | 기본 OFF |
| 60 | 기본 OFF |
| 90 | 경계 영역 — 선택(Sprint 4 실측: "있어도 없어도 되는 수준") |
| 120 | 가치가 높아지는 선택 기능 |

달라질 수 있는 요소(Sprint 2 §Experiment 3, Sprint 4 §12 근거): Section 개수, Section 간 독립성, 비선형 이동 필요성, 전체 구조를 청중에게 보여줄 가치, 발표자의 탐색 필요.

## 10. Resume v0.1

| Profile | 권장 |
|---|---|
| 30 / 60 | 기본 OFF |
| 90 / 120 | Optional / Recommended(120은 Recommended 쪽에 더 가까움 — Sprint 4 fixture가 90=optional 성격, 120=recommended 성격으로 설정해 검증) |

Resume도 Engine 자동판단이 아니다 — `presentation.resume` 플래그가 없으면 `App.Resume` 자체가 생성되지 않고, `slides.js`는 `if (activeSection && App.Resume)`로만 접근하므로 크래시 없이 정상 동작한다(Sprint 3 §09, Sprint 4 §20 QA에서 실제 localStorage 기록까지 실측 확인: `webdeck_resume_profile-90-demo` → `{"ax-what":2}`).

## 11. Time Profiles

`docs/12_web_deck_time_profiles_v0.1.md`가 우선한다. 아래는 그 표의 요약이며 숫자는 전부 **권장값**이다.

| Profile | Typical Sections | Typical Slides | Navigator | Resume | Completion |
|---|---:|---:|---|---|---|
| 30 | 1 | ~6~8 | none | off | A |
| 60 | 1~2 | ~10~14 | none(구조 복잡 시 예외) | off | B |
| 90 | 3~4 | ~18~26 | none \| fan(경계) | off \| true | C |
| 120 | 5~7 | ~26~34 + 별도 실습 시간 | fan 권장 | true 권장 | C |

> **권고 Profile이며 실제 강의 리허설에 따라 조정한다.** Recommended/Typical/Upper caution 구분과 근거는 `12` §Profile 표를 그대로 따른다 — 실제 시간 소요를 리허설 없이 추정한 값이라는 한계가 있음을 그대로 승계한다.

## 12. Completion Signal

`docs/13_web_deck_completion_signal.md`를 정본으로 채택한다.

- **Variant A(Simple)** — 30분 기본.
- **Variant B(Callback)** — 60분 기본, 일반적인 단일 Deck의 기본 추천이기도 하다.
- **Variant C(Callback + Action)** — 90/120분 기본.
- Gamification Completion(XP/Rank/Confetti/Unlock/"수료 완료")은 Web Deck에서 사용하지 않는다(§17 재확인).
- Motion은 새로 만들지 않는다 — 기존 Chrome 자동 숨김(§5)이 완료 상태 인지에도 이미 충분함을 Sprint 4에서 실측(virtual-time-budget 비교로 chrome 소멸 확인).

## 13. QA Contract v0.1

`docs/12` §20, `docs/13` §Motion, Sprint 1~4 전체 QA 항목을 통합한다.

**Data**: required field validation(`validateDeck`) · undefined/null 화면 노출 0.
**Presentation**: keyboard · fullscreen · swipe · progress.
**Layout**: 1440×900 기준 · horizontal overflow 없음.
**Content**: Room/Box 과정형 언어 오염 없음(§16 Authoring Guide 체크리스트) · Opening/Closing Callback 관계 확인(§15) · link 정상(url 필수, label 없으면 url로 대체).
**Presentation Options**: fan on/off 정상 · resume on/off 정상(localStorage 실기록 확인).
**Visual**: Typography hierarchy · depth · composition · motion · closing state(Progress 100%, 마지막 dot 활성화).
**원본 저장소**: 매 Sprint 종료 시 `git status` clean 확인 — 지금까지 5개 Sprint에서 100% 유지됨.

## 14. Customization Boundary

| 변경 가능 | 유지해야 함 |
|---|---|
| Content(Deck/Section/Slide 텍스트·이미지) | Card Fan 기하 수치(40° spread, transform 값) |
| Skin(색상·폰트·배경 캔버스 색상표·glow 유무) | Typography clamp 스케일 |
| Time Profile 선택(Section 수·Navigator·Resume·Completion Variant) | Scene 전환 문법(opacity+scale, 왜 움직이는가) |
| Closing의 title/teaser/link 내용 | Slide 7종 타입의 required 필드 계약 |
| — | Room/Box 언어를 Section 카피에 쓰지 않는 원칙(§16 Authoring Guide) |
| — | validateDeck의 경고-only 원칙(렌더링을 막지 않음) |

---

## Standard Change Policy

v0.1 이후 실제 강의 적용에서 문제가 발견되면 다음 순서를 따른다:

1. 특정 강의만의 Customization인지 확인한다.
2. 반복 발생하는 문제인지 확인한다(2개 이상의 서로 다른 Deck에서 같은 문제가 나오는지).
3. Standard(이 문서) 변경이 필요한지 판단한다.
4. 근거를 Decision Log(향후 별도 문서 또는 이 문서의 변경 이력 섹션)에 기록한다.
5. Standard version을 올린다(v0.1 → v0.2 등).

**한 강의에서 필요했다고 바로 Engine Standard로 올리지 않는다.** 이는 Sprint 1~4 전체가 반복해온 방법론(예: Card Fan을 "Section 6개"로 즉시 규칙화하지 않고 계속 "판단 보류"로 남긴 것)의 연장선이다.
