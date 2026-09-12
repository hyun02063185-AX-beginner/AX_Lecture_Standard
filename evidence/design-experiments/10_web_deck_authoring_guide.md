# 10. Web Deck Authoring Guide

> Status: Superseded Draft — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/05_web_deck_authoring_guide.md](../../docs/05_web_deck_authoring_guide.md). §9 (undefined checklist) and §3 (slide-type mixing rule) are flagged as MISSING-VALUABLE in [references/canonical_gap_review.md](../../references/canonical_gap_review.md).

**AX Lecture System Standardization — Sprint 3**
목적: 콘텐츠 작성자가 AX Lecture Experience의 공간 메타포(Room/Box)를 Web Deck 데이터에 실수로 넣지 않도록 한다. `09_web_deck_content_contract_v0.1.md`의 데이터 계약을 실제로 채우는 사람을 위한 문서다.

---

## 1. Web Deck 콘텐츠 구조

```
Deck
 └─ Sections (콘텐츠 조직 단위 — 화면을 강제하지 않음)
     └─ Slides (7종 타입, §3 참고)
```

`Section`은 "한 화면"이 아니라 "한 묶음"이다. Fan으로 보일 수도, 곧장 슬라이드로 이어질 수도 있다 — 그 결정은 콘텐츠가 아니라 `presentation` 설정이 한다(엔진 담당). 작성자는 Section을 **몇 개의 슬라이드로 하나의 주제를 완결하는 단위**로만 생각하면 된다.

## 2. Section 작성 원칙

- 모든 Section은 `cover` 타입으로 시작해 `closing` 타입으로 끝내는 것을 권장한다 — 별도의 "Section 전환 화면"을 만들지 않아도 이 두 타입이 그 역할을 자동으로 한다(Sprint 2 Exp2에서 실측).
- Section 하나에 슬라이드 5~8장이 적당하다(이번 Sprint fixture 기준 실측치 — 확정 수치는 아님, §19).
- Section의 `title`은 발표 순서와 무관하게 그 자체로 의미가 통해야 한다 — "다음 주제"가 아니라 "AI를 대하는 태도"처럼 완결된 제목으로 쓴다.

## 3. Slide 작성 원칙

- 슬라이드 타입을 섞어라. `bullets`만 5장 연속으로 쓰지 말고 `big`/`quote`로 쉼표를 넣는다(Sprint 1 Design DNA Top 10의 "Visual Rhythm" 원칙 — 이번 Sprint의 fixture들도 이 리듬을 그대로 따랐다).
- `image` 타입은 `caption`을 함께 쓴다 — 다이어그램이 스스로 설명하지 못하는 맥락을 캡션이 채운다.
- `split`의 `left`/`right`는 첫 번째 항목이 소제목으로 자동 분리된다 — `left: ["막연", "항목1", "항목2"]`처럼 첫 항목을 짧은 라벨로 쓴다.

## 4. Box/Room 언어 제거

**금지 — 구조 개념으로 쓰지 않는다** (콘텐츠 자체가 의도적으로 그런 비유를 쓰는 경우는 예외):

```
상자 / 상자를 열어보세요 / 방으로 돌아가기 / 다음 방
책상으로 이동 / 진단실 / 잠금 해제 / 레벨 / Lv1 · Wanderer
```

**권장 — 중립 표현으로 바꾼다**:

```
Section / Chapter / Part / 주제 / 다음 내용 / 이어서 보기 / 핵심 정리
```

단, 화면에 반드시 영어 "Section"을 노출할 필요는 없다 — 이는 데이터 구조 개념이지 UI 카피 규칙이 아니다. 예를 들어 화면에는 "1부", "첫 번째 이야기" 등 Deck의 톤에 맞는 표현을 자유롭게 써도 된다.

**실제로 발견한 반례**: Sprint 2의 Linear Deck 프로토타입은 AX_Lecture의 실제 `kicker` 텍스트("상자 1 · 왜 · 01")를 그대로 재사용했다가 Room 없는 화면에 "상자"라는 단어가 그대로 노출됐다(`docs/07_engine_boundary_experiment.md` Experiment 2 기록). 이번 Sprint의 fixture들은 kicker를 `"Section 1"`처럼 새로 썼다 — 이 가이드가 그 교훈을 반영한 결과다.

