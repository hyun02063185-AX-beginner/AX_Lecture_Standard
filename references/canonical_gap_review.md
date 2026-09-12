# Canonical Gap Review

`AX_Lecture_Standard_backup`의 17개 문서(Sprint 1–6)를 현재 Canonical `docs/`와 문장 단위로 대조한 결과다. 분류 기준은 다섯 가지다.

```text
PRESERVED           현재본에 의미상 이미 존재
MISSING-VALUABLE    현재본에서 사라졌지만 여전히 유효하고 중요한 규칙
SUPERSEDED          후속 결정으로 바뀐 내용
EVIDENCE-ONLY       표준 규칙보다는 당시 판단 근거
APPLICATION-SPECIFIC AI Attitude 등 특정 구현에 한정
```

`MISSING-VALUABLE`만 [§ Canonical 보강](#canonical-보강-실제-반영) 기준 4문항을 통과했을 때 현재 `docs/`에 반영했다. 나머지는 회수는 하되 `docs/`를 다시 늘리지 않는다.

## Gap Table

| Backup Source | Topic | Classification | Current Location | Action |
|---|---|---|---|---|
| 01_source_inventory | 3개 원본 프로젝트 파일 구조·엔진 경계 분석 | EVIDENCE-ONLY | — | 보존만(evidence/source-audit) |
| 02_function_comparison | CORE SHARED / EXPERIENCE ONLY / WEB DECK TRANSFERABLE 5분류 | PRESERVED | docs/02, docs/03 | No action |
| 03_design_dna_comparison | Design DNA Top 10(Typography/Layered/Restrained/Causal Motion/Rhythm/Glow 절제) | PRESERVED | docs/02 (6 DNA 항목) | No action |
| 03_design_dna_comparison | Card Geometry 40° spread 등 구체 수치 | APPLICATION-SPECIFIC | — | Card Fan은 현재 Web Deck에 없음(EXPERIENCE 계열 유산) — 보존만 |
| 04_standardization_candidates | "Box 4개"는 구조적 표준이 아니라 우연 — 확정하지 말 것 | PRESERVED | docs/01, docs/09 (Box 개수 강제 없음) | No action |
| 04_standardization_candidates | Card Fan/Resume = 후보(확정도 표시) | PRESERVED | docs/03 | No action |
| 04_standardization_candidates | 시간대별 분량은 "설명:쉼표 비율" 원칙 제안 | SUPERSEDED | docs/06 (Slide Range 숫자 표로 대체) | 숫자 표가 채택되어 비율 원칙은 쓰이지 않음 — No action |
| 05_source_audit_report | Executive summary, 미확정 항목 6개, 사용자 결정 필요 6개 | EVIDENCE-ONLY | — | 대부분 이후 Sprint에서 해결됨(§ Decision Traceability 참고) |
| 06_visual_baseline_validation | Design DNA Top 10 CONFIRMED/PARTIAL/NOT VERIFIED 실측 | PRESERVED | docs/02 | No action — 실측 근거로 보존 |
| 07_engine_boundary_experiment | Card Fan은 Room에 종속되지 않음(Variant A 실측) | PRESERVED | docs/03 | No action |
| 07_engine_boundary_experiment | null-safety 원칙(선택적 DOM 요소 접근 시 항상 가드) | EVIDENCE-ONLY | — | 구체 코드 패턴은 지금 엔진과 무관 — 보존만 |
| 07_engine_boundary_experiment | "main.js는 Engine이 아니라 사이트 전용 오케스트레이터" 통찰 | EVIDENCE-ONLY | — | 현재 엔진은 이 파일 자체가 없음 — 보존만 |
| 08_web_deck_minimum_contract_draft | Card Fan/Resume = LONG-DECK OPTIONAL, link 필드 이식 권고 | PRESERVED | docs/03, docs/04 | No action |
| 09_web_deck_content_contract_v0.1 | 7종 slide type 고정 열거(cover/big/bullets/quote/split/image/closing) | SUPERSEDED | docs/04 (열린 type contract로 의도적 완화) | 실제 `templates/web-deck/engine/deck-engine.js`도 다른 type 집합(opening/section/compare/closing/statement) 사용 — 고정 열거 자체가 이후 갈라짐. No action(현재의 open contract가 맞는 방향) |
| 09_web_deck_content_contract_v0.1 | required/optional per type, validateDeck 경고-only 원칙 | PRESERVED | docs/04 | No action |
| 09_web_deck_content_contract_v0.1 | "중립 어휘 대응표"(HOOK/CONCEPT/COMPARE/CASE 등 역할 라벨) | EVIDENCE-ONLY | — | 이후 채택되지 않은 실험적 어휘 — 보존만 |
| 10_web_deck_authoring_guide | Section=콘텐츠 단위, Box/Room 언어 금지, Opening→Closing Callback | PRESERVED | docs/05 | No action |
| 10_web_deck_authoring_guide | Timing: Lecture/Demo/Interaction/Practice/Break 구분, estimatedMinutes 보류 | PRESERVED | docs/05 | No action |
| 10_web_deck_authoring_guide | §3 "슬라이드 타입을 섞어라"(bullets 5장 연속 금지, big/quote로 쉼표) | **MISSING-VALUABLE** | docs/05 | **반영함** — 아래 §Canonical 보강 참고 |
| 10_web_deck_authoring_guide | §9 undefined 방지 체크리스트(필드별 점검表) | **MISSING-VALUABLE** | docs/08 | **반영함** — 아래 §Canonical 보강 참고 |
| 10_web_deck_authoring_guide | Box/Room 금지 어휘 구체 예시("책상으로 이동", "Lv1·Wanderer" 등) | EVIDENCE-ONLY | docs/05 (일반화된 목록으로 이미 존재) | 구체 사례는 당시 근거일 뿐 — 보존만 |
| 11_long_deck_navigation_validation | Card Fan/Resume 6-Section 실측 재확인 | PRESERVED | docs/03 | No action |
| 12_web_deck_time_profiles_v0.1 | Profile 30/60/90/120 표(Section/Slide/Navigator/Resume) | PRESERVED | docs/06 | No action |
| 12_web_deck_time_profiles_v0.1 | Content Density Role Mix(HOOK/GUARD/ACT/DEMO/PRACTICE 등) | EVIDENCE-ONLY | — | 이후 채택되지 않은 실험적 프레임워크 — 보존만 |
| 12_web_deck_time_profiles_v0.1 | Demo(발표자 주도) vs Practice(참가자 주도) 카피 구분 팁 | EVIDENCE-ONLY | docs/05 (Timing Planning에 개념은 있으나 이 팁은 없음) | v0.2 후보로만 기록 — 이번엔 반영하지 않음(비중 낮음) |
| 13_web_deck_completion_signal | Variant A/B/C ↔ Profile 30/60/90-120 매핑, XP/Rank/Confetti 금지 | PRESERVED | docs/07 | No action |
| 13_web_deck_completion_signal | Closing `link`을 Action 메커니즘으로 재해석(새 필드 없이) | **MISSING-VALUABLE** | docs/07 | **반영함** — 아래 §Canonical 보강 참고 |
| 13_web_deck_completion_signal | Closing 상태 QA 구체값(progress 100%, 마지막 dot 활성화) | **MISSING-VALUABLE** | docs/08 | **반영함** — 아래 §Canonical 보강 참고 |
| 13_web_deck_completion_signal | 특정 테스트 Deck 예문("믿되, 검증하라" 등) | APPLICATION-SPECIFIC | — | 보존만 |
| 14_ax_web_deck_standard_v0.1 | Sprint5 Canonical 전체 구조(Purpose/Non-goals/Architecture/…) | SUPERSEDED | docs/03(현재 버전) | 현재 문서가 더 간결한 후속판 — No action |
| 14_ax_web_deck_standard_v0.1 | §3 Architecture 체인 정정(Design DNA는 Engine 코드에 내장, Skin은 병렬 레이어, Time Profile은 저작 가이드) | **MISSING-VALUABLE** | docs/01 | **반영함** — 아래 §Canonical 보강 참고 |
| 14_ax_web_deck_standard_v0.1 | §9 "LONG-DECK ONLY→OPTIONAL" 용어 정정 이력 | EVIDENCE-ONLY | docs/03(이미 OPTIONAL로 정착) | Decision Traceability에 기록, 본문 반영 불필요 |
| 14_ax_web_deck_standard_v0.1 | §14 Customization Boundary(바꿔도 되는 것 vs 유지해야 하는 것) 표 | **MISSING-VALUABLE** | docs/03 | **반영함** — 아래 §Canonical 보강 참고 |
| 15_ai_attitude_content_source_inventory | AI_Attitude legacy 콘텐츠 소스 지도 | APPLICATION-SPECIFIC | docs/11 Application Registry | 보존만(다른 곳에 사본 없음) |
| 16_ai_attitude_webdeck60_content_map | 12 lesson → 19 slide content map(원본, 상세) | APPLICATION-SPECIFIC | AI_Attitude/docs/16(축약판 존재) | 보존만 — 이 사본이 더 상세한 원본 |
| 17_ai_attitude_golden_slice_comparison | Direction A/B 비교표, 결함 수정 이력, Golden 결정 근거 | APPLICATION-SPECIFIC | AI_Attitude/docs/17(축약판 존재) | 보존만 — 비교표·결함 이력은 이 사본에만 남아있음 |

## Canonical 보강 (실제 반영)

다음 4문항을 모두 통과한 항목만 반영했다.

```text
1. 여전히 현재 구조와 맞는가?
2. 이후 AI Attitude/Template 작업에서 뒤집힌 결정은 아닌가?
3. 특정 실험에만 해당하는 내용은 아닌가?
4. 실제 새 강의 제작에 도움이 되는가?
```

1. **docs/05 — 슬라이드 타입을 섞으라는 규칙 추가.** Visual Rhythm 원칙(docs/02)은 있었지만 "bullets를 5장 연속 쓰지 말라"는 실행 가능한 저작 규칙이 없었다. `10_web_deck_authoring_guide` §3에서 회수.
2. **docs/08 — undefined 방지 체크리스트 축약 반영.** 기존에는 "undefined/null 노출 0"이라는 결과 기준만 있었고 어디를 점검해야 하는지 목록이 없었다. `10_web_deck_authoring_guide` §9에서 핵심만 축약해 반영.
3. **docs/07 — Closing `link`을 Action으로 재사용할 수 있다는 문장 추가.** 새 필드를 만들지 않고 기존 계약을 재해석한 사례라 Content Contract를 늘리지 않고도 강의 저작자에게 유용하다. `13_web_deck_completion_signal` §3에서 회수.
4. **docs/08 — Closing QA에 "progress 100%·마지막 dot 활성화" 구체값 추가.** "closing state"라는 한 단어로는 무엇을 확인해야 하는지 알 수 없었다. `13_web_deck_completion_signal` §6에서 회수.
5. **docs/01 — Architecture 체인 정정 한 문단 추가.** Design DNA/Skin/Time Profile이 Engine과 어떤 관계인지(각각 독립된 하위 레이어가 아니라 Engine 코드에 내장/병렬/저작 가이드)에 대한 설명이 없어 새 Template을 만들 때 "Design DNA를 어디에 적용해야 하는가"가 불명확했다. `14_ax_web_deck_standard_v0.1` §3에서 회수.
6. **docs/03 — Customization Boundary 표 추가.** "무엇을 바꿔도 되고 무엇을 유지해야 하는가"를 한눈에 보여주는 표가 없었다. `14_ax_web_deck_standard_v0.1` §14에서 회수, Card Fan 등 현재 Web Deck에 없는 항목은 제외하고 재구성.

## 반영하지 않은 이유가 있는 MISSING 후보

- **HOOK/CONCEPT/COMPARE/CASE/GUARD/ACT 역할 어휘**(09, 12) — 질문 3(특정 실험 한정)에 걸린다. 현재 Content Contract는 의도적으로 열린 type을 유지하며, 이 역할 어휘는 그 이후 어떤 Sprint에서도 다시 쓰이지 않았다.
- **Demo/Practice 카피 프레이밍 팁**(12) — 질문 4는 통과하지만 비중이 낮고, 이미 docs/05 Timing Planning이 같은 개념(Lecture/Demo/Interaction/Practice/Break 구분)을 담고 있어 새 문장을 추가할 만큼 아니다. v0.2 후보로만 기록한다.
- **7종 slide type 고정 열거**(09) — 질문 2에 걸린다. 실제 `templates/web-deck/engine/deck-engine.js`가 이미 다른 type 집합을 쓰고 있어, 이 열거를 되살리면 오히려 구현과 문서가 어긋난다.

## Decision Traceability

`references/legacy_recovery_map.md`와 별개로, 다음 핵심 결정이 어느 Sprint의 어느 실측에서 나왔는지 추적한다.

| 결정 | 근거 Sprint/문서 |
|---|---|
| AX Lecture Experience / Web Deck 분리 | Sprint 1 `02_function_comparison`(5분류) → Sprint 5 `14` §2(Non-goals 표) |
| Room / Box 제거(Web Deck) | Sprint 2 `07` Experiment 2(Linear Deck 실측) |
| Card Fan = Long-Deck Optional | Sprint 2 `07` Experiment 3 → Sprint 3 `11`(6-Section 재검증) → Sprint 5 `14` §9(용어를 OPTIONAL로 정정) |
| Resume = Long-Deck Optional | Sprint 2 `07` Experiment 4(optional-safe 코드 실측) → Sprint 3 `09` §6 |
| 30/60/90/120 Profiles | Sprint 4 `12`(fixture 4종 실측) |
| Completion A/B/C | Sprint 4 `13`(Variant 3종 실측 비교) |
| Slide Count ≠ Time | Sprint 3 `10` §11, Sprint 4 `12` 서두 |
| Direction A Golden(AI Attitude) | Sprint 6 `17`(Direction A/B 비교, 기존 감사 대조) |
| AI Attitude = Application, not Source | Sprint 6 `15`(Content Source Inventory) — Standard 자체는 AI_Attitude 코드를 참조하지 않는다는 원칙의 근거 |
