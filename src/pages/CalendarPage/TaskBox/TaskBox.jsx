import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Task } from '../Task/Task';

export const TaskBox = ({ openTaskModal }) => {
  const { date } = useSelector((state) => state.date);
  const { data } = useSelector((state) => state.data);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (data && Object.prototype.hasOwnProperty.call(data, date)) {
      setTasks(Object.values(data[date]));
    } else {
      setTasks([]);
    }
  }, [data, date]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button onClick={openTaskModal}>Create Task</Button>
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}>
          {tasks.length ? tasks.map((task) => <Task key={task.taskId} data={task} />) : ''}
        </Box>
      </Box>
    </Container>
  );
};
