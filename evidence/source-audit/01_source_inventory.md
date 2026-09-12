# 01. Source Inventory

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/00_canonical_index.md](../../docs/00_canonical_index.md) (see [references/canonical_gap_review.md](../../references/canonical_gap_review.md))

Sprint 1 — Standard Source Audit. 분석 전용 문서. 3개 프로젝트의 구조를 원자료 그대로 정리한다.

## 프로젝트 개요

| | AX Lecture | AI FirstStep | Codyssey Lecture |
|---|---|---|---|
| 실제 경로 (이 Mac) | `/Users/hyun020631854123/AX_Lecture` | `/Users/hyun020631854123/AI_First_Step` | `/Users/hyun020631854123/Codyssey_Lecture` |
| Git remote | github.com/hyun02063185-AX-beginner/AX_Lecture | .../AI_First_Step | .../Codyssey_Lecture |
| Branch | main | main | main |
| HEAD (분석 시점) | `37e5e6c` | `049a6fb` | `3d4a4a4` |
| Working tree | clean | clean | clean |
| 기술 스택 | Vanilla HTML/CSS/JS, 빌드 없음, Netlify Functions(서버) | 동일 | 동일 |
| 패키지 의존성 | 0 (package.json에 dependencies 없음, script는 `node --test`뿐) | 동일 | 동일 |
| 로컬 실행 진입점 | `python serve.py` (포트 8000) 또는 `netlify dev`, 또는 `index.html` 직접 열기 | `python serve.py` (포트 8001, 형제 저장소와 충돌 방지) 또는 `netlify dev` | `python serve.py`(포트 8000) 또는 `python -m http.server 8000` |
| 강의 규모 | Box 4 × Lecture 20 | Box 4 × Lecture 20 | Box 4 × Lecture 16 (3+5+4+4) |
| 콘텐츠 도메인 | AX 실무 입문(생성형AI/RAG/에이전트) | AI 첫걸음(동일 계열, 입문판) | 비전공자 기초공사(OS/컨테이너/커널) — 이질적 도메인 |

세 저장소 모두 다음 파일을 공통으로 가진다: `index.html`, `css/style.css`, `js/{site-config,data,room,slides,main,intro,telemetry,admin}.js`, `js/vendor/qrcode.js`, `netlify/functions/{track,codes,stats,brief}.js` + `_shared/aggregate.js`, `docs/{엔진_경계,UX_원칙,LMS_운영매뉴얼,서버_실행_가이드,에이전트_운영,운영자_치트시트,콘텐츠_현황,톤앤매너,URL전환_체크리스트}.md`, `docs/supabase_setup.sql`, `.claude/agents/{boundary-keeper,persona-reviewer,qa-runner,release-manager,tone-keeper}.md`, `order/*.md`(수십 개의 작업 지시서 아카이브), `tests/*.test.js`(Node 내장 테스트), `serve.py`, `netlify.toml`, `package.json`, `README.md`, `HANDOFF.md`, `curriculum.md`.

각 저장소는 `docs/엔진_경계.md`를 `.claude/agents/boundary-keeper.md` 서브에이전트가 관리하며 "공유 엔진 vs 사이트 고유 콘텐츠/설정"의 경계를 능동적으로 기록하고 있다. 이는 코드 자체만큼이나 근거자료로서 가치가 크다(§14의 Engine/Content 구분 질문에 직접 답한다).

---

## A. AX Lecture

### 디렉터리 구조 (주요 항목)
```
index.html                — 261줄, 모든 scene이 <section> 형제로 존재
css/style.css              — 1575줄
js/site-config.js(37) data.js(1293) room.js(177) slides.js(390)
   main.js(744) intro.js(438) practice.js(805) telemetry.js(320) admin.js(706)
   vendor/qrcode.js
assets/                    — 22개 SVG 다이어그램 + qr/
netlify/functions/         — track/codes/stats/brief + _shared/aggregate.js
docs/ (9개)                — 엔진_경계.md, UX_원칙.md 등
order/ (60개+)             — 작업 지시서/검증보고서 아카이브
tests/ (3개)                — aggregate/content-lint/functions-contract
.claude/agents/ (5개)
serve.py, netlify.toml, package.json, README.md, HANDOFF.md, curriculum.md
```

