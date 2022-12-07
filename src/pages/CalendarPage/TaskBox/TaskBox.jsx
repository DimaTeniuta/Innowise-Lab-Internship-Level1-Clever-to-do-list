import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export const TaskBox = ({ openTaskModal }) => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button onClick={openTaskModal}>Create Task</Button>
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}></Box>
      </Box>
    </Container>
  );
};
