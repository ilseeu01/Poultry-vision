import React from "react";

import { Card, Icon } from "@mui/material";
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import videoFile from "assets/images/poultryTracking.mp4"
import gif from "assets/images/cardimgfree.jpg";

const WelcomeMark = () => {
  return (
    <Card
      sx={{
        p: 2,        // 카드 안쪽 여백
      }}
    >
      <Grid container spacing={2} alignItems="stretch">
        {/* 왼쪽: 영상 */}
        <Grid item xs={12} md={7} lg={8}>
          <VuiBox
            sx={{
              position: "relative",
              width: "100%",
              // 브라우저가 aspect-ratio 지원하면 이거 하나로 끝
              aspectRatio: "16 / 9",
              // 구형 브라우저 호환(폴백): 아래 2줄 켜고, video 스타일에서 height: "100%" 유지
              // pt: "56.25%",
              // height: 0,
              overflow: "hidden",
              borderRadius: "12px",
            }}
          >
            <video
              src={videoFile}
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover", // 16:9 프레임을 꽉 채우면서 비율 유지
              }}
            />
          </VuiBox>
        </Grid>

        {/* 오른쪽: 텍스트 */}
        <Grid item xs={12} md={5} lg={4}>
          <VuiBox
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={2}
          >
            <div>
              <VuiTypography color="text" variant="button" fontWeight="regular" mb="12px">
                환영합니다,
              </VuiTypography>
              <VuiTypography color="white" variant="h3" fontWeight="bold" mb="18px">
                이혜진님!
              </VuiTypography>
              <VuiTypography color="text" variant="h6" fontWeight="regular">
                현재 양계장 상태는 양호합니다. 폐사율은 안정적이며, 모든 구역의 센서 데이터가 정상 범위 내에 있습니다.
                <br />
    
              </VuiTypography>
            </div>

            <VuiTypography
              component="a"
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              sx={{
                mt: 2,
                display: "inline-flex",
                alignItems: "center",
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
              자세히 보기
              <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
            </VuiTypography>
          </VuiBox>
        </Grid>
      </Grid>
    </Card>
  );
};

export default WelcomeMark;
