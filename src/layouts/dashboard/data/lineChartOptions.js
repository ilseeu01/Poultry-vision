import { FormatTextdirectionLToR } from "@mui/icons-material";


export const lineChartOptionsDashboard = {
  chart: {
    toolbar: {
      type: "area",
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
    y: {
      formatter: (val, opts) => {
        const name = opts.w.config.series[opts.seriesIndex].name;
        // 잔존/폐사에 따라 단위 통일
        return `${Math.round(val).toLocaleString()} 마리`;
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  xaxis: {
    type: "category",
    categories: Array.from({ length: 30 }, (_, i) => `${i + 1}일`), // 1~30일
    labels: {
      style: { colors: "#c8cfca", fontSize: "10px" },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: [
    // [0] 잔존 개체 수 — 로그 스케일 (왼쪽)
    {
      seriesName: "잔존 개체 수",      // 시리즈 이름과 정확히 매칭
      logarithmic: true,               // 이 축만 로그 스케일
      min: 1,
      max: 10000,                      // 10,000입고 기준
      tickAmount: 3,                   // 1, 100, 10000 정도로 간결히
      labels: {
        formatter: (value) => {
          if (value >= 10000) return "만 마리";
          if (value >= 100) return "백 마리";
          if (value >= 1) return "1마리";
          return `${Math.round(value)} 마리`;
        },
        style: { colors: "#c8cfca", fontSize: "10px" },
      },
    },
    // [1] 일일 폐사 수 — 선형 스케일 (오른쪽)
    {
      seriesName: "일일 폐사 수",       // 시리즈 이름과 정확히 매칭
      opposite: true,                   // 오른쪽 축
      min: 0,
      max: 120,                         // 데이터 상한선에 맞춤
      tickAmount: 6,
      labels: {
        formatter: (value) => `${Math.round(value)} 마리`,
        style: { colors: "#c8cfca", fontSize: "10px" },
      },
    },
  ],
  legend: { show: true, labels: { colors: "#c8cfca" } },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: ["#27ae60", "#1f8a4c"], // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#2ecc71", "#2E7D32"],
  },
  colors: ["#2ecc71", "#2E7D32"],
};
