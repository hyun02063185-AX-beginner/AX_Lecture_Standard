# 11. Long Deck Navigation Validation

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/03_ax_web_deck_standard_v0.1.md](../../docs/03_ax_web_deck_standard_v0.1.md) (Card Fan / Resume LONG-DECK OPTIONAL classification).

**AX Lecture System Standardization — Sprint 3**
동일한 콘텐츠 데이터(`prototypes/web-deck-contract/js/fixture-b-sections.js`, 6 Sections)를 `presentation.sectionNavigator` 값만 바꿔 Card Fan OFF(`long-no-fan.html`)/ON(`long-fan.html`)으로 각각 실행하고 비교했다. 두 페이지는 **정확히 같은 `sections` 배열 참조**를 공유한다 — 콘텐츠를 복제하지 않았다.

---

## 비교표

| 평가 항목 | Card Fan OFF | Card Fan ON |
|---|---|---|
| 강의 전체 구조 파악 | Start 화면에는 "6개 주제"라는 텍스트만 있고 목록은 안 보임 — 구조는 진행하면서 체감 | Fan 진입 즉시 6장의 카드로 전체 구조가 한눈에 들어옴(`audit-assets/sprint3/long-fan/fan.png`로 확인) |
| 발표자 조작 부담 | Section 종료 시 "다음 ▶"(또는 "다음 섹션") 버튼 하나로 계속 진행 — 조작 단계 최소 | Section 종료 후 Fan으로 돌아가 다시 카드를 클릭해야 함 — Section마다 왕복 클릭 추가 |
| 청중 위치 인식 | 슬라이드 카운터("Section i/6")와 상단 라벨만으로 위치 파악 | 카운터에 더해 "펼쳐진 카드 더미 중 몇 번째"라는 공간적 위치 감각이 추가됨 |
| 클릭 수(6 Section 완주 기준) | 최소(각 Section 끝에서 다음으로 자동 연결 가능, Section당 0~1클릭) | Section당 Fan 왕복 1회씩 추가 — 총 클릭 수가 OFF보다 많음 |
| 시각적 가치 | Typography·배경·전환만으로도 밀도 있는 화면(Sprint 2 Exp2 결론과 동일) | 카드가 겹쳐 펼쳐지는 순간의 인상이 강함 — Design DNA Top 10의 "강한 첫인상" 항목이 6-Section 규모에서도 그대로 재현됨(`fan.png`) |
| 강의 리듬 | 선형적(설명→설명→설명, Section 경계는 cover/closing 슬라이드로만 표시) | Section마다 "개관→선택→몰입"이 반복되는 리듬 — 리듬 자체는 더 풍부하지만 반복이 잦으면 지루해질 위험도 있음(6회 반복 시 체감, 관찰 결과) |
| AX 정체성 기여 | Typography·레이어드 배경·전환 모션만으로도 AX 계열임이 느껴짐(Sprint 1.5 결론 재확인) | Card Fan 특유의 겹침·회전이 더해져 "AX Lecture답다"는 인상이 더 강함 |
| 긴 강의에서의 효용 | Section이 늘어날수록 "지금 몇 번째인지" 감각이 슬라이드 카운터에만 의존하게 됨 | Section이 늘어날수록 Fan이 제공하는 "전체 중 위치" 정보의 가치가 커짐 — 6개에서 이미 체감, Section이 더 많아지면(10개 이상 추정) 격차가 더 벌어질 것으로 예상되나 이번 Sprint는 6개 규모까지만 실측했음 |

## 실측 근거

- 콘솔 에러: 두 페이지 모두 0건(`--enable-logging=stderr`로 캡처, `docs/09` 작성 전 확인).
- 화면: `audit-assets/sprint3/long-no-fan/section1.png`(카운터 "Section 1/6" 정상 표시), `audit-assets/sprint3/long-fan/fan.png`(카드 6장 완전 렌더, 1440×900에서도 오버플로우 없음 — QA 확인).
- 데이터 동일성: `long-no-fan.html`과 `long-fan.html`은 `js/fixture-b-sections.js`를 함께 로드하고 `presentation` 블록만 다른 별도 파일(`fixture-b-nofan.js`/`fixture-b-fan.js`)을 덧붙이는 방식으로 구현했다 — 콘텐츠가 물리적으로 하나의 배열이므로 "같은 콘텐츠, 다른 presentation"이 코드 구조로 강제된다.

## 최종 분류 후보 (사용자 승인 전 확정 아님)

**LONG-DECK OPTIONAL.** Sprint 2의 잠정 판단(§4 배경)을 이번 6-Section 실측으로 재확인했다:

- CORE는 아니다 — Card Fan 없이도(OFF) 콘솔 에러 없이, 디자인 밀도 저하 없이 완주 가능함을 실측했다.
- EXPERIENCE ONLY도 아니다 — Room/Box 없이 순수 presentation 옵션만으로 Fan을 켤 수 있음을 실측했다(§7 결합 제거 결과와 완전히 독립).
- Section 수가 적을 때(3~4개, Fixture A)는 Fan의 "개관" 가치보다 왕복 클릭의 비용이 더 크게 느껴질 가능성이 높다(Sprint 2 §Experiment 3의 4-Section 관찰과 일치).
- Section 수가 많을 때(6개, 이번 Fixture B)는 "전체 구조 파악"과 "강한 첫인상" 가치가 뚜렷이 관찰되고, 클릭 수 증가라는 비용은 여전히 존재하지만 상대적으로 덜 부각된다.

**권고**: 30~60분 Deck(대략 Section 3~5개 추정)은 Card Fan OFF를 기본값으로, 90분 이상이거나 Section이 6개를 넘어가는 Deck은 OFF/ON을 발표자가 선택할 수 있는 옵션으로 제공한다. 정확한 Section 수 임계값(§Sprint 2에서 "6개 이상"으로 가설만 세웠던 지점)은 이번 실측으로도 확정할 수 없다 — 표본이 여전히 2개 지점(4개 vs 6개)뿐이기 때문이다. **§19에 따라 이번 Sprint에서도 자동 활성화 조건은 만들지 않았다** — 이 분류는 사람이 Deck을 만들 때 참고할 권고일 뿐, 엔진 코드 어디에도 "Section 개수" 조건문으로 반영되지 않았다.