### 파일 역할 분류 (엔진_경계.md §1-§3 근거)
- **공유 엔진**: `js/slides.js`(렌더/네비/줌), `js/room.js`(박스+카드팬), `js/main.js`(씬 매니저/라우터/진행·레벨·스킨 상태), `js/telemetry.js`, `js/admin.js`, `netlify/functions/*`, `css/style.css`의 구조 셀렉터(값 블록 제외)
- **사이트 고유**: `js/site-config.js`(코스 정체성 단일 소스), `js/data.js`(전체 커리큘럼), `assets/*.svg`, `css/style.css`의 스킨 값 블록
- **경계 모호(혼합)**: `js/practice.js` — 정거장 탐색/시험 엔진 골격은 재사용 가능하나 `LIT_Q/NAT_Q/TAC_Q/AXES/STATIONS`(js/practice.js:43-58,399,619,629,638) 문항 텍스트는 AX 커리큘럼 전용. `SITE_CONFIG.practiceRoom=false`로 게이팅 가능하게 설계됨.

### localStorage/sessionStorage
`ax_room_progress_v1`(완료 lecture id Set, main.js:55) · `ax_room_resume_v1`(레슨별 마지막 슬라이드 인덱스, main.js:87) · `ax_room_level_v1`(재도전 레벨, main.js:99) · `axRoomSkin`(선택 스킨, main.js:117) · `ax_cheat_skin_unlock`/`ax_cheat_variant_personal`(히든커맨드 치트, main.js:25-26) · `ax_server_session`(서버 재시작 감지, 테스트 전용, main.js:717) · `ax_intro_theme`(인트로 테마, intro.js:22) · `axp_progress`/`axp_out`(연습실 완료/산출물, practice.js:14-15) · `ax_cheat_practice_unlock`(practice.js:16) · `ax_student_code`(telemetry.js:13) · (session) `ax_session_sent`(telemetry.js:56,78) · (session) `ax_admin_key`(admin.js:14).

### 접근성 신호
`aria-*` 33건, 전부 `index.html`(인트로 셀·유틸 FAB·모달) + `admin.js:308,317,332`(동적 role="dialog"). `focus-visible` 규칙은 단 2곳(`css/style.css:334,337` 인트로 셀, `:678` 카드 아웃라인). `prefers-reduced-motion` JS 체크 1건(intro.js:35)+CSS 3곳(css/style.css:361,615,934) — 단, warp 애니메이션·박스 리빌 스태거·카드 딜인 애니메이션에는 미적용. `tabindex`: `index.html:48`(인트로 포커스 타깃), `room.js:83`(카드 tabIndex=0)+Enter/Space 핸들러(room.js:118-123).

### 반응형 브레이크포인트
`max-width:720px`(설정 레이어→바텀시트) · `900px`(박스 4→2열, split 2→1열, 카드 축소) · `560px`(HUD 압축, 박스 1열) · `orientation:landscape and max-height:500px`(저높이 전용 압축 레이아웃) · `hover:hover`(회전 힌트 숨김) · `prefers-reduced-motion` ×3 · `print`.

### Assets
24개 — 22 SVG(한글 강번호식 `6강_생성형지형도.svg`와 영문 `diagram-*.svg` 두 명명규칙 혼재), QR PNG/SVG, 입장카드.html.

### 진입점
`package.json` "정적 사이트, 빌드 없음"; `serve.py`는 순수 Python `ThreadingTCPServer` 기반, 재시작마다 `server_session.txt` 토큰 기록. 스크립트 로드 순서(index.html): `site-config→data→room→slides→main→intro→practice→telemetry→vendor/qrcode→admin`.

---

## B. AI FirstStep

### 디렉터리 구조 (주요 항목)
```
index.html — 270줄
css/style.css — 1721줄
js/admin.js(708) data.js(2949) desk.js(305, 이 사이트 고유) intro.js(438)
   main.js(801) practice.js(805, 존재하나 index.html에 미포함=미로드)
   room.js(177) site-config.js(58) slides.js(390) telemetry.js(337) vendor/qrcode.js
assets/ — 31 SVG + png + html, 33개
netlify/functions/, netlify.toml(포트 8001/3998 — 형제 저장소와 충돌 회피)
tests/ (4개, layout-invariants.test.js 추가)
docs/ (10개) — 엔진_경계.md, UX_원칙.md, 페르소나_작성_가이드.md(고유 문서)
order/ (~50개), .claude/agents/ (5개)
serve.py, package.json, curriculum.md, HANDOFF.md, README.md
```

