import { IconButton, styled } from '@mui/material';

export const IconButtonModalWindow = styled(IconButton)(() => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}));
