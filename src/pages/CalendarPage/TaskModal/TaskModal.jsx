import React, { useState } from 'react';
import { ModalWindow } from '../../../components/UI/ModalWindow';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export const TaskModal = ({ open, onClose }) => {
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <ModalWindow onClose={onClose} open={open} title={'Create task'}>
      <Box sx={{ width: { lg: '20vw' }, p: { lg: 2 } }}>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <TextField
            name={'Title'}
            fullWidth
            autoFocus
            onChange={(newValue) => {
              setTitleValue(newValue.target.value);
            }}
            value={titleValue}
            label={'Title'}
            // error={}
            // helperText={setMinMaxLengthError(errStack.taskTitle)}
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
            <LoadingButton
              // loading={isLoading}
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              // disabled={isDisabledSubmitBtn}
              sx={{ mt: 2 }}
            >
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
