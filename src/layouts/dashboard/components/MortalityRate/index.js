// MortalityRate.jsx
import React from "react";
import { Card } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { IoHappy } from "react-icons/io5";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
import CircularProgress from "@mui/material/CircularProgress";

const MortalityRate = () => {
  const { info, gradients } = colors;
  const { cardContent } = gradients;

  return (
	<Card sx={{ height: 410, display: 'flex' }}>
	<VuiBox display="flex" flexDirection="column" sx={{ width: '100%', height: '100%' }}>
		{/* 타이틀 */}
		<VuiTypography variant="lg" color="white" fontWeight="bold" mb="4px">
		폐사율
		</VuiTypography>
		<VuiTypography variant="button" color="text" fontWeight="regular" mb="12px">
		전체 8개 동 대상
		</VuiTypography>

		{/* 그래프 + 바를 정상 흐름에서 중앙 배치 */}
		<VuiBox
		display="flex"
		flexDirection="column"
		justifyContent="center"
		alignItems="center"
		sx={{ flex: 1, gap: 4 }}   // gap으로 간격 조절
		>
		{/* 게이지 */}
		<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress variant="determinate" value={97} size={170} color="info" />
			<VuiBox
			sx={{
				position: 'absolute', inset: 0,
				display: 'flex', alignItems: 'center', justifyContent: 'center',
			}}
			>
			<VuiBox
				sx={{
				background: colors.info.main,
				width: 50, height: 50, borderRadius: '50%',
				display: 'flex', justifyContent: 'center', alignItems: 'center',
				}}
			>
				<IoHappy size="30px" color="#fff" />
			</VuiBox>
			</VuiBox>
		</VuiBox>

		{/* 하단 요약 바 — transform 제거 */}
		<VuiBox
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			sx={{
			width: '90%',
			height: 82,
			px: '22px',
			borderRadius: '20px',
			background: linearGradient(
				colors.gradients.cardContent.main,
				colors.gradients.cardContent.state,
				colors.gradients.cardContent.deg
			),
			// 겹치고 싶으면 아래 한 줄만 사용 (lg에서는 0으로)
			mt: { xs: -1, md: -2, lg: 0 },
			}}
		>
			<VuiTypography color="text" variant="caption">0%</VuiTypography>
			<VuiBox display="flex" flexDirection="column" alignItems="center" sx={{ minWidth: 80 }}>
			<VuiTypography color="white" variant="h3">3%</VuiTypography>
			<VuiTypography color="text" variant="caption">센서 감지 기반</VuiTypography>
			</VuiBox>
			<VuiTypography color="text" variant="caption">100%</VuiTypography>
		</VuiBox>
		</VuiBox>
	</VuiBox>
	</Card>


  );
};

export default MortalityRate;
