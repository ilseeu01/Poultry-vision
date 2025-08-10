# Poultry Vision ICT 개인 프로젝트

React 기반 AI 대시보드/웹앱입니다.
로컬 개발은 `npm start`로 실행하며, AI 모델을 통해 양계장에서 사망한 닭의 수를 실시간 분석 및 모니터링하는 기능을 제공합니다.

## 📌 프로젝트 개요

이 프로젝트는 **AI 영상 분석 기술**을 활용해 양계장의 생산성을 높이고, 질병·사고로 인한 피해를 줄이기 위해 제작되었습니다.
CCTV 또는 카메라로 촬영된 영상을 AI 모델이 실시간으로 분석하여 **죽은 닭의 수를 자동 감지**하고 관리자에게 알림을 제공합니다.

**주요 기능**

* 🐔 **죽은 닭 실시간 감지** : 컴퓨터 비전 AI가 카메라 영상을 분석
* 📊 **대시보드 모니터링** : 실시간 데이터 시각화 및 통계 제공
* 🔔 **이벤트 알림** : 사망 개체 감지 시 알림 시스템 연동
* 🌐 **웹 기반 접근성** : PC·모바일 어디서든 접근 가능

---

## 요구사항

* Node.js LTS (권장: 18.x 또는 20.x)
* npm 8+

## 빠른 시작

```bash
# 1) 의존성 설치
npm install

# 2) 개발 서버 실행
npm start

# 3) 프로덕션 빌드
npm run build
```

## 스크립트

* `npm start` : 개발 서버 실행 (HMR 포함)
* `npm run build` : 프로덕션 빌드 생성
* `npm run preview` : (Vite 사용 시) 빌드 미리보기

## 폴더 구조(예시)

```
project-root/
├─ src/
│  ├─ components/
│  │  ├─ VuiBox/
│  │  └─ VuiTypography/
│  ├─ pages/
│  └─ index.jsx
├─ public/
├─ package.json
└─ README.md
```

## 변경 포인트 (푸터 텍스트)

푸터 문구를 간단히 바꾸고 싶다면 아래 파일을 수정하세요.

* 파일 경로: `src/.../Footer` 혹은 `index.js`

```jsx
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
2. `dist/` 또는 `build/` 폴더를 호스팅 서비스에 업로드

## 라이선스

커스텀 코드 라이선스는 프로젝트 상황에 맞춰 선택하세요(예: MIT).
외부 UI 키트 사용 시 해당 라이선스도 확인 필요.

## 기여

PR 및 이슈 환영합니다.
브랜치 네이밍 규칙: `feature/*`, `fix/*`
