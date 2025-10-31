import React from "react";
import { Card, Stack } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import { IoReceipt } from "react-icons/io5";
import { GiFarmTractor, GiElectric, GiMedicalPack } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";

function CostBreakdown() {
  const { gradients } = colors;

  // 실제로는 API에서 가져올 데이터
  const totalCost = 57000000;
  const costData = [
    {
      name: "사료비",
      amount: 45000000,
      icon: <GiFarmTractor size="18px" />,
      color: "#0075FF",
    },
    {
      name: "전기/난방비",
      amount: 8000000,
      icon: <GiElectric size="18px" />,
      color: "#FFB547",
    },
    {
      name: "의약품/백신",
      amount: 2500000,
      icon: <GiMedicalPack size="18px" />,
      color: "#01B574",
    },
    {
      name: "운송비",
      amount: 1500000,
      icon: <MdLocalShipping size="18px" />,
      color: "#E31A1A",
    },
  ];

  return (
    <Card sx={{ height: "100%", background: "rgba(255, 255, 255, 0.95)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", p: "20px" }}>
      <VuiBox display="flex" flexDirection="column">
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="18px">
          <VuiTypography variant="lg" fontWeight="bold" sx={{ color: "#1a202c" }}>
            비용 내역
          </VuiTypography>
          <VuiBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              background: linearGradient(
                "rgba(255, 50, 50, 0.5)",
                "rgba(255, 50, 50, 0.3)"
              ),
              borderRadius: "12px",
              width: "46px",
              height: "46px",
            }}
          >
            <IoReceipt color="#fff" size="22px" />
          </VuiBox>
        </VuiBox>

        <VuiBox mb="20px">
          <VuiTypography variant="button" mb="6px" sx={{ color: "#718096" }}>
            이번 달 총 비용
          </VuiTypography>
          <VuiTypography variant="h2" fontWeight="bold" sx={{ color: "#1a202c" }}>
            ₩{totalCost.toLocaleString()}
          </VuiTypography>
        </VuiBox>

        <Stack spacing={2}>
          {costData.map((item, index) => {
            const percentage = ((item.amount / totalCost) * 100).toFixed(1);
            return (
              <VuiBox
                key={index}
                p="16px"
                sx={{
                  background: linearGradient(
                    "rgba(255, 255, 255, 0.05)",
                    "rgba(255, 255, 255, 0.02)"
                  ),
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="12px">
                  <VuiBox display="flex" alignItems="center">
                    <VuiBox
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        background: item.color,
                        borderRadius: "8px",
                        width: "32px",
                        height: "32px",
                        opacity: 0.8,
                      }}
                    >
                      {React.cloneElement(item.icon, { color: "#fff" })}
                    </VuiBox>
                    <VuiTypography variant="button" fontWeight="bold" ml="10px" sx={{ color: "#1a202c" }}>
                      {item.name}
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox textAlign="right">
                    <VuiTypography variant="button" fontWeight="bold" sx={{ color: "#1a202c" }}>
                      ₩{item.amount.toLocaleString()}
                    </VuiTypography>
                  </VuiBox>
                </VuiBox>

                <VuiBox>
                  <VuiBox display="flex" justifyContent="space-between" mb="4px">
                    <VuiTypography variant="caption" sx={{ color: "#718096" }}>
                      전체 비용 대비
                    </VuiTypography>
                    <VuiTypography variant="caption" fontWeight="bold" sx={{ color: "#1a202c" }}>
                      {percentage}%
                    </VuiTypography>
                  </VuiBox>
                  <VuiProgress value={parseFloat(percentage)} color="error" />
                </VuiBox>
              </VuiBox>
            );
          })}
        </Stack>

        {/* 비용 요약 */}
        <VuiBox
          mt="16px"
          p="16px"
          sx={{
            background: linearGradient(
              "rgba(255, 255, 255, 0.08)",
              "rgba(255, 255, 255, 0.03)"
            ),
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="8px">
            <VuiTypography variant="button" sx={{ color: "#718096" }}>
              예상 수익
            </VuiTypography>
            <VuiTypography color="success" variant="button" fontWeight="bold">
              ₩74,862,200
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="8px">
            <VuiTypography variant="button" sx={{ color: "#718096" }}>
              총 비용
            </VuiTypography>
            <VuiTypography color="error" variant="button" fontWeight="bold">
              -₩{totalCost.toLocaleString()}
            </VuiTypography>
          </VuiBox>
          <VuiBox
            pt="8px"
            mt="8px"
            sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}
          >
            <VuiBox display="flex" justifyContent="space-between" alignItems="center">
              <VuiTypography variant="button" fontWeight="bold" sx={{ color: "#1a202c" }}>
                순이익
              </VuiTypography>
              <VuiTypography variant="h4" fontWeight="bold" sx={{ color: "#1a202c" }}>
                ₩17,862,200
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default CostBreakdown;
