import React from "react";

import { Card } from "@mui/material";

import videoSource from "assets/images/gaussian_heatmap_h264.mp4";

const WelcomeMark = () => {
  return (
    <Card sx={() => ({
      height: "850px",
      py: "32px",
      position: "relative",
      overflow: "hidden"
    })}>
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
          zIndex: 1
        }}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </Card>
  );
};

export default WelcomeMark;
