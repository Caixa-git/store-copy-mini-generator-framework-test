# Next Cycle Input — Cycle 01 → 02

## Cycle 01 결과

- **구현:** 14개 기능 완료 (6개 입력 → 4개 출력 카테고리)
- **QA:** 15/19 ✅ 통과, 2/19 🟡 부분, 2/19 ❌ (Live Demo 미배포)
- **문서:** 12개 파일 생성
- **GitHub:** public repo 생성, 로컬 태그 완료, Pages 미배포

## Cycle 02 추천 태스크

### P1 — GitHub Pages 배포
- GitHub Pages 활성화하여 Live Demo URL 접근 가능하도록 설정
- .github/workflows/deploy.yml 작성 (main push → Pages)
- 태그 v0.1.0-framework-test를 원격에 push

### P2 — 화면 캡처 자동화
- screenshots/cycle-01/ 에 3~5장 핵심 화면 이미지 저장
- SCREENSHOT_NOTES.md 업데이트

### P3 — 문구 생성 규칙 개선
- 업종별 맞춤 템플릿 (현재는 범용)
- 네일샵 특화: 젤/케어 용어 사용
- 카페 특화: 디저트/원두/분위기 표현 다양화
- 필라테스 특화: 운동/재활 용어 추가

### P4 — 다크모드 추가
- CSS 변수화
- localStorage + system preference fallback

### P5 — 생성 문구 저장/내보내기
- localStorage 저장
- 텍스트 파일 다운로드
- 클립보드 전체 복사 버튼

## 사용할 워커/페르소나 (Cycle 02)

| 태스크 | 권장 워커 | 페르소나 |
|:-------|:----------|:---------|
| GitHub Pages + 태그 | Release Manager | GitHub Portfolio Release Manager |
| 화면 캡처 | QA Reviewer | Smoke Test QA Engineer |
| 문구 규칙 개선 | Copy Logic Designer | Korean Marketing Copy Rule Designer |
| 다크모드 | Frontend Builder | Lightweight Static Web App Engineer |
| 내보내기 기능 | Frontend Builder | Same as above |
