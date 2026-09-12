# 07. Engine Boundary Experiment

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/03_ax_web_deck_standard_v0.1.md](../../docs/03_ax_web_deck_standard_v0.1.md). Prototype code: [`../../prototypes/web-deck-boundary/`](../../prototypes/web-deck-boundary/).

**AX Lecture System Standardization — Sprint 2**
목적: 완성된 Web Deck을 만드는 것이 아니라, **AX Lecture의 과정형 기능을 어디까지 제거해도 좋은 디자인·사용성 DNA가 유지되는가**를 실제로 지워보며 검증한다. 모든 실험은 `/Users/hyun020631854123/AX_Lecture_Standard/prototypes/web-deck-boundary/`의 별도 프로토타입에서 진행했다. 원본 3개 저장소(AX_Lecture/AI_First_Step/Codyssey_Lecture)는 처음부터 끝까지 읽기 전용이었다(§Stop Gate 직전 최종 `git status`로 재확인).

원칙: **AX_Lecture에서 출발 → 기능 제거 → 결과 확인.** 새 Web Deck을 처음부터 작성하지 않았다. 모든 실험은 AX_Lecture의 실제 파일을 복사한 뒤 잘라내는 방식으로 진행했다.

---

## Experiment 0 — Baseline Clone

**경로:** `prototypes/web-deck-boundary/00-baseline/`

AX_Lecture의 `index.html`/`css/style.css`/`js/{site-config,data,room,slides,main,intro}.js`를 그대로 복사하고, `js/{admin,telemetry,practice}.js`·`vendor/qrcode.js`(LMS 백엔드·강사 도구·QR — 디자인 DNA와 무관)만 제외했다. `js/data.js`는 실제 AX_Lecture 원고를 그대로 발췌해 Box 2개(왜·도구) · Lecture 4개(3+1) · Slide 30여 장으로 축소했다(가공/치환 없음, Lorem ipsum 미사용).

### 발견한 기술 의존성 (Removed 전에는 없던 문제)

```
Removed: js/practice.js, js/admin.js, js/telemetry.js, scene-practice 마크업
Reason: LMS/강사 도구는 디자인 DNA 검증과 무관해 Baseline에서 제외
Technical dependency: main.js:171 `Object.values(scenes).forEach(s => s.classList.remove(...))`가
  scene-practice 요소 부재 시 null.classList 접근으로 크래시(Uncaught TypeError) — 전체 라우팅이
  멈추고 화면이 별빛 배경만 남은 채 아무것도 렌더되지 않음(스크린샷으로 실측 확인)
Visual impact: 크래시 전 = 완전 공백 화면. 패치 후 = 정상
UX impact: 발표 중 이 상태가 되면 복구 불가능(새로고침 필요) — 심각도 높음
AX DNA impact: 없음(순수 버그, DNA와 무관)
Restore needed?: 아니오 — `scenes` 순회를 `s && s.classList...`로 1줄 수정(프로토타입에서만, 원본 미수정)
Classification: CORE (버그이지만 엔진이 "부분 집합으로 실행되는 것"을 원래 가정하지 않았다는 뜻 —
  표준 엔진을 설계할 때 반드시 null-safe하게 만들어야 할 지점)
```

```
Removed: (제거 아님) HUD의 "발견한 강의 N / 20" 텍스트
Reason: data.js를 4강으로 축소했는데 index.html의 "/ 20"은 하드코딩된 정적 텍스트
Technical dependency: main.js는 분자(found-count)만 갱신하고 분모는 갱신하지 않음(AX_Lecture
  원본에도 있는 특성 — AI FirstStep 감사에서도 "foundTotal" 요소가 별도로 존재했던 것과 대조적)
Visual impact: "0 / 20"으로 표시되는 사소한 불일치(수정 전)
UX impact: 낮음(강의 수를 바꿀 때마다 손으로 index.html도 고쳐야 함)
AX DNA impact: 없음
Restore needed?: 아니오 — 정적 텍스트를 "/ 4"로 직접 수정
Classification: PROJECT SPECIFIC (콘텐츠 재구성 시 반복될 수 있는 사소한 결합 — 표준 엔진에서는
  분모도 JS가 자동 계산하도록 만드는 편이 안전)
```

### Baseline 결과
Start/Room/Card Fan/Lesson 화면 모두 AX_Lecture 원본과 시각적으로 구분 불가능한 수준으로 재현됨(스크린샷: `audit-assets/sprint2/baseline/{start,room,card-fan,lesson-cover}.png`). 이로써 이후 실험의 비교 기준선을 확보했다.

