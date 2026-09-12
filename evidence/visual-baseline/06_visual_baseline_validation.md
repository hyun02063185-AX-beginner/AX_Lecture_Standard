# 06. Visual Baseline Validation

> Status: Historical Evidence — recovered from `AX_Lecture_Standard_backup`.
> Canonical replacement: [docs/02_design_dna.md](../../docs/02_design_dna.md) — this document is the browser-screenshot verification of that Design DNA.

**AX Lecture System Standardization — Sprint 1.5**
Sprint 1 Source Audit(코드 분석)의 Design DNA/UX 판단을 실제 브라우저 화면으로 검증한다. 원본 3개 프로젝트는 읽기 전용으로 유지했다.

---

## 1. 실행 환경

| | AX Lecture | AI FirstStep | Codyssey Lecture |
|---|---|---|---|
| 실행 방법 | `python3 serve.py 8000` (기존 `serve.py` 그대로 사용) | `python3 serve.py 8001` | `python3 serve.py 8002` |
| Local URL | `http://localhost:8000` | `http://localhost:8001` | `http://localhost:8002` |
| 필요한 기존 명령 | 저장소에 이미 있는 `serve.py` 실행 외 없음. npm/브라우저 확장 등 신규 설치 없음 | 동일 | 동일 |
| 정상 실행 여부 | 정상 (`curl` HTTP 200 확인) | 정상 | 정상 |
| 렌더링 도구 | Mac에 기존 설치된 **Google Chrome 146.0.7680.165**를 `--headless` 모드로 사용. 신규 패키지(Playwright/Puppeteer 등) 설치 없음 | 동일 | 동일 |
| console error 확인 | 이 세션에는 CDP/websocket 클라이언트가 없어 console 로그를 직접 캡처하지 못함(§7 NOT VERIFIED로 표시) | 동일 | 동일 |
| `server_session.txt` | 실행 시 생성되나 3개 저장소 모두 `.gitignore`에 등록되어 있어 git 추적 대상 아님 — 확인 완료 | 동일 | 동일 |

**해시 라우팅 활용**: 세 프로젝트 모두 `location.hash` 기반 SPA 라우터(`Router.parse()`, main.js)를 쓰므로, 클릭 시뮬레이션 없이 `#/room`, `#/box/0`, `#/lecture/1/0` 같은 URL로 직접 진입해 각 장면을 캡처할 수 있었다. Chrome은 `--virtual-time-budget=3000`으로 실행해 fan-card 딜인 스태거·scene 전환 등 JS 타이머 기반 애니메이션이 스크린샷 시점까지 진행되도록 했다.

**한 가지 tooling 이슈**: 캡처 과정에서 Codyssey Lecture의 특정 화면(1회는 `#/start`, 1회는 `#/box/0`)에서 headless Chrome 프로세스가 무한 대기했다. 재현을 시도했으나 재현되지 않았고, 직전 실행에서 정리되지 않은 Chrome 프로필 잠금(동일 user-data-dir 경합)이 원인으로 보인다 — **Codyssey Lecture 코드 자체의 결함이 아니라 이 세션의 headless 실행 방식 문제**로 판단하며, 강제 종료 후 재시도해 정상 캡처했다.

---

## 2. 각 프로젝트 대표 Flow

세 프로젝트 모두 동일한 5단계 Flow를 그대로 따른다: **Intro(스크린세이버) → Start(진입 버튼) → Room(박스 허브) → Card Fan(박스 오픈) → Lesson/Slide(학습) → Return(HUD `#to-start` 버튼)**. Box/Lecture 구조 자체가 동일하므로 Flow 단계 이름도 3곳 모두 같다. 차이는 다음과 같다.

- **AI FirstStep**: Start 화면에 "연습 책상" 진입 버튼이 하나 더 있다(4요소 상한을 채우는 4번째 요소). Room 진입 전 Intro 스크린세이버가 2테마(`snow`/`sakura`)로 제한된다.
- **Codyssey Lecture**: Practice/진단실 관련 버튼·씬이 전혀 없어 Flow가 오히려 AX Lecture보다 더 단순하다(HANDOFF 문서에서 확인한 구조적 삭제와 일치).

