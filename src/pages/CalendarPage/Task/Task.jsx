import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import { useState } from 'react';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { updateTaskData } from '../../../api/updateTaskData';

export const Task = ({ data }) => {
  const { title, description, complete, taskId } = data;
  const [isChecked, setIsChecked] = useState(complete);
  const { date } = useSelector((state) => state.date);
  const { id } = useAuth();

  const handleChange = async () => {
    setIsChecked(!isChecked);
    try {
      await updateTaskData(id, taskId, date, title, description, !isChecked);
    } catch (err) {
      console.log('task update', err.message);
    }
  };

  return (
    <Paper variant="3" sx={{ display: 'flex', alignItems: 'center', columnGap: 2, p: 1 }}>
      <Checkbox
        icon={<RadioButtonUncheckedOutlinedIcon />}
        checkedIcon={<CheckCircleOutlinedIcon />}
        onChange={handleChange}
        checked={isChecked}
      />
      <Box>{title}</Box>
      <Box>{description}</Box>
    </Paper>
  );
};
