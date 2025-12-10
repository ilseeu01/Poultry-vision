import React from 'react';
import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';

function ChickenCount() {
	const { gradients } = colors;

	return (
		<Card
			sx={{
				height: '250px',
				background: '#ffffff',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
				borderRadius: '12px'
			}}>
			<VuiBox display='flex' flexDirection='column' alignItems='center' justifyContent='center' width='100%'>
				<VuiTypography
					variant='button'
					fontWeight='regular'
					mb='15px'
					sx={{ color: '#666' }}>
					출하 예정 일정
				</VuiTypography>

				<VuiBox
					display='flex'
					alignItems='center'
					justifyContent='center'
					sx={{
						width: '60px',
						height: '60px',
						backgroundColor: '#f8f8f8',
						borderRadius: '50%',
						mb: '20px'
					}}>
					<VuiTypography
						variant='h4'
						fontWeight='bold'
						sx={{ color: '#333' }}>
						🐓
					</VuiTypography>
				</VuiBox>

				<VuiBox display='flex' flexDirection='column' alignItems='center' gap='12px' width='100%'>
					<VuiBox
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						sx={{
							width: '100%',
							maxWidth: '280px',
							padding: '12px 20px',
							backgroundColor: '#f8f8f8',
							borderRadius: '10px'
						}}>
						<VuiTypography
							variant='body2'
							fontWeight='medium'
							sx={{ color: '#333' }}>
							12월 25일 출하
						</VuiTypography>
						<VuiTypography
							variant='h6'
							fontWeight='bold'
							sx={{ color: '#FF6B35' }}>
							D - 15
						</VuiTypography>
					</VuiBox>

					<VuiBox
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						sx={{
							width: '100%',
							maxWidth: '280px',
							padding: '12px 20px',
							backgroundColor: '#f8f8f8',
							borderRadius: '10px'
						}}>
						<VuiTypography
							variant='body2'
							fontWeight='medium'
							sx={{ color: '#333' }}>
							12월 31일 출하
						</VuiTypography>
						<VuiTypography
							variant='h6'
							fontWeight='bold'
							sx={{ color: '#FF6B35' }}>
							D - 21
						</VuiTypography>
					</VuiBox>
				</VuiBox>
			</VuiBox>
		</Card>
	);
}

export default ChickenCount;