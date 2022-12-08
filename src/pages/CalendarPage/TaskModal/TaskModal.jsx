import React, { useState } from 'react';
import { ModalWindow } from '../../../components/UI/ModalWindow';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { writeUserData } from '../../../api/writeUserData';
import { useAuth } from '../../../hooks/useAuth';
import { useSelector } from 'react-redux';

export const TaskModal = ({ open, onClose, title, description }) => {
  const [titleValue, setTitleValue] = useState(title || '');
  const [descriptionValue, setDescriptionValue] = useState(description || '');
  const { date } = useSelector((state) => state.date);
  const { id } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    writeUserData(id, date, titleValue, descriptionValue, false);
    onClose();
  };

  return (
    <ModalWindow onClose={onClose} open={open} title={'Create task'}>
      <Box sx={{ width: { lg: '20vw' }, p: { lg: 2 } }}>
        <form onSubmit={handleSubmit}>
          <TextField
            name={'Title'}
            fullWidth
            autoFocus
            onChange={(newValue) => {
              setTitleValue(newValue.target.value);
            }}
            value={titleValue}
            label={'Title'}
            margin="normal"
          />
          <TextField
            fullWidth
            onChange={(newValue) => {
              setDescriptionValue(newValue.target.value);
            }}
            multiline
            minRows={4}
            maxRows={4}
            value={descriptionValue}
            label={'Description'}
            margin="normal"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
            <LoadingButton type="submit" variant="contained" fullWidth size="large" sx={{ mt: 2 }}>
              {'Create task'}
            </LoadingButton>
            <Button
              type="reset"
              size="large"
              variant="outlined"
              fullWidth
              color="error"
              onClick={onClose}
            >
              {'Cancel'}
            </Button>
          </Box>
        </form>
      </Box>
    </ModalWindow>
  );
};
