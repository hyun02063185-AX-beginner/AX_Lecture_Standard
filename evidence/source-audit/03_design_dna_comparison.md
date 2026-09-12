# 03. Design DNA Comparison

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/02_design_dna.md](../../docs/02_design_dna.md)

"예쁘다"가 아니라 재현 가능한 근거(파일 경로·셀렉터·수치)로 비교한다. 근거는 서브에이전트 원 보고서(01 문서에서 파일:라인 인용).

## 비교표

| Design DNA | AX Lecture | AI FirstStep | Codyssey Lecture | 판단 |
|---|---|---|---|---|
| **Spatial Composition** | "사유의 방" 룸 메타포. z-index 계층: bg-canvas(0)→vignette(1)→scene(2)→HUD(20)→fan(40)→warp(60)→toc(120)→celebrate(200). 모든 scene 중앙정렬(flex center) | 동일 z-index/중앙정렬 패턴. Box 그리드는 상대적으로 더 평면적(4-up grid, depth 단서는 hover-lift뿐)이나 Fan 오버레이는 동일하게 공간적 | 동일 z-index/중앙정렬 패턴, AX와 사실상 동일 | **공통 DNA**: 평면이 아니라 레이어드 공간. Fan 오버레이가 "진짜 공간적인 순간"이라는 점이 3곳 모두 일치 — 표준으로 남길 근거 강함 |
| **Card Geometry** | 216×304px, radius는 스킨 종속(14/16/0/2/18px), fan spread 40° 총합, transform-origin 50% 320%(카드 아래 피벗), hover는 회전 유지한 채 `translateY(-70px) scale(1.05)`("커서에서 도망가지 않게" 주석) | 수치·transform-origin·hover 로직까지 완전 동일 | 수치까지 완전 동일 | **공통 DNA, 수치까지 일치** — 가장 강한 재현 가능 증거. "회전을 유지한 채 든다"는 의도적 선택이 3곳 모두에서 보존됨 |
| **Typography** | Title clamp(3.2rem,9vw,7rem) w700 ls.14em / Section 2.2rem w700 ls.1em / Lesson 1.24rem w700 lh1.38 / Body clamp(1.15rem,2vw,1.4rem) lh1.55 / Caption .86rem / Key-message(big) clamp(2.8rem,6.2vw,4.6rem) w700 + glow(스킨종속) | 수치 완전 동일 | 수치 완전 동일 | **공통 DNA, 수치까지 일치**. 강조는 굵기 단독이 아니라 크기+letter-spacing+모노폰트 라벨+스킨조건부 glow의 조합 — 3곳 모두 동일한 강조 문법 |
| **Depth** | z-index 스택 + hover lift(box: translateY(-10px)scale(1.02), card: -70px+scale1.05) + box-shadow 승격(--shadow→--shadow-hover) | 동일 | 동일 | **공통 DNA** — "호버 시 그림자·위치·스케일이 동시에 바뀐다"는 depth 문법이 통일됨 |
| **Background Architecture** | 배경이 곧 서사: 캔버스 드로우 루프가 스킨별로 완전히 다른 장면(neon=성운+별, sayu=금빛 별, paper/blueprint=CSS 텍스처에 위임)을 그림. "방/전시" 메타포가 카피·전환·배경 전체에 일관 적용 | 동일 메커니즘이나 **서사가 다름**: office→sunset을 "출근 아침→퇴근 노을"이라는 근무일 서사로 재해석(레벨업으로 잠금 해제되는 스킨 자체가 스토리 payoff) | 동일 메커니즘(같은 "방" 메타포 카피·전환 유지)이지만 **콘텐츠(OS/커널)와 서사가 어긋남** — 룸 메타포 엔진은 그대로인데 다루는 주제가 이질적 | **메커니즘은 CORE(캔버스 스킨 분기), 서사·의미는 콘텐츠 종속**. AI FirstStep은 서사를 능동적으로 재해석해 성공한 사례, Codyssey Lecture는 엔진만 재사용하고 서사 재해석 없이 사용한 사례 — 이 차이가 "디자인 만족도" 차이의 핵심 단서(§05 참조) |
| **Light / Glow** | `--glow-*` 토큰이 5개 스킨 중 neon·sayu 2곳에만 존재(나머지 none), `--blur`도 neon만 실제 값 | 동일 원칙(7개 스킨 중 neon/sunset/sayu만 glow 보유) | 동일 원칙(neon/sayu만) | **공통 DNA**: glow/blur를 "전체가 아니라 일부 스킨에만 예약"하는 절제 원칙이 3곳 모두 일치 — 화려함을 과용하지 않는 것 자체가 Design DNA |
| **Transition** | Scene전환 .7s opacity+scale / Card선택 .32s cubic-bezier(.22,.61,.36,1) no-bounce / Warp입장 1.6s cubic-bezier(.45,0,.2,1) / Fan딜인 stagger(40+i*60)ms / sayu스킨 전체 2배 슬로우 | 메커니즘 완전 동일. 단, `fxLevel:"calm"`이 Warp와 셀러브레이트 컨페티를 억제(플레인 260ms 페이드로 대체) — "톤을 낮추는" 의도적 튜닝 | 메커니즘 완전 동일, `fxLevel:"full"` 유지 | **메커니즘은 CORE(모든 전환에 "왜 움직이는가"가 분명함), 강도(fxLevel)는 조정 가능한 축**으로 이미 검증됨 — 표준 엔진에 fxLevel 같은 강도 레버를 정식 반영할 근거 |
| **Visual Rhythm** | Intro(휴식)→Start(집중)→Warp(문턱)→Room(개관)→Fan(선택, 딜인 의식)→Slides(bullets 설명 중심, big/quote가 리듬상 쉼표, closing이 다음 예고)→Celebrate(보상, 완주시에만) | 동일 리듬 구조. `fxLevel:calm`으로 보상 비트의 세기만 낮춤 | 동일 리듬 구조 | **공통 DNA** — 5단계(집중-선택-설명-휴식-전환) 리듬이 3곳 모두 동일하게 관찰됨. 슬라이드 타입 분포(bullets 다수, big/quote/closing이 드문 쉼표)도 동일 패턴 |
| **Mobile Metaphor** | 저높이 landscape 전용 레이아웃 재작성(카드/타이포/HUD 축소), HUD는 축소 시 요소를 숨김(줄바꿈이 아니라 은닉) | 동일 패턴 | 동일 패턴 | **공통 DNA** — "모바일에서도 별도 공간 레이아웃을 새로 그린다"는 원칙(단순 리플로우가 아님)이 일치 |