---

## Experiment 1 — Experience-only Feature Removal

**경로:** `prototypes/web-deck-boundary/01-experience-removed/`

```
Removed: HUD 랭크 뱃지(#hud-rank), XP 바(#xp-fill/#xp-pct), 완주 축하 오버레이(#celebrate 전체),
  TOC "핵심 훑기" 토글(#toc-core), 스킨 레벨 게이팅(skinGating:false로 전환)
Reason: Gamification/Reward/Skin-unlock을 걷어냈을 때 "엔진이 실제로 분리 가능한가" 검증
Technical dependency:
  1) main.js:548 `core.addEventListener(...)`가 #toc-core 부재 시 크래시 — null 가드 추가로 해결
  2) main.js의 renderCelebrate()는 titleEl/subEl에 null 가드가 없었음(다른 celebrate 관련 함수는
     모두 가드돼 있었는데 이 함수만 누락) — 방어적으로 가드 추가(도달 경로는 없었지만 잠재 위험)
  3) 스킨 레벨 게이팅은 AX_Lecture main.js에 이미 `SITE_CONFIG.skinGating===false` 우회 플래그가
     있어(Codyssey Lecture가 실전에서 이미 쓴 것과 동일 패턴) 코드 수정 없이 config만으로 제거됨
Visual impact: HUD가 "⌂입장 / 사유의 방 / 발견한 강의 0·4 / ☰ / ↺"로 단순화. Room 화면은 스크린샷
  상 결코 "비어 보이지" 않음 — 박스 타이포그래피·간격·배경이 그대로 밀도를 유지함
UX impact: 완주해도 아무 반응이 없어진다(셀러브레이션 제거로 인한 "완료감 부재" — 새로운 발견,
  §11에서 판단 보류 항목으로 기록)
AX DNA impact: 없음 — Card Fan·Typography·레이어드 배경·전환 모션은 전부 그대로
Restore needed?: 아니오
Classification: EXPERIENCE ONLY (Gamification 메커니즘 자체) / CORE (null-safety 패턴은 엔진에
  반드시 반영해야 할 교훈)
```

### 확인한 질문에 대한 답
- **기본 강의 탐색은 정상인가?** 예 — 콘솔 에러 없음, Room/Fan 라우팅 정상(`audit-assets/sprint2/removal-1/{room,card-fan}.png`).
- **디자인이 비어 보이지 않는가?** 아니오 — 박스 카드의 타이포·여백·배경 자체가 충분한 밀도를 만든다. Gamification 요소는 "장식"이 아니라 "부가 정보 레이어"였음을 재확인.
- **제거한 기능과 핵심 Engine이 실제로 분리 가능한가?** 대체로 가능하다. 단 2건의 null-safety 결함을 발견했다는 것은, 현재 AX_Lecture 코드가 "이 요소들은 항상 DOM에 존재한다"는 암묵적 전제 위에 짜여 있다는 뜻이다. 표준 엔진은 이 전제를 버리고 모든 선택적 요소를 null-safe하게 다뤄야 한다.

---

## Experiment 2 — Room / Box Hub Removal → Linear Deck

**경로:** `prototypes/web-deck-boundary/02-linear-deck/`

AX_Lecture의 `main.js`(744줄, Room/Box/Fan/상태관리가 뒤섞인 파일)를 그대로 재사용하지 않고 `js/deck-main.js`(약 110줄)를 새로 작성했다 — 이유는 아래 기술 의존성 기록 참고. `js/slides.js`(렌더/네비/줌/키보드/스와이프/풀스크린/크롬자동숨김, 390줄)는 **3곳만 수정**하고 나머지는 100% 그대로 재사용했다.

