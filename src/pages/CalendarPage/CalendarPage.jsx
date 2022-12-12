import React from 'react';
import { Calendar } from './Calendar/Calendar';
import { TaskBox } from './TaskBox/TaskBox';

export const CalendarPage = () => {
  return (
    <main>
      <Calendar />
      <TaskBox></TaskBox>
    </main>
  );
};
