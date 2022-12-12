import React from 'react';
import { Calendar } from './Calendar/Calendar';
import { TaskBox } from './TaskBox/TaskBox';
import { TaskModal } from './TaskModal/TaskModal';

export const CalendarPage = () => {
  return (
    <main>
      <Calendar />
      <TaskBox></TaskBox>
      <TaskModal />
    </main>
  );
};
