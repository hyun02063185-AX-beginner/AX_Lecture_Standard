# 16. AI Attitude → Web Deck 60 Content Map

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`. This is the original, detailed Sprint 6 analysis (lesson-by-lesson content mapping table). The `AI_Attitude` repository now keeps a condensed, rewritten version at `AI_Attitude/docs/16_ai_attitude_webdeck60_content_map.md` — the two are no longer identical; this copy has the fuller original reasoning.

**AX Lecture System Standardization — Sprint 6**
기준 Profile(`docs/12`, `docs/14` §11): `Duration:60 · sectionNavigator:none · resume:false · Completion:Variant B(Callback)`.

---

## Opening Seed / Closing Callback

```
Opening Seed:
  Lesson 1의 question을 그대로 가져온다 —
  "AI가 일을 해주면, 나는 무엇을 맡아야 할까?"
  (js/data.js lesson id:1, 가공 없음)

Closing Callback:
  Opening의 질문을 다시 던진 뒤, Lesson 1의 message("AI는 손을 돕고,
  방향은 내가 정한다")와 Lesson 12의 message·takeaway("AI가 정리하고,
  나는 실제와 맞는지 검토한다" / "정리본에는 항상 실제와 대조하는
  마지막 눈이 필요하다")로 답한다. 12개 레슨을 관통하는 하나의 문장
  ("판단과 최종 확인은 사람의 몫이다")으로 수렴시킨다 — 새 주장이
  아니라 기존 12개 레슨이 이미 반복해온 결론을 Closing 한 장으로
  모은 것이다.

Section 1: 맡기기 전에 세우는 기준 (Lesson 1-6, 원 box "운전석"+"기준을 세우는 책상")
Section 2: 맡긴 뒤 확인하고 남기는 것 (Lesson 7-12, 원 box "실험대"+"기록실")
```

Section 제목은 원본 box 4개의 theme 문구("주도권과 이해", "목적·흐름·완료 기준", "검증과 원인 찾기", "이해·재질문·기록·검토")를 그대로 묶어 "맡기기 전/맡긴 뒤"라는 자연스러운 전후 구조로 재구성했다 — 새 주장을 추가하지 않았다. Room 언어("방")는 쓰지 않았다(`docs/10` §4).

## 콘텐츠 압축 원칙

12개 레슨의 `title`/`message`/이미지는 전부 화면에 남긴다. `description`(설명 문단)은 **발표자가 구두로 전달하는 내용**으로 재분류하고 슬라이드 화면 텍스트에는 넣지 않는다 — Restrained Composition(`docs/14` §6)과 "Slide 수 ≠ 강의 시간"(`docs/12` §16, `docs/10` §11) 원칙에 따른 판단이다. `takeaway`는 개별 슬라이드가 아니라 Section 끝의 회고(recap) 슬라이드에 모아 다시 보여준다 — 이것이 Visual Rhythm의 "쉼표" 역할을 한다(`docs/03`).

이 결정으로 슬라이드 수는 16장이 된다 — `docs/12`의 60분 Typical(~12장)보다 많다. **의도적 초과다**: 12개의 독립된 짧은 레슨(각 3~4분 분량)을 압축 없이 보존하려면 16장이 12장보다 실제로 더 자연스러운 호흡을 만든다(장당 약 3.75분, `docs/10` §11 Timing Planning 원칙과 일치). 억지로 12장에 맞추려면 레슨을 합치거나 잘라야 했을 것이다 — "정확히 맞추기 위해 콘텐츠를 억지로 자르지 않는다"는 지시에 따라 초과를 선택했다.

## Content Map 표

| 순서 | 원본 위치 | 원본 내용 | 새 역할 | Slide Type | 처리 |
|---|---|---|---|---|---|
| 1 | `index.html` Start view + Lesson 1 `question` | eyebrow/title/lead + "AI가 일을 해주면, 나는 무엇을 맡아야 할까?" | OPEN(Opening Seed) | cover | 재배치 — Room 언어("네 개의 방") 제거, "이어보기 지원" 제거 |
| 2 | Lesson 1 (`id:1`) | 운전석은 누구인가 / message / 이미지 | UNDERSTAND | image | 유지(title+message as caption+image) |
| 3 | Lesson 2 | 먼저 그려야 할 지도 | UNDERSTAND | image | 유지 |
| 4 | Lesson 3 | 이해의 최소선 | UNDERSTAND | image | 유지 |
| 5 | Lesson 4 | 이유를 적어둔다 | UNDERSTAND | image | 유지 |
| 6 | Lesson 5 | 흐름을 말해본다 | UNDERSTAND | image | 유지 |
| 7 | Lesson 6 | 끝의 모습을 정한다 | UNDERSTAND | image | 유지 |
| 8 | Lesson 1-6 `takeaway` 6개 | 각 레슨의 takeaway 문장 | CLOSE(Section 회고) | bullets | 재배치 — Section 1 6개 takeaway를 목록으로 재구성(신규 문장 없음) |
| 9 | Lesson 7 (`id:7`) | 세 개의 잣대 | UNDERSTAND/EXPERIENCE | image | 유지 |
| 10 | Lesson 8 | 직접 눌러본다 | EXPERIENCE(CASE 성격) | image | 유지 |
| 11 | Lesson 9 | 문제를 좁힌다 | EXPERIENCE | image | 유지 |
| 12 | Lesson 10 | 답도 이해해야 한다 | ACT | image | 유지 |
| 13 | Lesson 11 | 다음의 나에게 | ACT | image | 유지 |
| 14 | Lesson 12 | 기록을 검토한다 | ACT/CLOSE 재료 | image | 유지, message·takeaway는 Closing에서 재인용 |
| 15 | Lesson 7-12 `takeaway` 6개 | 각 레슨의 takeaway 문장 | CLOSE(Section 회고) | bullets | 재배치 |
| 16 | Opening seed + Lesson 1/12 message·takeaway | — | CLOSE(Callback) | closing | 신규 조합(§Opening Seed/Closing Callback, 새 주장 없음) |

> **구현 시 보강 1**: Section은 항상 cover 슬라이드로 시작하는 것이 기존 Authoring 관행이다(`docs/10` §2). 위 표의 9번(Lesson 7) 앞에 **Section 2 자체 cover 슬라이드**(kicker "Section 2", title "맡긴 뒤 확인하고 남기는 것", subtitle은 원 box3+box4 theme 결합 "검증과 원인 찾기 · 이해·재질문·기록·검토")를 추가했다 — 새 주장이 아니라 순수 구조 전환용.
>
> **구현 시 보강 2**: 초안(16 슬라이드)은 cover/image/bullets/closing 4종에 그쳐 Slide Type Rhythm 실패 조건(작업 지시 §18)에 걸렸다. 각 Section의 recap 직전에 `quote` 슬라이드를 1개씩 추가했다 — Lesson 4의 message("목적은 모든 선택의 기준점이다.")와 Lesson 9의 message("기대와 실제의 차이로 범위를 먼저 좁힌다.")를 그대로 인용했다(새 문장 없음, 기존 message 필드 재사용). 실제 구현은 총 **19 슬라이드**(표의 16 + Section 2 cover 1 + quote 2)가 된다.

## Presentation Options

```
sectionNavigator: none   — 2개 Section, 순차 진행. Fan 불필요(docs/14 §9: 30/60은 기본 OFF)
resume: false            — 기존 localStorage "이어보기" 기능은 60분 단일 세션 전제와 맞지 않아 끔(docs/14 §10)
completion: Variant B    — Callback Closing(docs/13 §3, 위 §Closing Callback)
```

## 확인 사항

- **Canonical Content Source 우선**: `js/data.js`의 실제 필드명(`message`/`takeaway`/`description`/`question`)을 그대로 인용했다. 재해석하거나 새로 쓰지 않았다.
- **UI-coupled Content 배제**: Room/Box/Card 카운트 표현은 전부 제거했다(`docs/15` §UI-coupled Content).
- **link 필드**: 원본에 없었으므로 이번 Closing에도 억지로 추가하지 않았다(`docs/15` §Reusable Asset 결론 유지).
