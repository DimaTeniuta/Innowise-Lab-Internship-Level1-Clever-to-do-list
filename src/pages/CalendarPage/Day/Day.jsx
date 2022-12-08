import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { getWordDay } from '../../../utils/getWordDay';
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../../store/dateSlice';
import { transformDate } from '../../../utils/transformDate';
import { useEffect } from 'react';

export const Day = ({ day }) => {
  const numberDay = new Date(day).getDate();
  const weekDay = getWordDay(new Date(day).getDay());
  const dispatch = useDispatch();
  const currentDate = transformDate(new Date(day));
  const { data } = useSelector((state) => state.data);
  const [isTasks, setIsTasks] = useState(false);

  useEffect(() => {
    if (data && Object.prototype.hasOwnProperty.call(data, currentDate)) {
      setIsTasks(true);
    }
  }, [currentDate, data]);

  const sendData = () => {
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
      onClick={() => sendData()}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>{weekDay}</Box>
        <Box>{numberDay}</Box>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <FiberManualRecordIcon sx={{ width: 10, height: 10, color: isTasks ? 'gray' : '#fff' }} />
        <FiberManualRecordIcon sx={{ width: 10, height: 10, color: isTasks ? 'gray' : '#fff' }} />
      </Box>
    </Paper>
  );
};
