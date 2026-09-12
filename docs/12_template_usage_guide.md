# Template Usage Guide

## Choose a family

Choose **Web Deck** for a general talk, presentation, or single-session lecture with Deck → Section → Slide flow. Choose **Lecture Experience** when participants need a Hub, Module/Lesson navigation, progress awareness, or participant-led practice. Do not add Experience features to a Deck merely for visual novelty.

## Start a new project

1. Copy `templates/web-deck/starter/` or `templates/lecture-experience/starter/` as a complete folder.
2. Change only the starter data file, `skin.css`, and local `assets/` first.
3. Select a provided Skin or make a project Skin that preserves [Design DNA](02_design_dna.md).
4. Run a local static server, for example `python -m http.server 8000`.
5. Perform browser QA at 1440 × 900 and create the new lecture's own repository.

주제의 관계, 변화, 또는 최신성 검토가 중요하면 starter를 채우기 전에 [Lecture Knowledge Map Authoring Standard](15_lecture_knowledge_map_authoring_standard_v0.1.md)를 검토한다. 이는 선택적 Content Architecture 단계이며 template이나 Engine을 수정하는 지시가 아니다.

강의 방향을 크게 바꿀 정보가 불명확하면 [Clarification & Assumption Control](17_clarification_and_assumption_control_v0.1.md)에 따라 필요한 확인만 먼저 한다. template의 디자인·navigation·transition 기본값은 Standard Default로 적용하며 재확인하지 않는다.

The copied starter has no runtime dependency on this repository or any Reference Project. Do not link to a parent Standard repository from production code.

## Entrance Transition

```text
Entrance Transition
= AX Entry Warp
```

Both starters include the [AX Entry Warp](13_ax_entry_transition_standard_v0.1.md) by default, wired through `#deck-cover` / `#experience-cover` and `engine/entry-transition.js`. Do not author a separate entrance transition for a new lecture — the shared warp keeps the entry feel consistent across the whole AX Lecture family. If a project has a specific reason to deviate (a different destination callback is fine; a different geometry/duration/easing is not), record it as an Application-specific Decision rather than silently diverging.

## Content and options

Web Deck content follows [Content Contract](04_web_deck_content_contract.md). Use [Time Profiles](06_web_deck_time_profiles.md) as recommendations, choose navigator/resume explicitly, and create an Opening → Closing callback according to [Authoring Guide](05_web_deck_authoring_guide.md). Write the actual copy following the [Lecture Copy Style Guide](14_lecture_copy_style_guide_v0.1.md) — natural spoken voice over lecture-note phrasing, one judgment question: would a presenter actually say this line out loud?

Experience content uses neutral Experience → Module → Lesson data. Enable practice or resume only when the learning goal needs them. Room and Box may be a user-facing metaphor but must not become a mandatory data model.

## Before deployment

- no `undefined` / `null`, broken asset, or clipped content
- keyboard, touch/navigation, progress, chrome, and fullscreen logic checked
- optional features checked both OFF and at least one ON path
- if the Deck has a return-to-Entrance interaction, the [Restart Test](08_web_deck_qa_contract.md#restart--re-entry) passes (repeated restarts land on first slide, initial progress, no stale DOM intercepting clicks)
- Opening/Closing relation checked for Web Deck
- copy passes the [Copy Style Guide](14_lecture_copy_style_guide_v0.1.md) spoken-voice check
- no references to `AI_Attitude`, `AX_Lecture`, `AI_First_Step`, or `Codyssey_Lecture`
- independent static-server run succeeds after copying the starter
