# 13. Web Deck Completion Signal

> Status: Superseded Draft — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/07_web_deck_completion_signal.md](../../docs/07_web_deck_completion_signal.md)

**AX Lecture System Standardization — Sprint 4**
Sprint 2에서 확인된 사실을 출발점으로 삼는다: 과정형 Gamification(Completion celebration)을 제거해도 기능상 문제는 없었지만 "끝났다는 체감"이 약해졌다(`docs/07_engine_boundary_experiment.md` Experiment 4). 이번 Sprint는 그 체감을 과정형 연출(XP/Rank/Confetti/Unlock) 없이 어떻게 만들 수 있는지 실측했다.

---

## 1. 과정형 Completion과 Web Deck Completion의 차이

| | 과정형(AX Lecture Experience) | Web Deck |
|---|---|---|
| 신호 종류 | 별도 오버레이(`#celebrate`) + 캔버스 컨페티 + 레벨업 문구 | 마지막 슬라이드 자체가 신호 |
| 트리거 | 전체 Progress(N/전체)가 100%가 된 순간 | Section의 마지막 슬라이드에 도달한 순간(Deck 전체 완주 개념 없음) |
| 반복 가능성 | 회독마다 다시 발생(레벨 상승) | 1회성 — 발표/열람이 끝나면 그걸로 끝 |
| 금지 사항 | — | XP, Rank, Confetti, Unlock, "수료 완료" 같은 LMS 용어(§15) |

## 2. Closing의 역할 (§12 재확인)

Closing 슬라이드는 콘텐츠 계약(`09_web_deck_content_contract_v0.1.md`)에서 `title`(필수)+`teaser`(선택)+`link`(선택) 세 필드만 가진 평범한 슬라이드 타입이지만, 이번 Sprint의 3개 Variant 비교에서 이 세 필드의 조합만으로 Callback/One Message/Action 중 2~3개 기능을 실제로 구현할 수 있음을 확인했다 — **새 필드나 새 슬라이드 타입을 추가하지 않았다.**

## 3. A/B/C 비교

세 Variant를 각기 다른 Time Profile fixture의 실제 마지막 슬라이드로 구현하고 스크린샷으로 비교했다(`audit-assets/sprint4/profile-{30,60,90}/closing-*.png`).

### A — Simple Closing (Profile 30에 적용)

```javascript
{ type: 'closing', title: '믿되, 검증하라' }
```

`title`만 채우고 `teaser`/`link`는 비웠다. 화면에는 큰 제목 한 줄만 남는다(`closing-A.png`) — One Message 기능만 가진다. Callback도 Action도 없다.

**관찰**: 30분처럼 Section이 1개뿐이고 발표 자체가 짧을 때는 Callback을 위한 "회수할 오프닝 재료"를 따로 설계할 여유가 부족하다. One Message 하나만으로도 화면이 허전해 보이지 않는다 — Typography 자체(대형 타이틀)가 충분한 무게를 만든다.

### B — Callback Closing (Profile 60에 적용)

```javascript
{
  type: 'closing', title: '믿되, 검증하라',
  teaser: '"문제는 AI가 틀리는 게 아니라, 우리가 안 틀렸다고 믿는 것이다" — 오늘 던진 이 질문을 검증 습관 4가지로 답했습니다.'
}
```

Section 1의 오프닝 quote 슬라이드("문제는 AI가 틀리는 게 아니라...")를 `teaser`에서 문자 그대로 인용해 회수했다(`closing-B.png`). One Message(title) + Callback(teaser) 두 기능.

**관찰**: 콘텐츠 저작 단계에서 "이 Deck의 오프닝 문장이 무엇인지"를 작성자가 기억하고 있어야 회수가 가능하다 — 엔진이 자동으로 해주는 기능이 아니다(`10_web_deck_authoring_guide.md`에 반영 필요, §21 다음 Sprint 후보).

### C — Callback + Action Closing (Profile 90/120에 적용)

```javascript
{
  type: 'closing', title: '구체적으로 주면 구체적으로 나온다',
  teaser: '오늘 다룬 네 가지 — ... 다음 행동: 프롬프트 4요소 체크리스트를 오늘 업무 하나에 바로 적용해보세요.',
  link: { url: '...', label: '체크리스트로 쓸 4요소 도식 다시 보기' }
}
```

