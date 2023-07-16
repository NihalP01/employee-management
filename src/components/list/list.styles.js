import { Grid, styled } from '@mui/material';

export const GridWrapper = styled(Grid)(({listcolor}) => ({
  background: listcolor,
  borderRadius: '0.5rem',
  paddingBottom: '0.8rem',
  paddingLeft: '0.5rem',
}));
