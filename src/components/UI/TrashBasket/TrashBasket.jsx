import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButtonTrashBasket } from './trashBasket.styles';

export const TrashBasket = ({ onAction }) => {
  return (
    <IconButtonTrashBasket onClick={onAction}>
      <DeleteOutlineIcon />
    </IconButtonTrashBasket>
  );
};
