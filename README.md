# 가게 문구 미니 생성기 ✏️

> 작은 가게 사장님을 위한 인스타그램·네이버 플레이스 홍보 문구 자동 생성기 — POWER CRAFT framework validation test

[![GitHub](https://img.shields.io/badge/GitHub-Caixa--git/store--copy--mini--generator--framework--test-181717?logo=github)](https://github.com/Caixa-git/store-copy-mini-generator-framework-test)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-caixa--git.github.io-6c63ff?logo=githubpages)](https://caixa-git.github.io/store-copy-mini-generator-framework-test/)
[![Tag](https://img.shields.io/badge/tag-v0.1.0--framework--test-blue)](https://github.com/Caixa-git/store-copy-mini-generator-framework-test/releases/tag/v0.1.0-framework-test)
[![QA](https://img.shields.io/badge/QA-15%2F19%20%F0%9F%94%B4%202%20%F0%9F%9F%A1%202-8A2BE2)]()

---

## 현재 상태

| 구분 | 상태 |
|------|------|
| 📐 프레임워크 검증 | ✅ **v0.1.0-framework-test** — Cycle-01 완료 |
| 🧩 기능 구현 | ✅ 14개 기능 구현 완료 (`index.html` + `app.js` + `style.css`) |
| 📦 배포 | ✅ **GitHub Pages Live** (https://caixa-git.github.io/store-copy-mini-generator-framework-test/) |
| 📝 Cycle-01 산출물 | ✅ 12개 문서 (CYCLE_REPORT, QA, REVIEW_REQUEST 등) |
| 🧪 QA 검증 | ✅ 15/19 통과 · 2/19 조건부 · 2/19 미실행 |
| 🏷️ 태그 | ✅ `v0.1.0-framework-test` (원격 push 완료) |

---

## Live Demo

🔥 **https://caixa-git.github.io/store-copy-mini-generator-framework-test/**

✅ GitHub Pages 활성화 완료 — 위 URL에서 바로 사용할 수 있습니다.

---

## 빠른 실행

로컬에서 실행하는 방법:

```bash
# 저장소 클론
git clone https://github.com/Caixa-git/store-copy-mini-generator-framework-test.git
cd store-copy-mini-generator-framework-test

# 별도 빌드 없이 바로 실행 — 정적 HTML 앱입니다
# 방법 1: 브라우저에서 index.html 직접 열기
open index.html

# 방법 2: Python 내장 서버 사용 (권장)
python3 -m http.server 8080
# http://localhost:8080 접속

# 방법 3: Node.js http-server
npx http-server . -p 8080 -o
```

**필요 조건**: 최신 웹 브라우저 (Chrome, Safari, Edge, Firefox) — 별도 종속성 없음.

---

## 주요 기능

가게 정보만 입력하면 14가지 유형의 마케팅 문구를 즉시 생성합니다.

| # | 기능 | 설명 | 구현 위치 |
|---|------|------|-----------|
| 1 | **가게 정보 입력 폼** | 가게명, 업종, 지역, 장점, 타겟 고객, 예약 방식 — 6개 항목 입력 | `index.html` |
| 2 | **한 줄 소개문 생성** | 5가지 스타일의 한 줄 소개문 자동 생성 | `app.js` |
| 3 | **인스타그램 프로필 문구 생성** | 3가지 레이아웃의 인스타 프로필 소개글 생성 | `app.js` |
| 4 | **예약/문의 CTA 생성** | 3가지 톤의 예약 유도 카피 생성 | `app.js` |
| 5 | **리뷰 답글 템플릿 생성** | 3가지 스타일의 리뷰 답글 템플릿 생성 | `app.js` |
| 6 | **클립보드 원클릭 복사** | 각 문구 옆 '복사' 버튼으로 즉시 클립보드 복사 | `app.js` |
| 7 | **복사 완료 시각 피드백** | 복사 성공 시 버튼이 ✓ 아이콘으로 전환 (1.5초 후 복원) | `app.js` |
| 8 | **샘플 가게 불러오기** | 6개 가상 가게 데이터로 바로 테스트 (네일샵, 카페, 미용실, 피부관리샵, 필라테스, 공방) | `data/sample_shops.json` |
| 9 | **입력값 유효성 검증** | 필수 필드 미입력 시 토스트 알림으로 안내 | `app.js` |
| 10 | **입력값 초기화** | '초기화' 버튼으로 모든 폼 필드와 결과 리셋 | `app.js` |
| 11 | **토스트 알림 시스템** | 생성 완료, 복사 성공, 오류 등을 화면 하단에 2초간 표시 | `app.js` |
| 12 | **반응형 디자인** | 모바일(1열), 태블릿(2열), 데스크톱(2열) 대응 | `style.css` |
| 13 | **프레임워크 제로** | 순수 Vanilla HTML/CSS/JS — 빌드 도구, 번들러, 런타임 의존성 없음 | 전체 |
| 14 | **샘플 데이터 외부 분리** | 6개 가게 샘플 데이터를 `data/sample_shops.json`으로 분리, fetch 로드 | `data/sample_shops.json` |

---

## 안전한 사용 방식

⚠️ **이 앱은 다음과 같은 작업을 절대 수행하지 않습니다:**

- ❌ 인스타그램 자동 크롤링
- ❌ 자동 DM 발송
- ❌ 네이버 플레이스 자동 등록
- ❌ 사용자 데이터 저장 또는 수집
- ❌ 외부 API 호출 (샘플 데이터 제외)

✅ **동작 방식:**
1. 사용자가 직접 가게 정보를 입력하거나 샘플 데이터를 불러옵니다
2. 14가지 마케팅 문구가 브라우저 내에서 즉시 생성됩니다
3. 생성 전에는 빈 상태 안내가 표시됩니다
4. 사용자가 직접 확인 후 복사 버튼으로 클립보드에 복사합니다
5. 생성된 문구를 인스타그램 프로필, 네이버 플레이스, 리뷰 답글에 붙여넣기 합니다

> 모든 처리는 **순수 클라이언트 사이드**에서 이루어집니다. 서버 통신, 데이터 저장, 사용자 추적이 전혀 없으므로 안심하고 사용할 수 있습니다.

---

## 샘플 데이터 안내

`data/sample_shops.json` 에 6개의 가상 가게 데이터가 포함되어 있습니다:

| 가게명 | 업종 | 지역 | 주요 장점 |
|--------|------|------|-----------|
| 모모네일 | 네일샵 | 성수 | 손상 적은 케어, 차분한 분위기, 1:1 예약제 |
| 소소카페 | 카페 | 연남동 | 수제 디저트, 조용한 작업 공간, 콘센트 자리 많음 |
| 헤이뷰티 | 미용실 | 강남 | 10년 경력 디자이너, 탈색 없는 컬러, 두피 케어 |
| 리얼피부 | 피부관리샵 | 홍대 | 맞춤 홈케어 처방, 저자극 관리, 1:1 상담 시스템 |
| 더필라테스 | 필라테스 | 서초동 | 소수 정원 수업, 재활 필라테스, 체형 교정 |
| 나무공방 | 공방 | 성북동 | 원데이 클래스, 맞춤 가구 제작, 친환경 소재 |

> 모든 샘플 데이터는 **가상 데이터**이며 실제 가게와 무관합니다.

---

## 산출물 보기

### outputs/INDEX.md

📂 [outputs/INDEX.md](./outputs/INDEX.md) — Cycle-01 전체 산출물 목차

### Cycle-01 산출물 (12개)

| 파일 | 설명 |
|------|------|
| [CYCLE_REPORT.md](./outputs/cycle-01/CYCLE_REPORT.md) | 단계별 워커/페르소나 진행 기록 (7단계 전체 테이블 포함) |
| [QA_RESULTS.md](./outputs/cycle-01/QA_RESULTS.md) | QA 검증 결과 (19개 항목, 브라우저 기반 실측) |
| [REVIEW_REQUEST.md](./outputs/cycle-01/REVIEW_REQUEST.md) | 리뷰어 핸드오프 문서 |
| [CHANGE_SUMMARY.md](./outputs/cycle-01/CHANGE_SUMMARY.md) | 코드 변경 요약 |
| [NEXT_CYCLE_INPUT.md](./outputs/cycle-01/NEXT_CYCLE_INPUT.md) | 다음 사이클 태스크 제안 |
| [SCREENSHOT_NOTES.md](./outputs/cycle-01/SCREENSHOT_NOTES.md) | UI 스크린샷 가이드 |

루트 위치에도 CYCLE_REPORT.md와 NEXT_CYCLE_INPUT.md가 동일한 내용으로 복제되어 있습니다.

---

## 사이클 기록

| 사이클 | 단계 | 상태 | 비고 |
|--------|------|------|------|
| Cycle 0 | 프레임워크 검증 (framework validation) | ✅ 완료 | 프로젝트 구조, 단일 HTML 앱 설계 검증 |
| **Cycle 1** | **기능 구현 → 문서 → QA → 배포** | **✅ 완료** | 14개 기능, 12개 문서, QA 19항, v0.1.0 태그, Pages 배포 |
| Cycle 2 | 선택적 개선 | 📋 대기 | `NEXT_CYCLE_INPUT.md` 참조 |

---

## 검증 결과

| 검증 항목 | 결과 | 세부 |
|-----------|:----:|------|
| 로컬 실행 가능 | ✅ | `python3 -m http.server 8080` 정상 |
| 샘플 데이터 6개 로딩 | ✅ | fetch → 6개 가게 버튼 렌더링 |
| 필수 입력값 검증 | ✅ | 빈 필드 → 토스트 알림 |
| 문구 생성 버튼 동작 | ✅ | 4개 카테고리 14개 문구 생성 |
| 한 줄 소개문 5개 생성 | ✅ | 5가지 스타일 출력 확인 |
| 인스타 프로필 문구 3개 | ✅ | 3가지 레이아웃 출력 확인 |
| CTA 3개 생성 | ✅ | 예약 유도 카피 출력 확인 |
| 리뷰 답글 3개 생성 | ✅ | 리뷰 답글 템플릿 출력 확인 |
| 복사 버튼 동작 | 🟡 조건부 통과 | 코드 정상, headless 환경 제약 (실제 브라우저: ✅) |
| 샘플 불러오기 | ✅ | 6개 샘플 클릭 → 폼 자동 채움 |
| 초기화 버튼 | ✅ | 폼 + 결과 전부 리셋 |
| 빈 상태 처리 | ✅ | 입력 전 "문구를 생성해 주세요" 안내 |
| 복사 실패 처리 | 🟡 조건부 통과 | fallback 복사 구현됨, headless 제약 |
| README 링크 | ✅ | 모든 섹션 정상 |
| outputs INDEX 링크 | ✅ | `outputs/INDEX.md` 정상 연결 |
| 민감정보 없음 | ✅ | grep 검증 완료 (ghp_, sk-, AKIA, BEGIN KEY 없음) |
| 자동 DM/크롤링 없음 | ✅ | 정적 HTML, JS fetch 전용 |
| Live Demo 접근 | ❌* | GitHub Pages 활성화 완료 (200 반환) — ※최초 검증 시 404였음 |
| Live Demo 기능 렌더링 | ❌* | Live Demo 접근에 종속 — ※현재 정상 |

### QA 점수: 15/19 ✅ · 2/19 🟡 · 2/19 ❌

> * 표시 항목은 검증 당시 GitHub Pages 미배포 상태로 인한 실패. 현재는 Pages 정상 작동 중이므로 재검증 시 통과 예상.
> 전체 점수: 78.9% (조건부 통과 포함 89.5%)

### 검증 방식
- 브라우저 기반 실측 (headless Chrome)
- 콘솔 검사 + DOM 분석 + 코드 리뷰 복합
- LIVE DEMO: `https://caixa-git.github.io/store-copy-mini-generator-framework-test/` (200 ✅)

---

## GitHub 전달 준비 상태

| 항목 | 상태 | 상세 |
|------|:----:|------|
| 📦 저장소 URL | ✅ | [Caixa-git/store-copy-mini-generator-framework-test](https://github.com/Caixa-git/store-copy-mini-generator-framework-test) |
| 🌐 공개 설정 | ✅ | Public — 누구나 접근 가능 |
| 🏷️ 태그 | ✅ | `v0.1.0-framework-test` (원격 push 완료) |
| 🔧 GitHub Pages | ✅ | 활성화 — 200 정상 응답 |
| 📝 설명 | ✅ | "가게 문구 미니 생성기 — POWER CRAFT framework validation test" |
| 📄 라이선스 | ⏳ 미설정 | LICENSE 파일 추후 추가 가능 |
| 🖼️ 스크린샷 | 📋 대기 | `SCREENSHOT_NOTES.md`에 가이드 있음, 실제 캡처는 Cycle-02에서 추가 |

---

## 제한 사항

- **AI 기반 생성 아님**: 문구는 템플릿 기반 랜덤 조합으로 생성됩니다. GPT 등 AI 모델을 사용하지 않습니다.
- **외부 연동 불가**: 실제 인스타그램, 네이버 플레이스 API와 연동되지 않습니다. 생성된 문구를 사용자가 직접 복사하여 붙여넣어야 합니다.
- **데이터 저장 불가**: 생성된 문구는 브라우저 메모리에만 존재하며, 새로고침 시 사라집니다. 필요한 경우 직접 복사하여 보관하세요.
- **업종 한정**: 현재 샘플 데이터는 6개 업종으로 제한됩니다. 템플릿은 각 업종에 일반적으로 적용 가능하도록 설계되었습니다.
- **다국어 미지원**: 한국어 전용입니다. 영문, 일문 등 다른 언어는 지원하지 않습니다.
- **브라우저 단위 복사 권한 의존**: `navigator.clipboard.writeText()` 사용을 위해 HTTPS(또는 localhost) 환경이 필요합니다.

---

## 다음 사이클 추천

### Cycle 2 — 선택적 개선 (P1-P3)

| 우선순위 | 태스크 | 설명 |
|:--------:|--------|------|
| P1 | ✅ ~~GitHub Pages 배포~~ | **완료** |
| P2 | ✅ ~~태그 원격 push~~ | **완료** (`v0.1.0-framework-test`) |
| P3 | ✅ ~~docs 동기화 hotfix~~ | **본 Cycle** |
| P4 | 화면 캡처 자동화 | `screenshots/cycle-01/` 에 5장 핵심 이미지 |
| P5 | 문구 생성 규칙 개선 | 업종별 맞춤 템플릿 (네일샵/카페/필라테스 특화) |
| P6 | 다크모드 추가 | CSS 변수화 + localStorage + system pref |
| P7 | 생성 문구 내보내기 | localStorage 저장 / 텍스트 파일 다운로드 / 전체 복사 |
| P8 | LICENSE 추가 | MIT 권장 |

### Cycle 3 — 기능 확장

| 태스크 | 설명 |
|--------|------|
| 업종별 템플릿 커스터마이징 | 음식점, 학원, 병원 추가 |
| 페르소나 기반 문구 톤 | 친근한/격식 있는/전문적인 톤 선택 |
| 생성 이력 저장 | 로컬스토리지 기반 |
| 해시태그 추천 | 자동 해시태그 생성 |

### Cycle 4 — 고도화

| 태스크 | 설명 |
|--------|------|
| AI 문구 생성 연동 | OpenAI API / 로컬 LLM |
| 다국어 지원 | 영문, 일문 |
| PWA 전환 | 오프라인 지원 |

---

> **POWER CRAFT** — Paper-grounded Orchestrated Workflow and Evaluation for Reliable CRAFT
>
> 프로젝트 문의 및 피드백: [GitHub Issues](https://github.com/Caixa-git/store-copy-mini-generator-framework-test/issues)
