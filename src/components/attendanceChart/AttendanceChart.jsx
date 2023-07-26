import { Box, Divider, IconButton } from '@mui/material';
import React from 'react';
import { ButtonBox, GridContainer, GridItem } from './attendanceChart.styles';
import { Controls } from '../controls';
import { STATIC_ASSETS } from '../../global/staticAssets';

const AttendanceChart = () => {
  const num = 31;

  const handlePrint = () => {
    window.print();
  };
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Controls.BaseTypography text="July, 2023" />
        <Box display={'flex'}>
          <IconButton color="primary">
            <STATIC_ASSETS.ARROW_PREV />
          </IconButton>
          <IconButton color="primary">
            <STATIC_ASSETS.ARROW_NEXT />
          </IconButton>
        </Box>
      </Box>
      <GridContainer container>
        {Array.from(Array(num), (_, index) => (
          <GridItem isPresent={true} key={index} item xs={1}>
            {index + 1}
          </GridItem>
        ))}
      </GridContainer>
      <Box display={'flex'} mt={1}>
        <Controls.BaseTypography text="Present days: 26" />
        <Controls.BaseTypography ml={4} text="Absent days: 4" />
        <Controls.BaseTypography ml={4} text="Total days worked: 4" />
      </Box>
      <Divider sx={{ mt: '3rem' }} />
      <ButtonBox>
        <Controls.BaseButton onClick={handlePrint} text="Print" />
        <Controls.BaseButton text="Close" />
      </ButtonBox>
    </Box>
  );
};

export default AttendanceChart;