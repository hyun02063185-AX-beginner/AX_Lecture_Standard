# 17. AI Attitude Golden Slice Comparison

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`. This is the original Direction A vs Direction B comparative analysis; the `AI_Attitude` repository now keeps only the condensed final decision at `AI_Attitude/docs/17_ai_attitude_golden_slice_comparison.md`, without the comparison table or defect list preserved here.
> Screenshots: [visuals/](visuals/) (copied from `audit-assets/sprint6/{legacy,direction-a,direction-b}/`).

**AX Lecture System Standardization — Sprint 6**
대상: `/Users/hyun020631854123/AI_Attitude`(현재 repository, 재구축됨) — `index.html`+`css/style.css`(Direction A, 실제 구현 파일) vs `direction-b.html`+`css/style-direction-b.css`(Direction B, 비교용 병행 파일). 두 Direction 모두 **같은 엔진(`js/deck-api.js`·`js/slides.js`·`js/deck-main.js`)과 같은 콘텐츠(`js/data.js`)를 공유**한다 — 콘텐츠·정보량·순서·Navigation·60분 Profile·Engine 기능은 완전히 동일하며 CSS만 다르다(작업 지시 §15 원칙 실측 충족).

Screenshot: `audit-assets/sprint6/{legacy,direction-a,direction-b}/`(1440×900 통일).

---

## A/B 비교

| 평가 | Direction A(AX DNA Direct) | Direction B(AI Attitude Native) |
|---|---|---|
| **AX DNA 보존** | 강함. 6개 CORE(타이포/레이어드/절제/인과모션/리듬/무결성) 전부 재현 — soft mask-fade 이미지 경계, glow-pill 버튼, painterly ambient가 AX_Lecture 계열과 가장 가까운 문법이다. | 강함, 단 표현이 다르다. 같은 6개 CORE를 코너 브래킷·좌표 그리드·모노스페이스 라벨로 재해석했다 — "soft geometry"를 원형/pill이 아니라 절제된 waypoint 마커로 구현해 DNA 원칙(과도한 각짐 회피, 선택적 curve)은 지키면서도 형태는 다르다. |
| **AI Attitude 적합성** | 좋음. 따뜻한 amber는 legacy부터 콘텐츠와 잘 맞던 색이었고(`docs/15`), "조용한 전시"라는 원래 톤을 그대로 승계한다. | 매우 좋음. "판단 · 검증 · 기록"이라는 콘텐츠의 실제 행위(기준을 세운다, 확인한다, 남긴다)를 좌표/체크마크 모티프로 직접 표현한다 — 콘텐츠에서 시각 언어를 도출하라는 지시(§16)에 더 밀착. |
| **가독성** | 매우 좋음. 세리프 타이틀+넉넉한 자간이 "읽는 텍스트"로서 편안하다. `word-break: keep-all` 적용 후 줄바꿈 문제 없음(실측, 아래 §발견한 결함 참고). | 매우 좋음. 지오메트릭 산세리프가 짧은 문장 위주인 이 콘텐츠(message/takeaway가 대부분 한 줄)에 더 또렷하게 맞는다. |
| **시각적 집중** | 강함. glow가 핵심 버튼·타이틀에만 절제되어 쓰여 시선이 자연히 모인다. | 강함. 그리드 배경이 낮은 대비로 억제돼 있어 콘텐츠보다 앞서지 않는다. 코너 브래킷이 이미지·teaser의 "지금 보고 있는 지점"을 은근히 강조한다. |
| **강의 흐름** | 좋음. cover→image×6→bullets recap의 리듬이 명확하고 따뜻한 톤이 12개 레슨을 하나의 연속된 이야기로 묶는다. | 좋음. 같은 리듬 구조지만 모노스페이스 카운터·라벨이 "진행 좌표"처럼 읽혀 60분간 위치 감각을 준다 — 발표 도구로서는 약간 더 유리할 수 있음. |
| **발표자 사용성** | 좋음. topbar/nav가 낮은 무게로 떠 있어 발표 중 시선을 가리지 않는다(§6 공통 확인). | 좋음. 동일 구조. 모노스페이스 카운터가 "몇 번째/전체"를 더 빠르게 스캔하게 해줄 수 있다. |
| **확장 가능성** | 좋음. 5개 accent 색만 있으면 다른 강의에도 바로 이식 가능 — AX_Lecture 계열과 가장 가까운 만큼 향후 다른 Web Deck과의 Skin 재사용성이 높다. | 좋음, 단 "waypoint/좌표" 모티프가 이 콘텐츠(판단·검증)에 특히 맞아떨어지는 것이라 다른 주제 강의에 그대로 이식하면 어색할 수 있다 — 범용 Skin이라기보다 이 콘텐츠 전용 해석에 가깝다. |

## 기존 자체 감사(`docs/angular-ui-audit.md`)와의 대조

기존 감사가 지적한 5개 핵심 결함이 두 Direction 모두에서 해소됐는지 확인했다(legacy 스크린샷 대비):

| 기존 감사 결함 | Legacy | Direction A | Direction B |
|---|---|---|---|
| scene/stage 경험 → 문서형 view | 확인됨(`02-room.png` grid 문서형) | 해소 — `.scene` opacity+scale 전환, fixed viewport | 해소 — 동일 |
| 절대배치 카드 덱 → flex 배열 | 해당 없음(Room/Box 자체 제거) | 해당 없음 | 해당 없음 |
| soft/glass 경계 → 직선 border | 확인됨(`border-radius:0`) | 해소 — mask-fade 이미지, pill 버튼, `--radius:22px` | 해소 — corner bracket(선택적 geometry), `--radius:10px`(A보다 작지만 0은 아님) |
| 배경 깊이 → 균일 panel | 확인됨(grain/ambient가 콘텐츠와 분리) | 해소 — ambient가 `data-slide-box`(Section)에 연동돼 색이 바뀜 | 해소 — 동일 연동 + 그리드가 초점 방향으로 mask됨 |
| HUD → app chrome | 확인됨(`.topbar { border-bottom }`) | 해소 — topbar가 gradient-fade, 자동 숨김(floating) | 해소 — 동일 |

**결론: 두 Direction 모두 기존 감사가 지적한 5개 결함을 해소했다.** 단, 기존 감사의 처방(§7 MUST RESTORE — Room/Box/Card Fan의 물리적 deck 복원)은 따르지 않았다 — Room/Box/Card Fan 자체를 없앤 상태에서 "그 아래 있던 Design DNA 원칙"만 재현했다. Card Fan의 overlap·회전·deal 물성은 이번 Deck 어디에도 없다(Canonical Standard상 EXPERIENCE ONLY, `docs/14` §9). 이것이 기존 감사와 이번 Sprint의 근본적인 접근 차이이며, 결과적으로 두 Direction 다 "Card Fan 없이도 각짐 문제가 해결될 수 있다"는 것을 실증했다 — 이는 Sprint 2(Room/Box 제거 실험)의 결론을 콘텐츠 레벨에서 재확인한 것이기도 하다.

## 발견한 결함과 수정

- **한국어 줄바꿈 결함**: `.s-cover-title`에 `word-break: keep-all`이 없어 "기준"이 "기/준"으로 어절 중간에 끊겼다(Direction A, `01-opening.png` 최초본). `body`에 전역 `word-break: keep-all; overflow-wrap: break-word;`를 추가하고 `max-width`를 16ch→22ch로 넓혀 해결, 재캡처로 확인.
- **`rotate-hint` 노출 결함**: `hidden` HTML 속성이 커스텀 `.rotate-hint { display:flex }` 규칙에 밀려 데스크톱 화면에도 항상 노출됐다. `.rotate-hint[hidden]{display:none}`을 추가해 해결.
- 두 결함 모두 Direction A/B 공통 코드(전역 reset)에서 함께 발견·수정했다.

## CC 추천과 이유

**추천은 하되 최종 선택은 하지 않는다(작업 지시 §24).**

굳이 하나를 추천해야 한다면 **Direction A**를 시작점으로 제안한다 — 이유는 우열이 아니라 위험도: (1) legacy부터 이어진 amber 색 정체성을 그대로 승계해 "AI를 대하는 태도"라는 기존 브랜드 인상과의 연속성이 가장 크다, (2) AX_Lecture 계열과 시각적으로 가장 가까워 향후 다른 Web Deck과 Skin을 공유하기 쉽다. 그러나 Direction B는 "콘텐츠에서 새로 도출한 시각 언어"라는 §16 원칙에 더 정확히 부합하고, 실제로 완성도가 A에 못지않다 — **콘텐츠 성격을 더 직접 드러내고 싶다면 B가 정당한 선택**이다. 두 방향 다 프로덕션에 올려도 무방한 완성도라고 판단하지만, 이 판단은 사용자·Sol 승인 전까지 잠정적이다.

## 사용자에게 직접 선택받아야 할 항목

1. Direction A / B / 혼합(예: A의 색+B의 브래킷 모티프) 중 최종 방향
2. 선택된 Direction을 `index.html`/`css/style.css`(라이브 파일)로 확정할지, 추가 다듬기를 거칠지
3. Start 화면 카피("시작하기" 버튼 라벨, note 문구)의 최종 톤
4. 12개 레슨 각각의 `description`(설명 문단)을 정말 화면에서 완전히 제외할지, 아니면 일부라도 보조 텍스트로 노출할지(현재는 "발표자 구두 설명" 자료로만 분류함, `docs/16`)
5. Section 회고(recap) 슬라이드의 제목 문구("여기까지, 여섯 가지") 톤 확정
