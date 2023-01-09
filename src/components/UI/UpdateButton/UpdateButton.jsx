import React from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { IconButtonUpdateButton } from './updateButton.styles';

export const UpdateButton = ({ onAction }) => {
  return (
    <IconButtonUpdateButton onClick={onAction}>
      <ModeEditOutlineOutlinedIcon />
    </IconButtonUpdateButton>
  );
};
