import React from 'react';
import { Card, Stack } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';

function ReferralTracking() {
  return (
    <Card
      sx={{
        height: '250px',              // ← 카드 전체 높이 고정
        background: '#ffffff',
        border: '1px solid #e2e8f0'
      }}
    >
      <VuiBox
        sx={{
          width: '100%',
          p: '24px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start' // 제목은 위쪽, 알림 박스는 아래쪽
        }}
      >
        {/* 상단 제목 */}
        <VuiBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: '100%' }}
          mb="16px"   // 제목과 박스 사이 간격 줄임
        >
          <VuiTypography variant="lg" fontWeight="bold" sx={{ color: "#000" }}>
            모니터링 이상 알림
          </VuiTypography>
        </VuiBox>

        {/* 알림 카드 2개 */}
        <VuiBox display="flex" justifyContent="center" alignItems="center" flex={1}>
          <Stack
            direction="column"
            spacing="10px"
            sx={{
              alignItems: "center"
            }}
          >
            <VuiBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              p="16px 20px"
              sx={{
                background: '#f7fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                minWidth: '280px',
                textAlign: 'center'
              }}
            >
              <VuiTypography color="dark" variant="lg" fontWeight="bold">
                A동 2라인 폐사 개체 감지
              </VuiTypography>
            </VuiBox>

            <VuiBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              p="16px 20px"
              sx={{
                background: '#f7fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                minWidth: '280px',
                textAlign: 'center'
              }}
            >
              <VuiTypography color="dark" variant="lg" fontWeight="bold">
                B동 3번 라인 폐사 개체 감지
              </VuiTypography>
            </VuiBox>
          </Stack>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ReferralTracking;
