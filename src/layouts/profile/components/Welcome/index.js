import React from "react";
import { Card, Icon } from "@mui/material";
import welcome from "assets/images/welcome-profile.png";
import VuiTypography from "components/VuiTypography/index";
import VuiBox from "components/VuiBox/index";

const Welcome = () => {
  return (
    <Card
      sx={({ breakpoints }) => ({
        background: `url(${welcome})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        height: "100%",
        [breakpoints.only("xl")]: {
          gridArea: "1 / 1 / 2 / 2",
        },
      })}
    >
      <VuiBox display="flex" flexDirection="column" sx={{ height: "100%" }}>
        <VuiBox display="flex" flexDirection="column" mb="auto">
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="3px">
            다시 오셨군요!
          </VuiTypography>
          <VuiTypography color="white" variant="button" fontWeight="regular">
            반갑습니다, 이혜진 농장주님!
          </VuiTypography>
        </VuiBox>
        <VuiBox justifySelf="flex-end">
          <VuiTypography
            component="a"
            href="#"
            variant="button"
            color="white"
            fontWeight="regular"
            sx={{
              mr: "5px",
              display: "inline-flex",
              alignItems: "center",
              justifySelf: "flex-end",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            생산 일지 기록하기
            <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default Welcome;