### 파일 역할 분류
AX Lecture와 동일한 3계층(공유 엔진 / 사이트 config / 콘텐츠)을 유지하되, **`js/desk.js`(연습 책상)가 이 사이트에만 존재하는 신규 기능**으로 추가되었다. `PRACTICE_MISSIONS`(data.js:2901, 20개 미션)와 `SITE_CONFIG.practiceDesk`(desk.js:299)에 결합되어 있어 `엔진_경계.md`는 이를 "본진(AX_Lecture)에 그대로 이식 불가"로 명시한다. 3존 구조: `stamps`(미션 스탬프판)·`build`(프롬프트 조립대)·`kit`(나의 시작 키트) — desk.js:51-55. `telemetry.js`에 `missionStamp()`/`kitUpdated()` 이벤트 2종이 이 기능을 위해 추가됨(desk.js:121,229,233,236).

### localStorage/sessionStorage
AX Lecture와 키 이름이 대부분 **동일**(`ax_room_progress_v1`, `ax_room_resume_v1`, `ax_room_level_v1`, `axRoomSkin`, `ax_student_code`, `ax_session_sent`, `ax_admin_key`, `ax_server_session`) — 엔진 공유의 강한 물증. 추가/차이: `ax_cheat_persona`(main.js:431,435, 페르소나 전환 치트), `desk_stamps`/`desk_kit`(desk.js:15-27, Desk 전용 상태).

### 접근성 신호
`aria-*` 36건(AX보다 근소하게 많음) — 스킨 피커에 `aria-pressed` 추가, 카드에 동적 `aria-label`(room.js:85, "N강 제목 — 강의실 입장"). `focus-visible` 3곳(인트로 셀 2곳 + 카드 1곳, AX와 동일 패턴). `prefers-reduced-motion` 3 CSS + 1 JS — AX와 동일 지점(인트로/셀러브레이트/카드·시작·가이드펄스).

### 반응형 브레이크포인트
AX와 동일한 값 세트(720/900/560px + landscape-low-height) + 연습실/관리자 패널용 추가 지점(1345,1419,1545,1712,1715) + `print`(관리자 명단 카드).

### Assets
33개 — 31 SVG(AX보다 9개 많음, `diagram-ai-journey.svg` 등 이 사이트 전용 다이어그램 포함), QR, 입장카드.html.

### 진입점
동일하게 빌드 없음. `serve.py` 포트 8001(형제 저장소 8000과 충돌 회피, `netlify.toml`도 8001/3998로 분리 — `엔진_경계.md`의 "서버 상시 무충돌 설정" 항목에 기록됨). 스크립트 로드 순서: `site-config→data→room→slides→main→intro→telemetry→desk→vendor/qrcode→admin` (desk.js가 telemetry 다음, admin 이전에 삽입).

### `js/practice.js` 상태
파일은 존재하지만 `index.html`에 `<script>` 태그가 없어 **로드되지 않는 죽은 코드**이며 `SITE_CONFIG.practiceRoom:false`(site-config.js:32)로도 이중 차단되어 있다. 이 사이트가 "입문 과정이라 진단실 없음"이라는 설계 판단이 코드 주석/설정으로 명시됨.

---

## C. Codyssey Lecture

### 디렉터리 구조 (주요 항목)
```
index.html — 4개 scene
css/style.css — 1229줄 (AX/AI First Step보다 짧음)
js/site-config.js(35) data.js(1555) room.js(177) slides.js(403)
   main.js(741) intro.js(438) telemetry.js(312) admin.js(706) vendor/qrcode.js
   (※ practice.js/desk.js 없음 — 아래 참조)
assets/ — 39개 항목: 15개 커널/컨테이너 다이어그램(00~14) + concept-map.pdf +
   21개 고아 파일(AX 템플릿에서 남은 미사용 AI 관련 SVG)
netlify/functions/, docs/(9개), order/(61개), tests/(3개), .claude/agents/(5개)
serve.py, netlify.toml, package.json, README.md, HANDOFF.md, curriculum.md
```

