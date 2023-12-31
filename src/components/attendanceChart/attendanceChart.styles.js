import { Box, Grid, styled } from '@mui/material';

export const GridContainer = styled(Grid)(() => ({
  margin: '0.5rem 0 0 0',
}));

export const GridItem = styled(Grid)(({ ispresent }) => ({
  border: '1px solid grey',
  padding: '0 1rem 0 1rem',
  backgroundColor: ispresent === 'true' ? '#b6ffb6' : '#ffb6b6',
  display: 'flex',
  borderRadius: '0.4rem',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0.2rem',
}));

export const ButtonBox = styled(Box)(() => ({
  marginTop: '0.7rem',
  marginBottom: '0.1rem',
  display: 'flex',
  justifyContent: 'end',
}));
