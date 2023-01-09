import { IconButton, styled } from '@mui/material';

export const IconButtonUpdateButton = styled(IconButton)(() => ({
  color: 'gray',
  ':hover': {
    color: 'primary.main',
    backgroundColor: '#e8d8b0',
  },
  transition: '0.3s',
}));