## 5. Slide Type별 필수 데이터

`09_web_deck_content_contract_v0.1.md` §3 표를 그대로 따른다. 요약:

| type | 반드시 채울 것 |
|---|---|
| `cover` | `title` |
| `big` | `word`(핵심 키워드 1개) |
| `bullets` | `title` + `items` 최소 1개 |
| `quote` | `text` |
| `split` | `title` + `left`/`right` 각각 최소 1개 항목 |
| `image` | `src`(경로가 틀려도 화면이 깨지지 않고 자동 대체 문구가 뜬다 — 그래도 정확한 경로를 쓸 것) |
| `closing` | `title` |

## 6. Link 사용 규칙

```javascript
link: { url, label }
```

- 슬라이드 어떤 타입에도 붙일 수 있다(7종 전부 지원).
- `label`을 생략하면 `url`이 그대로 버튼 텍스트가 된다 — 가급적 `label`을 써서 사용자가 클릭 전에 무엇인지 알게 한다("PDF로 열기"처럼).
- 새 탭으로 열리므로(`target="_blank"`), Deck 안에서 참고 자료·외부 문서·확장 다이어그램을 연결할 때 쓴다. Deck 내부 이동(다른 Section으로 점프 등)에는 쓰지 않는다 — 그 용도는 Section 네비게이션(Fan 또는 순차 이동)의 몫이다.

## 7. 이미지 사용 규칙

- `src`는 프로젝트의 `assets/` 상대 경로로 쓴다.
- `caption`은 선택이지만, 다이어그램(`diagram: true`)일 때는 강력히 권장한다 — 그림만으로 전달되지 않는 "무엇을 보라는 것인지"를 짧게 짚어준다.
- 이미지가 로드되지 않으면 엔진이 자동으로 안내 문구를 보여준다(별도 alt 텍스트 설계 불필요) — 단 `title`이나 `caption` 중 하나는 채워서 `alt` 속성이 비지 않게 한다.

## 8. Closing 작성 규칙

- `title`은 필수 — 이 Section에서 기억해야 할 한 줄.
- `teaser`는 선택이지만, Section이 이어지는 Deck이라면 다음 내용을 한 문장으로 예고하는 것을 권장한다(단, "다음 방으로"처럼 공간 비유를 쓰지 말 것 — §4).
- Deck의 마지막 Section의 `closing`은 사실상 Outro 역할을 한다 — 별도의 Outro 화면을 새로 만들 필요가 없다(Sprint 2/3 모두 이 방식으로 검증됨). 화려한 완주 연출 없이도 `closing` 타입 자체가 "마무리"라는 인상을 준다(`docs/07` Experiment 4).

## 9. undefined 방지 체크리스트

Codyssey Lecture에서 실제로 발생했던 사고(카드에 문자 그대로 "undefined"가 노출된 사례, `docs/01_source_inventory.md`)를 반영한 최종 점검 목록이다. Deck을 배포하기 전에 다음을 확인한다.

```
[ ] title 존재 (Deck.meta, 모든 Section, cover/bullets/split/closing 슬라이드)
[ ] body 또는 핵심 메시지 존재 (big.word, quote.text, bullets.items 최소 1개)
[ ] image가 있으면 caption 또는 title 중 하나는 채움(대체 텍스트 공백 방지)
[ ] link가 있으면 url은 반드시, label은 권장으로 채움
[ ] split이면 left/right 양쪽 다 값이 있음(한쪽만 채우지 않음)
[ ] closing이면 title은 필수, teaser는 있으면 좋지만 없어도 화면이 깨지지 않음(확인됨)
[ ] Section 카드에 노출되는 tagline도 비워두지 말 것(Fan을 쓸 계획이 있다면) —
    비워도 크래시는 안 나지만(엔진이 escape 처리) 카드가 휑해 보임
[ ] 브라우저에서 실제로 열어 "undefined"/"null"/"[object Object]" 텍스트가
    어디에도 없는지 육안으로 1회 확인
```

이 체크리스트를 통과했는지는 `validateDeck()`(§09-8)이 콘솔 경고로 1차 확인해주지만, 최종 책임은 콘텐츠 작성자에게 있다 — 엔진은 "깨지지 않게" 만들 뿐, "완성도"까지 보장하지 않는다.

---

## 10. Opening → Closing Callback (Sprint 5 보강)

