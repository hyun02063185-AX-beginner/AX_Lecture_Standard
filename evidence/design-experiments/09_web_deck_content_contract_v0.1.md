# 09. Web Deck Content Contract v0.1

> Status: Superseded Draft — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/04_web_deck_content_contract.md](../../docs/04_web_deck_content_contract.md). Note: the current contract deliberately keeps the slide `type` list open rather than fixing this draft's 7-type enum — see [references/canonical_gap_review.md](../../references/canonical_gap_review.md).

**AX Lecture System Standardization — Sprint 3**
이 문서는 최종 계약이 아니라 v0.1 초안이다. `prototypes/web-deck-contract/`에서 실제로 동작을 검증한 구조만 기록한다. 함수/필드 이름은 예시이며 다음 Sprint에서 바뀔 수 있다.

---

## 0. 설계 원칙

- Deck은 `Box`/`Room`을 모르는 중립 구조다. `Section`은 화면을 강제하는 개념이 아니라 **콘텐츠 조직 단위**다(§8 원칙 그대로 구현).
- Card Fan을 켜고 끄는 조건문을 엔진 안에 두지 않는다 — `presentation.sectionNavigator` 값을 그대로 따를 뿐이다(`prototypes/web-deck-contract/js/deck-main.js`, `js/fan.js` 실측).
- 새 validation 라이브러리·CMS schema·plugin system을 추가하지 않았다. `js/deck-api.js` 하나(약 70줄)로 accessor 5개 + validation 1개를 구현했다.

## 1. Deck

```javascript
DECK = {
  meta: { id, title, subtitle, kicker },
  presentation: { sectionNavigator, resume },
  sections: [ /* §2 */ ]
}
```

| 필드 | required/optional | default | engine responsibility | content responsibility |
|---|---|---|---|---|
| `meta.id` | required | — | Resume localStorage 키 네임스페이스로 사용 | Deck마다 고유해야 함 |
| `meta.title` | required | — | `<title>`·Start 화면·Fan 제목에 노출 | 화면에 그대로 보이므로 완성된 문장으로 작성 |
| `meta.subtitle` | optional | `""` | Start 화면 부제로 노출(없으면 빈 줄) | — |
| `meta.kicker` | optional | `"WEB DECK · {N} Sections"` | `{N}`을 실제 Section 수로 치환 | 필요 시 문구만 교체 |
| `presentation.sectionNavigator` | optional | `"none"` | `"fan"`이면 Fan 씬을 연결, 그 외에는 Start→첫 Section 직행 | Deck 길이·발표 상황에 맞춰 선택(§11) |
| `presentation.resume` | optional | `false` | `true`일 때만 localStorage 기반 `App.Resume` 생성 | 자습형·장시간 콘텐츠에 `true` 권장 |
| `sections` | required | — | 배열이 비면 Deck 자체가 빈 화면(방어 코드 없음 — 저작 단계 책임) | 최소 1개 이상 |

## 2. Section

```javascript
{ id, title, tagline, accent, slides: [] }
```

| 필드 | required/optional | default | engine responsibility | content responsibility |
|---|---|---|---|---|
| `id` | required | — | 라우팅(`#/deck/{index}`)과 Resume 키로 사용. 문자열 권장 | Deck 내에서 고유해야 함 |
| `title` | required | — | 슬라이드 상단 라벨("Section i/N · title"), Fan 카드 제목 | — |
| `tagline` | optional | `""`(빈 문자열로 안전 처리) | Fan 카드에만 노출, `sectionNavigator:"none"`이면 아예 안 씀 | Fan을 쓸 계획이 있으면 한 줄 요약 권장 |
| `accent` | optional | `0` | CSS `data-slide-box` 값으로 넘겨 스킨 강조색 매핑 | 0-3 범위(스킨이 정의한 팔레트 수만큼) |
| `slides` | required | — | 비어있으면 Section 진입 시 빈 화면(경고만 남음, §13-14) | 최소 1개 이상 |

**Section은 화면을 강제하지 않는다.** `id`/`title`/`slides`만 있으면 되고, 이 Section이 Fan 카드로 보일지 곧장 슬라이드로 진입할지는 전적으로 `Deck.presentation`이 결정한다 — Section 데이터 자체에는 표현 방식에 대한 정보가 전혀 없다(`prototypes/web-deck-contract/js/fixture-b-nofan.js`와 `fixture-b-fan.js`가 정확히 같은 `sections` 배열을 공유하면서 presentation만 다른 것으로 실측).

## 3. Slide

7종 타입을 그대로 재사용했다(§11 이유). 각 타입의 required 필드는 `js/deck-api.js`의 `SLIDE_REQUIRED` 테이블과 정확히 일치한다.

| type | required | optional | engine responsibility |
|---|---|---|---|
| `cover` | `title` | `kicker`, `subtitle`, `link` | watermark 숫자는 Section의 Deck 내 순번(1-base)을 엔진이 계산 — content는 신경 쓰지 않아도 됨 |
| `big` | `word` | `sub`, `link` | — |
| `bullets` | `title`, `items`(1개 이상) | `subtitle`, `link` | 항목별 stagger 애니메이션은 엔진이 담당 |
| `quote` | `text` | `by`, `link` | — |
| `split` | `title`, `left`, `right` | `link` | `left[0]`/`right[0]`을 소제목으로, 나머지를 목록으로 자동 분리 |
| `image` | `src` | `title`, `caption`, `diagram`, `link` | 로드 실패 시 자동 fallback 문구(`onerror`) — content가 대체 텍스트를 따로 안 써도 됨 |
| `closing` | `title` | `teaser`, `link` | — |

