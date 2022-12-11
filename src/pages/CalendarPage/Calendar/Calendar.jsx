import { Container } from '@mui/material';
import React from 'react';
import { Day } from '../Day/Day';
import Box from '@mui/material/Box';
import { useCalendar } from '../../../hooks/useCalendar';

export const Calendar = () => {
  const calendar = useCalendar();

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
