import { Card, IconButton, styled, Typography } from '@mui/material';

export const CardTaskPanel = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 600,
  minHeight: '100vh',
  boxShadow: 'none',
  pl: 1,

  [theme.breakpoints.only('xs')]: {
    width: 300,
  },
}));

export const IconButtonTaskPanel = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 20,
  top: 20,
  color: (theme) => theme.palette.grey[500],

  [theme.breakpoints.only('xs')]: {
    right: 10,
    top: 10,
  },
}));

export const TypographyDescriptionTaskPanel = styled(Typography)(() => ({
  mb: 4,
  maxHeight: '50vh',
  overflowY: 'auto',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
}));
