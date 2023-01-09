import { Container, styled } from '@mui/material';

export const ContainerCalendar = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 2,
  overflowX: 'hidden',
  pt: 3,
}));

export const WrapperCalendar = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  columnGap: 18,
  padding: 20,
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: 0,
    height: 0,
  },
  ':hover': {
    cursor: 'e-resize',
  },
}));

export const ButtonWrapperCalendar = styled('div')(() => ({
  display: 'flex',
  columnGap: 10,
  justifyContent: 'center',
}));