One Message + Callback(전체 Section을 요약 회수) + Action(다음 행동 문장 + `link` 버튼) 세 기능 모두. 화면에 텍스트 블록 2단 + 링크 버튼까지 보여 A/B보다 시각적으로 "무겁다"(`closing-C.png`, `profile-120/closing-C.png`).

**관찰**: `link`를 Action의 구체적 실행 수단으로 재해석해 썼다 — 원래 §12(Sprint 3)의 link 계약은 "외부 자료 연결"이 목적이었지만, Closing의 Action 기능과 자연스럽게 결합됐다. 새 필드를 만들지 않고 기존 계약을 다른 맥락에 재사용한 사례.

## 4. 권장 Completion Signal

| Profile | 권장 Variant | 이유 |
|---|---|---|
| 30 | A(Simple) | Callback 재료를 설계할 여유가 부족하고, 화면이 허전해 보이지 않음을 확인 |
| 60 | B(Callback) | 단일 Deck 안에서 오프닝-클로징 순환 구조를 만들 분량이 됨 |
| 90 | C(Callback + Action) | Section이 여러 개라 "오늘 다룬 것 전체"를 요약할 필요가 생기고, 실무 적용 유도(Action)의 가치가 커짐 |
| 120 | C(Callback + Action) | 90과 동일 논리, Practice가 있었다면 Action을 "방금 실습 결과를 어떻게 쓸지"로 구체화할 수 있음(실측: `profile-120/closing-C.png`가 실습 내용을 직접 참조) |

**단, 이것은 권장값이지 강제 규칙이 아니다** — Closing Variant를 정하는 조건문은 엔진 어디에도 없다. 콘텐츠 작성자가 Deck 성격에 따라 자유롭게 선택한다.

## 5. Motion 원칙

새 모션을 만들지 않았다. 기존 slides.js의 **Chrome 자동 숨김**(마우스 비활성 약 1.4~2초 후 상단바·하단 네비가 사라지는 기존 기능, Sprint 1 감사에서 이미 문서화됨)이 완주 여부와 무관하게 모든 슬라이드에서 동일하게 작동한다는 것을 이번 Sprint에서 재확인했다(virtual-time-budget을 3000ms/300ms로 다르게 캡처해 비교 — `closing-A.png`는 chrome이 사라진 상태, `closing-A-chrome-visible.png`는 같은 화면에서 chrome이 아직 보이는 상태).

**결론**: Completion 전용 모션을 새로 만들 필요가 없다 — 마지막 슬라이드에서도 발표 중이라면 Chrome이 다시 나타나고(마우스를 움직이면), 청중에게 보여줄 때는 자연히 사라져 텍스트에 집중된다. 이는 "마지막 화면이라는 상태 변화를 인지시키는" 목적(§14)을 기존 메커니즘이 이미 충족하고 있다는 뜻이다. **새로운 과도한 효과는 만들지 않았다.**

## 6. Progress End State

마지막 슬라이드에서 진행률 바가 실제로 끝까지 채워지고, 슬라이드 dot 네비게이션의 마지막 점이 활성 상태로 표시됨을 확인했다(`closing-A-chrome-visible.png`에서 상단 진행바 전체 폭, 하단 dot 마지막 점 강조 확인). "다음 ▶" 버튼은 다음 Section이 없으면 자동으로 비활성화된다(기존 `nextSectionOf()` 로직, 코드 변경 없음).

`수료 완료` 같은 LMS 용어는 어디에도 쓰지 않았다 — Progress는 그저 "지금 몇 번째 화면인지"를 보여주는 중립적 표시이며, 마지막 화면에서 그 숫자가 끝에 도달했다는 사실 자체가 완료 신호로 기능한다. 별도의 "수료증"·"완료 뱃지" 개념은 도입하지 않았다.

## 7. 금지 패턴

다음은 이번 Sprint에서도, 앞으로도 Web Deck Completion Signal에 쓰지 않는다(작업 지시서 §11 그대로):

```text
XP 증가 애니메이션
Rank/Level 뱃지
Confetti/폭죽 캔버스
Skin Unlock 알림
"수료 완료" · "완주 축하" 같은 LMS 학습관리 문구
```

이유: Web Deck은 1회성 발표/열람이 전제이며, 보상형 연출은 "여러 번 돌아와 레벨을 올리는" 과정형 경험에서만 의미가 있다(Sprint 1 Design DNA 감사, Sprint 2 Experiment 1 결론과 일치).
