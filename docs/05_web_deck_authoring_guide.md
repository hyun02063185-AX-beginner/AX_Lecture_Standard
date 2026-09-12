# Web Deck Authoring Guide

## Section은 콘텐츠 단위다

Section은 화면 한 장이 아니라 의미 있는 콘텐츠 묶음이다. 하나의 Section은 여러 Slide을 가질 수 있으며, Section 전환은 메시지·호흡·발표의 변화를 명확히 할 때 사용한다.

## Web Deck 언어

일반 Web Deck에서는 Room, Box, 방, 상자, 입장, unlock 같은 Experience 전용 언어를 기본적으로 쓰지 않는다. 선형 발표의 메시지와 청중의 이해를 우선한다.

## Slide Type Mixing

같은 유형(예: 설명형 목록)을 3~5장 연속으로 쓰지 않는다. 설명형 슬라이드 사이에 key-message나 quote 같은 "쉼표" 슬라이드를 배치해 [Visual Rhythm](02_design_dna.md)을 지킨다.

## Copy Voice

문장을 원고체에서 강의 화법으로 옮기는 세부 기준은 [Lecture Copy Style Guide](14_lecture_copy_style_guide_v0.1.md)를 따른다. "강사가 이 문장을 강의실에서 그대로 말해도 어색하지 않은가?"가 판정 기준이다.

## Opening → Closing Callback

Opening에서 던진 재료 하나를 Closing에서 반드시 회수 가능한 상태로 기록한다. 재료는 question, sentence, quote, problem, image, metaphor, story가 될 수 있다. Closing은 무관한 새 메시지를 덧붙이는 장이 아니라, Opening의 긴장을 회수하고 발표의 의미를 닫는 장이다.

## Timing planning

Slide 수는 강의 시간이 아니다. 계획과 rehearsal에서는 Lecture, Demo, Interaction, Practice, Break/Transition 시간을 분리해 기록한다. `estimatedMinutes`는 아직 engine metadata가 아니라 저작 관행이다.

## Authoring checklist

- 섹션과 슬라이드의 메시지 관계가 분명한가?
- Opening material이 Closing에서 회수되는가?
- 문장이 [Copy Style Guide](14_lecture_copy_style_guide_v0.1.md)의 화법 기준을 만족하는가?
- 콘텐츠 밀도와 화면 리듬이 발표 호흡에 맞는가?
- 링크는 외부 link contract를 따르는가?
- [QA Contract](08_web_deck_qa_contract.md)의 defect-free 기준을 만족하는가?
