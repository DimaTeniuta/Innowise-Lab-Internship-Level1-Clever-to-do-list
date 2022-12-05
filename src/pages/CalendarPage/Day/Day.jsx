import React from 'react';
import Box from '@mui/material/Box';
import { getWordDay } from '../../../utils/getWordDay';
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const Day = ({ day }) => {
  const numberDay = new Date(day).getDate();
  const weekDay = getWordDay(new Date(day).getDay());

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
      onClick={() => console.log('open day')}
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