```
Removed: js/room.js, js/main.js, js/intro.js 전체, scene-room/scene-intro 마크업, Box 계층
Reason: "Room→Box→Fan" 3단 구조를 걷어내고 Start→Section(=강의)→Slide 선형 구조로 재구성
Technical dependency:
  1) slides.js:25 `CURRICULUM.boxes.forEach(b => b.lectures.forEach(...))`가 "다음 강의로 이어보기"
     기능을 위해 Box 구조에 직접 결합돼 있었음 → `window.DECK_SECTIONS`(평탄화된 배열)를 참조하도록
     1줄 수정
  2) slides.js:158 `CURRICULUM.boxes.indexOf(box)`(강조색 매핑용)가 Box 객체를 전제 → accent
     인덱스를 숫자로 직접 넘기도록 1줄 수정
  3) slides.js:345-347 `exitToCards()`가 "카드 부채꼴로 돌아가기"를 하드코딩 → Room이 없으므로
     Start로 돌아가도록 수정
  4) main.js(744줄) 자체는 Router/Progress/Level/Skin/Gamification 상태가 한 파일에 뒤섞여 있어
     "Room 없이 main.js만 재사용"이 불가능했다 — Room 관련 코드만 골라내 삭제하는 것보다 필요한
     부분(라우터·배경 캔버스)만 다시 쓰는 편이 훨씬 적은 코드(약 110줄)로 끝났다. 이것 자체가
     중요한 발견이다: **main.js는 현재 "엔진"이 아니라 "이 사이트 전용 오케스트레이터"에 가깝다.**
Visual impact: Room/Box 화면이 완전히 사라졌지만 배경 캔버스(별빛)·vignette·Typography 위계·
  scene 전환(opacity+scale)·slide-topbar 자동숨김은 전부 그대로 살아있음(스크린샷:
  `audit-assets/sprint2/linear-deck/{start,section1-mid,section4-tools}.png`)
UX impact: 강의 개관(Room의 "4개 상자가 보인다")이 사라져 전체 구조를 한눈에 보여줄 방법이 없어짐
  — 짧은 Web Deck에는 문제되지 않지만 §11 판단 보류 항목(TOC 재도입 여부)으로 남김
AX DNA impact: "Section" 전환이 각 강의의 기존 cover/closing 슬라이드를 그대로 재사용해 자연스럽게
  구현됨 — 별도의 "Section 전환 신 화면"을 새로 만들 필요가 전혀 없었다(설계 재사용의 좋은 사례)
Restore needed?: 아니오
Classification: WEB-DECK CORE (slides.js 전체·배경 캔버스·해시 라우팅 패턴) /
  EXPERIENCE ONLY (Room/Box 계층 자체) / PROJECT SPECIFIC (main.js의 현재 구현 형태)
```

```
Removed: (발견) data.js 슬라이드 콘텐츠 자체에 하드코딩된 "상자 1 · 왜 · 01" 같은 Box 언어
Reason: 콘텐츠 kicker 텍스트가 원래 Room 문맥을 전제로 작성되어 있었음
Technical dependency: 없음(크래시 없음) — 순수 카피(copy) 이슈
Visual impact: Linear Deck 화면에도 "상자 1 · 왜 · 01"이라는 문구가 그대로 노출됨
  (`section1-mid.png`에서 확인)
UX impact: 낮음(의미는 통하지만 Room 없는 화면에 "상자"라는 단어가 남아 있어 다소 어색함)
AX DNA impact: 없음
Restore needed?: 아니오(문서화만 하고 프로토타입 콘텐츠는 수정하지 않음 — Content/Engine 경계
  발견 자체가 목적)
Classification: SKIN/CONTENT VARIABLE — 콘텐츠 데이터는 엔진 형태(Room 유무)를 가정하지 않고
  작성되어야 한다는 콘텐츠 저작 가이드라인 후보
```

### 확인한 질문에 대한 답
Room이라는 기능은 없어졌지만 화면은 평범한 PPT처럼 보이지 않는다 — 레이어드 배경·타이포그래피 위계·scene 전환이 살아있기 때문이다(§9 참조).

---

## Experiment 3 — Card Fan A/B Test

### Variant A — Card Fan Retained (Section 전환 장치)

**경로:** `prototypes/web-deck-boundary/03-card-fan-a/`

`js/room.js`(177줄)에서 Box 그리드 관련 함수(`buildRoom`/`revealBoxes`/`refreshBoxDots`)를 걷어내고 카드 부채꼴 로직(`dealFan`/`selectCard`)만 남긴 `js/fan.js`(약 100줄)를 새로 작성했다. **기하·모션 수치(40° spread, stagger 타이밍, hover transform)는 한 글자도 바꾸지 않았다** — 이 실험의 목적이 "카드 팬을 다른 자리에 재배치해도 같은 인상을 주는가"이므로 시각 문법을 바꾸면 실험 자체가 무의미해지기 때문이다.

