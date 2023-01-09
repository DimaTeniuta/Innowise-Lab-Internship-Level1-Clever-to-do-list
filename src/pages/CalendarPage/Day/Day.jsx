import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { getWordDay } from '../../../utils/getWordDay';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate, setDate } from '../../../store/slices/dateSlice';
import { transformDate } from '../../../utils/transformDate';
import { useEffect } from 'react';
import { getMonth } from '../../../utils/getMonth';
import { selectData } from '../../../store/slices/dataSlice';
import { DivDay, MonthDivDay, PaperDay, WrapperDay } from './day.styles';

export const Day = ({ day }) => {
  const numberDay = new Date(day).getDate();
  const weekDay = getWordDay(new Date(day).getDay());
  const month = getMonth(new Date(day).getMonth());
  const dispatch = useDispatch();
  const currentDate = transformDate(new Date(day));
  const { data } = useSelector(selectData);
  const { date } = useSelector(selectDate);
  const [isTasks, setIsTasks] = useState(false);
  const [isCompletedTasks, setIsCompletedTasks] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (date === currentDate) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [date, currentDate]);

  useEffect(() => {
    if (data && Object.prototype.hasOwnProperty.call(data, currentDate)) {
      setIsTasks(true);
      const isCompleteTask = Object.values(data[currentDate]).every((task) => !task.complete);
      setIsCompletedTasks(!isCompleteTask);
    } else {
      setIsTasks(false);
    }
  }, [currentDate, data]);

  const sendDate = () => {
    dispatch(setDate({ date: currentDate }));
  };

  return (
    <PaperDay elevation={3} active={isActive.toString()} onClick={sendDate}>
      <WrapperDay>
        <MonthDivDay>{month}</MonthDivDay>
        <DivDay>{weekDay}</DivDay>
        <DivDay>{numberDay}</DivDay>
      </WrapperDay>

      <Box sx={{ display: 'flex' }}>
        <FiberManualRecordIcon sx={{ width: 10, height: 10, color: isTasks ? 'gray' : '#fff' }} />
        <FiberManualRecordIcon
          sx={{ width: 10, height: 10, color: isCompletedTasks ? '#d4cdcd' : '#fff' }}
        />
      </Box>
    </PaperDay>
  );
};
