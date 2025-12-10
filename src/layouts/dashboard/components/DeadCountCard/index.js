import React from 'react';
import { Card, Divider } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';

function DeadCountCard() {
	return (
		<Card
			sx={{
				background: '#ffffff',
				padding: '24px',
				boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
				borderRadius: '12px',
				minHeight: '180px'
			}}>
			<VuiBox display='flex' flexDirection='column' height='100%'>
				<VuiBox mb='16px'>
					<VuiTypography 
						variant='h5' 
						fontWeight='bold' 
						mb='8px'
						sx={{ color: '#333333' }}>
						누적 폐사 수
					</VuiTypography>
					<VuiTypography 
						variant='caption' 
						fontWeight='regular'
						sx={{ color: '#999999' }}>
						2025. 12. 10. 13:00 기준
					</VuiTypography>
				</VuiBox>
				
				<Divider 
					sx={{ 
						backgroundColor: '#E0E0E0',
						mb: '24px',
						width: '100%'
					}} 
				/>
				
				<VuiBox 
					display='flex' 
					alignItems='center' 
					justifyContent='center'
					sx={{ flexGrow: 1 }}>
					<VuiTypography 
						variant='h2' 
						fontWeight='bold'
						sx={{
							fontSize: '2.5rem',
							color: '#FF6B35'
						}}>
						15마리
					</VuiTypography>
				</VuiBox>
			</VuiBox>
		</Card>
	);
}

export default DeadCountCard;