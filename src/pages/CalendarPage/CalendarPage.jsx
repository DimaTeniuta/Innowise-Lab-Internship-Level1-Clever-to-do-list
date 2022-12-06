import React, { useEffect, useState } from 'react';
import { Calendar } from './Calendar/Calendar';
import { TaskBox } from './TaskBox/TaskBox';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeDate } from '../../store/dateSlice';
import { TaskModal } from './TaskModal/TaskModal';

export const CalendarPage = () => {
  const { date } = useSelector((state) => state.date);
  const [tasks, setTasks] = useState(null);
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  useEffect(() => {
    setTasks(date);
  }, [date]);

  useEffect(() => {
    return () => dispatch(removeDate());
  }, [dispatch]);

  return (
    <main>
      <Calendar />
      {tasks && <TaskBox openTaskModal={handleOpenModal}>{tasks}</TaskBox>}
      <TaskModal open={isOpenModal} onClose={handleCloseModal} />
    </main>
  );
};
