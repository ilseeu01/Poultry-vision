import React from "react";
import { Card, Grid, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { GiChicken } from "react-icons/gi";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";

function ChickenStatus() {
  const { gradients, info } = colors;
  const { cardContent } = gradients;

  // 실제로는 API에서 가져올 데이터
  const totalChickens = 7812;
  const healthyChickens = 7639;
  const deadChickens = 173;
  const averageDays = 42;

  return (
    <Card sx={{ height: "100%", background: "rgba(255, 255, 255, 0.95)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", p: "20px" }}>
      <VuiBox display="flex" flexDirection="column">
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="18px">
            <VuiTypography variant="lg" color="dark" fontWeight="bold" sx={{ color: "#1a202c" }}>
              현재 닭 현황
            </VuiTypography>
            <VuiBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                background: info.main,
                borderRadius: "12px",
                width: "46px",
                height: "46px",
              }}
            >
              <GiChicken color="#fff" size="24px" />
            </VuiBox>
          </VuiBox>

          <VuiBox>
            <VuiBox mb="24px">
              <VuiTypography variant="button" fontWeight="regular" mb="6px" sx={{ color: "#718096" }}>
                총 사육 마리수
              </VuiTypography>
              <VuiTypography variant="h2" fontWeight="bold" sx={{ color: "#1a202c" }}>
                {totalChickens.toLocaleString()}마리
              </VuiTypography>
            </VuiBox>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <VuiBox
                  display="flex"
                  flexDirection="column"
                  p="18px"
                  sx={{
                    background: "rgba(1, 181, 116, 0.25)",
                    borderRadius: "12px",
                    border: "2px solid rgba(1, 181, 116, 0.4)",
                  }}
                >
                  <VuiBox display="flex" alignItems="center" mb="10px">
                    <IoCheckmarkCircle color="#01B574" size="20px" />
                    <VuiTypography variant="button" fontWeight="bold" ml="8px" sx={{ color: "#1a202c" }}>
                      건강한 닭
                    </VuiTypography>
                  </VuiBox>
                  <VuiTypography variant="h3" fontWeight="bold" mb="4px" sx={{ color: "#1a202c" }}>
                    {healthyChickens.toLocaleString()}
                  </VuiTypography>
                  <VuiTypography color="success" variant="button" fontWeight="bold">
                    {((healthyChickens / totalChickens) * 100).toFixed(1)}%
                  </VuiTypography>
                </VuiBox>
              </Grid>

              <Grid item xs={6}>
                <VuiBox
                  display="flex"
                  flexDirection="column"
                  p="18px"
                  sx={{
                    background: "rgba(227, 26, 26, 0.25)",
                    borderRadius: "12px",
                    border: "2px solid rgba(227, 26, 26, 0.4)",
                  }}
                >
                  <VuiBox display="flex" alignItems="center" mb="10px">
                    <IoCloseCircle color="#E31A1A" size="20px" />
                    <VuiTypography variant="button" fontWeight="bold" ml="8px" sx={{ color: "#1a202c" }}>
                      폐사한 닭
                    </VuiTypography>
                  </VuiBox>
                  <VuiTypography variant="h3" fontWeight="bold" mb="4px" sx={{ color: "#1a202c" }}>
                    {deadChickens.toLocaleString()}
                  </VuiTypography>
                  <VuiTypography color="error" variant="button" fontWeight="bold">
                    {((deadChickens / totalChickens) * 100).toFixed(1)}%
                  </VuiTypography>
                </VuiBox>
              </Grid>
            </Grid>

            <VuiBox
              mt="16px"
              p="18px"
              sx={{
                background: "rgba(255, 200, 100, 0.2)",
                borderRadius: "12px",
                border: "2px solid rgba(255, 180, 80, 0.4)",
              }}
            >
              <VuiTypography variant="button" fontWeight="bold" mb="8px" sx={{ color: "#1a202c" }}>
                평균 사육 일수
              </VuiTypography>
              <VuiTypography variant="h3" fontWeight="bold" sx={{ color: "#1a202c" }}>
                {averageDays}일
              </VuiTypography>
            </VuiBox>
          </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ChickenStatus;
