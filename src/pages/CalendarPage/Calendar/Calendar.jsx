import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Day } from '../Day/Day';
import Box from '@mui/material/Box';
import { MONTH_LENGTH } from '../../../utils/variables';

export const Calendar = () => {
  const date = new Date();
  const calendar = [date.setDate(date.getDate())];
  const [tasks, setTasks] = useState({ numberDay: '', weekDay: '' });
  while (calendar.length < MONTH_LENGTH) {
    calendar.push(date.setDate(date.getDate() + 1));
  }

  const getTask = (data) => {
    setTasks(data);
  };

  return (
    <Container maxWidth="xl" sx={{ overflowX: 'hidden' }}>
      <Box sx={{ display: 'flex', flexWrap: 'nowrap', columnGap: 2, py: 2, overflowX: 'scroll' }}>
        {calendar.map((day) => (
          <Day key={day} day={day} getTask={getTask} />
        ))}
      </Box>
      <Box>{tasks.numberDay}</Box>
    </Container>
  );
};