```
Removed: Box 계층(4박스 그리드) — Fan은 Start 직후 최상위 씬으로 승격, DECK_SECTIONS 전체를
  "하나의 부채꼴"로 펼침
Reason: Card Fan이 "박스 안의 레슨 선택기"가 아니라 "강의 리듬을 만드는 Section 전환 장치"로도
  기능하는지 검증
Technical dependency: room.js의 `fanClose`/`Escape` 핸들러가 원래 "#/room으로 복귀"를 가정했음
  → Fan이 최상위 씬이 되면서 "복귀할 Room이 없다" → Start로 복귀하도록 재정의(1곳)
Visual impact: 4장의 카드가 Start 직후 곧바로 부채꼴로 펼쳐짐(`audit-assets/sprint2/card-fan-a/fan.png`)
  — 겹침·회전·타이포 모두 Baseline의 Card Fan과 시각적으로 동일하게 재현됨
UX impact: 강의 전체를 "한 번의 부채꼴"로 미리 보여줘 20강 규모에서 중요했던 "개관" 기능의
  일부를 Room 없이도 대체함 — 단, Section이 4개뿐인 작은 덱에서는 부채꼴을 펼치는 의식(ritual)이
  다소 과해 보일 수 있음(§9 Card Fan 판단 참고)
AX DNA impact: 긍정적 — Card Fan 특유의 "여러 장이 쌓인 느낌"과 "회전을 유지한 채 드는" hover
  문법이 Room 없이도 완전히 보존됨
Restore needed?: 아니오
Classification: 판단은 §9로 분리(요소별 CORE/OPTIONAL/LONG-DECK ONLY/EXPERIENCE ONLY 표 참고)
```

### Variant B — No Card Fan

**경로:** `prototypes/web-deck-boundary/03-card-fan-b/`

Variant B는 Experiment 2의 Linear Deck과 사양이 완전히 동일하다(Intro/Section Fan 없이 Start→Section→Slide→Slide→Section→Slide로 직행, Typography·depth·layered background·motion·visual rhythm만 유지). 별도로 다시 구현하지 않고 `02-linear-deck`의 산출물을 그대로 `03-card-fan-b`에 복사했으며, 스크린샷도 `audit-assets/sprint2/linear-deck/` → `audit-assets/sprint2/no-card-fan-b/`로 그대로 복사했다. 이 재사용 자체가 하나의 발견이다: **"Card Fan 없는 선형 Deck"과 "Room 없는 선형 Deck"은 이번 실험 설계상 같은 산출물이 된다** — Card Fan은 Room에 종속된 인터랙션이 아니라 독립적으로 켜고 끌 수 있는 모듈이라는 뜻이다.

### Card Fan 판단 기준 적용

| 기준 | Variant A(유지) | Variant B(제거) |
|---|---|---|
| 1. 강의 진행이 자연스러운가 | 자연스러움 — 클릭 한 번으로 원하는 Section 진입 | 자연스러움 — 버튼 한 번으로 즉시 진입 |
| 2. 발표자가 조작하기 쉬운가 | Section 간 이동 시 Fan으로 돌아가 다시 클릭(2단계) | Section 종료 시 "다음 섹션 ▶"으로 1단계 진행 — 더 빠름 |
| 3. 청중이 현재 위치를 이해하기 쉬운가 | Fan이 "전체 중 어디"를 시각적으로 보여줌(카드 개수=Section 수) | 슬라이드 카운터(`N/M`)와 상단 라벨로만 위치 파악 — Fan보다 개관성은 약함 |
| 4. AX Lecture 특유의 첫인상이 살아있는가 | 강함 — Card Fan은 Design DNA 06 문서의 "강한 인상" 항목 그대로 재현 | 약함 — Typography/배경은 유지되나 "카드 다발" 특유의 인상은 없음 |
| 5. 불필요한 클릭이 늘어나지 않는가 | Section마다 Fan 왕복이 추가 클릭을 유발(4개 Section 기준 최대 +4클릭) | 클릭 수 최소 |
| 6. 30~60분 짧은 강의에도 과하지 않은가 | 다소 과함 — Section 4개 규모에서는 의식(ritual)이 콘텐츠보다 부각될 위험 | 적합 |
| 7. 90~120분 강의에서는 가치가 커지는가 | 그럴 가능성이 높음 — Section 수가 많아질수록 "개관" 가치가 커짐(단, 이번 실험은 4-Section 규모로만 검증했으므로 확정 아님) | 긴 강의에서는 위치 감각 부족이 아쉬울 수 있음(TOC 재도입으로 보완 가능) |

