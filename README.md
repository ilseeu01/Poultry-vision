# 🐓 꼬꼬알리미 (Poultry Vision)

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react) ![Material-UI](https://img.shields.io/badge/Material--UI-5.0-007FFF?style=flat-square&logo=mui) ![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

> AI 기반 스마트 양계장 관리 시스템

꼬꼬알리미는 컴퓨터 비전 기술을 활용하여 양계장의 닭 건강 상태를 실시간으로 모니터링하고, 데이터 기반의 의사결정을 지원하는 웹 대시보드 시스템입니다.

## 🌐 데모

**[🔗 라이브 데모 보기](https://poultry-vision.netlify.app/dashboard)**

실제 작동하는 시스템을 확인해보세요!

## 🎯 프로젝트 개요

스마트 팜 기술을 활용한 양계장 관리의 효율성을 높이고, 닭의 건강 상태를 실시간으로 파악하여 조기에 문제를 발견하고 대응할 수 있도록 돕는 시스템입니다.

### 주요 기능

- **📊 실시간 대시보드**: 양계장 현황을 한눈에 파악
- **🐔 닭 개체수 모니터링**: AI 비전을 통한 자동 카운팅
- **💀 폐사율 추적**: 폐사 발생 현황 및 트렌드 분석
- **💰 수익 관리**: 출하 스케줄 및 수익 계산
- **📈 데이터 시각화**: 차트와 그래프를 통한 직관적인 데이터 표현

## 🚀 시작하기

### 필요 조건

- Node.js 16.0 이상
- npm 또는 yarn

### 설치

1. 저장소 클론

```bash
git clone https://github.com/ilseeu01/Poultry-vision.git
cd Poultry-vision
```

2. 의존성 설치

```bash
npm install --legacy-peer-deps
```

3. 개발 서버 실행

```bash
npm start
```

4. 브라우저에서 `http://localhost:3000` 접속

### 빌드

프로덕션 빌드 생성:

```bash
npm run build
```

## 📁 프로젝트 구조

```
poultry_vision/
├── src/
│   ├── assets/           # 이미지, 아이콘, 테마 설정
│   ├── common/           # 공통 컴포넌트 (네비게이션, 카드, 차트 등)
│   ├── components/       # 재사용 가능한 UI 컴포넌트
│   ├── layouts/          # 페이지 레이아웃
│   │   ├── dashboard/    # 대시보드 페이지
│   │   ├── billing/      # 수익 관리 페이지
│   │   ├── tables/       # 데이터 테이블 페이지
│   │   └── authentication/ # 로그인 페이지
│   ├── context/          # React Context API
│   ├── routes.js         # 라우팅 설정
│   └── App.js           # 메인 앱 컴포넌트
├── public/              # 정적 파일
└── package.json         # 프로젝트 설정
```

## 🛠 기술 스택

### Frontend

- **React 18.2.0** - UI 라이브러리
- **Material-UI** - UI 컴포넌트 프레임워크
- **React Router** - 클라이언트 사이드 라우팅
- **ApexCharts** - 데이터 시각화

### 디자인 시스템

- VuiBox, VuiButton, VuiInput 등 커스텀 컴포넌트
- 일관된 색상 팔레트 및 타이포그래피

## 📊 주요 페이지

### 1. 대시보드

- 실시간 닭 개체수 표시
- 폐사율 현황 및 트렌드
- 주요 지표 요약 카드
- 시계열 데이터 차트

### 2. 수익 관리

- 출하 스케줄 관리
- 비용 분석
- 수익 계산
- 닭 상태별 현황

### 3. 데이터 테이블

- 상세 데이터 조회
- 필터링 및 정렬 기능

## 🎨 디자인 특징

- **모던한 UI/UX**: 깔끔하고 직관적인 인터페이스
- **반응형 디자인**: 다양한 화면 크기 지원
- **다크 테마**: 눈의 피로를 줄이는 다크 모드 적용
- **주황색 포인트 컬러**: 브랜드 아이덴티티 반영

## 🔧 개발 환경

### 사용 가능한 스크립트

```bash
# 개발 서버 시작
npm start

# 프로덕션 빌드
npm run build

# 테스트 실행
npm test

# GitHub Pages 배포
npm run deploy
```

## 📝 코드 구조 개선사항

- **examples → common**: 더 직관적인 폴더명 사용
- **컴포넌트 모듈화**: 재사용성을 고려한 컴포넌트 설계
- **클린 코드**: 불필요한 코드 제거 및 리팩토링
- **일관된 스타일**: ESLint 및 Prettier를 통한 코드 스타일 통일

## 🌐 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여

프로젝트 개선을 위한 제안이나 버그 리포트는 Issues를 통해 제출해주세요.

---

**Made for Honam Information Science High School Hackathon** 💻
