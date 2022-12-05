import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const TaskBox = ({ children }) => {
  return (
    <Box>
      <Button>Create Task</Button>
      <Box>{children}</Box>
    </Box>
  );
};
