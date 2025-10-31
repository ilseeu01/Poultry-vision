import React from "react";
import { Card, Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { IoWallet, IoTrendingUp, IoTrendingDown } from "react-icons/io5";
import { GiReceiveMoney, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";

function RevenueCalculation() {
  const { gradients, info } = colors;

  // 실제로는 API에서 가져올 데이터
  const totalChickens = 7639; // 건강한 닭만 계산
  const pricePerKg = 3500; // 원/kg
  const avgWeight = 2.8; // kg
  const pricePerChicken = pricePerKg * avgWeight; // 9,800원
  const totalRevenue = totalChickens * pricePerChicken;

  const feedCost = 45000000; // 사료비
  const managementCost = 12000000; // 관리비
  const totalCost = feedCost + managementCost;
  const netProfit = totalRevenue - totalCost;
  const profitRate = ((netProfit / totalRevenue) * 100).toFixed(1);

  return (
    <Card sx={{ height: "100%", background: "rgba(255, 255, 255, 0.95)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", p: "20px" }}>
      <VuiBox display="flex" flexDirection="column">
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="18px">
            <VuiTypography variant="lg" fontWeight="bold" sx={{ color: "#1a202c" }}>
              예상 수익 계산
            </VuiTypography>
            <VuiBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                background: linearGradient(
                  "rgba(0, 117, 255, 0.5)",
                  "rgba(0, 117, 255, 0.3)"
                ),
                borderRadius: "12px",
                width: "46px",
                height: "46px",
              }}
            >
              <IoWallet color="#fff" size="24px" />
            </VuiBox>
          </VuiBox>

          <VuiBox>
            {/* 총 예상 수익 */}
            <VuiBox
              mb="16px"
              p="18px"
              sx={{
                background: "rgba(1, 181, 116, 0.25)",
                borderRadius: "12px",
                border: "2px solid rgba(1, 181, 116, 0.4)",
              }}
            >
              <VuiBox display="flex" alignItems="center" mb="10px">
                <GiReceiveMoney color="#01B574" size="22px" />
                <VuiTypography variant="button" fontWeight="bold" ml="8px" sx={{ color: "#1a202c" }}>
                  총 예상 수익
                </VuiTypography>
              </VuiBox>
              <VuiTypography variant="h2" fontWeight="bold" mb="6px" sx={{ color: "#1a202c" }}>
                ₩{totalRevenue.toLocaleString()}
              </VuiTypography>
              <VuiTypography variant="button" fontWeight="medium" sx={{ color: "#718096" }}>
                {totalChickens.toLocaleString()}마리 × ₩{pricePerChicken.toLocaleString()}/마리
              </VuiTypography>
            </VuiBox>

            {/* 총 비용 */}
            <VuiBox
              mb="16px"
              p="18px"
              sx={{
                background: "rgba(227, 26, 26, 0.25)",
                borderRadius: "12px",
                border: "2px solid rgba(227, 26, 26, 0.4)",
              }}
            >
              <VuiBox display="flex" alignItems="center" mb="10px">
                <GiPayMoney color="#E31A1A" size="22px" />
                <VuiTypography variant="button" fontWeight="bold" ml="8px" sx={{ color: "#1a202c" }}>
                  총 비용
                </VuiTypography>
              </VuiBox>
              <VuiTypography variant="h3" fontWeight="bold" mb="12px" sx={{ color: "#1a202c" }}>
                ₩{totalCost.toLocaleString()}
              </VuiTypography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <VuiTypography variant="caption" fontWeight="bold" sx={{ color: "#718096" }}>
                    사료비
                  </VuiTypography>
                  <VuiTypography variant="button" fontWeight="bold" sx={{ color: "#1a202c" }}>
                    ₩{feedCost.toLocaleString()}
                  </VuiTypography>
                </Grid>
                <Grid item xs={6}>
                  <VuiTypography variant="caption" fontWeight="bold" sx={{ color: "#718096" }}>
                    관리비
                  </VuiTypography>
                  <VuiTypography variant="button" fontWeight="bold" sx={{ color: "#1a202c" }}>
                    ₩{managementCost.toLocaleString()}
                  </VuiTypography>
                </Grid>
              </Grid>
            </VuiBox>

            {/* 순수익 */}
            <VuiBox
              p="20px"
              sx={{
                background: "rgba(0, 150, 255, 0.3)",
                borderRadius: "12px",
                border: "2px solid rgba(0, 150, 255, 0.5)",
              }}
            >
              <VuiBox display="flex" alignItems="center" mb="10px">
                <GiTakeMyMoney color="#0096FF" size="24px" />
                <VuiTypography variant="lg" fontWeight="bold" ml="8px" sx={{ color: "#1a202c" }}>
                  예상 순수익
                </VuiTypography>
              </VuiBox>
              <VuiTypography variant="h2" fontWeight="bold" mb="8px" sx={{ color: "#1a202c" }}>
                ₩{netProfit.toLocaleString()}
              </VuiTypography>
              <VuiBox display="flex" alignItems="center">
                <IoTrendingUp color="#01B574" size="18px" />
                <VuiTypography variant="button" fontWeight="bold" ml="6px" sx={{ color: "#01B574" }}>
                  수익률 {profitRate}%
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default RevenueCalculation;
