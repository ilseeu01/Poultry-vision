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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, Stack, Box } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "common/LayoutContainers/DashboardLayout";
import DashboardNavbar from "common/Navbars/DashboardNavbar";
import Footer from "common/Footer";
import MiniStatisticsCard from "common/Cards/StatisticsCards/MiniStatisticsCard";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";
import ChickenCount from "layouts/dashboard/components/ChickenCount";
import DeadCount from "layouts/dashboard/components/DeadCount";
import DeadCountCard from "layouts/dashboard/components/DeadCountCard";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaThermometerHalf } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineScience } from "react-icons/md";

// MMPose analysis videos
import id0 from "assets/images/id0.mp4";
import id1 from "assets/images/id1.mp4";
import id2 from "assets/images/id2.mp4";
import id3 from "assets/images/id3.mp4";
import id4 from "assets/images/id4.mp4";
import id5 from "assets/images/id5.mp4";
import id6 from "assets/images/id6.mp4";
import id7 from "assets/images/id7.mp4";
import id8 from "assets/images/id8.mp4";
import id9 from "assets/images/id9.mp4";
import id10 from "assets/images/id10.mp4";
import id11 from "assets/images/id11.mp4";
import id12 from "assets/images/id12.mp4";
import id13 from "assets/images/id13.mp4";
import id14 from "assets/images/id14.mp4";
import id15 from "assets/images/id15.mp4";
import id16 from "assets/images/id16.mp4";
import id17 from "assets/images/id17.mp4";
import id18 from "assets/images/id18.mp4";
import id19 from "assets/images/id19.mp4";
import id20 from "assets/images/id20.mp4";
import id21 from "assets/images/id21.mp4";
import id22 from "assets/images/id22.mp4";
import id23 from "assets/images/id23.mp4";
import id24 from "assets/images/id24.mp4";
import id25 from "assets/images/id25.mp4";
import id26 from "assets/images/id26.mp4";
import id27 from "assets/images/id27.mp4";
import id28 from "assets/images/id28.mp4";

function Dashboard() {
  // MMPose analysis videos array
  const analysisVideos = [
    { id: 0, src: id0 }, { id: 1, src: id1 }, { id: 2, src: id2 },
    { id: 3, src: id3 }, { id: 4, src: id4 }, { id: 5, src: id5 },
    { id: 6, src: id6 }, { id: 7, src: id7 }, { id: 8, src: id8 },
    { id: 9, src: id9 }, { id: 10, src: id10 }, { id: 11, src: id11 },
    { id: 12, src: id12 }, { id: 13, src: id13 }, { id: 14, src: id14 },
    { id: 15, src: id15 }, { id: 16, src: id16 }, { id: 17, src: id17 },
    { id: 18, src: id18 }, { id: 19, src: id19 }, { id: 20, src: id20 },
    { id: 21, src: id21 }, { id: 22, src: id22 }, { id: 23, src: id23 },
    { id: 24, src: id24 }, { id: 25, src: id25 }, { id: 26, src: id26 },
    { id: 27, src: id27 }, { id: 28, src: id28 }
  ];

  const VideoCard = ({ title, videoSrc, height = "100px", maxWidth = "80px" }) => (
    <Box
      sx={{
        height: height,
        maxWidth: maxWidth,
        position: "relative",
        backgroundColor: "transparent",
        overflow: "hidden"
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
          objectFit: "contain",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Box>
  );

  return (
    <DashboardLayout>
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "양계장 온도", fontWeight: "regular" }}
                count="12°C"
                percentage={{ color: "success", text: "+3°C%" }}
                icon={{ color: "info", component: <FaThermometerHalf size="22px" color="grey" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "양계장 습도" }}
                count="20%"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <WiHumidity size="22px" color="grey" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "이산화탄소 농도" }}
                count="156ppm"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: <GiChemicalDrop size="22px" color="grey" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "암모니아 농도" }}
                count="1.4ppm"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: <MdOutlineScience size="22px" color="grey" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            {/* 왼쪽 큰 화면 */}
            <Grid item xs={12} lg={8} xl={8}>
              <WelcomeMark />
            </Grid>

            {/* 오른쪽 작은 3개 세로 */}
            <Grid item xs={12} lg={4} xl={4}>
              <Stack spacing={3}>
                <ReferralTracking />   {/* 작쀈1 */}
                <ChickenCount />       {/* 작삈2 */}
                <DeadCountCard />      {/* 작삈3 */}
              </Stack>
            </Grid>
          </Grid>
        </VuiBox>

        {/* MMPose Analysis Results */}
        <VuiBox mb={3}>
          <VuiTypography variant="h5" sx={{ color: "#000000" }} fontWeight="bold" mb={3}>
            📊 MMPose 분석 결과
          </VuiTypography>
          <Grid container spacing={3}>
            {analysisVideos.map((video) => (
              <Grid item xs={12} sm={4} md={2} lg={1} key={video.id}>
                <VideoCard title={`ID-${video.id}`} videoSrc={video.src} height="100px" maxWidth="80px" />
              </Grid>
            ))}
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
