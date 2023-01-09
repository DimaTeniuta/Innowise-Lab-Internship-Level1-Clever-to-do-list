import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';

export const CheckBox = ({ checked, onChange }) => {
  return (
    <Checkbox
      icon={<RadioButtonUncheckedOutlinedIcon />}
      checkedIcon={<CheckCircleOutlinedIcon />}
      onChange={onChange}
      checked={checked}
    />
  );
};
