# 12. Web Deck Time Profiles v0.1

> Status: Superseded Draft — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/06_web_deck_time_profiles.md](../../docs/06_web_deck_time_profiles.md)

**AX Lecture System Standardization — Sprint 4**
이 문서는 최종 규격이 아니라 v0.1 초안이다. 하나의 Engine(`prototypes/web-deck-contract/`와 동일한 파일 — `js/deck-api.js`/`js/slides.js`/`js/fan.js`/`js/deck-main.js`를 바이트 단위로 동일하게 재사용) 위에서 4개 Profile fixture(`prototypes/web-deck-time-profiles/`)를 실행해 검증했다. **엔진 코드에는 시간·Section 개수에 대한 조건문이 없다** — 이 문서의 숫자는 전부 콘텐츠 저작 권장값이다.

기존 문서(`08`/`09`/`10`/`11`)와 충돌하는 결론은 없다. Sprint 3의 판단(Card Fan/Resume = presentation option, Progress = 항상 CORE)을 그대로 전제로 삼았다.

---

## Profile 표 (요약)

| Profile | Lecture Goal | Sections | Slide Range | Navigator | Resume | Demo | Practice |
|---|---|---:|---:|---|---|---|---|
| 30 | 핵심 메시지 하나를 확실히 전달 | 1 | Recommended 6~8 · Typical 6 · Upper caution 10 | none | false | 선택(사례로 대체 가능) | 없음 |
| 60 | 개념→사례→비교→대응까지 한 바퀴 | 1~2 | Recommended 10~14 · Typical 12 · Upper caution 16 | none(구조 복잡 시 예외 가능) | false | 선택 | 없음(짧은 실무 습관 슬라이드로 대체 가능) |
| 90 | 여러 기초를 깊이 있게, 실습 데모 포함 | 3~4 | Recommended 18~26 · Typical 22 · Upper caution 30 | none \| fan | false \| true | 권장 1개 이상 | 선택 |
| 120 | 강의 + 참여/실습 확장 | 5~7 | Recommended 26~34(강의) + 별도 실습 시간 · Typical 30 · Upper caution 38 | fan 권장 | true 권장 | 권장 1개 이상 | 권장 1개 이상(발표자 시연과 분리) |

이번 Sprint의 fixture 실측치: 30분=1 Section/7슬라이드, 60분=2 Section/12슬라이드, 90분=4 Section/22슬라이드(Demo 2개 포함), 120분=6 Section/24슬라이드+Practice 1개. 모두 위 Typical 범위 안에 들어온다 — 단 fixture는 "구조 검증용"이지 실제 시간 소요를 재현한 것이 아니므로(§6 원칙), Recommended/Upper caution 값은 AX_Lecture 원본의 강의당 슬라이드 수(Sprint 1 감사에서 확인한 강 평균 약 13~14장)를 참고해 추정한 것이며 실제 리허설 데이터로 교정이 필요하다(Sprint 1 §05, Sprint 2 §04와 동일한 한계).

## §4 요구 축별 상세

### Duration / Learning Goal

- **30**: "이것 하나만 기억하고 가세요." 정보 전달보다 태도·관점 전환이 목표.
- **60**: 개념을 이해시키고 실무에 바로 붙일 수 있는 지점까지 데려간다. `AI를 대하는 태도`가 이 Profile의 첫 실제 적용 후보(작업 지시서 §5).
- **90**: 여러 개념을 연결해 깊이를 만든다. 발표자 시연(Demo)으로 "직접 보여주는" 비중이 커진다.
- **120**: 강의만으로 채우지 않는다 — 참가자가 직접 손을 움직이는 Practice가 구조적으로 들어간다.

### Section Complexity

- 30: Section 1개 고정에 가까움(주제를 쪼갤 시간적 여유가 없음).
- 60: 1개(단일 흐름)도, 2개(문제 인식→실무 대응처럼 전후반 분리)도 가능 — 이번 fixture는 후자로 검증.
- 90: 3~4개, Section마다 독립적인 소주제(왜/문턱/태도/프롬프트처럼 서로 다른 기초 개념).
- 120: 5~7개, Section 간 독립성이 더 높아 발표자가 순서를 바꿔 진행할 가능성도 생긴다(§9 Card Fan 판단과 연결).