### 파일 역할 분류 및 특이사항
공유 엔진 파일(`room.js`/`slides.js`/`main.js`/`telemetry.js`/`admin.js`)은 다른 두 프로젝트와 구조적으로 동일("바이트 구조상 AX_Lecture 엔진 그대로"). 그러나 **콘텐츠 모델 필드가 조용히 누락**되었다: `js/data.js`의 box/lecture 객체에 `accent`/`theme`/`tagline`/`demo`/`slidesPersonal` 키가 전무(grep 0건)한데, 엔진 코드는 여전히 `box.accent`/`box.theme`(room.js:29,67)를 참조하고 **`room.js:92`는 `${lec.tagline}`을 null-가드 없이 렌더** — 실제로 16개 카드 전부에 문자열 "undefined"가 출력되는 버그가 확인됨. 커밋 `2978a88`("AX_Lecture 템플릿 잔재 정리")이 "선택 필드 미존재 시 undefined 출력 버그"를 고쳤다고 명시하나 `card__tag`는 누락됨.

### localStorage/sessionStorage
AX Lecture와 키 이름 동일(`ax_room_progress_v1` 등). 차이 없음 — 엔진 레이어가 그대로 재사용되었음을 재확인.

### 접근성 신호
AX Lecture와 거의 동일한 패턴(`focus-visible` 2곳, `prefers-reduced-motion` 3곳, ARIA는 인트로/유틸/모달에 집중).

### 반응형 브레이크포인트
동일한 값 세트(720/900/560px + landscape-low-height), 관리자 대시보드용 추가 지점(1220,1223).

### Assets
39개 — 이 중 21개는 **미사용 고아 파일**(원 AX_Lecture 템플릿의 AI/GenAI 주제 SVG가 정리되지 않고 남음). 실제 사용되는 것은 15개 커널/컨테이너 다이어그램 + concept-map.pdf(HEAD 커밋에서 16강 마무리 슬라이드에 링크 연결됨, data.js:1547-1548).

### 진입점
동일하게 빌드 없음, `serve.py` 포트 8000. 스크립트 로드 순서: `site-config→data→room→slides→main→intro→telemetry→vendor/qrcode→admin`(desk/practice 없음).

### `js/practice.js`/`js/desk.js` 상태
**둘 다 없음.** git 히스토리 확인 결과 커밋 `2978a88` 메시지에 "진단실(practice.js) 기능 전체 제거 — 버튼·씬·라우트·CSS·히든코드"로 명시 — `SITE_CONFIG.practiceRoom=false` 설정을 쓰는 대신 파일·씬 자체를 삭제한 **구조적 분기**(config 토글이 아님).

### 콘텐츠-엔진 정합성 갭 (추가 발견)
- `curriculum.md`는 여전히 옛 20강(AI/RAG/에이전트) 커리큘럼을 그대로 서술 — 실제 `data.js`의 16강 OS/커널 콘텐츠와 불일치.
- `tests/content-lint.test.js:23`의 `LECTURE_COUNT = 20` 하드코딩이 실제 16강과 불일치.
- `js/site-config.js:27`의 `skinGating:false`(HEAD 커밋 `3d4a4a4`에서 추가)로 레벨 기반 스킨 잠금이 의도적으로 비활성화됨 — 단, `skinUnlockLevel` 맵과 잠금 배지 UI는 코드상 그대로 살아있어 재활성화 가능.

---

## 근거자료 목록 (재현 가능성을 위한 파일 인덱스)

| 항목 | AX Lecture | AI FirstStep | Codyssey Lecture |
|---|---|---|---|
| 엔진 경계 문서 | `docs/엔진_경계.md` (504줄) | `docs/엔진_경계.md` (460줄, 자체 서술 분기점 존재) | `docs/엔진_경계.md` (504줄) |
| UX 원칙 문서 | `docs/UX_원칙.md` | `docs/UX_원칙.md` | `docs/UX_원칙.md` |
| 커리큘럼 데이터 | `js/data.js` (1293줄) | `js/data.js` (2949줄, 페르소나 변형 포함) | `js/data.js` (1555줄) |
| 사이트 설정 | `js/site-config.js` (37줄) | `js/site-config.js` (58줄) | `js/site-config.js` (35줄) |
| 핵심 스타일 | `css/style.css` (1575줄) | `css/style.css` (1721줄) | `css/style.css` (1229줄) |

주: 위 표의 줄 수 등 모든 수치는 서브에이전트가 실제 코드를 읽고 보고한 값이며, 02/03/04/05 문서의 모든 비교·판단은 이 인벤토리를 1차 근거로 삼는다.
