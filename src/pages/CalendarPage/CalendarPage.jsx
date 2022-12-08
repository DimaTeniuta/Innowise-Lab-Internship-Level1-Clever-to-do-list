import React, { useEffect, useState } from 'react';
import { Calendar } from './Calendar/Calendar';
import { TaskBox } from './TaskBox/TaskBox';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeDate } from '../../store/slices/dateSlice';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Calendar />
      {tasks && <TaskBox openTaskModal={handleOpenModal}></TaskBox>}
      <TaskModal open={isOpenModal} onClose={handleCloseModal} />
    </main>
  );
};
