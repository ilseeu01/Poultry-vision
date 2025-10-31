# 꼬꼬알리미 (Chicken Alert) 🐓

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Build Status](https://img.shields.io/badge/build-passing-green)

**스마트 닭장 관리 시스템**

꼬꼬알리미는 AI 기반의 스마트 닭장 관리 시스템으로, 컴퓨터 비전 기술을 활용하여 닭의 건강 상태를 모니터링하고 농장주에게 실시간 알림을 제공합니다.

## 🔗 링크

- [라이브 데모](https://ilseeu01.github.io/honam-is-hackathon)
- [GitHub 저장소](https://github.com/ilseeu01/honam-is-hackathon)

## 🚀 주요 기능

- **실시간 닭 모니터링**: AI 컴퓨터 비전을 통한 닭 개체수 및 상태 추적
- **건강 상태 분석**: 이상 행동 및 질병 징후 조기 발견
- **대시보드**: 직관적인 웹 인터페이스를 통한 농장 현황 실시간 확인
- **알림 시스템**: 이상 상황 발생시 즉시 알림 전송
- **데이터 분석**: 통계 및 트렌드 분석을 통한 농장 운영 최적화

## 📊 기술 스택

- **Frontend**: React 18.2.0, Material-UI, ApexCharts
- **Backend**: Vision AI 모델, 실시간 데이터 처리
- **UI Framework**: Vision UI Dashboard (React)
- **Charts & Analytics**: ApexCharts.js

## 🎯 대상 사용자

- 스마트 팜 운영 농장주
- 가금류 사육업체
- 농업 기술 관리자
- 축산업 종사자

## 📋 목차

- [설치 방법](#설치-방법)
- [사용법](#사용법)
- [배포](#배포)
- [프로젝트 구조](#프로젝트-구조)
- [기여하기](#기여하기)
- [라이선스](#라이선스)

## 🛠 설치 방법

### 필요 조건
- Node.js 16 이상
- npm 또는 yarn

### 설치 단계

1. 프로젝트 클론
```bash
git clone https://github.com/ilseeu01/honam-is-hackathon.git
cd poultry_vision
```

2. 의존성 설치
```bash
npm install --legacy-peer-deps
```

3. 개발 서버 실행
```bash
npm start
```

## 🚀 사용법

1. 개발 서버를 실행하면 `http://localhost:3000`에서 애플리케이션에 접근할 수 있습니다.
2. 대시보드에서 실시간 닭장 모니터링 데이터를 확인하세요.
3. 알림 설정을 통해 이상 상황 발생시 즉시 알림을 받을 수 있습니다.

## 📦 배포

### GitHub Pages 배포
```bash
npm run build
npm run deploy
```

### 수동 배포
```bash
npm run build
```
생성된 `build` 폴더를 웹 서버에 업로드하세요.

## 📁 프로젝트 구조

```
vision-dashboard-react-free/
├── public
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── assets
    │   ├── images
    │   └── theme
    │       ├── base
    │       │   ├── borders.js
    │       │   ├── boxShadows.js
    │       │   ├── breakpoints.js
    │       │   ├── colors.js
    │       │   ├── globals.js
    │       │   ├── typography.css
    │       │   └── typography.js
    │       ├── components
    │       │   ├── button
    │       │   ├── card
    │       │   ├── dialog
    │       │   ├── form
    │       │   ├── list
    │       │   ├── menu
    │       │   ├── stepper
    │       │   ├── table
    │       │   ├── tabs
    │       │   ├── appBar.js
    │       │   ├── avatar.js
    │       │   ├── breadcrumbs.js
    │       │   ├── buttonBase.js
    │       │   ├── container.js
    │       │   ├── divider.js
    │       │   ├── icon.js
    │       │   ├── iconButton.js
    │       │   ├── linearProgress.js
    │       │   ├── link.js
    │       │   ├── popover.js
    │       │   ├── slider.js
    │       │   ├── svgIcon.js
    │       │   └── tooltip.js
    │       ├── functions
    │       │   ├── boxShadow.js
    │       │   ├── gradientChartLine.js
    │       │   ├── hexToRgb.js
    │       │   ├── linearGradient.js
    │       │   ├── pxToRem.js
    │       │   ├── radialGradient.js
    │       │   ├── rgba.js
    │       │   └── tripleLinearGradient.js
    │       ├── index.js
    │       └── theme-rtl.js
    ├── components
    │   ├── VuiAlert
    │   │   ├── index.js
    │   │   ├── VuiAlertCloseIcon.js
    │   │   └── VuiAlertRoot.js
    │   ├── VuiAvatar
    │   │   ├── index.js
    │   │   └── VuiAvatarRoot.js
    │   ├── VuiBadge
    │   │   ├── index.js
    │   │   └── VuiBadgeRoot.js
    │   ├── VuiBox
    │   │   ├── index.js
    │   │   └── VuiBoxRoot.js
    │   ├── VuiButton
    │   │   ├── index.js
    │   │   └── VuiButtonRoot.js
    │   ├── VuiInput
    │   │   ├── index.js
    │   │   ├── VuiInputIconBoxRoot.js
    │   │   ├── VuiInputIconRoot.js
    │   │   ├── VuiInputIcon.js
    │   │   └── VuiInputWithIconRoot.js
    │   ├── VuiPagination
    │   │   ├── index.js
    │   │   └── VuiPaginationItemRoot.js
    │   ├── VuiProgress
    │   │   ├── index.js
    │   │   └── VuiProgressRoot.js
    │   ├── VuiSwitch
    │   │   ├── index.js
    │   │   └── VuiSwitchRoot.js
    │   └── VuiTypography
    │       ├── index.js
    │       └── VuiTypographyRoot.js
    ├── context
    │   └── index.js
    ├── examples
    │   ├── Breadcrumbs
    │   │   └── index.js
    │   ├── Calendar
    │   │   ├── CalendarRoot.js
    │   │   └── index.js
    │   ├── Cards
    │   │   ├── InfoCards
    │   │   │   └── index.js
    │   │   ├── MasterCard
    │   │   │   └── index.js
    │   │   ├── ProjectCards
    │   │   │   └── index.js
    │   │   └── StatisticsCards
    │   │      └── index.js
    │   ├── Charts
    │   │   ├── BarCharts
    │   │   │   └── BarChart.js
    │   │   └── LineCharts
    │   │       └── LineChart.js
    │   ├── Configurator
    │   │   ├── ConfiguratorRoot.js
    │   │   └── index.js
    │   ├── Footer
    │   │   └── index.js
    │   ├── GradientBorder
    │   │   ├── GradientBorderRoot.js
    │   │   └── index.js
    │   ├── Icons
    │   ├── Items
    │   │   ├── index.js
    │   │   └── styles.js
    │   ├── LayoutContainers
    │   │   ├── DashboardLayout
    │   │   │   └── index.js
    │   │   └── PageLayout
    │   │       └── index.js
    │   ├── Lists
    │   │   └── index.js
    │   ├── Navbars
    │   │   ├── DashboardNavbar
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── DefaultNavbar
    │   │   │   ├── DefaultNavbarLink.js
    │   │   │   ├── DefaultNavbarMobile.js
    │   │   │   └── index.js
    │   ├── Scrollbar
    │   │   └── index.js
    │   ├── Sidenav
    │   │   ├── styles
    │   │   │   ├── sidenav.js
    │   │   │   ├── sidenavCard.js
    │   │   │   └── sidenavCollapse.js
    │   │   ├── index.js
    │   │   ├── SidenavCard.js
    │   │   ├── SidenavCollapse.js
    │   │   └── SidenavRoot.js
    │   ├── Tables
    │   │   └── index.js
    │   └── Timeline
    │       ├── context
    │       │   └── index.js
    │       ├── TimelineItem
    │       │   ├── index.js
    │       │   └── styles.js
    │       └── TimelineList
    │           └── index.js
    ├── layouts
    │   ├── authentication
    │   │   ├── components
    │   │   │   ├── BasicLayout
    │   │   │   │   └── index.js
    │   │   │   ├── CoverLayout
    │   │   │   │   └── index.js
    │   │   │   ├── Footer
    │   │   │   │   └── index.js
    │   │   │   ├── IllustrationLayout
    │   │   │   │   └── index.js
    │   │   │   ├── Separator
    │   │   │   │   └── index.js
    │   │   │   └── Socials
    │   │   │       └── index.js
    │   │   ├── sign-in
    │   │   │   └── index.js
    │   │   └── sign-up
    │   │       └── index.js
    │   ├── billing
    │   │   ├── components
    │   │   │   ├── Bill
    │   │   │   │   └── index.js
    │   │   │   ├── BillingInformation
    │   │   │   │   └── index.js
    │   │   │   ├── CreditBalance
    │   │   │   │   └── index.js
    │   │   │   ├── Invoice
    │   │   │   │   └── index.js
    │   │   │   ├── PaymentMethod
    │   │   │   │   └── index.js
    │   │   │   ├── Transaction
    │   │   │   │   └── index.js
    │   │   │   └── Transactions
    │   │   │       └── index.js
    │   │   └── index.js
    │   ├── dashboard
    │   │   ├── components
    │   │   │   ├── OrderOverview
    │   │   │   │   └── index.js
    │   │   │   ├── Projects
    │   │   │   │   └── index.js
    │   │   │   ├── RefferalTracking
    │   │   │   │   └── index.js
    │   │   │   ├── SatisfactionRate
    │   │   │   │   └── index.js
    │   │   │   └── WelcomeMark
    │   │   │       └── index.js
    │   │   ├── data
    │   │   │   ├── barChartData.js
    │   │   │   ├── barChartOptions.js
    │   │   │   ├── lineChartData.js
    │   │   │   └── lineChartOptions.js
    │   │   └── index.js
    │   ├── rtl
    │   │   ├── components
    │   │   │   ├── OrderOverview
    │   │   │   │   └── index.js
    │   │   │   ├── Projects
    │   │   │   │   └── index.js
    │   │   │   ├── RefferalTracking
    │   │   │   │   └── index.js
    │   │   │   ├── SatisfactionRate
    │   │   │   │   └── index.js
    │   │   │   └── WelcomeMark
    │   │   │       └── index.js
    │   │   ├── data
    │   │   │   ├── barChartData.js
    │   │   │   ├── barChartOptions.js
    │   │   │   ├── lineChartData.js
    │   │   │   └── lineChartOptions.js
    │   │   └── index.js
    │   ├── tables
    │   │   ├── data
    │   │   │   ├── authorsTableData.js
    │   │   │   └── projectsTableData.js
    │   │   └── index.js
    ├── variables
    │   └── charts.js
    ├── App.js
    ├── index.js
    ├── routes.js
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── ISSUE_TEMPLALTE.md
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    └── README.md
```

## 🌐 브라우저 지원

현재 다음 브라우저의 최신 2개 버전을 지원합니다:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64">

## 🤝 기여하기

1. 프로젝트를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/새기능`)
3. 변경 사항을 커밋합니다 (`git commit -am '새 기능 추가'`)
4. 브랜치에 푸시합니다 (`git push origin feature/새기능`)
5. Pull Request를 생성합니다

## 🐛 이슈 신고

이슈를 신고하실 때는 다음 사항을 포함해 주세요:

1. 버그 재현 단계
2. 예상 결과와 실제 결과
3. 사용 중인 브라우저 및 버전
4. 스크린샷 (필요한 경우)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 💬 연락처

프로젝트에 대한 문의사항이 있으시면 GitHub Issues를 통해 연락주세요.

---

**꼬꼬알리미로 더 스마트한 농장 관리를 시작하세요! 🐓✨**
