# 02. Function Comparison

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/02_design_dna.md](../../docs/02_design_dna.md), [docs/03_ax_web_deck_standard_v0.1.md](../../docs/03_ax_web_deck_standard_v0.1.md)

3개 프로젝트의 기능을 축별로 비교하고, 각 기능을 5개 분류(CORE SHARED / EXPERIENCE ONLY / WEB DECK TRANSFERABLE / SKIN·CONTENT VARIABLE / PROJECT SPECIFIC) 중 하나로 표시한다. 근거는 `01_source_inventory.md` 및 서브에이전트 원 보고서(파일:라인)를 따른다.

## 비교표

| 기능 | AX Lecture | AI FirstStep | Codyssey Lecture | 공통성 | 표준 후보 |
|---|---|---|---|---|---|
| Intro 스크린세이버 | 4테마 파티클 그리드(intro.js:61-232) | 동일 엔진, `SITE_CONFIG.introThemes`로 2테마만 노출 | 동일 엔진, 4테마 전부 | 엔진 동일, 노출 개수만 config | CORE SHARED (엔진) / SKIN·CONTENT VARIABLE (테마 수) |
| Start 화면 | 진입 버튼 1개 + 유틸 FAB 2개, 요소 4개 상한(UX_원칙 §2) | 동일 패턴 | 동일 패턴 | 완전 동일 | CORE SHARED |
| Warp(입장) 전환 | `.warp` 원형 확장, 1.6s | 동일 keyframe이나 `fxLevel:"calm"`이면 260ms 페이드로 대체 | 동일, `fxLevel:"full"` | 메커니즘 동일, 강도(fxLevel)만 config | CORE SHARED (메커니즘) / SKIN·CONTENT VARIABLE (강도) |
| 강의 구조(계층) | Box(4)→Lecture(20)→Slide | Box(4)→Lecture(20)→Slide | Box(4)→Lecture(16)→Slide | Box 4개는 3곳 공통, Lecture 수는 콘텐츠 종속 | CORE SHARED (Box 허브 구조) / SKIN·CONTENT VARIABLE (레슨 수) |
| "Theme" 레이어 | 없음(Box.theme는 부제 문자열일 뿐) | 없음(동일) | 없음(theme 필드 자체 누락) | 3곳 모두 별도 Theme 계층 부재 확인 | 표준화 후보에서 "4 Theme" 전제 기각 — §15 Q8 참조 |
| Box 허브(방) 화면 | 4박스 그리드, hover lift | 동일 | 동일 | 완전 동일 | CORE SHARED |
| Card Fan | 40° spread, translateY(-46px)/hover(-70px,scale1.05), stagger (40+i*60)ms, cubic-bezier(.22,.61,.36,1) .32s | 수치까지 완전 동일 | 수치까지 완전 동일 | 3곳 모두 사실상 동일 코드 | CORE SHARED (가장 강한 증거) |
| 키보드 네비게이션 | →/Space/PgDn, ←/PgUp, Esc, Home/End, +/- | 동일 | 동일 | 완전 동일 | CORE SHARED / WEB DECK TRANSFERABLE |
| 스와이프 | 50px 임계값, touchstart/end | 동일 | 동일 | 완전 동일 | CORE SHARED / WEB DECK TRANSFERABLE |
| Fullscreen | coarsePointer(터치)에서만 자동 요청, 데스크톱은 호출 없음 | 동일 | 동일 | 완전 동일(3곳 모두 데스크톱 발표자용 명시적 컨트롤 부재) | CORE SHARED — 단, 공통 약점으로 플래그 |
| Chrome 자동 숨김 | 엣지 근접 마우스무브 감지로 topbar/nav 숨김 | 동일 | 동일 | 완전 동일 | CORE SHARED / WEB DECK TRANSFERABLE |
| Progress(완료) | `ax_room_progress_v1` Set, 마지막 슬라이드 도달 시 mark | 동일 키·동일 로직 | 동일 키·동일 로직 | 완전 동일 | CORE SHARED |
| Resume(이어보기) | `ax_room_resume_v1` 맵 | 동일 | 동일 | 완전 동일 | CORE SHARED |
| 콘텐츠 잠금/게이팅 | 이론 20강은 절대 게이팅 안 함(UX_원칙 §7) | 동일 원칙 | 동일 원칙 | 완전 동일 원칙 | CORE SHARED (설계 원칙 자체가 표준) |
| Gamification(Level/Rank) | Lv1-3, 스킨 언락 게이팅 활성 | Lv1-3, `fxLevel:calm`으로 컨페티 억제 | 게이팅 자체를 `skinGating:false`로 명시적 비활성화 | 메커니즘 동일, on/off·세기는 config 종속 | CORE SHARED (메커니즘) / EXPERIENCE ONLY (실제 발현) |
| Skin 엔진 | CSS 변수 블록 + `data-skin` 속성, 5스킨(paper/neon/pixel/blueprint/sayu) | 동일 메커니즘, 카탈로그 7종(office/sunset 추가, paper 미노출) | 동일 메커니즘, 5스킨이나 paper 미노출 | 메커니즘 100% 동일, **카탈로그(목록) 자체가 3곳에서 서로 다름** | CORE SHARED (메커니즘) / SKIN·CONTENT VARIABLE (카탈로그) — 카탈로그 표준화 필요(미확정) |
| Persona/Variant 슬라이드 | `slidesPersonal`(07·08강 한정, 강 전체 교체) | `slidesVariants`(거의 전 강, 슬라이드 단위 부분오버라이드) — 자체 문서는 이를 "상위호환"으로 서술 | 없음(필드 미사용, 치트 스캐폴딩만 존재) | 3곳이 서로 다른 3단계(부재/제한적/전면적) | PROJECT SPECIFIC — 표준 확정 보류(자체 문서도 "판단 보류"로 명시) |
| Practice/실습 부가 기능 | `practice.js`(진단실, config로 게이팅) | `practice.js` 존재하나 미로드 + 신규 `desk.js`(연습책상, 3존) | 완전 삭제(구조적 분기, config 아님) | 3곳이 "있음/새기능으로 대체/제거"로 전부 다름 | EXPERIENCE ONLY / PROJECT SPECIFIC |
| TOC(전체 목차) | ☰ 버튼, 이어보기·완료 표시 | 동일 + "핵심 훑기"(big/quote/closing만 추출) 토글 | 동일 | 기본 기능 동일, AI FirstStep만 확장 기능 보유 | CORE SHARED (기본) / EXPERIENCE ONLY (핵심훑기 확장) |
| 슬라이드 link 필드 | 없음(HEAD 시점 미확인) | 없음 | 있음(HEAD 커밋에서 신규, 모든 슬라이드 타입에 렌더) | Codyssey Lecture 단독 신규 | EXPERIENCE ONLY 후보 — 웹 slide에도 가치 있음(외부 자료 링크) → WEB DECK TRANSFERABLE 가능성 |
| Typography 스케일 | title clamp(3.2rem,9vw,7rem), cover clamp(2.6rem,5vw,3.7rem), big clamp(2.8rem,6.2vw,4.6rem), body clamp(1.15rem,2vw,1.4rem), caption .86rem | 수치까지 완전 동일 | 수치까지 완전 동일 | 3곳 수치 완전 일치 | CORE SHARED / WEB DECK TRANSFERABLE (Design DNA로도 §03 참조) |
| 반응형 브레이크포인트 | 720/900/560px + landscape-low-height | 동일 값(+관리자용 추가 지점) | 동일 값(+관리자용 추가 지점) | 값 완전 동일 | CORE SHARED / WEB DECK TRANSFERABLE |
| 접근성(ARIA/focus-visible) | 얕음: focus-visible 2곳, ARIA는 인트로/유틸/모달 집중, HUD·슬라이드 본문·TOC 미적용 | 동일 패턴(근소하게 더 많음) | 동일 패턴 | 3곳 모두 동일한 "얕은" 수준 | CORE SHARED **약점** — 표준화 시 반드시 보강 대상 |
| reduced-motion 처리 | 인트로/셀러브레이트·업그레이드/카드·시작·글로우 3곳, warp·박스리빌·딜인 미적용 | 동일 3곳, 동일 사각지대 | 동일 3곳, 동일 사각지대 | 완전 동일(강점과 사각지대 모두) | CORE SHARED **부분 강점 + 공통 사각지대** |
| 콘텐츠 모델 완전성 | 필드(accent/theme/tagline) 완비 | 필드 완비 | **필드 누락(accent/theme/tagline 전무), undefined 렌더 버그 실측 확인** | Codyssey Lecture만 결함 | PROJECT SPECIFIC (결함) — 표준 엔진 설계 시 optional-field 기본값/가드 필요(§04) |
| 기술 스택/빌드 | 빌드 없음, vanilla JS, 0 의존성 | 동일 | 동일 | 완전 동일 | CORE SHARED |