## 판단 요약

1. **Card Geometry·Typography·Fan 모션 수치는 세 프로젝트에서 값 단위로 완전히 일치한다.** 이는 우연이 아니라 하나의 엔진 코드베이스가 그대로 복제·재사용되었다는 강한 물증이며, 동시에 "이 값들이 곧 AX Lecture Design DNA의 재현 가능한 정의"라는 뜻이다.
2. **Background Architecture만 유일하게 프로젝트별로 "의미"가 갈린다.** 메커니즘(캔버스 스킨 분기)은 동일하지만, AI FirstStep은 서사를 능동적으로 재해석했고 Codyssey Lecture는 콘텐츠 도메인이 바뀌었는데도 룸 메타포 카피를 그대로 두어 엔진-콘텐츠 간 서사적 접합이 약하다. 이는 "AX Lecture의 디자인 만족도가 어디서 오는가"에 대한 핵심 단서다.
3. **Glow/Blur를 전체가 아니라 일부 스킨에만 예약하는 절제 원칙**은 세 프로젝트 모두에서 지켜지고 있다 — 이것 자체가 표준으로 명문화할 가치가 있는 Design DNA다.
4. **fxLevel(강도) 축은 이미 실전에서 검증된 조정 레버다.** AI FirstStep이 calm 톤으로 스스로를 낮춘 사례는, 표준 엔진이 "스킨(색/폰트)"과 별개로 "강도(모션 세기)"라는 두 번째 변주 축을 가져야 함을 보여준다.
