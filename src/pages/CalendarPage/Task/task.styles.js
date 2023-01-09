import { Paper, styled } from '@mui/material';

export const PaperTask = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(242, 236, 220, 0.3)',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const WrapperCheckboxTask = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: 16,
  padding: 8,
}));

export const TitleTask = styled('div')(() => ({
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
}));

export const WrapperBtnTask = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: 16,

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'end',
  },
}));
