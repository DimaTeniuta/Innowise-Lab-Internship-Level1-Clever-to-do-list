import { IconButton, styled } from '@mui/material';

export const IconButtonTrashBasket = styled(IconButton)(() => ({
  color: 'gray',
  ':hover': {
    color: '#dc5b5b',
    backgroundColor: '#f4d8d8',
  },
  transition: '0.3s',
}));
