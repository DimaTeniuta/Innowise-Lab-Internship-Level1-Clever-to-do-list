import React from 'react';
import { TaskPanel } from '../../components/UI/TaskPanel/TaskPanel';
import { Calendar } from './Calendar/Calendar';
import { TaskBox } from './TaskBox/TaskBox';

export const CalendarPage = () => {
  return (
    <>
      <Calendar />
      <TaskBox></TaskBox>
      <TaskPanel />
    </>
  );
};
