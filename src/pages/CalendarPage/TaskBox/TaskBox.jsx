import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Task } from '../Task/Task';
import { setTaskData } from '../../../store/slices/taskModalSlice';
import { selectData } from '../../../store/slices/dataSlice';
import { selectDate } from '../../../store/slices/dateSlice';
import { WrapperForTasksTaskBox, WrapperTaskBox } from './taskBox.styles';

export const TaskBox = () => {
  const { date } = useSelector(selectDate);
  const { data } = useSelector(selectData);
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && Object.prototype.hasOwnProperty.call(data, date)) {
      setTasks(Object.values(data[date]));
    } else {
      setTasks([]);
    }
  }, [data, date]);

  const handleOpenTaskModal = () => {
    const taskData = {
      title: '',
      description: '',
      complete: false,
      open: true,
      isCreateType: true,
      taskId: null,
      userId: null,
      date: null,
    };
    dispatch(setTaskData({ taskData }));
  };

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <WrapperTaskBox>
        <Typography variant="h4" component="h4">
          {date}
        </Typography>

        <Button onClick={handleOpenTaskModal} variant="contained" sx={{ width: 280 }}>
          Create Task
        </Button>

        <WrapperForTasksTaskBox>
          {tasks.map((task) => (
            <Task key={task.taskId} data={task} />
          ))}
        </WrapperForTasksTaskBox>
      </WrapperTaskBox>
    </Container>
  );
};
