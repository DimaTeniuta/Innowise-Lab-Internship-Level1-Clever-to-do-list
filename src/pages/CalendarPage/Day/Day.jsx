import React from 'react';
import Box from '@mui/material/Box';
import { getWordDay } from '../../../utils/getWordDay';
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useDispatch } from 'react-redux';
import { setDate } from '../../../store/dateSlice';
import { getDatabase, ref, set } from 'firebase/database';
import { useAuth } from '../../../hooks/useAuth';

export const Day = ({ day }) => {
  const numberDay = new Date(day).getDate();
  const weekDay = getWordDay(new Date(day).getDay());
  const dispatch = useDispatch();
  const { id, email } = useAuth();

  function writeUserData(userId, name, email, day) {
    console.log(userId, name, email, day);
    const db = getDatabase();
    set(ref(db, 'tasks/' + userId), {
      username: name,
      email: email,
      date: day,
    });
  }

  const sendData = () => {
    dispatch(setDate({ date: day }));
    writeUserData(id, 'dima', email, day);
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
      <Box>
        <FiberManualRecordIcon sx={{ width: 10, height: 10, color: 'gray' }} />
        <FiberManualRecordIcon sx={{ width: 10, height: 10, color: 'gray' }} />
      </Box>
    </Paper>
  );
};
