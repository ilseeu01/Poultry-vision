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

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard React example components
import DashboardLayout from "common/LayoutContainers/DashboardLayout";
import DashboardNavbar from "common/Navbars/DashboardNavbar";
import Footer from "common/Footer";

// Revenue Management page components
import ChickenStatus from "layouts/billing/components/ChickenStatus";
import RevenueCalculation from "layouts/billing/components/RevenueCalculation";
import ShipmentSchedule from "layouts/billing/components/ShipmentSchedule";
import CostBreakdown from "layouts/billing/components/CostBreakdown";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={4}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            {/* 상단: 현재 닭 현황 + 예상 수익 */}
            <Grid item xs={12} lg={6}>
              <ChickenStatus />
            </Grid>
            <Grid item xs={12} lg={6}>
              <RevenueCalculation />
            </Grid>
          </Grid>
        </VuiBox>

        <VuiBox mb={3}>
          <Grid container spacing={3}>
            {/* 중단: 출하 예정 정보 + 비용 내역 */}
            <Grid item xs={12} lg={6}>
              <ShipmentSchedule />
            </Grid>
            <Grid item xs={12} lg={6}>
              <CostBreakdown />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