## 5개 분류 정리

### A. CORE SHARED (세 프로젝트 공통 핵심, 표준 엔진 포함 가능성 높음)
- Box 허브 → Card Fan → Slide 3단 네비게이션 구조 및 해시 라우터
- Card Fan의 기하/모션 수치(40° spread, translateY, stagger, easing) — 세 코드베이스에서 값 단위로 일치
- Progress/Resume/Level localStorage 계약(키 이름까지 동일)
- 콘텐츠 비게이팅 원칙("이론 강의는 절대 잠그지 않는다")
- 키보드 네비게이션 세트, 스와이프, Fullscreen(터치 전용) 로직, Chrome 자동 숨김
- Typography clamp 스케일 수치
- 반응형 브레이크포인트 값(720/900/560px + landscape)
- Skin 엔진 *메커니즘*(CSS 변수 블록 + data-skin 속성) — 단, 카탈로그(목록)는 SKIN·CONTENT VARIABLE
- 빌드 없는 vanilla 기술 스택 자체

### B. EXPERIENCE ONLY (과정형 규모 강의에서만 가치, AX Lecture Experience 후보)
- Gamification 전체(Level/Rank/스킨 언락/셀러브레이트) — 메커니즘은 CORE지만 발현 자체는 "여러 강을 거치는 여정"을 전제
- Practice Desk(AI FirstStep 고유)/진단실(practice.js) 같은 실습 부가 기능
- TOC의 "핵심 훑기" 확장
- Persona/Variant 슬라이드 메커니즘(다회 수강·역할별 분기 전제)

