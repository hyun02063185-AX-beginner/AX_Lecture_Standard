# 15. AI Attitude Content Source Inventory

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`. No equivalent document exists elsewhere (not in the current `AI_Attitude` repository either) — this is the only record of how the legacy AI_Attitude content (pre Web Deck 60 rebuild) mapped onto the new Deck/Section/Slide structure.
> Related: [11_application_registry.md](../../docs/11_application_registry.md)

**AX Lecture System Standardization — Sprint 6**
대상: `/Users/hyun020631854123/AI_Attitude` (HEAD `7d272df`, branch `main`, clean). 백업: `/Users/hyun020631854123/AI_Attitude_legacy_20260911`(byte-identical 검증 완료, `.git` 포함).

이 문서는 실제 repository를 읽고 작성했다 — 파일명·구조를 미리 추측하지 않았다.

---

## 실제 Source 파일 지도

| 파일 | 역할 |
|---|---|
| `js/data.js` (38줄) | **콘텐츠 정본**. `EXHIBITION.boxes[4].lessons[3개씩]` — 12개 레슨의 title/question/message/description/takeaway/visual 전체 |
| `js/slides.js` (44줄) | 렌더러 + **imageAlt 딕셔너리**(12개 레슨 대체텍스트, 실질적 콘텐츠) |
| `js/site-config.js` (7줄) | `storageKey`, `imagePathPattern`, `imageAspectRatio` |
| `index.html` | Start 화면 카피(eyebrow/title/lead/button/note) — Opening 재료 후보 |
| `assets/lessons/lesson-01~12.webp` | 12개 포토리얼리스틱 16:9 이미지(실사용 가능한 고품질 asset) |
| `docs/design-dna-report.md`, `docs/angular-ui-audit.md` | 기존 세션이 작성한 자체 Drift 진단(§Drift Comparison에 직접 활용) |

## Content Mapping 표

| 항목 | 실제 Source 파일 | 내용 | 새 Deck 재사용 여부 |
|---|---|---|---|
| Opening | `index.html:18-25` (Start view) | eyebrow "A QUIET EXHIBITION · 12 CARDS", title "AI를 대하는 태도", lead "AI에게 일을 맡기기 전에, 우리가 먼저 가져야 할 기준을 네 개의 방에서 천천히 살펴봅니다.", button "관점의 방으로 들어가기", note "12개의 카드 · 이어보기 지원" | **재사용, 단 카피 일부 조정 필요**(§Canonical Content Source 참고 — "네 개의 방"·"이어보기 지원" 문구는 새 구조/Profile과 불일치) |
| Section/Theme | `js/data.js:5,17,26,35` | 4개 box: 운전석(주도권과 이해)/기준을 세우는 책상(목적·흐름·완료 기준)/손으로 확인하는 실험대(검증과 원인 찾기)/내 것으로 만드는 기록실(이해·재질문·기록·검토) | 재사용(§Content Map에서 60분 Profile에 맞게 4→2 Section으로 재편) |
| 핵심 메시지 | `js/data.js` 각 lesson의 `message` 필드(12개) | 예: "AI는 손을 돕고, 방향은 내가 정한다." | 전부 재사용 |
| 사례/설명 | `js/data.js` 각 lesson의 `description` 필드(12개) | 실무 상황 설명 문단 | 전부 재사용(§Content Map에서 축약 여부 표시) |
| Quote | 없음(별도 quote 필드 없음) | `question` 필드가 사실상 훅 역할(예: "AI가 일을 해주면, 나는 무엇을 맡아야 할까?") | `question`을 quote/hook 재료로 재해석해 재사용 |
| 이미지 | `assets/lessons/lesson-01~12.webp` + `js/slides.js:3-16` imageAlt | 12장, 16:9, 완성도 높은 실사 스타일 일러스트 + 자연스러운 한국어 alt | 전부 재사용(파일명·alt 변경 없음) |
| Link | 없음 | 현재 콘텐츠에 `link` 필드/외부 참조 링크 없음 | 새 Closing에서 추가할지는 신중히 판단(§Content Map) — 없는 걸 억지로 만들지 않음 |
| Closing | **없음** | Lesson 12 이후 "관점의 방으로" 버튼으로 Room 복귀만 있을 뿐, 별도 마무리 화면·문구가 없음 | **신규 작성 필요** — 단 새 주장을 짓지 않고 Lesson 12의 기존 `message`("AI가 정리하고, 나는 실제와 맞는지 검토한다")와 `takeaway`("정리본에는 항상 실제와 대조하는 마지막 눈이 필요하다")를 그대로 Closing 재료로 사용(§Content Map) |

## Canonical Content Source

**정본 파일은 `js/data.js`의 `EXHIBITION.boxes` 하나다.** `js/slides.js`의 `imageAlt` 딕셔너리는 콘텐츠의 일부이지만 데이터가 아니라 렌더러 안에 하드코딩돼 있다 — 새 Deck 계약(`docs/09`)으로 옮길 때 `slide.image.alt` 같은 구조화된 필드로 정리할 필요가 있다(§Content Map에서 처리).

## UI-coupled Content

다음은 콘텐츠 자체가 아니라 기존 Room/Box UI 구조에 강하게 결합된 표현이다 — 새 Deck에는 그대로 가져가지 않는다:

- Start 화면의 "**네 개의 방**에서 천천히 살펴봅니다" — Room 메타포 문구. 새 구조는 Room이 없으므로 Canonical Authoring Guide §4(Box/Room 언어 제거)에 따라 중립화해야 한다.
- "**이어보기 지원**"(Start note) — 기존은 `localStorage`(`ai-attitude-seen-lessons`) 기반 진행 기록을 실제로 지원했지만, `docs/14` §10에 따라 Web Deck 60 기본 Profile은 `resume:false`다. 이 카피를 그대로 두면 실제 동작과 어긋난다(§Content Map에서 조정).
- "ROOM 01~04", "CARD 01~12", "0/3 본 카드", "0/12 본 카드" 같은 방/카드 개수 표시 — Room/Box 계층이 사라지면 그대로 쓸 수 없는 표현.
- `js/room.js`의 카드 부채꼴·룸 그리드 마크업 자체(§보존 대상 아님, §Content Map 이후 구조 교체 대상).

## Reusable Asset

새 Web Deck에서도 그대로 쓸 수 있는 것:

- 12개 레슨의 `title`/`question`/`message`/`description`/`takeaway` 전체 텍스트(가공 없이 재사용, 축약은 슬라이드 배치상 필요한 경우에만).
- 12개 이미지 파일(`lesson-01~12.webp`)과 alt 텍스트.
- Start 화면의 핵심 카피 정신("AI에게 일을 맡기기 전에, 우리가 먼저 가져야 할 기준을... 살펴봅니다") — Room 언어만 제거하고 재사용.
- `SITE_CONFIG.storageKey`/`imagePathPattern`/`imageAspectRatio` 값 자체(경로 패턴은 그대로 유효).

## Drift Comparison 근거 (기존 자체 진단 활용)

`docs/angular-ui-audit.md`·`docs/design-dna-report.md`(2026-09-08 작성, AI_Attitude 저장소 내 기존 문서)가 이미 정밀한 원인 분석을 담고 있다 — Sprint 1~5에서 독립적으로 도출한 AX Design DNA CORE(`docs/14` §6)와 결론이 거의 일치한다: Card Fan의 절대 배치·overlap·회전이 flex 배열로 평면화됨, `border-radius:0`의 직선 경계가 soft/glass 경계를 대체함, Room/Box가 grid 카드로 균일화됨, 배경 레이어가 콘텐츠 이벤트와 분리됨, motion이 인과성 없는 장식으로 축소됨.

**단, 이 기존 문서의 처방(§7 MUST RESTORE — Room/Box/Card Fan의 물리적 deck을 복원)은 이번 Sprint의 방향과 다르다.** 이번 Sprint는 Room/Box/Card Fan 자체를 복원하지 않는다(Canonical Standard `docs/14`상 EXPERIENCE ONLY) — 대신 그 문서가 정의한 **Design DNA 원칙 자체**(soft/layered boundary, spatial composition, causal motion, background as architecture, exhibit typography)를 Room/Box 없는 Deck→Section→Slide 구조 안에서 재현하는 것이 목표다. 이 차이는 `docs/17` 비교 문서에서 명시적으로 다룬다.
