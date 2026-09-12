# 05. Source Audit Report

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/00_canonical_index.md](../../docs/00_canonical_index.md) (executive summary of 01–04)

**AX Lecture System Standardization — Sprint 1**
분석 전용 Sprint. 코드/디자인 수정, 리팩터링, 표준 엔진 구현 없음.

---

## 1. Executive Summary

AX Lecture, AI FirstStep, Codyssey Lecture 세 프로젝트는 파일 구조부터 Card Fan 모션 수치, Typography 스케일, localStorage 키 이름까지 **값 단위로 일치하는 하나의 공유 엔진**을 갖고 있다. 이는 세 저장소가 독립적으로 수렴한 것이 아니라 하나의 코드베이스가 복제·재사용되어 온 결과이며, 각 저장소의 `docs/엔진_경계.md`(boundary-keeper 서브에이전트가 관리)가 이 사실을 스스로 상세히 기록하고 있다는 점에서 신뢰도가 높다.

세 프로젝트의 차이는 대부분 **엔진이 아니라 콘텐츠·설정·확장 기능**에서 나타난다: AI FirstStep은 새 기능(Practice Desk, 확장된 Persona 메커니즘)을 추가하면서도 콘텐츠 모델을 완전하게 유지했고, Codyssey Lecture는 진단실 기능을 구조적으로 삭제하면서 콘텐츠 필드(accent/theme/tagline)를 불완전하게 제거해 실제 렌더링 버그(카드에 "undefined" 노출)를 남겼다. 이 대비가 "AX Lecture의 디자인 만족도는 어디서 오는가"라는 질문에 대한 핵심 단서다: 같은 엔진이라도 콘텐츠·서사의 완성도가 체감 품질을 좌우한다.

"4 Theme × 3 Lesson"이라는 가설은 이번 감사로 기각한다. 실제 구조는 Box(4)→Lecture(16~20, 콘텐츠 종속)→Slide이며, Theme이라는 별도 계층은 세 프로젝트 어디에도 없다.

---

## 2. 분석 대상과 실제 경로

이 감사는 본래 Windows 경로(`C:\Users\hyun0\...`)를 대상으로 요청되었으나, 실제 작업 세션은 코디세이 교육장 공용 Mac(`hyun020631854123` 계정)에서 진행되었다. 사용자가 3개 저장소를 이 Mac으로 이전한 뒤 감사를 재개했다.

| 프로젝트 | 실제 경로 |
|---|---|
| AX Lecture | `/Users/hyun020631854123/AX_Lecture` |
| AI FirstStep | `/Users/hyun020631854123/AI_First_Step` |
| Codyssey Lecture | `/Users/hyun020631854123/Codyssey_Lecture` |
| 산출물 폴더 | `/Users/hyun020631854123/AX_Lecture_Standard/docs/` |

---

## 3. Git / Source 상태

| | AX Lecture | AI FirstStep | Codyssey Lecture |
|---|---|---|---|
| Branch | main | main | main |
| HEAD | `37e5e6c` | `049a6fb` | `3d4a4a4` |
| Working tree (감사 시작 시) | clean | clean | clean |
| Working tree (감사 종료 시) | clean(변경 없음, 검증 완료) | clean(변경 없음, 검증 완료) | clean(변경 없음, 검증 완료) |

세 저장소 모두 감사 이전부터 clean 상태였으며, 감사 과정에서 어떤 파일도 수정·생성·삭제되지 않았다. 종료 시 `git status`로 재확인했다.

---

## 4. 세 프로젝트 구조 요약

세 프로젝트는 `index.html` + `css/style.css` + `js/{site-config,data,room,slides,main,intro,telemetry,admin}.js` + `vendor/qrcode.js` + `netlify/functions/*` + 동일한 이름의 운영 문서(`docs/엔진_경계.md`, `docs/UX_원칙.md` 등) + `.claude/agents/*`(5개 서브에이전트) + `order/`(작업 지시서 아카이브) 구조를 완전히 공유한다. 빌드 도구/프레임워크/패키지 의존성이 전혀 없는 vanilla 정적 사이트라는 점도 동일하다.

차이는 다음 세 지점에서 발생한다:
- **AX Lecture**: `js/practice.js`(진단실, config로 게이팅 가능)
- **AI FirstStep**: `js/practice.js`(존재하나 미로드) + `js/desk.js`(연습책상, 신규 3존 기능) + `docs/페르소나_작성_가이드.md`(고유 문서)
- **Codyssey Lecture**: `practice.js`/`desk.js` 모두 없음(구조적 삭제), 대신 슬라이드 `link` 필드가 신규 추가됨

