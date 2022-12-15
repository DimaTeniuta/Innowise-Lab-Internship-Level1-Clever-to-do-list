import { Button, Container } from '@mui/material';
import React from 'react';
import { Day } from '../Day/Day';
import Box from '@mui/material/Box';
import { useCalendar } from '../../../hooks/useCalendar';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MIN_SCROLL_SIZE, SCROLL_SPEED, SCROLL_START_VALUE } from '../../../utils/variables';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Calendar = () => {
  const [dayCalendarCount, setDayCalendarCount] = useState(0);
  const calendar = useCalendar(dayCalendarCount);
  const calendarRef = useRef(null);

  const scrollLeft = () => {
    calendarRef.current.scrollTo({
      left:
        calendarRef.current.scrollLeft > calendarRef.current.clientWidth
          ? calendarRef.current.scrollLeft - calendarRef.current.clientWidth
          : SCROLL_START_VALUE,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    calendarRef.current.scrollTo({
      left: calendarRef.current.scrollLeft + calendarRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const scroll = () => {
    if (
      Math.floor((calendarRef.current.scrollLeft / calendarRef.current.scrollWidth) * 100) ===
      MIN_SCROLL_SIZE
    ) {
      setDayCalendarCount((prev) => prev + 1);
    }
  };

  const onWheel = (e) => {
    e.preventDefault();
    calendarRef.current.scrollTo({
      left: calendarRef.current.scrollLeft + e.deltaY * SCROLL_SPEED,
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
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'column', rowGap: 2, overflowX: 'hidden', pt: 3 }}
    >
      <Box
        ref={calendarRef}
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          columnGap: 2,
          p: 2,
          overflowX: 'scroll',
          scrollbarWidth: 'none',
          '::-webkit-scrollbar': {
            width: 0,
            height: 0,
          },
          ':hover': {
            cursor: 'e-resize',
          },
        }}
      >
        {calendar.map((day) => (
          <Day key={day} day={day} const />
        ))}
      </Box>

      <Box sx={{ display: 'flex', columnGap: 1, justifyContent: 'center' }}>
        <Button variant="outlined" onClick={scrollLeft}>
          <KeyboardArrowLeftIcon />
        </Button>

        <Button variant="outlined" onClick={scrollRight}>
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
    </Container>
  );
};
