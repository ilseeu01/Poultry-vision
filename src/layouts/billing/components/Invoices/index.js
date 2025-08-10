// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <VuiBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          청구서
        </VuiTypography>
        <VuiButton variant="contained" color="info" size="small">
          전체 보기
        </VuiButton>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="2020년 3월 1일" id="#MS-415646" price="₩180,000" />
          <Invoice date="2021년 2월 10일" id="#RV-126749" price="₩250,000" />
          <Invoice date="2020년 4월 5일" id="#QW-103578" price="₩120,000" />
          <Invoice date="2019년 6월 25일" id="#MS-415646" price="₩180,000" />
          <Invoice date="2019년 3월 1일" id="#AR-803481" price="₩300,000" noGutter />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Invoices;
