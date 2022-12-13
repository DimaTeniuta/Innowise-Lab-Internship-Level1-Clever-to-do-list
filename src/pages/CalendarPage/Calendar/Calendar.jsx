import { Container } from '@mui/material';
import React from 'react';
import { Day } from '../Day/Day';
import Box from '@mui/material/Box';
import { useCalendar } from '../../../hooks/useCalendar';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MIN_SCROLL_SIZE } from '../../../utils/variables';

export const Calendar = () => {
  const [dayCalendarCount, setDayCalendarCount] = useState(0);
  const calendar = useCalendar(dayCalendarCount);
  const calendarRef = useRef(null);

  function scroll() {
    if (
      Math.floor((calendarRef.current.scrollLeft / calendarRef.current.scrollWidth) * 100) ===
      MIN_SCROLL_SIZE
    ) {
      setDayCalendarCount((prev) => prev + 1);
    }
  }

  const onWheel = (e) => {
    e.preventDefault();
    calendarRef.current.scrollTo({
      left: calendarRef.current.scrollLeft + e.deltaY * 5,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const boxDays = calendarRef.current;
    if (calendarRef.current) {
      boxDays.addEventListener('wheel', onWheel);
      boxDays.addEventListener('scroll', scroll);
    }

    return () => {
      boxDays.removeEventListener('scroll', scroll);
      boxDays.removeEventListener('wheel', onWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl" sx={{ overflowX: 'hidden' }}>
      <Box
        ref={calendarRef}
        sx={{ display: 'flex', flexWrap: 'nowrap', columnGap: 2, p: 2, overflowX: 'scroll' }}
      >
        {calendar.map((day) => (
          <Day key={day} day={day} const />
        ))}
      </Box>
    </Container>
  );
};
