# Canonical Index

이 문서는 AX Lecture Standard의 시작점이다. 새 작업자는 과거 대화나 Sprint 산출물을 역추적하는 대신 이 Index와 연결된 Canonical 문서를 먼저 읽는다.

## Canonical

1. [AX Lecture System Overview](01_ax_lecture_system_overview.md)
2. [Design DNA](02_design_dna.md)
3. [AX Web Deck Standard v0.1](03_ax_web_deck_standard_v0.1.md)
4. [Web Deck Content Contract](04_web_deck_content_contract.md)
5. [Web Deck Authoring Guide](05_web_deck_authoring_guide.md)
6. [Web Deck Time Profiles](06_web_deck_time_profiles.md)
7. [Web Deck Completion Signal](07_web_deck_completion_signal.md)
8. [Web Deck QA Contract](08_web_deck_qa_contract.md)
9. [AX Lecture Experience Standard v0.1](09_ax_lecture_experience_standard_v0.1.md)
10. [Standard Change Policy](10_standard_change_policy.md)
11. [AX Entry Transition Standard v0.1](13_ax_entry_transition_standard_v0.1.md)
12. [AX Lecture Copy Style Guide v0.1](14_lecture_copy_style_guide_v0.1.md)
13. [Lecture Knowledge Map Authoring Standard v0.1](15_lecture_knowledge_map_authoring_standard_v0.1.md)
14. [Instructor Grounding & Audience-Aware Lecture Voice v0.1](16_instructor_grounding_and_audience_voice_v0.1.md)
15. [Clarification & Assumption Control v0.1](17_clarification_and_assumption_control_v0.1.md)

## Reference

- [Source Asset Summary](../references/source_asset_summary.md)
- [Decision History Summary](../references/decision_history_summary.md)
- [Application Registry](11_application_registry.md)
- [Canonical Gap Review](../references/canonical_gap_review.md)
- [Legacy Recovery Map](../references/legacy_recovery_map.md)

## Reusable Templates

- [Web Deck Template v0.1](../templates/web-deck/README.md)
- [Lecture Experience Template v0.1](../templates/lecture-experience/README.md)
- [Template Usage Guide](12_template_usage_guide.md)
- [Template Extraction Audit](../references/template_extraction_audit.md)
- [Template Source Provenance](../references/template_source_provenance.md)

## Supporting Evidence

이 문서들은 Canonical이 아니다 — 왜 위 규칙이 지금 형태가 됐는지 보여주는 과거 근거이며, 규칙 자체는 항상 위 Canonical 절이 우선한다.

- [Source Audit](../evidence/source-audit/) — 3개 원본 프로젝트(AX Lecture/AI FirstStep/Codyssey Lecture) 코드 감사
- [Visual Baseline Validation](../evidence/visual-baseline/) — Design DNA의 실제 브라우저 검증
- [Design Experiments](../evidence/design-experiments/) — Engine Boundary, Content Contract, Time Profile, Completion Signal 실험(당시 초안 포함)
- [AI Attitude Golden Research](../evidence/ai-attitude/) — 첫 Golden Application이 어떻게 만들어졌는지의 근거
- [Prototypes](../prototypes/README.md) — 위 실험의 실제 실행 코드(production template 아님)

## Reading order

먼저 System Overview와 Design DNA로 계열의 경계를 정한다. 요청에 결과를 크게 바꿀 불확실성이 있으면 [Clarification & Assumption Control](17_clarification_and_assumption_control_v0.1.md)로 필요한 확인만 먼저 한다. 주제의 관계·변화·최신성 검토가 중요하면 [Lecture Knowledge Map Authoring Standard](15_lecture_knowledge_map_authoring_standard_v0.1.md)로 Content Architecture를 잡는다. 강사 경험·관점 또는 Audience에 맞는 화법이 중요하면 [Instructor Grounding & Audience-Aware Lecture Voice](16_instructor_grounding_and_audience_voice_v0.1.md)를 함께 적용한다. 이후 Web Deck 또는 Experience 중 해당 Family의 Standard를 읽고, Content Contract·Authoring·Time·Completion·QA를 적용한다. 개별 사례는 Reference로 판단 근거를 확인하되, Reference가 Canonical 규칙을 덮어쓰지 않는다.
