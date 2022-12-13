import IconButton from '@mui/material/IconButton';
import React from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export const UpdateButton = ({ onAction }) => {
  return (
    <IconButton
      onClick={onAction}
      sx={{
        color: 'gray',
        ':hover': {
          color: 'primary.main',
          backgroundColor: '#e8d8b0',
        },
        transition: '0.3s',
      }}
    >
      <ModeEditOutlineOutlinedIcon />
    </IconButton>
  );
};
