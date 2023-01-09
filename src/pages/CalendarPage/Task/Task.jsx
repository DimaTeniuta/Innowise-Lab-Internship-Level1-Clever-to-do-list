import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { updateTaskData } from '../../../api/updateTaskData';
import { setTaskData } from '../../../store/slices/taskModalSlice';
import { removeTaskData } from '../../../api/removeTaskData';
import { selectDate } from '../../../store/slices/dateSlice';
import { alertError } from '../../../store/slices/alertSlice';
import { CheckBox } from '../../../components/UI/CheckBox';
import { openTaskPanel } from '../../../store/slices/taskPanelSlice';
import { UpdateButton } from '../../../components/UI/UpdateButton';
import { TrashBasket } from '../../../components/UI/TrashBasket';
import { InfoButton } from '../../../components/UI/InfoButton';
import { PaperTask, TitleTask, WrapperBtnTask, WrapperCheckboxTask } from './task.styles';

export const Task = ({ data }) => {
  const { title, description, complete, taskId } = data;
  const [isChecked, setIsChecked] = useState(complete);
  const { date } = useSelector(selectDate);
  const { id } = useAuth();
  const dispatch = useDispatch();

  const handleChange = async () => {
    try {
      await updateTaskData(id, taskId, date, title, description, !isChecked);
      setIsChecked(!isChecked);
    } catch (err) {
      dispatch(alertError(err.message));
      throw new Error(err.code, err.message);
    }
  };

  const handleUpdate = () => {
    const taskData = {
      title,
      description,
      complete: isChecked,
      open: true,
      isCreateType: false,
      taskId: taskId,
      userId: id,
      taskDate: date,
    };
    dispatch(setTaskData({ taskData }));
  };

  const handleDelete = async () => {
    try {
      await removeTaskData(id, taskId, date);
    } catch (err) {
      dispatch(alertError(err.message));
      throw new Error('remove', err.message);
    }
  };

  const handleInfo = () => {
    const taskPanel = {
      title,
      description,
      complete: isChecked,
      open: true,
      taskId: taskId,
      userId: id,
      taskDate: date,
    };
    dispatch(openTaskPanel({ taskPanel }));
  };

  return (
    <PaperTask variant="3">
      <WrapperCheckboxTask>
        <CheckBox checked={isChecked} onChange={handleChange} />

        <TitleTask>{title}</TitleTask>
      </WrapperCheckboxTask>

      <WrapperBtnTask>
        <InfoButton onAction={handleInfo} />
        <UpdateButton onAction={handleUpdate} />
        <TrashBasket onAction={handleDelete} />
      </WrapperBtnTask>
    </PaperTask>
  );
};