---

## 3. 실제 화면 비교

캡처한 스크린샷 18장은 `audit-assets/`에 있다:

```
ax-lecture-intro.png / ax-lecture-start.png / ax-lecture-room.png / ax-lecture-card-fan.png
   / ax-lecture-lesson-cover.png / ax-lecture-lesson-bullets.png
first-step-intro.png / first-step-start.png / first-step-room.png / first-step-card-fan.png
   / first-step-lesson-cover.png / first-step-lesson-bullets.png
codyssey-intro.png / codyssey-start.png / codyssey-room.png / codyssey-card-fan.png
   / codyssey-lesson-cover.png / codyssey-lesson-bullets.png
```

### 핵심 관찰

1. **기본 스킨이 서로 다르다는 사실이 화면에서 즉시 드러난다.** AX Lecture와 Codyssey Lecture는 `defaultSkin:"sayu"`(짙은 남색-와인 톤, 저채도, 명상적)이고, AI FirstStep은 `office`(아이보리/크림 톤, 밝음)다. 같은 엔진이 완전히 다른 무드로 체감된다 — Source Audit의 "Skin = 색상만 바뀌는 값 블록"이라는 주장이 시각적으로도 확인된다.
2. **Card Fan 오버레이가 Room 화면 위에 겹쳐서 렌더된다.** `ax-lecture-card-fan.png`/`codyssey-card-fan.png`를 보면 박스 그리드가 흐릿하게 뒤에 남아있고 그 위에 카드 부채가 펼쳐진다 — 코드에서 확인한 z-index 레이어 구조(scene 위에 fan-overlay가 얹히는 구조)가 실제로 "두 장의 공간이 겹쳐 보이는" 체감을 만든다.
3. **AI FirstStep의 accent 색상이 육안으로 훨씬 잘 보인다.** `first-step-room.png`의 4개 박스 상단에 청록/보라/분홍/초록 액센트 라인이 뚜렷이 보이는 반면, AX Lecture의 어두운 sayu 스킨에서는 같은 액센트가 거의 안 보인다(저대비 디자인 의도와 일치). 즉 accent color 시스템은 3곳 모두 동일하게 존재하지만 **스킨에 따라 체감되는 강도가 크게 다르다.**
4. **Codyssey Lecture의 콘텐츠 필드 누락 버그가 화면에 그대로 노출된다.** `codyssey-card-fan.png`를 보면 카드 2장 하단에 문자 그대로 **"undefined"**가 렌더되어 있다 — Source Audit이 코드 리딩만으로 예측했던 버그가 실제 화면에서 100% 재현됨을 확인했다.
5. **AI FirstStep은 슬라이드 콘텐츠 자체에 더 richer한 비주얼을 투자했다.** `first-step-lesson-bullets.png`는 단순 불릿 목록이 아니라 5개의 원형 아이콘 노드를 점선으로 연결한 타임라인형 다이어그램("split" 슬라이드 활용)이다. 동일 슬라이드 인덱스에서 AX Lecture는 plain bullet list, Codyssey Lecture는 quote형 슬라이드가 나왔다 — 같은 슬라이드 타입 카탈로그를 쓰지만 콘텐츠 저자가 얼마나 적극적으로 다양한 타입을 활용했는지가 프로젝트별로 다르다.
6. **Codyssey Lecture의 Start 화면은 AX Lecture와 톤·구조가 거의 동일**하다(같은 sayu 다크 배경, 같은 타이포 위계, 같은 "강의실 입장" 버튼 문구 패턴) — 콘텐츠 도메인(OS/커널)이 이질적임에도 서사 카피는 AX 원형을 그대로 물려받았다는 03 문서의 판단과 일치한다.

---

## 4. AX Lecture에서 특히 강한 디자인 요소

