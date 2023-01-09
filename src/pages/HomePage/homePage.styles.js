import { Button, Container, styled } from '@mui/material';

export const ContainerHomePage = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 8,
  paddingTop: 26,
  paddingBottom: 26,
}));

export const WrapperHomePage = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 24,
}));

export const H1HomePage = styled('h1')(({ theme }) => ({
  fontSize: 50,

  [theme.breakpoints.only('md')]: {
    fontSize: 34,
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: 34,
  },
  [theme.breakpoints.only('xs')]: {
    fontSize: 32,
  },
}));

export const PHomePage = styled('p')(() => ({
  color: 'gray',
  textAlign: 'center',
  fontSize: 20,
}));

export const ButtonHomePage = styled(Button)(({ theme }) => ({
  width: 250,
  height: 56,
  borderRadius: 22,
  color: theme.palette.secondary.main,
  fontSize: 22,

  [theme.breakpoints.only('md')]: {
    width: 200,
    height: 50,
    fontSize: 20,
  },
  [theme.breakpoints.only('sm')]: {
    width: 200,
    height: 50,
    fontSize: 18,
  },
  [theme.breakpoints.only('xs')]: {
    width: 200,
    height: 50,
    fontSize: 18,
  },
}));

export const ImageHomePage = styled('div')(({ theme }) => ({
  width: 550,
  height: 550,
  backgroundImage: 'url(./calendar.svg)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  [theme.breakpoints.only('md')]: {
    width: 500,
    height: 500,
  },
  [theme.breakpoints.only('sm')]: {
    width: 400,
    height: 400,
  },
  [theme.breakpoints.only('xs')]: {
    width: 200,
    height: 200,
  },
}));
