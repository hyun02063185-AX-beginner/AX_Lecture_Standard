# 04. Standardization Candidates

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/03_ax_web_deck_standard_v0.1.md](../../docs/03_ax_web_deck_standard_v0.1.md), [docs/04_web_deck_content_contract.md](../../docs/04_web_deck_content_contract.md)

**주의: 이 문서는 최종 표준을 확정하지 않는다.** `02_function_comparison.md`와 `03_design_dna_comparison.md`의 분류를 근거로 후보만 제시한다. 확정은 사용자와 Sol이 검토한 뒤 별도 Sprint에서 진행한다.

---

## A. AX Lecture Experience 후보 (규모 있는 과정형 강의용)

3개 프로젝트 분석 결과, 다음 요소는 "구조적으로 반복된 패턴"이라 후보로 제시할 근거가 있다. 단 괄호 안에 표시한 대로 확정도는 요소별로 다르다.

| 후보 요소 | 근거 | 확정도 |
|---|---|---|
| Box 허브(다중 그룹 개관 화면) | 3개 프로젝트 모두 "Box 4개" 구조를 유지 — 화면 하나에 들어가는 그리드 단위로서 우연이라기엔 일관됨 | 중간 — 표본 3개뿐, "4"가 화면 그리드 제약인지 콘텐츠 우연인지 추가 검증 필요(§15 Q8) |
| Card Fan 선택 인터랙션 | 수치까지 일치하는 CORE SHARED (02/03 문서) | 높음 |
| Progress/Resume/Level(localStorage 계약) | 키 이름까지 동일, 3곳 모두 완주 후 셀러브레이트로 수렴 | 높음 |
| Gamification(Level/Rank/스킨 언락) | 메커니즘은 3곳 공통이나 on/off·세기는 프로젝트마다 다름 | 중간 — 메커니즘은 표준, 수치(레벨 캡·랭크명)는 콘텐츠 변수로 유지해야 함 |
| TOC + "핵심 훑기" | 기본 TOC는 3곳 공통, 훑기 확장은 AI FirstStep 단독 | 낮음(훑기 확장) / 높음(기본 TOC) |
| Persona/Variant 슬라이드 | AX Lecture와 AI FirstStep이 서로 다른 메커니즘을 쓰고, 두 저장소의 자체 문서(엔진_경계.md)조차 "마이그레이션 필요성 낮음, 실행 여부 보류"라고 명시 | **판단 보류 — 표준화하지 말 것.** 두 구현이 아직 수렴하지 않은 상태에서 표준을 정하면 어느 한쪽을 강제로 버리게 됨 |
| Practice 부가 기능(진단실/연습책상) | 3곳 모두 형태가 다름(있음/신규 대체/삭제) — 공통 골격보다 "있어도 되고 없어도 되는 선택적 확장 슬롯"이라는 패턴이 공통 | 낮음 — 구체적 UI가 아니라 "확장 슬롯이 존재해야 한다"는 설계 원칙만 표준 후보로 제시 |

**4 Theme × 3 Lesson에 대한 명시적 판단**: 실제 데이터 구조는 Box(4)→Lecture(가변, 16~20)→Slide이며 별도의 "Theme" 계층은 세 프로젝트 어디에도 존재하지 않는다(`box.theme`는 부제 문자열일 뿐). Lecture-per-Box도 3으로 고정되지 않는다(Codyssey Lecture는 3/5/4/4로 분산). 따라서 **"4 Theme × 3 Lesson"은 구조적 표준이 아니라 특정 사례에서 나온 한 형태**로 판단한다. 유일하게 일관된 수치는 "Box 4개"이며, 이것도 표본이 3개뿐이라 강한 표준으로 단정하기엔 이르다.

---

## B. AX Web Lecture Deck 후보 (일반 30~120분 웹 슬라이드용)

과정형 구조에서 무엇을 제거하고 무엇을 유지할지는, 임의의 슬라이드 개수가 아니라 **02/03 문서의 WEB DECK TRANSFERABLE 분류**를 원칙으로 삼는다.

