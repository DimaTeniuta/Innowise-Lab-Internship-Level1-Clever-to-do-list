import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectData } from '../../store/slices/dataSlice';
import { selectTask } from '../../store/slices/taskSlice';

export const TaskPage = () => {
  const { task } = useSelector(selectTask);
  const { data } = useSelector(selectData);
  const location = useLocation();

  useEffect(() => {
    if (!task.taskId) {
      const taskId = location.split('/');
      console.log(data, taskId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>TaskPage</div>;
};
