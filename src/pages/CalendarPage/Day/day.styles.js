import { Paper, styled } from '@mui/material';

export const PaperDay = styled(Paper)(({ theme, active }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: '150px',
  padding: 10,
  border: active === 'true' ? '2px solid #ffa726' : '2px solid #fefefe',
  transition: '0.1s',
  ':hover': {
    cursor: 'pointer',
    transform: 'scale(1.1)',
  },

  [theme.breakpoints.only('xs')]: {
    minWidth: '110px',
  },
}));

export const WrapperDay = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const MonthDivDay = styled('div')(({ theme }) => ({
  fontSize: 18,
  [theme.breakpoints.only('xs')]: {
    fontSize: 14,
  },
}));

export const DivDay = styled('div')(({ theme }) => ({
  fontSize: 24,
  [theme.breakpoints.only('xs')]: {
    fontSize: 18,
  },
}));
