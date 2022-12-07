import { Container } from '@mui/material';
import React from 'react';
import { Day } from '../Day/Day';
import Box from '@mui/material/Box';
import { MONTH_LENGTH } from '../../../utils/variables';

export const Calendar = () => {
  const date = new Date();
  const calendar = [date.setDate(date.getDate())];
  while (calendar.length < MONTH_LENGTH) {
    calendar.push(date.setDate(date.getDate() + 1));
  }

  return (
    <Container maxWidth="xl" sx={{ overflowX: 'hidden' }}>
      <Box sx={{ display: 'flex', flexWrap: 'nowrap', columnGap: 2, p: 2, overflowX: 'scroll' }}>
        {calendar.map((day) => (
          <Day key={day} day={day} const />
        ))}
      </Box>
    </Container>
  );
};
