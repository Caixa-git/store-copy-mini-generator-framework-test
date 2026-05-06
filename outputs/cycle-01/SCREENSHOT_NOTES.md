# Screenshot Notes — Cycle 01

아래 화면을 캡처하여 GitHub 리뷰에 활용하세요.

## 권장 캡처 목록

1. **메인 화면 — 입력 전**
   - 6개 입력 필드, 샘플 불러오기 버튼, 문구 생성 버튼이 보이는 전체 화면
   - 의도: 사용자 첫 접속 시 화면 확인

2. **샘플 가게 불러오기**
   - "샘플 가게 불러오기" 버튼 클릭 후 표시되는 6개 샘플 버튼
   - 의도: 샘플 기능 시각적 확인

3. **샘플 데이터 입력 완료 상태**
   - "모모네일" 선택 후 자동 입력된 폼 상태
   - 의도: 샘플→입력 자동 매핑 확인

4. **문구 생성 결과**
   - 생성 버튼 클릭 후 4개 카테고리(소개문/프로필/CTA/리뷰) 결과
   - 의도: 핵심 기능 결과 확인

5. **복사 버튼 동작 후**
   - 복사 버튼 클릭 시 "✓" 표시 + .copied 스타일 확인
   - 의도: 클립보드 복사 기능 확인

6. **빈 상태 처리**
   - 모든 입력 비우고 생성 버튼 클릭 시 토스트 메시지
   - 의도: 입력 검증 UI 확인

7. **모바일 반응형**
   - 375px 너비에서의 화면 (크롬 DevTools)
   - 의도: 모바일 대응 확인

## 캡처 도구

```bash
# Screenshot 디렉토리 준비
mkdir -p screenshots/cycle-01

# Puppeteer 또는 Playwright 사용 (선택)
# npx playwright pdf http://localhost:5500 screenshots/cycle-01/01-main.pdf

# 또는 수동 캡처 후 저장
# screenshots/cycle-01/01-main-input.png
# screenshots/cycle-01/02-sample-load.png
# screenshots/cycle-01/03-form-filled.png
# screenshots/cycle-01/04-results.png
# screenshots/cycle-01/05-copy-button.png
# screenshots/cycle-01/06-empty-state.png
# screenshots/cycle-01/07-mobile.png
```
