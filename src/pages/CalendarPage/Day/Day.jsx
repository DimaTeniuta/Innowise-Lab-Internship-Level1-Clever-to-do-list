import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { getWordDay } from '../../../utils/getWordDay';
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../../store/slices/dateSlice';
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
  const [isTasks, setIsTasks] = useState(false);

  useEffect(() => {
    if (data && Object.prototype.hasOwnProperty.call(data, currentDate)) {
      setIsTasks(true);
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
        minWidth: '150px',
        p: 2,
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
        <Box>{month}</Box>
        <Box sx={{ fontSize: 24 }}>{weekDay}</Box>
        <Box sx={{ fontSize: 24 }}>{numberDay}</Box>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <FiberManualRecordIcon sx={{ width: 10, height: 10, color: isTasks ? 'gray' : '#fff' }} />
        <FiberManualRecordIcon sx={{ width: 10, height: 10, color: isTasks ? 'gray' : '#fff' }} />
      </Box>
    </Paper>
  );
};
