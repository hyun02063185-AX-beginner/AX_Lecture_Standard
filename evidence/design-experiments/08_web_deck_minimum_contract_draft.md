# 08. Web Deck Minimum Contract (Draft)

> Status: Superseded Draft — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/03_ax_web_deck_standard_v0.1.md](../../docs/03_ax_web_deck_standard_v0.1.md)

**AX Lecture System Standardization — Sprint 2**
이 문서는 최종 표준이 아니다. `07_engine_boundary_experiment.md`의 실측 결과를 근거로 한 **초안**이며, 사용자와 Sol의 검토 후 확정한다.

---

## 반드시 필요한 것 (WEB-DECK CORE)

Experiment 1~3에서 제거를 시도했으나 제거하지 않았거나, 제거 시 AX DNA가 눈에 띄게 약해졌던 요소.

- **slides.js 렌더/네비 엔진** — 타입 기반 슬라이드(cover/big/bullets/quote/split/image/closing), 키보드(→/Space/PgDn, ←/PgUp, Esc, Home/End, +/-), 스와이프(50px), 이미지 확대(핀치줌), 풀스크린(터치 전용 자동 요청), Chrome(상단바·하단 네비) 자동 숨김. Exp2/3에서 코드 수정 없이(단 3곳의 CURRICULUM 결합만 해소) 100% 재사용됨 — 가장 강한 CORE 근거.
- **레이어드 배경 캔버스** — Room 유무와 무관하게 완전히 독립적으로 동작함을 Exp2에서 실측. "PPT처럼 보이지 않는" 느낌의 핵심 장치.
- **Typography 스케일(clamp 기반 수치)** — 세 프로젝트 코드 감사(Sprint 1)에서 값 단위로 일치했고, 이번 Sprint의 모든 프로토타입에서 그대로 재사용해도 위계가 선명하게 유지됨을 재확인.
- **Scene 전환 문법(opacity+scale, "왜 움직이는가"가 있는 모션)** — 모든 실험에서 유지. 단, `goScene()`의 null-safety는 표준 엔진에 정식 반영해야 함(Baseline에서 발견한 버그).
- **Presentation Progress(슬라이드 카운터 + 진행률 바 + 현재 Section/Slide 표시)** — Experiment 4에서 제거를 시도조차 하지 않을 만큼 명백히 필요.
- **슬라이드 타입 다양화 원칙** — bullets(설명) 사이에 big/quote(쉼표)를 배치하는 리듬. Content 저작 가이드로 문서화 필요(엔진 코드는 아니지만 계약의 일부).

## 선택 가능한 것 (WEB-DECK OPTIONAL / LONG-DECK ONLY)

- **Card Fan** — Room에 종속되지 않고 독립적으로 켜고 끌 수 있음을 Exp3에서 증명(Variant A). 30~60분 Deck은 기본 OFF(Variant B), 90분 이상·Section 6개 이상이면 옵션으로 ON 권고(§07 Experiment 3 표 참고). **LONG-DECK ONLY**로 잠정 분류.
- **Resume(이어보기, localStorage 위치 복원)** — 코드가 이미 optional하게 설계돼 있어(Resume 없이도 크래시 없음, Exp2/3에서 실측) 끄고 켜기 쉬움. **LONG-DECK OPTIONAL**.
- **슬라이드 `link` 필드**(Codyssey Lecture에서 신규 확인, Sprint 1 감사) — 외부 자료 새 탭 연결. Web Deck에도 이식 가치 있음, 이번 Sprint 프로토타입에는 미구현(범위 밖) — 다음 Sprint 후보.
- **최소 완료 신호** — 축하 연출 없이도 `closing` 타입 슬라이드 자체가 "마무리"로 기능함(Exp4). 화려한 셀러브레이션은 OPTIONAL이지만, 마지막 슬라이드가 "끝났다"는 인상을 주는 것 자체는 사실상 CORE에 가까움 — 경계선 항목으로 표시.

## 과정형에만 남길 것 (EXPERIENCE ONLY)

- Room/Box 허브(다중 그룹 개관 화면) — Exp2에서 완전히 제거 가능함을 확인, Section 수가 적을 때는 없는 편이 오히려 자연스러움.
- Gamification 전체(Level/Rank/XP 바/스킨 언락/완주 축하) — Exp1에서 메커니즘째 제거 가능함을 확인. 단 스킨 언락은 config 한 줄(`skinGating:false`)로 이미 끌 수 있는 상태였음(Codyssey Lecture가 실전에서 검증).
- TOC "핵심 훑기" 토글, Practice Desk/진단실류 부가 공간, Persona/Variant 슬라이드 메커니즘 — 모두 다회 수강·장기 학습을 전제하므로 Web Deck 범위 밖.

## Skin으로 분리할 것

- 색상 토큰, 폰트 패밀리, glow/blur 유무, 배경 캔버스의 색상표(별 색상 등), fxLevel(모션 강도) — Sprint 1.5/2 모두 이 원칙을 건드리지 않고 검증했다. 이번 Sprint의 모든 프로토타입은 `sayu` 스킨 값(골드 별빛 색상 `rgba(224,197,138,...)`)만 하드코딩해 사용했는데, 이는 실제로는 CSS 변수 + `data-skin` 속성으로 이미 분리돼 있던 값을 프로토타입 범위 밖이라 스킨 전환 UI만 생략한 것뿐이다 — 스킨 엔진 자체를 건드리지 않았다는 뜻이며, Sprint 1.5의 판단을 재확인한다.

## 아직 결정하지 않을 것

- **Card Fan의 정확한 분기 기준**("Section 6개 이상"이라는 숫자는 이번 4-Section 규모 실험만으로는 확정할 근거가 부족함)
- **30/60/90/120분 Deck의 정확한 Slide/Section 수** — Sprint 1 보고서(`05_source_audit_report.md`)와 동일하게 이번에도 리허설 데이터 없이는 확정하지 않는다.
- **완료 신호의 구체적 형태**(closing 슬라이드만으로 충분한지, 아주 가벼운 마무리 연출이 필요한지) — Exp4는 "화려한 셀러브레이션은 불필요"까지만 확인했고 "아무 신호도 필요 없다"까지는 검증하지 않았다.
- **콘텐츠 저작 가이드**("Box/Room 언어를 배제한 Section 카피 작성법") — Exp2에서 발견한 "상자 1 · 왜" 잔존 카피 문제(§07)를 해결할 구체적 규칙은 다음 Sprint에서 정의한다.
- **React/Next.js 등 프레임워크 전환, 최종 파일 구조, 최종 Skin/Component API** — 이번 Sprint의 범위 밖(작업 지시 §19).
