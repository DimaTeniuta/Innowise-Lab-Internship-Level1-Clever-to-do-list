import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import { useState } from 'react';
import { Paper } from '@mui/material';

export const Task = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Paper variant="3" sx={{ display: 'flex', alignItems: 'center', columnGap: 2, p: 1 }}>
      <Checkbox
        icon={<RadioButtonUncheckedOutlinedIcon />}
        checkedIcon={<CheckCircleOutlinedIcon />}
        onChange={handleChange}
        checked={isChecked}
      />
      <Box>Title</Box>
      <Box>Description</Box>
    </Paper>
  );
};
