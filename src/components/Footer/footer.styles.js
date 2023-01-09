import { Link, Paper, styled } from '@mui/material';

export const PaperFooter = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 0,
}));

export const WrapperFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 10,
  paddingBottom: 10,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
  },
}));

export const WrapperLinkGitHub = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: 3,
  flexDirection: 'row',

  [theme.breakpoints.only('xs')]: {
    gap: 1,
    flexDirection: 'column',
  },
}));

export const LinkGitHub = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
}));

export const WrapperYear = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: 30,
  width: 'auto',

  [theme.breakpoints.between('md', 'lg')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 112,
  },
}));