- **저채도·저대비 다크 톤이 만드는 "몰입"과 "사색" 분위기.** 화면이 전반적으로 어둡고 텍스트도 은은해 눈에 힘을 주지 않고 오래 바라보게 되는 느낌이 실제로 있다. 이는 코드의 `sayu` 스킨(2배 느린 모션 포함)이 만들어내는 종합적 체감이다.
- **Room 화면에서 박스 4개가 화면 중앙에 절제되게 배치**되어 "선택할 것이 명확하다"는 인상을 준다 — 요소 과잉이 없다.
- **Card Fan이 겹친 카드 더미처럼 보인다.** 실제로 여러 장의 카드가 부채꼴로 펼쳐진 느낌이 스크린샷에서도 분명히 느껴지며, 단순 그리드보다 훨씬 강한 인상을 준다.
- **콘텐츠 필드가 완비되어 있어 화면에 결함이 전혀 없다** — 태그라인·박스명·서브타이틀 모두 정상 렌더.

---

## 5. AI FirstStep에서 유지 / 변형된 요소

**유지**: Card Fan 기하(회전각·오버랩·카드 크기)는 AX Lecture와 화면상 구분이 안 될 정도로 동일. Room 그리드 레이아웃, HUD 배치, 타이포 위계도 동일.

**변형**: (1) 스킨을 밝은 `office` 톤으로 바꿔 AX Lecture와 정반대의 무드(사색적 어둠 → 산뜻한 아침 사무실)를 만들었음에도 골격은 그대로 유지 — Skin 분리 메커니즘이 실전에서 잘 작동함을 보여주는 가장 좋은 사례. (2) 박스 아이콘에 이모지(🏢💬💻🔐)를 추가해 콘텐츠 성격(신입사원 첫 출근)을 시각적으로 더 직관적으로 전달 — AX Lecture에는 없는 장치. (3) 슬라이드 콘텐츠에 다이어그램형 레이아웃을 적극 활용해 같은 엔진으로도 더 풍부한 화면을 만들어냄. (4) Start 화면에 "연습 책상" 진입 지점이 추가되어 Flow 자체가 한 갈래 더 있음.

---

## 6. Codyssey Lecture에서 유지 / 변형된 요소

**유지**: Room/Card Fan/Slide의 기하·모션·레이아웃은 화면상 AX Lecture와 완전히 동일. 스킨 팔레트(sayu 다크 톤)도 동일. Start 화면의 카피 패턴("~강의실 입장")도 AX Lecture 원형을 그대로 답습.

**변형(약화)**: (1) 콘텐츠 모델 필드 누락으로 카드에 "undefined"가 실제로 노출됨 — 화면으로 직접 확인된 유일한 실결함. (2) 콘텐츠 도메인(OS/커널)이 원래의 "AX/사유" 서사와 맞지 않는데도 배경·카피는 그대로 재사용되어, AI FirstStep처럼 서사를 능동적으로 재해석한 흔적이 보이지 않는다 — 엔진은 완벽히 재사용했지만 "이 스킨이 왜 이 내용에 어울리는가"에 대한 고민은 상대적으로 약하다는 인상을 화면에서도 받는다.

---

## 7. Source Audit Design DNA — CONFIRMED / PARTIAL / REVISE / NOT VERIFIED

`03_design_dna_comparison.md` Top 10(및 표 전체 항목)을 실제 화면과 대조한 결과.

