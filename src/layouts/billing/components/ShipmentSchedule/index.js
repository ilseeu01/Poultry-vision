import React from "react";
import { Card, Stack } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import { IoCalendar, IoCheckmarkDone } from "react-icons/io5";
import { GiChicken } from "react-icons/gi";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";

function ShipmentSchedule() {
  const { gradients } = colors;

  // 실제로는 API에서 가져올 데이터
  const shipmentData = [
    {
      date: "2025-11-15",
      daysLeft: 15,
      chickens: 2500,
      revenue: 24500000,
      progress: 75,
    },
    {
      date: "2025-12-01",
      daysLeft: 31,
      chickens: 3000,
      revenue: 29400000,
      progress: 60,
    },
    {
      date: "2025-12-20",
      daysLeft: 50,
      chickens: 2139,
      revenue: 20962200,
      progress: 45,
    },
  ];

  return (
    <Card sx={{ height: "100%", background: "rgba(255, 255, 255, 0.95)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", p: "20px" }}>
      <VuiBox display="flex" flexDirection="column">
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="18px">
          <VuiTypography variant="lg" fontWeight="bold" sx={{ color: "#1a202c" }}>
            출하 예정 일정
          </VuiTypography>
          <VuiBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              background: linearGradient(
                "rgba(255, 130, 0, 0.5)",
                "rgba(255, 130, 0, 0.3)"
              ),
              borderRadius: "12px",
              width: "46px",
              height: "46px",
            }}
          >
            <IoCalendar color="#fff" size="22px" />
          </VuiBox>
        </VuiBox>

        <Stack spacing={2}>
          {shipmentData.map((item, index) => (
            <VuiBox
              key={index}
              p="18px"
              sx={{
                background: "rgba(255, 200, 100, 0.2)",
                borderRadius: "12px",
                border: "2px solid rgba(255, 180, 80, 0.4)",
              }}
            >
              <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="12px">
                <VuiBox>
                  <VuiBox display="flex" alignItems="center" mb="4px">
                    <IoCalendar color="#FF8200" size="18px" />
                    <VuiTypography variant="button" fontWeight="bold" ml="6px" sx={{ color: "#1a202c" }}>
                      {item.date}
                    </VuiTypography>
                  </VuiBox>
                  <VuiTypography variant="caption" sx={{ color: "#718096" }}>
                    {item.daysLeft}일 후 출하 예정
                  </VuiTypography>
                </VuiBox>
                <VuiBox textAlign="right">
                  <VuiTypography color="success" variant="button" fontWeight="bold">
                    ₩{item.revenue.toLocaleString()}
                  </VuiTypography>
                </VuiBox>
              </VuiBox>

              <VuiBox display="flex" alignItems="center" mb="8px">
                <GiChicken color="#FF8200" size="18px" />
                <VuiTypography variant="button" ml="6px" sx={{ color: "#1a202c" }}>
                  출하 예정: {item.chickens.toLocaleString()}마리
                </VuiTypography>
              </VuiBox>

              <VuiBox>
                <VuiBox display="flex" justifyContent="space-between" mb="4px">
                  <VuiTypography variant="caption" sx={{ color: "#718096" }}>
                    사육 진행도
                  </VuiTypography>
                  <VuiTypography variant="caption" fontWeight="bold" sx={{ color: "#1a202c" }}>
                    {item.progress}%
                  </VuiTypography>
                </VuiBox>
                <VuiProgress value={item.progress} color="info" />
              </VuiBox>
            </VuiBox>
          ))}
        </Stack>

        <VuiBox
          mt="16px"
          p="14px"
          sx={{
            background: linearGradient(
              "rgba(0, 117, 255, 0.15)",
              "rgba(0, 117, 255, 0.05)"
            ),
            borderRadius: "12px",
          }}
        >
          <VuiBox display="flex" alignItems="center" justifyContent="space-between">
            <VuiBox display="flex" alignItems="center">
              <IoCheckmarkDone color="#01B574" size="20px" />
              <VuiTypography variant="button" fontWeight="bold" ml="8px" sx={{ color: "#1a202c" }}>
                총 출하 예정
              </VuiTypography>
            </VuiBox>
            <VuiBox textAlign="right">
              <VuiTypography variant="button" fontWeight="bold" sx={{ color: "#1a202c" }}>
                {shipmentData.reduce((sum, item) => sum + item.chickens, 0).toLocaleString()}마리
              </VuiTypography>
              <VuiTypography color="success" variant="button" fontWeight="bold" display="block">
                ₩{shipmentData.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ShipmentSchedule;
