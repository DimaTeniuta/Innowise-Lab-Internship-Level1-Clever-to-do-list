import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import { useState } from 'react';
import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { updateTaskData } from '../../../api/updateTaskData';
import { TrashBasket } from '../TrashBasket/TrashBasket';
import { UpdateButton } from '../UpdateButton/UpadateButton';
import { setTaskData } from '../../../store/slices/taskModalSlice';
import { removeTaskData } from '../../../api/removeTaskData';
import { selectDate } from '../../../store/slices/dateSlice';

export const Task = ({ data }) => {
  const { title, description, complete, taskId } = data;
  const [isChecked, setIsChecked] = useState(complete);
  const { date } = useSelector(selectDate);
  const { id } = useAuth();
  const dispatch = useDispatch();

  const handleChange = async () => {
    try {
      await updateTaskData(id, taskId, date, title, description, !isChecked);
      setIsChecked(!isChecked);
    } catch (err) {
      console.log('task update', err.message);
    }
  };

  const handleUpdate = () => {
    const taskData = {
      title,
      description,
      complete: isChecked,
      open: true,
      isCreateType: false,
      taskId: taskId,
      userId: id,
      date,
    };
    dispatch(setTaskData({ taskData }));
  };

  const handleDelete = async () => {
    try {
      await removeTaskData(id, taskId, date);
    } catch (err) {
      console.log('remove', err.message);
    }
  };

  return (
    <Paper variant="3" sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2, p: 1 }}>
        <Checkbox
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<CheckCircleOutlinedIcon />}
          onChange={handleChange}
          checked={isChecked}
        />
        <Box>{title}</Box>
        <Box>{description}</Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
        <UpdateButton onAction={handleUpdate} />
        <TrashBasket onAction={handleDelete} />
      </Box>
    </Paper>
  );
};
