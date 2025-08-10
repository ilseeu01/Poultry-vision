// @mui material components
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// 팀/프로필 이미지 (그대로 사용)
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";

// Vision UI 컴포넌트
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// 레이아웃 구성요소 (기존 컴포넌트 유지)
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import CarInformations from "./components/CarInformations";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          {/* 환영 섹션 */}
          <Grid
            item
            xs={12}
            xl={4}
            xxl={3}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            {/* Welcome 컴포넌트 내부 텍스트는 해당 파일에서 따로 한글화하면 좋음 */}
            <Welcome />
          </Grid>

          {/* 차량 정보 -> 임시로 유지 (추후 '사육 환경 요약' 컴포넌트로 교체 추천) */}
          <Grid
            item
            xs={12}
            xl={5}
            xxl={6}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3",
              },
            })}
          >
            <CarInformations />
          </Grid>

          {/* 프로필 카드 */}
          <Grid
            item
            xs={12}
            xl={3}
            xxl={3}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <ProfileInfoCard
              title="프로필 정보"
              description="안녕하세요! 양계장 AI 대시보드를 운영 중입니다. 목표는 센서·카메라 데이터를 바탕으로 쾌적한 사육 환경을 유지하고 질병을 조기에 감지하는 것입니다."
              info={{
                fullName: "이혜진",
                mobile: "010-0000-0000",
                email: "admin@poultry.ai",
                location: "대한민국",
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>
        </Grid>
      </VuiBox>

      {/* 설정 + 모듈(프로젝트) 섹션 */}
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={3} height="100%">
          {/* PlatformSettings 내부 문구도 따로 한글화 필요 */}
          <PlatformSettings />
        </Grid>

        <Grid item xs={12} xl={9}>
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  양계장 AI 모듈
                </VuiTypography>
                <VuiTypography color="text" variant="button" fontWeight="regular">
                  센서·영상 데이터 기반 의사결정을 지원합니다
                </VuiTypography>
              </VuiBox>

              <Grid container spacing={3}>
                {/* 모듈 1: 실시간 사육 환경 */}
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile1}
                    label="모듈 #1"
                    title="실시간 사육 환경"
                    description="온도·습도·암모니아·CO₂·조도 등 환경지표를 실시간으로 모니터링하고 경보를 제공합니다."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview", // 실제 라우트로 교체 추천
                      color: "white",
                      label: "자세히 보기",
                    }}
                    authors={[
                      { image: team1, name: "Sensor Hub" },
                      { image: team2, name: "Rule Engine" },
                      { image: team3, name: "Notifier" },
                      { image: team4, name: "Dashboard" },
                    ]}
                  />
                </Grid>

                {/* 모듈 2: 질병 조기경보 */}
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile2}
                    label="모듈 #2"
                    title="질병 조기경보"
                    description="카메라/음향 데이터로 이상행동·울음 소리 패턴을 감지해 질병 가능성을 조기에 경보합니다."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "자세히 보기",
                    }}
                    authors={[
                      { image: team3, name: "CV Model" },
                      { image: team4, name: "Audio Model" },
                      { image: team1, name: "Data Pipeline" },
                      { image: team2, name: "Alerting" },
                    ]}
                  />
                </Grid>

                {/* 모듈 3: 사료·급수 예측 */}
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile3}
                    label="모듈 #3"
                    title="사료·급수 예측"
                    description="개체수/증체량/기상 데이터를 학습해 사료·물 소비를 예측하고 발주를 최적화합니다."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "자세히 보기",
                    }}
                    authors={[
                      { image: team4, name: "Forecast" },
                      { image: team3, name: "ETL" },
                      { image: team2, name: "Feature Store" },
                      { image: team1, name: "Monitoring" },
                    ]}
                  />
                </Grid>
              </Grid>
            </VuiBox>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