### C. WEB DECK TRANSFERABLE (일반 30-120분 웹 슬라이드에도 이식 가치)
- 키보드 네비게이션, 스와이프, Fullscreen, Chrome 자동 숨김
- Typography 스케일, 반응형 브레이크포인트, Section-transition 모션 문법(opacity+scale settle)
- 슬라이드 타입 다양화 원칙(bullets/big/quote/split/image/closing 리듬)
- 슬라이드 link 필드(외부 자료 새 탭 링크)
- 진행률 표시(counter/progress bar) — 단, Resume/localStorage는 세션 성격에 따라 선택적

### D. SKIN / CONTENT VARIABLE (엔진에 고정하면 안 됨)
- Skin 카탈로그(색상/폰트/glow/blur/배경 캔버스 씬) 자체 — 목록은 프로젝트마다 다름
- fxLevel 강도(calm/full) — 모션의 "세기" 축
- Gamification 수치(레벨 캡, 랭크 타이틀, 게이팅 on/off)
- 콘텐츠 도메인(커리큘럼 주제) 및 Box/Lecture 개수

### E. PROJECT SPECIFIC (표준 후보 낮음)
- Practice Desk(desk.js)의 3존 UI(스탬프판/조립대/키트) — AI FirstStep 고유, 이식 불가로 자체 문서화됨
- Persona/Variant 두 메커니즘(slidesPersonal vs slidesVariants)의 구체적 구현 — 아직 두 저장소 간에도 통일되지 않음
- Codyssey Lecture의 콘텐츠 모델 누락(undefined 버그) — 표준 후보가 아니라 반면교사 사례
