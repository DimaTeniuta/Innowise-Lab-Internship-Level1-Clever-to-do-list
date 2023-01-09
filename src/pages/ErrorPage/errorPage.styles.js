import { styled, Typography } from '@mui/material';

export const TypographyErrorPage = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 50,

  [theme.breakpoints.only('md')]: {
    fontSize: 34,
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: 34,
  },
  [theme.breakpoints.only('xs')]: {
    fontSize: 22,
  },
}));