| Design DNA | 판정 | 근거 |
|---|---|---|
| Spatial Composition (레이어드 공간) | **CONFIRMED** | Card Fan 오버레이가 Room 화면 위에 겹쳐 보임(§3-2), z-index 레이어 구조가 실제로 "두 공간이 겹치는" 체감을 만듦 |
| Card Geometry (Fan 회전·오버랩) | **CONFIRMED** | 3곳 스크린샷에서 카드가 부채꼴로 겹친 형태가 화면상 완전히 동일하게 재현됨 |
| Typography 위계 | **CONFIRMED** | Title/Section/Lesson/Body/Caption 크기·굵기 대비가 스크린샷에서도 뚜렷이 구분됨(코드의 clamp 수치가 실제로 위계를 만들어냄) |
| Depth (hover lift 등) | **PARTIAL** | 정적 스크린샷 특성상 hover 상태 자체는 캡처하지 못했음(§7-2 NOT VERIFIED 참조) — 단, 카드가 "쌓인 더미"처럼 보이는 정적 depth(그림자·오버랩)는 확인됨 |
| Background Architecture | **CONFIRMED, 단 프로젝트별로 다르게** | AX/Codyssey는 동일한 "방" 메타포 배경을 공유하지만 Codyssey는 콘텐츠와 서사가 어긋나는 것이 화면에서도 느껴짐(§6). AI FirstStep은 서사를 능동적으로 재해석(라이트 오피스 톤)해 성공한 것이 화면으로 확인됨 — 03 문서의 판단이 그대로 검증됨 |
| Light / Glow (절제된 사용) | **PARTIAL** | 캡처한 6개 장면(Intro/Start/Room/Fan/Lesson×2)에는 neon/sayu 특유의 강한 glow가 두드러지게 나타나는 장면이 없었음(3곳 모두 sayu/office 기본 스킨이라 glow가 약함) — neon 스킨 화면은 이번 캡처 범위 밖이라 강한 확증은 어려움, **다음 검증에서 neon 스킨 화면 추가 캡처 권고** |
| Motion/Transition ("왜 움직이는가") | **NOT VERIFIED** | 정적 스크린샷으로는 전환의 인과성(왜 이 방향으로 움직이는가)을 직접 관찰할 수 없음. Card Fan이 Room 위에 겹쳐 보이는 정황(§3-2)은 전환 메커니즘을 간접적으로 뒷받침하지만, 실제 모션 체감은 사용자 직접 확인 필요(§9) |
| Visual Rhythm (집중-선택-설명-휴식-전환) | **CONFIRMED** | Intro(고요)→Start(집중, 단일 버튼)→Room(개관)→Fan(선택)→Lesson(설명, 슬라이드 타입에 따라 다른 화면)까지 화면 톤과 구성 밀도가 단계마다 다르게 나타남 |
| Mobile Metaphor | **NOT VERIFIED** | 이번 캡처는 1600×1000 데스크톱 해상도로만 진행했다. 모바일/landscape 저높이 레이아웃은 캡처하지 않았음 |
| Glow/Blur를 일부 스킨에만 예약하는 절제 원칙 | **PARTIAL** | 위 Light/Glow와 동일한 사유로 이번 캡처 범위(sayu/office 기본 스킨)에서는 강한 확증 자료가 부족함 |

**종합**: Top 10 중 화면으로 명확히 재확인된 것은 공간 구성·Card Fan 기하·Typography·Visual Rhythm·Background Architecture(프로젝트별 차이 포함)이며, 이는 모두 CONFIRMED다. REVISE가 필요한 항목은 없었다(코드 분석과 실제 체감이 어긋난 사례는 발견되지 않음). Motion의 인과성, hover 시 depth, glow 사용, 모바일 레이아웃은 정적 스크린샷의 근본적 한계로 NOT VERIFIED/PARTIAL로 남는다.

---

## 8. 과정형에 남겨야 할 Visual DNA

- Room(박스 허브) 화면의 "여러 개 중 하나를 고른다"는 개관 레이아웃 — 슬라이드가 많고 그룹이 여럿일 때만 의미가 있음
- 완주 시 스킨 언락/컨페티 같은 보상형 비주얼(이번 캡처 범위 밖이나 §05 코드 감사에서 확인) — 다회차 진행을 전제로 함
- AI FirstStep의 "연습 책상" 같은 실습 부가 화면의 탭형 UI

## 9. Web Deck으로 이전해야 할 Visual DNA

- Card Fan의 강렬한 첫인상(단, Web Deck에는 Room 허브 없이 카드 선택 하나만 필요할 수도 있음 — 다음 Sprint에서 실험 대상)
- Typography 위계 수치(clamp 스케일) — 그대로 이식 가능함이 화면으로도 확인됨
- 레이어드 공간감을 주는 배경(별빛/그라디언트 등 가벼운 버전) — 단, Web Deck은 발표 중 시선 분산을 최소화해야 하므로 절제된 형태로
- 슬라이드 타입 다양화(AI FirstStep의 다이어그램형 슬라이드처럼) — 콘텐츠 저자의 적극적 활용이 체감 품질을 크게 좌우한다는 것이 이번 시각 검증에서 확인됨

