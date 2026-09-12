# Prototypes

이 폴더는 **현재 production template이 아니다.** 새 강의는 여기서 복사해 만들지 않는다 — 실제 새 강의의 시작점은 [`templates/`](../templates/)다.

## 용도

이 폴더의 각 프로토타입은 Standard 결정 근거를 실제로 지워보고/만들어보고 검증하기 위한 실험 코드다.

- `web-deck-boundary/` — AX Lecture의 과정형 기능(Room/Box/Gamification)을 하나씩 제거하며 "어디까지 지워도 AX Design DNA가 유지되는가"를 검증한 Engine Boundary Experiment. Evidence: [`../evidence/design-experiments/07_engine_boundary_experiment.md`](../evidence/design-experiments/07_engine_boundary_experiment.md).
- `web-deck-contract/` — Deck/Section/Slide 데이터 계약과 Card Fan on/off, Resume on/off를 실제 fixture로 검증한 프로토타입. Evidence: [`../evidence/design-experiments/09_web_deck_content_contract_v0.1.md`](../evidence/design-experiments/09_web_deck_content_contract_v0.1.md), [`11_long_deck_navigation_validation.md`](../evidence/design-experiments/11_long_deck_navigation_validation.md).
- `web-deck-time-profiles/` — 30/60/90/120분 Time Profile fixture 4종. Evidence: [`../evidence/design-experiments/12_web_deck_time_profiles_v0.1.md`](../evidence/design-experiments/12_web_deck_time_profiles_v0.1.md), [`13_web_deck_completion_signal.md`](../evidence/design-experiments/13_web_deck_completion_signal.md).

각 프로토타입의 코드는 실험 당시 상태 그대로 보존한다 — 이후 Standard(`docs/`)나 Template(`templates/`)에 반영된 결정과 프로토타입 코드 자체가 문구·구현 디테일까지 반드시 일치하지는 않는다. **결정의 근거는 프로토타입이 아니라 `docs/`와 `evidence/`다.**

## 새 강의를 만들 때

```text
새 강의 제작   → templates/
현재 규칙 확인 → docs/
왜 이런 결정인지 → evidence/
실험 구현 확인 → prototypes/ (이 폴더)
```