**핵심 원칙**: Opening에서 던진 재료 중 하나를 Closing에서 반드시 회수 가능한 상태로 기록한다.

Sprint 2에서 확인된 사실(Gamification 완료 연출을 없애면 "끝났다는 체감"이 약해짐, `docs/07` Experiment 4)에 대한 콘텐츠 저작 차원의 답이다. 화려한 연출 없이도 Callback 하나로 "이 Deck이 완결됐다"는 인상을 줄 수 있음을 Sprint 4에서 실측했다(`docs/13_web_deck_completion_signal.md` Variant B/C).

### Opening 재료로 쓸 수 있는 것

```
질문
문장 / Quote
문제 상황
이미지
Metaphor
짧은 Story
```

### 작성 구조

```
Opening
"AI에게 일을 맡겨도 판단까지 맡기면 안 됩니다."

Middle
개념 / 사례 / 위험 / 대응

Closing
"결국 AI가 대신해야 하는 것은 실행이지,
판단까지는 아닙니다."
```

Closing에서는 새 메시지를 갑자기 추가하기보다, **시작에서 던진 것을 다시 가져와 의미를 완성한다.** Opening과 Closing이 서로 연결되어야 한다 — 연결되지 않으면 Closing은 그냥 "마지막 슬라이드"일 뿐, 완결감을 만들지 못한다(Variant A와 B/C의 관찰 차이, `docs/13` §3).

**엔진은 이 회수를 자동으로 해주지 않는다.** Opening에서 어떤 문장을 던졌는지는 작성자가 기억하고 있어야 하며, Closing의 `teaser` 필드에 그 문장을 다시 써 넣는 것은 전적으로 저작 단계의 책임이다(`docs/13` §3 Variant B 관찰과 동일).

**체크**: Deck을 다 쓴 뒤 Opening 슬라이드와 Closing 슬라이드를 나란히 놓고 읽어본다 — 같은 대화의 시작과 끝처럼 들리는지 확인한다.

## 11. Timing Planning (Sprint 5 보강)

**Slide 수 ≠ 강의 시간이다.** Sprint 4에서 확인된 문제다(`docs/12_web_deck_time_profiles_v0.1.md`) — Slide 개수만으로는 실제 발표에 걸리는 시간을 가늠할 수 없다. 특히 Demo·Practice가 섞인 Deck은 Slide 하나가 몇 분을 차지하는지 천차만별이다.

### 구분해야 할 시간 종류

```
Lecture Time      — 슬라이드를 넘기며 설명하는 시간
Demo Time         — 발표자가 직접 시연하는 시간
Interaction Time  — 청중과 묻고 답하는 시간
Practice Time     — 참가자가 직접 손을 움직이는 시간
Break / Transition Time — 쉬는 시간, Section 사이 전환
```

Demo와 Practice를 슬라이드 문구 자체에서 구분해서 쓴다 — "실습 데모"(발표자 주도)와 "짧은 실습"(참가자 주도)처럼 명확히 다른 표현을 쓴다(`docs/12` §Demo/Practice 실측 사례).

### 120분처럼 긴 Deck을 만들 때

Slide만 늘려서 시간을 채우지 않는다. 예를 들어 "120분 = Slide 60장"으로 접근하지 않는다. 가능하면:

```
lecture
+
demo
+
interaction
+
practice
```

구조를 권장한다(`docs/12` §16 원칙과 동일).

### 관리 방법 (Engine metadata 아님 — 저작 단계 관행)

현재 Deck 계약(`docs/09`)에는 `estimatedMinutes` 같은 시간 메타데이터가 없다 — 이번 v0.1에서는 Engine Contract에 바로 추가하지 않고, **Authoring/Planning 관행으로만** 정의한다. Section을 준비할 때 아래처럼 시간을 따로 메모해두는 것을 권장한다(Deck 데이터 파일 안이 아니라 기획 문서·발표자 노트 수준에서):

```
Section 1
- 설명 8분
- Demo 5분
- 질문 2분
```

실제 반복 사용 후 이 패턴이 자주 쓰인다면, Engine metadata(`estimatedMinutes` 필드 등)로 승격할지는 §21 Standard Change Policy(`docs/14`)를 거쳐 판단한다 — 한 강의에서 필요했다고 바로 계약에 추가하지 않는다.
