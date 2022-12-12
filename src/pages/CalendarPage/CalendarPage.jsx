import React, { useEffect, useState } from 'react';
import { Calendar } from './Calendar/Calendar';
import { TaskBox } from './TaskBox/TaskBox';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeDate, selectDate } from '../../store/slices/dateSlice';
import { TaskModal } from './TaskModal/TaskModal';

export const CalendarPage = () => {
  const { date } = useSelector(selectDate);
  const [tasks, setTasks] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setTasks(date);
  }, [date]);

  useEffect(() => {
    return () => dispatch(removeDate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Calendar />
      {tasks && <TaskBox></TaskBox>}
      <TaskModal />
    </main>
  );
};