### 유지 후보 (기능 차이·콘텐츠 밀도 원칙)
- **Typography 스케일**: clamp 기반 수치가 3곳에서 완전히 일치 — 그대로 이식 가능한 검증된 값
- **키보드 네비게이션 + 스와이프 + Fullscreen(터치 전용) + Chrome 자동 숨김**: 발표 도구로서 이미 검증된 조합
- **Section-transition 모션 문법**(opacity+scale settle, "왜 움직이는가"가 있는 전환): Design DNA의 핵심이므로 Web Deck에도 유지해야 톤이 유지됨
- **슬라이드 타입 리듬**(bullets 설명 중심 + big/quote 쉼표 + closing 예고): 콘텐츠 밀도와 무관하게 재사용 가능한 "리듬 원칙"
- **반응형 브레이크포인트 값**: 그대로 재사용 가능
- **reduced-motion 처리**: 기존 3개 프로젝트의 사각지대(warp·리빌 애니메이션 미적용)까지 그대로 물려받지 말고, Web Deck에서는 처음부터 전체 애니메이션에 적용할 것을 권고(반면교사)
- **슬라이드 `link` 필드**(Codyssey Lecture 신규): 외부 자료 새 탭 연결은 발표 상황에서도 유용 — 이식 후보

### 제거 후보 (과정형 전용, Web Deck에는 불필요)
- Box 허브 화면(다중 그룹을 나눌 만큼의 분량이 아님)
- Gamification 전체(Level/Rank/스킨 언락/컨페티) — 단발성 세션에는 "완주 보상"이라는 전제가 성립하지 않음
- Progress/Resume의 localStorage 장기 추적(발표는 대개 한 세션에서 끝남 — 다만 URL 해시 기반 현재 위치 표시는 발표자 리허설용으로 유지 가치 있음)
- Persona/Variant 슬라이드 메커니즘(다회 수강 전제)
- Practice 부가 기능(진단실/연습책상)
- Skin 언락 게이팅(스킨 자체는 유지하되 레벨로 잠그지 않음 — Codyssey Lecture가 `skinGating:false`로 이미 검증한 패턴)

### 시간대별 분량 원칙 (임의 슬라이드 수 고정 대신)
3개 프로젝트 평균 레슨당 슬라이드 수는 약 13~14장이며, 슬라이드 타입 분포는 bullets(설명)가 압도적으로 많고 big/quote(쉼표)·closing(예고)이 드물게 섞이는 비율로 관찰된다(예: AX Lecture 전체 슬라이드 중 bullets 147 : big 45 : quote 19 : closing 22). 이를 근거로 **절대 슬라이드 수가 아니라 "설명:쉼표 비율"을 고정 원칙으로 제안**한다:
- 짧은 세션(~30분): Box 허브 생략, 선형 슬라이드만. 설명형 슬라이드 사이에 쉼표(big/quote)를 최소 1개씩은 배치해 리듬을 지킬 것.
- 중간 세션(~60분): 선형 슬라이드 + 섹션 구분자(가벼운 챕터 마커, Box 허브는 아님) 도입 가능.
- 긴 세션(90~120분): 섹션 구분자 + TOC(중간 점프용)를 재도입할 만한 분량이 됨 — 이 지점부터 과정형 요소를 부분 차용하는 것이 합리적.

구체적 "시간당 슬라이드 수" 매핑은 이번 Sprint의 근거만으로는 확정할 수 없다 — 실제 발표 리허설 데이터(슬라이드당 평균 체류 시간)가 없기 때문이며, 이는 §15 Q9의 판단 보류 사유와 동일하다.

---

## 반드시 구분해서 유지할 4개 층위 (§14 원칙 적용)

| 층위 | 이번 감사에서 확인된 예시 |
|---|---|
| **Engine Standard** | Card Fan 기하/모션, 해시 라우터, Progress/Resume 계약, 키보드·스와이프·풀스크린 로직, Skin 엔진 메커니즘(변수 블록+data-skin) |
| **Format Standard** | Box 허브 유무, Gamification 유무, Persona 메커니즘 유무 — "과정형 vs Web Deck"에 따라 켜고 끄는 층 |
| **Design DNA** | Typography 스케일, glow를 일부 스킨에만 예약하는 절제 원칙, Visual Rhythm(집중-선택-설명-휴식-전환), "왜 움직이는가"가 있는 전환 문법 |
| **Skin** | 색상 토큰, 폰트 패밀리, 배경 캔버스 씬, fxLevel 강도, glow/blur 값 |
| **Content** | `data.js`의 실제 강의 원고, 다이어그램 asset, 커리큘럼 주제 |

Codyssey Lecture 사례(콘텐츠 필드 누락→undefined 렌더 버그)는 Content와 Engine의 경계에서 발생한 실패이며, 표준 엔진을 설계할 때 optional 필드에 명시적 기본값/가드를 두어야 한다는 구체적 엔지니어링 근거로 §05에 반영한다.