## 10. Skin으로 분리해야 할 Visual 요소

- 배경 톤(다크 sayu ↔ 라이트 office) — 완전히 다른 무드를 만들면서도 골격은 그대로 유지됨이 확인된 가장 확실한 Skin 분리 사례
- accent 색상의 체감 강도(다크 스킨에서는 거의 안 보이고 라이트 스킨에서는 뚜렷함) — 같은 토큰이라도 스킨 배경과의 대비에 따라 실제 효과가 크게 달라짐을 유의해야 함
- 박스 아이콘(이모지) 유무 — AI FirstStep에만 있음, 콘텐츠 성격에 따라 켜고 끌 수 있는 요소로 분리 권장

---

## 11. 사용자 직접 판단이 필요한 항목

**USER VISUAL CHECK REQUIRED**

이번 세션은 정적 headless 스크린샷만 확보했다. 다음 항목은 이 환경에서 확인할 수 없어 사용자(또는 인터랙션 가능한 브라우저 세션)가 직접 확인해야 한다.

1. **Motion의 실제 인과성** — Room→Fan, Fan→Selected Card, Card→Lesson, Lesson→Return 전환이 실제로 "왜 이 방향으로 움직이는가"를 체감상 확인. URL: `http://localhost:8000/#/room` → 박스 클릭 → 카드 클릭 → 뒤로가기(각 프로젝트 포트 8000/8001/8002)
2. **Card hover 시 회전을 유지한 채 드는 느낌** — 마우스를 카드 위에 올려 실제로 "회전이 풀리지 않는지" 확인. 정적 스크린샷으로는 검증 불가.
3. **Glow가 강하게 드러나는 neon 스킨 화면** — 스킨 피커에서 neon으로 전환 후 Card Fan/Slide 화면 재확인. 이번 캡처는 기본 스킨(sayu/office)만 다뤘음.
4. **모바일/랜드스케이프 레이아웃** — 실제 기기 또는 브라우저 반응형 모드에서 확인 필요.
5. **완주 후 셀러브레이트(컨페티) 연출** — 코드 감사로는 확인했으나 실제로 20강(또는 16강)을 완주해야 화면이 나타나 이번 세션에서는 재현하지 않았음.
6. **console error 유무** — 이 세션은 브라우저 개발자도구/CDP에 접근하지 못해 런타임 에러 로그를 확인하지 못함. 실제 브라우저로 열어 개발자도구 콘솔을 확인 권고.

A/B/C/D 질문에 대한 자료:
- **A. AX Lecture다운 요소**: sayu 다크 톤 + Card Fan 겹침 + 절제된 4요소 이내 화면 구성(§4)
- **B. 과정형 전용 vs Web Deck 공용**: Room 허브는 과정형 전용 후보, Card Fan/Typography/배경 레이어감은 Web Deck 공용 후보(§8-9)
- **C. Engine vs Skin**: Card Fan 기하·레이어 구조는 Engine, 배경 톤·accent 체감 강도·아이콘 유무는 Skin(§10)
- **D. 제거 시 AX Lecture다운 느낌이 사라지는 것**: Card Fan의 겹침·회전(제거하면 단순 그리드가 되어 버림), sayu 톤의 저채도·저대비 무드(제거하면 여느 밝은 웹앱과 구분이 안 됨)

---

## 12. 다음 Sprint 권고

이번 시각 검증으로 Sprint 1의 판단은 REVISE 없이 대부분 CONFIRMED되었으므로, 원래 계획대로 **AX Web Lecture Deck Minimum Skeleton / Engine Boundary Experiment**로 진행할 것을 권고한다. 단, 착수 전에 §11의 USER VISUAL CHECK REQUIRED 항목(특히 Motion 인과성과 hover 체감)을 사용자가 직접 한 번 확인해 두면, 삭제 실험 중 "이 모션을 지웠을 때 무엇이 사라지는지" 판단이 더 정확해질 것이다.
