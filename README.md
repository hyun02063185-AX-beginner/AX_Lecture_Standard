# AX Lecture Standard

AX Lecture Standard는 AI 강의 제작에 사용하는 공통 구조, 디자인 DNA, 웹 프레젠테이션 규칙, 과정형 학습 경험 규칙을 관리하는 Canonical Source이며, 독립 실행 가능한 재사용 Template도 제공한다.

```text
AX Lecture System
├─ AX Web Deck
│  └─ 일반 특강 / 발표 / 단일 세션 강의
└─ AX Lecture Experience
   └─ 과정형 / 학습형 / 체험형 강의
```

이 저장소는 네 부분으로 이루어진다.

```text
AX Lecture Standard
= Canonical Standards (docs/)
+ Reusable Templates (templates/)
+ Examples (examples/)
+ Evidence (evidence/)
+ Prototypes (prototypes/)
```

- **새 강의 제작** → [`templates/`](templates/)
- **현재 규칙 확인** → [`docs/`](docs/00_canonical_index.md)
- **왜 이런 결정인지 확인** → [`evidence/`](evidence/) (Source Audit, Visual Baseline, Design Experiments, AI Attitude 초기 연구)
- **실험 구현 확인** → [`prototypes/`](prototypes/README.md) — production template이 아니다

특정 강의의 실제 저장소·코드·최신 asset은 이 repository에 보관하지 않는다. 실제 적용 사례와 Source Asset은 [Application Registry](docs/11_application_registry.md) 및 [Source Asset Summary](references/source_asset_summary.md)로 추적한다. `evidence/`에 있는 스크린샷·프로토타입은 Standard가 왜 지금 형태가 됐는지 보여주는 과거 근거이며, 살아있는 최신 구현이 아니다.

- [AX Web Deck Template v0.1](templates/web-deck/README.md)
- [AX Lecture Experience Template v0.1](templates/lecture-experience/README.md)
- [Template Usage Guide](docs/12_template_usage_guide.md)
- [Canonical Gap Review](references/canonical_gap_review.md) — 초기 연구 자산과 현재 Canonical의 대조
- [Legacy Recovery Map](references/legacy_recovery_map.md) — 회수한 자산의 원본 → 현재 위치 추적

새 작업은 반드시 [Canonical Index](docs/00_canonical_index.md)부터 시작한다.
