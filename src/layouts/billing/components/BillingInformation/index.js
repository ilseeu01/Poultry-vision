// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          결제 정보
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="김철수"
            company="무등산양계장"
            email="chulsoo@hangangfarm.co.kr"
            vat="FRB1235476"
          />
          <Bill
            name="박영희"
            company="청솔농장"
            email="younghee@cheongsolfarm.co.kr"
            vat="FRB1235476"
          />
          <Bill
            name="이민수"
            company="대성양계"
            email="minsu@daeseongfarm.co.kr"
            vat="FRB1235476"
            noGutter
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default BillingInformation;
