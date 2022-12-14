import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { getWordDay } from '../../../utils/getWordDay';
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate, setDate } from '../../../store/slices/dateSlice';
import { transformDate } from '../../../utils/transformDate';
import { useEffect } from 'react';
import { getMonth } from '../../../utils/getMonth';
import { selectData } from '../../../store/slices/dataSlice';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

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
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: { xs: '110px', sm: '150px' },
        p: 2,
        border: isActive ? '2px solid #ffa726' : '2px solid #fefefe',
        transition: '0.1s',
        ':hover': {
          transform: 'scale(1.1)',
        },
      }}
      onClick={() => sendDate()}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ fontSize: { xs: 14, sm: 18 } }}>{month}</Box>
        <Box sx={{ fontSize: { xs: 18, sm: 24 } }}>{weekDay}</Box>
        <Box sx={{ fontSize: { xs: 18, sm: 24 } }}>{numberDay}</Box>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <FiberManualRecordIcon sx={{ width: 10, height: 10, color: isTasks ? 'gray' : '#fff' }} />
        <FiberManualRecordIcon
          sx={{ width: 10, height: 10, color: isCompletedTasks ? '#d4cdcd' : '#fff' }}
        />
      </Box>
    </Paper>
  );
};
