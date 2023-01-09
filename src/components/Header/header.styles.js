import { Button, styled } from '@mui/material';

export const HeaderLink = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.contrastText,
  p: 1,
  fontSize: 14,
  textDecoration: 'none',
  '&.active': {
    color: theme.palette.secondary.main,
  },
}));

export const HeaderButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 1,
  color: theme.palette.primary.contrastText,
  fontSize: 14,
  textDecoration: 'none',

  [theme.breakpoints.up('sm')]: {
    width: 160,
  },
}));

export const TextButton = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));