**권고 분류(사용자 승인 전 확정 아님): LONG-DECK ONLY.** Card Fan은 CORE도 EXPERIENCE ONLY도 아니라고 판단한다 — Room에는 종속되지 않지만(Variant A가 증명), 짧은 Web Deck(30~60분)에는 의식이 콘텐츠 대비 과할 수 있고, Section 수가 많은 긴 Deck(90~120분)이나 과정형 Experience에서 "개관" 가치가 커진다. 30~60분 Deck은 Variant B(No Card Fan) 방식을 기본으로 하고, 90분 이상이거나 Section이 6개를 넘는 경우 Variant A를 옵션으로 제공하는 것을 후보로 제안한다.

---

## Experiment 4 — Progress / Resume Boundary

별도 코드 실험 없이 Experiment 1~3의 결과를 근거로 판단했다(Progress 관련 UI는 Exp1에서 이미 최소화됨).

- **Presentation Progress(현재 Section/Slide/전체 위치 표시)**: Web Deck에도 필수로 유지해야 한다. Exp2/3 모두 slide-counter("N/M")와 progress-fill 바를 그대로 남겼고, 제거를 시도하지 않았다 — 발표 중 위치 감각은 대체 불가능한 기능이기 때문이다(§11 Presentation Controls와 동일 결론).
- **Resume(브라우저를 닫았다 열면 이전 위치 복원)**: Exp2/3 프로토타입은 `App.Resume`을 아예 제공하지 않았고(window.Progress.mark()만 no-op으로 존재) 콘솔 에러 없이 정상 동작했다 — slides.js의 Resume 관련 호출이 전부 `if (activeLecture && App.Resume)`로 가드돼 있었기 때문이다. 즉 **Resume은 이미 코드 차원에서 선택적(optional) 기능으로 설계돼 있다.** 짧은 Web Deck(발표가 한 세션에서 끝남)에는 불필요, 자습형·장시간 콘텐츠에는 유용 — **LONG-DECK OPTIONAL**로 분류한다.
- **Completion(완료 개념)**: Exp1에서 완주 축하 오버레이를 제거했을 때 완주해도 아무 반응이 없어졌다(§Experiment 1). 이는 "과정형 학습 완료" 개념을 Web Deck에서 완전히 제거할 수 있는가?에 대한 실증 데이터다 — **제거는 기술적으로 가능하지만, 강의를 "끝까지 봤다"는 최소한의 신호(예: Outro 슬라이드 자체가 그 역할을 함, Exp2에서 실측)는 여전히 필요하다.** 별도의 축하 연출 없이도 마지막 슬라이드(`closing` 타입)가 "마무리"라는 인상을 충분히 주는 것을 스크린샷으로 확인했다.

---

## 실패한 실험 / 복구한 기능

- Card Fan Variant A에서 "닫기(Escape/닫기 버튼) → Room 복귀"를 그대로 두었다가 Room이 없어 라우팅이 깨질 뻔했음 — 즉시 "Start로 복귀"로 재정의(§Experiment 3 기술 의존성 참고). 복구가 아니라 재설계.
- 그 외 되돌린 기능은 없다 — 모든 제거는 의도한 대로 유지됐다.

## QA 결과

- Desktop 1440×900에서 Card Fan Variant A 확인 — 가로 스크롤 없음, 카드 4장 모두 뷰포트 안에 배치됨(`/tmp/qa_1440.png`로 확인, 산출물은 임시 검증용이라 audit-assets에는 보관하지 않음).
- 키보드 네비게이션: slides.js를 그대로 재사용했으므로 Arrow/Space/PageUp·Down/Home/End/Esc/+/- 전부 원본과 동일하게 동작(코드 변경 없음 — 재사용 자체가 검증).
- `undefined`/`null` 노출: 모든 프로토타입에서 실제 AX_Lecture 콘텐츠만 사용했고 Codyssey Lecture에서 발견했던 것과 같은 필드 누락이 없어 노출 없음(스크린샷 육안 확인).
- 콘솔 치명적 오류: Baseline에서 1건 발견·수정(위 기록), Exp1/Exp2/Exp3 모두 최종 상태에서 `--enable-logging=stderr`로 캡처한 콘솔 로그에 `Uncaught`/`CONSOLE...error` 없음을 확인.
- 원본 저장소 변경 없음: Sprint 시작·종료 시 `git status`로 3회 이상 재확인, 전부 clean.