### Content Density / Slide Role Mix

§7 역할 분류를 그대로 썼다. 실제 fixture에서 관찰한 필수/권장/선택:

| Profile | 반드시 있어야 함 | 권장 | 선택 |
|---|---|---|---|
| 30 | HOOK, KEY_MESSAGE, CLOSE(one message) | CASE 1개 | CONCEPT, ACT |
| 60 | HOOK, KEY_MESSAGE, CONCEPT, CLOSE | CASE, COMPARE | ACT, GUARD |
| 90 | HOOK(Section별), KEY_MESSAGE, CONCEPT, CASE, CLOSE(Section별) | DEMO 1개 이상, COMPARE | GUARD, ACT |
| 120 | 위 90의 전부 + PRACTICE 1개 이상 | DEMO, GUARD | — (선택 항목이 사실상 소진됨 — 120은 거의 모든 역할을 아우름) |

### Navigation / Resume — §8 재검증 결과

작업 지시서 §8의 초기 가설을 그대로 채택했다 — 이번 fixture 실행으로 반증되지 않았다:

- 30/60: `sectionNavigator:"none"`, `resume:false`로 콘솔 에러 없이 정상(profile-30/60 fixture 실측).
- 90: `sectionNavigator:"fan"`, `resume:true`로 설정해 "가치가 생기는가"를 관찰 — Fan 진입 시 4장 카드가 정상 렌더(`audit-assets/sprint4/profile-90/fan.png`). Sprint 3 §11의 결론(LONG-DECK OPTIONAL)과 일치하게, 4-Section 규모에서는 Fan이 있어도 되고 없어도 되는 수준으로 관찰됨 — 90은 "경계 지대"라는 기존 판단이 재확인됐다.
- 120: `sectionNavigator:"fan"`, `resume:true`로 6장 카드가 정상 렌더(`audit-assets/sprint4/profile-120/fan.png`). Section 수가 90보다 많아지면서 "지금 몇 번째 주제인지"에 대한 Fan의 개관 가치가 90보다 뚜렷해짐(Sprint 3 §11 비교표와 같은 패턴).

**중요**: 이 값들은 Profile별 **기본값 후보**일 뿐이다. §9에 따라 "Section 개수 임계값" 같은 자동 규칙은 만들지 않았다 — `js/deck-main.js`/`js/fan.js`에는 Section 수를 세는 코드가 없다(Sprint 3과 동일하게 재확인).

### Demo / Practice 시간 배분 원칙 (§16)

- **Demo**(발표자 시연)와 **Practice**(참가자 직접 수행)를 슬라이드 문구 수준에서 명확히 구분했다 — 90분 fixture는 "실습 데모 · 지금 화면을 함께 봅니다"(발표자 주도), 120분 fixture는 "짧은 실습(10분) · 발표자 시연이 아니라 직접 해보는 시간입니다"(참가자 주도)로 서로 다른 프레이밍을 썼다(`audit-assets/sprint4/profile-90/demo-slide.png` vs `.../profile-120/practice-slide.png`).
- 90분은 Demo를 Slide 사이에 끼워 넣는 방식(Slide Time 안에 포함)으로도 충분히 표현됐다.
- 120분은 Practice에 "몇 분"이라는 시간 표기(예: "10분")를 슬라이드 자체에 명시하는 것이 발표자에게 유용하다는 것을 fixture 작성 중 확인했다 — Slide 자체는 짧지만 실제 소요 시간은 Slide 개수로 드러나지 않기 때문이다. 이는 "Slide Time ≠ 실제 소요 시간"이라는 것을 구조로 보여준 사례이며, 다음 Sprint에서 Slide 메타데이터에 "예상 소요 시간" 같은 필드를 고려할 근거가 된다(단, 이번 Sprint에서 확정하지 않음, §21).
- 120분이 "강의만 채우지 않는다"는 원칙은 fixture 구조(6 Section 중 마지막에 Practice 삽입)로 실증했지만, 실제 시간 배분(예: 강의 90분+실습 30분 vs 강의 100분+실습 20분)은 리허설 데이터 없이 결정할 수 없다 — §19에서 다시 명시.