**중립 어휘 대응표 (문서 전용, 코드는 변경하지 않음):**

| 이번 Sprint 지시서의 권장 어휘 | 실제 사용한 type | 비고 |
|---|---|---|
| TITLE | `cover` | Deck 전체 시작 슬라이드로도, Section 시작 슬라이드로도 동일하게 씀 |
| SECTION / COVER | `cover` | Section 진입 시 자동으로 이 타입이 1번 슬라이드가 되는 관행(강제 아님) |
| KEY_MESSAGE | `big` | 대형 키워드 1개 |
| CONCEPT | `bullets` | 설명형 목록 |
| COMPARE | `split` | 좌우 비교 |
| CASE | `bullets` | 별도 타입을 새로 안 만들고 bullets 재사용(사례도 결국 항목 나열) |
| IMAGE / DIAGRAM | `image` | — |
| SUMMARY / CLOSING | `closing` | — |

기존 7종 렌더러가 3개 원본 프로젝트(Sprint 1)에서 이미 검증된 코드이므로, 이번 Sprint에서 문자열만 새로 짓지 않고 **의미 대응표로만 신어휘를 제공**했다(§11 "타입이 달라도 같은 Contract로 렌더링되는가"라는 질문에는 이미 예로 답이 나 있었음 — 타입 7종 모두 동일한 Section/Slide 구조 위에서 렌더된다).

## 4. Presentation Options

```javascript
presentation: { sectionNavigator: "none" | "fan", resume: true | false }
```

| 값 | engine responsibility | content responsibility |
|---|---|---|
| `sectionNavigator: "none"` | Start 버튼 → 첫 Section으로 직행. `slide-exit` 버튼은 Start로 복귀 | 30~60분 Deck에 권장(§11) |
| `sectionNavigator: "fan"` | Start 버튼 → Fan 씬(모든 Section을 카드로 표시) → 클릭한 Section으로 진입. `slide-exit`은 Fan으로 복귀 | 90분 이상·Section이 많은 Deck에 권장(§11) |
| `resume: true` | `App.Resume`(localStorage, `meta.id` 네임스페이스)을 생성 | 자습형·재방문 가능한 콘텐츠에 권장 |
| `resume: false`/미지정 | `App.Resume`을 아예 만들지 않음 — slides.js는 `if (activeSection && App.Resume)`로만 접근하므로 크래시 없이 정상 동작(실측) | 1회성 발표 Deck에 권장 |

**엔진은 Section 개수나 발표 시간을 추측하지 않는다.** `js/fan.js`·`js/deck-main.js` 어디에도 `if (sections.length >= N)` 같은 코드가 없다 — 이것이 이번 Sprint에서 가장 명시적으로 지켜야 했던 원칙이다(§9).

## 5. Progress

별도 필드 없음 — `presentation`과 무관하게 항상 켜져 있다. 현재 세션 한정(새로고침 시 초기화, in-memory `Set`)이며 슬라이드 카운터("N/M")·진행률 바·Fan 카드의 "✓ 완료" 표시로 나타난다. Deck/Section/Slide 어느 레벨에도 설정 필드가 없다 — **Progress는 옵션이 아니라 계약의 기본값**이라는 뜻이다.

## 6. Resume

§4 참조. `App.Resume`이 존재할 때만 `openSection()`이 위치를 저장·복원한다. 코드가 이미 optional-safe하게 짜여 있어 계약에 필드 하나(`presentation.resume`)만 추가하면 됐다.

## 7. Link

```javascript
slide.link = { url, label }
```

Codyssey Lecture(`js/slides.js:94-97`)의 기존 계약을 그대로 가져왔다 — 새로 발명하지 않았다(§12).

| 필드 | required/optional | engine responsibility |
|---|---|---|
| `link` | optional(슬라이드 객체 전체 기준) | 없으면 아무것도 렌더하지 않음(`if (!s.link \|\| !s.link.url) return "";`) |
| `link.url` | link가 있으면 required | href로 사용, `target="_blank" rel="noopener"` 고정 |
| `link.label` | optional | 없으면 `url` 자체를 라벨로 표시(빈 버튼 방지) |

7종 슬라이드 타입 전부에서 공통으로 동작하도록 이식했고(`renderLink(s)`를 모든 case에서 호출), Fixture A/B 각 1곳씩 실제 렌더링을 확인했다(`audit-assets/sprint3/standard-linear/link-slide.png`, `.../long-fan/link-slide.png`).

## 8. Validation

`js/deck-api.js`의 `validateDeck(DECK)` 하나로 구현했다(약 25줄). Deck 로드 시 1회 호출되며, 위 §1-3 표의 required 필드가 비어 있으면 `console.warn`만 남기고 렌더링은 절대 막지 않는다. Node로 격리 실행해 정상 케이스(경고 0건)와 의도적 결함 케이스(누락 필드 3건 정확히 검출) 둘 다 확인했다.

**원칙**: optional 필드가 없으면 조용히 렌더링하지 않는다(예: `subtitle` 없으면 그 줄 자체가 안 나옴). required 필드가 없으면 화면에 `undefined`/`null`/`[object Object]`를 노출하는 대신, 렌더러의 기존 삼항 가드(`s.field ? ... : ""`)와 `esc()` 함수(null/undefined를 빈 문자열로 변환)가 이미 2중으로 방어한다. `validateDeck`은 이 안전망 위에 "개발자가 놓친 걸 콘솔에서 바로 알 수 있게"만 해주는 얇은 경고 레이어다.
