import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Task } from '../Task/Task';
import { setTaskData } from '../../../store/slices/taskModalSlice';

export const TaskBox = () => {
  const { date } = useSelector((state) => state.date);
  const { data } = useSelector((state) => state.data);
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
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button onClick={handleOpenTaskModal}>Create Task</Button>
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}>
          {tasks.length ? tasks.map((task) => <Task key={task.taskId} data={task} />) : ''}
        </Box>
      </Box>
    </Container>
  );
};
