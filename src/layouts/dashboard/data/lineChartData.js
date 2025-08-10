// src/layouts/dashboard/data/lineChartData.js
// 일일 폐사 수(첫 주 높고, 이후 안정)
const dailyDeaths = [
  120, 95, 80, 70, 60, 55, 50, // 1~7일
  35, 30, 28, 26, 24, 22, 20,  // 8~14일
  18, 17, 16, 15, 14, 14, 13, 12, 12, 11, 11, 10, 10, 10, 9, 9 // 15~30일
];

// 잔존 개체 수: 10,000 입고 기준, 매일 감소 누적
let survivors = [];
let alive = 10000;
for (let i = 0; i < 30; i++) {
  alive -= dailyDeaths[i] || 0;
  survivors.push(alive);
}

export const lineChartDataDashboard = [
  {
    name: "잔존 개체 수",
    data: survivors, // 예: [9880, 9785, 9705, ... , 9084]
  },
  {
    name: "일일 폐사 수",
    data: dailyDeaths, // 예: [120, 95, 80, ... , 9]
  },
];
