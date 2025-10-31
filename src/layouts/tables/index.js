/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "common/LayoutContainers/DashboardLayout";
import DashboardNavbar from "common/Navbars/DashboardNavbar";
import Footer from "common/Footer";

// Video sources
import video1 from "assets/images/output1.mp4";
import video2 from "assets/images/output2.mp4";
import video3 from "assets/images/output3.mp4";
import video4 from "assets/images/output4.mp4";

function Tables() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const StatCard = ({ title, count, subtitle, icon }) => (
    <Card
      sx={{
        padding: "24px",
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
      }}
    >
      <VuiBox display="flex" alignItems="center" justifyContent="center" mb={2}>
        {icon && <VuiBox mr={1}>{icon}</VuiBox>}
        <VuiTypography variant="h6" sx={{ color: "#333" }} fontWeight="medium">
          {title}
        </VuiTypography>
      </VuiBox>
      <VuiTypography variant="h2" sx={{ color: "#FF6B35" }} fontWeight="bold" mb={1}>
        {count}
      </VuiTypography>
      <VuiTypography variant="caption" sx={{ color: "#666" }}>
        {subtitle}
      </VuiTypography>
    </Card>
  );

  const CameraCard = ({ title, videoSrc, hasAlert = false }) => (
    <Card
      sx={{
        height: "320px",
        position: "relative",
        backgroundColor: "#ffffff",
        border: hasAlert ? "3px solid #FF6B35" : "1px solid #e2e8f0",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: hasAlert 
          ? "0 12px 40px rgba(255, 107, 53, 0.4)" 
          : "0 8px 32px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: hasAlert 
            ? "0 16px 48px rgba(255, 107, 53, 0.5)" 
            : "0 12px 40px rgba(0, 0, 0, 0.15)"
        }
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      {/* Alert indicator */}
      {hasAlert && (
        <VuiBox
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            width: "48px",
            height: "48px",
            background: "linear-gradient(135deg, #FF6B35 0%, #FF8C69 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
            boxShadow: "0 4px 16px rgba(255, 107, 53, 0.4)",
            animation: "pulse 2s infinite"
          }}
        >
          <VuiTypography variant="h6" color="white" fontWeight="bold">
            \u26a0
          </VuiTypography>
        </VuiBox>
      )}
      
      {/* Status badge */}
      <VuiBox
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px)",
          padding: "8px 12px",
          borderRadius: "8px",
          zIndex: 3
        }}
      >
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          \ud83d\udd34 LIVE
        </VuiTypography>
      </VuiBox>
      
      {/* Title overlay */}
      <VuiBox
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
          p: 3,
          zIndex: 2
        }}
      >
        <VuiTypography variant="h4" color="white" fontWeight="bold" mb={1}>
          {title}
        </VuiTypography>
        <VuiTypography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>
          \uc2e4\uc2dc\uac04 \ubaa8\ub2c8\ud130\ub9c1 \uc911
        </VuiTypography>
      </VuiBox>
    </Card>
  );

  return (
    <DashboardLayout>
      <VuiBox py={3}>
        {/* Header Section */}
        <VuiBox mb={4}>
          <VuiTypography variant="h4" sx={{ color: "#2D3748" }} fontWeight="bold" mb={3}>
            🐔 실시간 모니터링 시스템
          </VuiTypography>
          
          {/* Building Tabs */}
          <VuiBox 
            sx={{
              backgroundColor: "#F7FAFC",
              padding: "8px",
              borderRadius: "16px",
              display: "inline-block"
            }}
          >
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              sx={{
                minHeight: "48px",
                '& .MuiTabs-indicator': {
                  backgroundColor: 'transparent',
                },
                '& .MuiTab-root': {
                  color: '#000000 !important',
                  fontWeight: 'medium',
                  minHeight: "40px",
                  borderRadius: "12px",
                  margin: "0 4px",
                  transition: 'all 0.3s ease',
                  '&.Mui-selected': {
                    color: '#FFFFFF !important',
                    backgroundColor: '#FF6B35',
                    boxShadow: '0 2px 8px rgba(255, 107, 53, 0.3)'
                  },
                  '&:not(.Mui-selected)': {
                    color: '#000000 !important'
                  }
                }
              }}
            >
              <Tab label="A동" />
              <Tab label="B동" />
              <Tab label="C동" />
              <Tab label="D동" />
            </Tabs>
          </VuiBox>
        </VuiBox>

        {/* Statistics Cards */}
        <VuiBox mb={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <VuiBox 
                sx={{
                  background: "linear-gradient(135deg, #FF6B35 0%, #FF8C69 100%)",
                  padding: "24px",
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(255, 107, 53, 0.3)",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-50%",
                    right: "-50%",
                    width: "200%",
                    height: "200%",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    zIndex: 0
                  }
                }}
              >
                <VuiBox position="relative" zIndex={1}>
                  <VuiTypography variant="h6" fontWeight="medium" mb={1} sx={{ opacity: 0.9 }}>
                    ⚠️ 미처리 사체
                  </VuiTypography>
                  <VuiTypography variant="h2" fontWeight="bold" mb={1}>
                    5마리
                  </VuiTypography>
                  <VuiTypography variant="caption" sx={{ opacity: 0.8 }}>
                    12시간 내 처리 권장
                  </VuiTypography>
                </VuiBox>
              </VuiBox>
            </Grid>
            
            <Grid item xs={12} md={6} lg={3}>
              <VuiBox 
                sx={{
                  background: "linear-gradient(135deg, #4299E1 0%, #63B3ED 100%)",
                  padding: "24px",
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(66, 153, 225, 0.3)",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-50%",
                    right: "-50%",
                    width: "200%",
                    height: "200%",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    zIndex: 0
                  }
                }}
              >
                <VuiBox position="relative" zIndex={1}>
                  <VuiTypography variant="h6" fontWeight="medium" mb={1} sx={{ opacity: 0.9 }}>
                    📹 금일 감지 사체
                  </VuiTypography>
                  <VuiTypography variant="h2" fontWeight="bold" mb={1}>
                    7마리
                  </VuiTypography>
                  <VuiTypography variant="caption" sx={{ opacity: 0.8 }}>
                    CCTV 기반 추정
                  </VuiTypography>
                </VuiBox>
              </VuiBox>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <VuiBox
                sx={{
                  background: "linear-gradient(135deg, #9F7AEA 0%, #B794F6 100%)",
                  padding: "32px",
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(159, 122, 234, 0.3)",
                  color: "white",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    zIndex: 0
                  }
                }}
              >
                <VuiBox position="relative" zIndex={1}>
                  <VuiTypography variant="h6" fontWeight="medium" mb={2} sx={{ opacity: 0.9 }}>
                    🕐 정기 점검 루틴
                  </VuiTypography>
                  <VuiTypography variant="h3" fontWeight="bold" mb={1}>
                    05 - 06 . 11 . 14 - 16
                  </VuiTypography>
                  <VuiTypography variant="body2" sx={{ opacity: 0.8 }}>
                    매트리얼 점검 : 12시간 주기
                  </VuiTypography>
                </VuiBox>
              </VuiBox>
            </Grid>
          </Grid>
        </VuiBox>

        {/* Camera Grid */}
        <VuiBox>
          <VuiTypography variant="h5" sx={{ color: "#000000" }} fontWeight="bold" mb={3}>
            📹 실시간 카메라 모니터링
          </VuiTypography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <CameraCard title="CAM-1" videoSrc={video1} hasAlert={true} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <CameraCard title="CAM-2" videoSrc={video2} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <CameraCard title="CAM-3" videoSrc={video3} hasAlert={true} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <CameraCard title="CAM-4" videoSrc={video4} />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
