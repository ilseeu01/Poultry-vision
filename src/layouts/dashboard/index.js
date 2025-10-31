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
import { Card, Stack } from "@mui/material";

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


function Dashboard() {

  return (
    <DashboardLayout>
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "양계장 온도", fontWeight: "regular" }}
                count="25°C"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: <FaThermometerHalf size="22px" color="grey" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "양계장 습도" }}
                count="60%"
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
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