상세 근거는 `01_source_inventory.md` 참조.

---

## 5. 공통 기능 Top 10

1. Box 허브 → Card Fan → Slide 네비게이션 구조 및 해시 라우터
2. Card Fan 기하/모션(40° spread, transform-origin 50% 320%, stagger, easing — 수치까지 일치)
3. Progress/Resume/Level localStorage 계약(키 이름까지 동일)
4. "이론 강의는 절대 게이팅하지 않는다" 설계 원칙
5. 키보드 네비게이션 세트(→/Space/PgDn, ←/PgUp, Esc, Home/End, +/-)
6. 스와이프(50px 임계값) + Fullscreen(터치 전용) + Chrome 자동 숨김
7. Typography clamp 스케일(수치까지 일치)
8. 반응형 브레이크포인트(720/900/560px + landscape-low-height)
9. Skin 엔진 메커니즘(CSS 변수 블록 + data-skin 속성)
10. Gamification 메커니즘(Level/Rank/스킨 언락 — on/off는 프로젝트마다 다르나 코드 구조는 동일)

---

## 6. Design DNA Top 10

1. "방/공간" 메타포로 배경이 서사를 담당(단순 장식이 아님)
2. Card Fan의 "회전을 유지한 채 든다"는 의도적 hover 문법("커서에서 도망가지 않게")
3. Glow/Blur를 5개 스킨 중 2곳(neon/sayu)에만 예약하는 절제 원칙
4. z-index 레이어드 공간 구성(bg→scene→HUD→fan→warp→toc→celebrate)
5. 모든 전환에 "왜 움직이는가"가 있음(scene=도착, warp=문턱, 딜인=순차 등장, celebrate=보상)
6. Typography 강조가 굵기 단독이 아니라 크기+letter-spacing+모노폰트+조건부 glow의 조합
7. Visual Rhythm: 집중(Start)-선택(Fan)-설명(bullets)-휴식(big/quote)-전환(section)-보상(완주) 5단계
8. sayu 스킨의 전체 2배 슬로우 모션 — "강도(fxLevel)"가 스킨과 별개 축으로 이미 검증됨
9. 모바일은 리플로우가 아니라 별도 공간 레이아웃을 새로 그림(landscape 저높이 전용)
10. Ease-out-no-bounce 모션 원칙("튕김 없음" 코드 주석) — 절제된 기본 모션과 컨페티 보상 비트의 대비

---

## 7. 프로젝트별 핵심 차이

- **AI FirstStep**: 엔진은 완전히 보존하면서 정당한 경험층 확장(Practice Desk)을 추가했고, 배경 서사를 "출근-퇴근" 스토리로 능동 재해석했으며, 콘텐츠 모델을 완비했다. 건강한 확산 사례.
- **Codyssey Lecture**: 엔진은 구조적으로 동일하게 재사용했으나 콘텐츠 도메인(OS/커널)이 원래 주제(AI/AX)와 이질적임에도 룸 메타포 카피를 그대로 두었고, 콘텐츠 필드를 불완전하게 제거해 실제 버그(카드에 "undefined" 노출)와 문서/테스트 드리프트(`curriculum.md`, `LECTURE_COUNT=20` 하드코딩)를 남겼다. 엔진 재사용은 성공했지만 콘텐츠·QA 완성도에서 퇴행이 관찰된다.
- **AX Lecture**: 기준 자산으로서 콘텐츠 모델·서사·문서가 모두 완비된 상태를 유지한다.

---

## 8. Core / Experience / Web Deck / Skin / Project Specific 분류

`02_function_comparison.md`의 5분류 표 참조. 요약:
- **CORE SHARED**: 네비게이션 구조, Card Fan, Progress 계약, 키보드/스와이프/풀스크린, Typography, 반응형, Skin 메커니즘
- **EXPERIENCE ONLY**: Gamification 발현, Practice 부가 기능, TOC 핵심훑기, Persona/Variant 메커니즘
- **WEB DECK TRANSFERABLE**: 키보드/스와이프/풀스크린, Typography, Section-transition 문법, 슬라이드 타입 리듬, link 필드
- **SKIN/CONTENT VARIABLE**: Skin 카탈로그, fxLevel 강도, Gamification 수치, 커리큘럼 규모·주제
- **PROJECT SPECIFIC**: Practice Desk 3존 UI, 두 가지 Persona 메커니즘의 구체 구현, Codyssey Lecture의 콘텐츠 모델 결함

