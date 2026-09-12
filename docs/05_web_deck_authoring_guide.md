# Web Deck Authoring Guide

## Recommended authoring flow

새 강의는 다음 흐름으로 설계한다.

```text
Topic
→ Learning Question
→ Audience Context
→ Optional Knowledge Map
→ Freshness Review
→ Teaching Route
→ Instructor Grounding
→ Lecture Voice
→ Deck Structure
→ Slide Authoring
```

[Knowledge Map](15_lecture_knowledge_map_authoring_standard_v0.1.md)은 선택 사항이지만, 여러 기술 개념의 관계, 시간에 따른 변화, 최신성 검토가 강의 이해에 중요한 경우 먼저 만드는 것을 권장한다. 단일 기능 설명이나 매우 짧은 실습처럼 관계가 거의 없는 강의에는 강제하지 않는다. Map 전체를 슬라이드로 옮기지 말고, 이번 Deck에서 실제로 설명할 Teaching Route를 선택한다.

강사 개인 경험·사례·의견·판단을 쓸 때는 [Instructor Grounding & Audience-Aware Lecture Voice](16_instructor_grounding_and_audience_voice_v0.1.md)를 적용한다. AI는 이를 만들지 않으며, 제공되거나 확인된 근거만 정리해 Audience에 맞는 화법으로 옮긴다. Audience Context가 이미 충분히 알려졌다면 다시 묻지 않는다.

## Section은 콘텐츠 단위다

Section은 화면 한 장이 아니라 의미 있는 콘텐츠 묶음이다. 하나의 Section은 여러 Slide을 가질 수 있으며, Section 전환은 메시지·호흡·발표의 변화를 명확히 할 때 사용한다.

## Web Deck 언어

일반 Web Deck에서는 Room, Box, 방, 상자, 입장, unlock 같은 Experience 전용 언어를 기본적으로 쓰지 않는다. 선형 발표의 메시지와 청중의 이해를 우선한다.

## Slide Type Mixing

같은 유형(예: 설명형 목록)을 3~5장 연속으로 쓰지 않는다. 설명형 슬라이드 사이에 key-message나 quote 같은 "쉼표" 슬라이드를 배치해 [Visual Rhythm](02_design_dna.md)을 지킨다.

## Copy Voice

문장을 원고체에서 강의 화법으로 옮기는 세부 기준은 [Lecture Copy Style Guide](14_lecture_copy_style_guide_v0.1.md)를 따른다. 개인 경험과 관점의 출처·Audience Context는 [Instructor Grounding & Audience-Aware Lecture Voice](16_instructor_grounding_and_audience_voice_v0.1.md)를 먼저 따른다. "강사가 이 문장을 강의실에서 그대로 말해도 어색하지 않은가?"는 Grounded 내용과 사실을 유지한 뒤의 화법 판정 기준이다.

## Opening → Closing Callback

Opening에서 던진 재료 하나를 Closing에서 반드시 회수 가능한 상태로 기록한다. 재료는 question, sentence, quote, problem, image, metaphor, story가 될 수 있다. Closing은 무관한 새 메시지를 덧붙이는 장이 아니라, Opening의 긴장을 회수하고 발표의 의미를 닫는 장이다.

## Timing planning

Slide 수는 강의 시간이 아니다. 계획과 rehearsal에서는 Lecture, Demo, Interaction, Practice, Break/Transition 시간을 분리해 기록한다. `estimatedMinutes`는 아직 engine metadata가 아니라 저작 관행이다.

## Authoring checklist

- 섹션과 슬라이드의 메시지 관계가 분명한가?
- Opening material이 Closing에서 회수되는가?
- 문장이 [Copy Style Guide](14_lecture_copy_style_guide_v0.1.md)의 화법 기준을 만족하는가?
- 개인 경험·사례·관점이 확인된 Source에 근거하는가?
- 수강생의 수준과 목적에 맞는 Lecture Voice인가?
- 콘텐츠 밀도와 화면 리듬이 발표 호흡에 맞는가?
- 링크는 외부 link contract를 따르는가?
- [QA Contract](08_web_deck_qa_contract.md)의 defect-free 기준을 만족하는가?
