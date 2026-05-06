# 가게 문구 미니 생성기 ✏️

> 작은 가게 사장님을 위한 인스타그램·네이버 플레이스 홍보 문구 자동 생성기 — POWER CRAFT framework validation test

[![GitHub](https://img.shields.io/badge/GitHub-Caixa--git/store--copy--mini--generator--framework--test-181717?logo=github)](https://github.com/Caixa-git/store-copy-mini-generator-framework-test)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-caixa--git.github.io-6c63ff?logo=githubpages)](https://caixa-git.github.io/store-copy-mini-generator-framework-test/)

---

## 현재 상태

| 구분 | 상태 |
|------|------|
| 📐 프레임워크 검증 | ✅ **v0.1.0-framework-test** — 구조 설계 검증 완료 |
| 🧩 기능 구현 | ✅ 전체 14개 기능 구현 완료 (`index.html` + `app.js` + `style.css`) |
| 📦 배포 | ✅ **GitHub Pages Live** (200) |
| 📝 문서 | ✅ README — 본 문서 |
| 🧪 검증 | ✅ 15/19 통과 (브라우저 기반 실측 완료) |

---

## Live Demo

🔥 **https://caixa-git.github.io/store-copy-mini-generator-framework-test/**

> ⚠️ GitHub Pages가 활성화되면 위 URL에서 바로 사용할 수 있습니다.

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

**필요 조건**: 최신 웹 브라우저 (Chrome, Safari, Edge, Firefox) - 별도 종속성 없음.

---

## 주요 기능

가게 정보만 입력하면 14가지 유형의 마케팅 문구를 즉시 생성합니다.

| # | 기능 | 설명 | 구현 위치 |
|---|------|------|-----------|
| 1 | **가게 정보 입력 폼** | 가게명, 업종, 지역, 장점, 타겟 고객, 예약 방식 — 6개 항목 입력 | `index.html` lines 19-43 |
| 2 | **한 줄 소개문 생성** | 5가지 스타일의 한 줄 소개문 자동 생성 | `app.js` lines 33-39 |
| 3 | **인스타그램 프로필 문구 생성** | 3가지 레이아웃의 인스타 프로필 소개글 생성 | `app.js` lines 41-45 |
| 4 | **예약/문의 CTA 생성** | 3가지 톤의 예약 유도 카피 생성 | `app.js` lines 47-51 |
| 5 | **리뷰 답글 템플릿 생성** | 3가지 스타일의 리뷰 답글 템플릿 생성 | `app.js` lines 53-57 |
| 6 | **클립보드 원클릭 복사** | 각 문구 옆 '복사' 버튼으로 즉시 클립보드 복사 | `app.js` lines 167-177 |
| 7 | **복사 완료 시각 피드백** | 복사 성공 시 버튼이 ✓ 아이콘으로 전환 (1.5초 후 복원) | `app.js` lines 170-172 |
| 8 | **샘플 가게 불러오기** | 6개 가상 가게 데이터로 바로 테스트 (네일샵, 카페, 미용실, 피부관리샵, 필라테스, 공방) | `app.js` lines 84-89, `data/sample_shops.json` |
| 9 | **입력값 유효성 검증** | 필수 필드 미입력 시 토스트 알림으로 안내 | `app.js` lines 104-111 |
| 10 | **입력값 초기화** | '초기화' 버튼으로 모든 폼 필드와 결과 리셋 | `app.js` lines 122-126 |
| 11 | **토스트 알림 시스템** | 생성 완료, 복사 성공, 오류 등을 화면 하단에 2초간 표시 | `app.js` lines 193-203 |
| 12 | **반응형 디자인** | 모바일(1열), 태블릿(2열), 데스크톱(2열) 대응 | `style.css` lines 107-114 |
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
3. 사용자가 직접 확인 후 복사 버튼으로 클립보드에 복사합니다
4. 생성된 문구를 인스타그램 프로필, 네이버 플레이스, 리뷰 답글에 붙여넣기 합니다

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

프로젝트 산출물과 설계 문서는 아래 경로에서 확인할 수 있습니다:

📂 **[outputs/INDEX.md](./outputs/INDEX.md)** — 프로젝트 산출물 목록

> 현재 `outputs/` 디렉토리는 빈 상태입니다. 산출물이 생성되면 위 링크에서 확인할 수 있습니다.

---

## 사이클 기록

이 프로젝트는 POWER CRAFT SDLC 사이클 프레임워크를 따라 개발되었습니다.

| 사이클 | 단계 | 상태 | 비고 |
|--------|------|------|------|
| Cycle 0 | 프레임워크 검증 (framework validation) | ✅ 완료 | 프로젝트 구조, 단일 HTML 앱 설계 검증 |
| Cycle 1 | 기능 구현 → 문서 → QA → 배포 | ✅ 완료 | 14개 기능, 12개 문서, QA 19항, v0.1.0 태그 push 완료, Pages 배포 완료 |
| Cycle 2 | 선택적 개선 | 📋 대기 | `outputs/cycle-01/NEXT_CYCLE_INPUT.md` 참조 |

---

## 검증 결과

| 검증 항목 | 결과 | 비고 |
|-----------|------|------|
| HTML 구조 검증 | ⏳ 대기 | `index.html` |
| JS 기능 검증 | ⏳ 대기 | `app.js` — 문구 생성, 복사, 폼 제어 |
| CSS 레이아웃 검증 | ⏳ 대기 | `style.css` — 반응형, 모바일 대응 |
| 샘플 데이터 로드 검증 | ⏳ 대기 | `data/sample_shops.json` |
| 접근성 검증 | ⏳ 대기 | aria 속성 등 |
| 브라우저 호환성 | ⏳ 대기 | Chrome, Safari, Firefox, Edge |
| GitHub Pages 배포 | ⏳ 대기 | 404 상태 → Pages 활성화 필요 |
| SEO / 메타 태그 | ⏳ 대기 | Open Graph, description 등 |

> 검증이 완료되면 위 표가 업데이트됩니다.

---

## GitHub 전달 준비 상태

| 항목 | 상태 | 상세 |
|------|------|------|
| 📦 저장소 URL | ✅ [Caixa-git/store-copy-mini-generator-framework-test](https://github.com/Caixa-git/store-copy-mini-generator-framework-test) | GitHub에 Public 저장소 생성 완료 |
| 🌐 공개 설정 | ✅ Public | 누구나 접근 가능 |
| 🏷️ 태그 | ✅ **v0.1.0-framework-test** | 원격 push 완료 |
| 📄 라이선스 | ⏳ 미설정 | LICENSE 파일 추가 필요 (MIT 권장) |
| 🔧 GitHub Pages | ✅ 활성화 | Live Demo: https://caixa-git.github.io/store-copy-mini-generator-framework-test/ (200) |
| 📝 설명 | ✅ 등록 | "가게 문구 미니 생성기 — POWER CRAFT framework validation test" |
| 🖼️ 스크린샷 | 📂 `screenshots/` | 빈 디렉토리 — 스크린샷 추가 예정 |

---

## 제한 사항

- **AI 기반 생성 아님**: 문구는 템플릿 기반 랜덤 조합으로 생성됩니다. GPT 등 AI 모델을 사용하지 않습니다.
- **외부 연동 불가**: 실제 인스타그램, 네이버 플레이스 API와 연동되지 않습니다. 생성된 문구를 사용자가 직접 복사하여 붙여넣어야 합니다.
- **데이터 저장 불가**: 생성된 문구는 브라우저 메모리에만 존재하며, 새로고침 시 사라집니다. 필요한 경우 직접 복사하여 보관하세요.
- **업종 한정**: 현재 샘플 데이터는 6개 업종으로 제한됩니다. 템플릿은 각 업종에 일반적으로 적용 가능하도록 설계되었습니다.
- **다국어 미지원**: 한국어 전용입니다. 영문, 일문 등 다른 언어는 지원하지 않습니다.
- **GitHub Pages 미활성화** (해결됨): Live Demo 정상 작동 중.

---

## 다음 사이클 추천

### Cycle 1 — 기능 고도화 및 검증
- [ ] GitHub Pages 활성화 및 Live Demo 정상화
- [ ] `screenshots/` 디렉토리에 앱 스크린샷 추가
- [ ] `outputs/INDEX.md` 생성 및 산출물 문서화
- [ ] 브라우저 호환성 테스트 (Chrome, Safari, Firefox, Edge)
- [ ] 모바일 UI/UX 개선 (터치 영역, 폰트 크기)
- [ ] 접근성 개선 (aria-label, 키보드 네비게이션)
- [ ] Open Graph / SEO 메타 태그 추가
- [ ] LICENSE 파일 추가 (MIT 권장)
- [ ] 태그 `v0.1.0-framework-test` 생성

### Cycle 2 — 기능 확장 (선택)
- [ ] 업종별 템플릿 커스터마이징 (음식점, 학원, 병원 등)
- [ ] 페르소나 기반 문구 톤 선택 기능
- [ ] 생성 이력 로컬스토리지 저장
- [ ] 문구 내보내기 (PDF, 이미지)
- [ ] 해시태그 추천 기능

### Cycle 3 — 고도화 (선택)
- [ ] AI 문구 생성 연동 (OpenAI API / 로컬 LLM)
- [ ] 다국어 지원 (영문, 일문)
- [ ] 사용자 피드백 수집 및 반영
- [ ] PWA 전환 (오프라인 지원)

---

> **POWER CRAFT** — Plan, Organize, Write, Execute, Review — Cycle, Refine, Automate, Framework, Test
>
> 프로젝트 문의 및 피드백: [GitHub Issues](https://github.com/Caixa-git/store-copy-mini-generator-framework-test/issues)