---

## 9. AX Lecture Experience 표준 후보

`04_standardization_candidates.md` §A 참조. 핵심: Box 허브(중간 확정도)·Card Fan(높은 확정도)·Progress 계약(높은 확정도)은 후보로 제시하되, Persona/Variant 메커니즘은 두 저장소 자체 문서조차 "판단 보류"로 명시하므로 이번 Sprint에서 표준화하지 않는다.

---

## 10. AX Web Lecture Deck 표준 후보

`04_standardization_candidates.md` §B 참조. 핵심: Typography·키보드·풀스크린·Chrome 자동숨김·Section-transition 문법·슬라이드 타입 리듬은 이식 후보. Box 허브·Gamification·Persona·Practice 부가 기능은 제거 후보. 시간대별 분량은 절대 슬라이드 수가 아니라 "설명:쉼표 비율" 원칙으로 제안(구체 수치는 리허설 데이터 부재로 미확정).

---

## 11. 아직 판단하면 안 되는 항목

1. **Persona/Variant 슬라이드 메커니즘** — `slidesPersonal` vs `slidesVariants` 중 무엇을 표준으로 할지. 두 저장소의 `엔진_경계.md`가 이미 "실행 여부·시점은 별도 결정 중"이라고 명시하고 있어, 이번 Sprint의 감사 범위를 넘어선다.
2. **Skin 카탈로그 정본화** — AX Lecture/Codyssey Lecture는 5스킨, AI FirstStep은 7스킨(office/sunset 추가)을 갖고 있어 카탈로그 자체가 아직 수렴하지 않았다.
3. **"Box 4개"가 구조적 제약인지 우연인지** — 표본이 3개뿐이라 통계적으로 단정할 수 없다.
4. **30/60/90/120분 Web Deck의 구체적 슬라이드 수/시간 매핑** — 실제 발표 리허설(슬라이드당 체류시간) 데이터가 없어 원칙만 제시했고 수치는 확정하지 않았다.
5. **AI Attitude와의 비교** — 이번 1차 Source Audit의 범위에서 의도적으로 제외했다(작업 지시 §4). "표준 DNA가 AI Attitude에서 어디서 희석되었는가"는 별도 Sprint 대상이다.
6. **실제 브라우저 시각 확인 미수행** — 이번 세션은 헤드리스 브라우저/스크린샷 도구가 없어 코드 분석만으로 감사를 완료했다. Start→Intro→Room→Box→Card→Lesson→Back 흐름의 실제 화면 확인은 사용자 또는 브라우저 도구가 있는 세션에서 별도로 수행이 필요하다. `audit-assets/`는 준비해 두었으나 비어 있다.

---

## 12. 다음 Sprint 권고안

Skin 카탈로그를 정본화하고, Codyssey Lecture의 undefined 버그 사례를 반영해 콘텐츠 모델의 optional 필드에 명시적 기본값/가드를 두는 최소 스펙을 먼저 정의한 뒤, **AX Web Lecture Deck의 최소 골격을 "기존 엔진에서 기능을 하나씩 빼보는" 방식으로 프로토타이핑**할 것을 권고한다. 이 삭제 실험 자체가 "어디까지가 진짜 분리 가능한 엔진인가"를 검증하는 가장 저비용의 방법이다. 코드 작성은 사용자 승인 후 별도 Sprint에서 시작한다.

---

## 13. 사용자에게 결정받아야 할 사항

1. Persona/Variant 메커니즘을 어느 쪽(slidesPersonal / slidesVariants)으로 수렴할지, 아니면 당분간 보류할지
2. Skin 카탈로그를 5종(AX/Codyssey 기준)과 7종(AI FirstStep 기준) 중 어느 쪽으로 정본화할지
3. "Box 4개" 구조를 표준으로 확정할지, 추가 사례 확보 전까지 유보할지
4. Web Lecture Deck의 30/60/90/120분 분량 원칙을 이번에 제시한 "설명:쉼표 비율" 방식으로 진행할지, 아니면 리허설 데이터 수집을 먼저 진행할지
5. 다음 Sprint를 "Web Deck 최소 골격 프로토타입"부터 시작할지, 아니면 "콘텐츠 모델 스펙 정의"부터 시작할지
6. AI Attitude 비교 Sprint의 착수 시점
