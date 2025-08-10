# Poultry Vision ICT 개인 프로젝트

React 기반 대시보드/웹앱입니다.
로컬 개발은 `npm start`로 실행하며, 간단한 수정(예: 푸터 문구 변경) 후 빌드/배포까지 가능합니다.

## 요구사항

* Node.js LTS (권장: 18.x 또는 20.x)
* npm 8+

## 빠른 시작

```bash
# 1) 의존성 설치
npm install

# 2) 개발 서버 실행 (http://localhost:3000 또는 5173 등)
npm start

# 3) 프로덕션 빌드
npm run build
```

> 템플릿/설정에 따라 개발 서버 포트가 다를 수 있지만, 보통 브라우저가 자동으로 열립니다.

## 스크립트

* `npm start` : 개발 서버 실행 (HMR 포함)
* `npm run build` : 프로덕션 빌드 생성 (배포용 정적 파일)
* `npm run preview` : (Vite 사용 시) 로컬에서 빌드 결과 미리보기
  *(해당 스크립트가 없으면 생략 가능)*

## 폴더 구조(예시)

```
project-root/
├─ src/
│  ├─ components/
│  │  ├─ VuiBox/
│  │  └─ VuiTypography/
│  ├─ ... 
│  └─ index.jsx | main.jsx
├─ public/        # (CRA일 경우)
├─ package.json
└─ README.md
```

## 변경 포인트 (푸터 텍스트)

푸터 문구를 간단히 바꾸고 싶다면 아래 파일을 수정하세요.

* 파일 경로: `src/.../Footer` 혹은 `index.js` (현재 제공된 파일 기준)

```jsx
// 기존 긴 문구 전체 삭제 후 아래 한 줄로 교체
<VuiTypography
  variant="button"
  sx={{ textAlign: "center", fontWeight: "400 !important" }}
  color="white"
>
  2025, made by Hyejin Lee
</VuiTypography>
```

## 배포

정적 호스팅(예: Netlify, Vercel, GitHub Pages)에 적합합니다.

1. `npm run build` 실행
2. 생성된 `dist/`(Vite) 또는 `build/`(CRA) 폴더를 호스팅 서비스에 업로드
3. 커스텀 도메인/리다이렉트 설정은 각 서비스 문서 참고

## 라이선스

이 저장소 내 커스텀 코드에 대한 라이선스는 필요에 맞게 선택하세요(예: MIT).
템플릿/외부 UI 키트 사용 시 해당 라이선스도 함께 확인하세요.

## 기여

PR/이슈 환영합니다. 커밋 메시지는 간결하게, 브랜치 이름은 `feature/*`, `fix/*` 형태를 추천합니다.
