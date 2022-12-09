import React, { useState } from 'react';
import { ModalWindow } from '../../../components/UI/ModalWindow';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { writeUserData } from '../../../api/writeUserData';
import { useAuth } from '../../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { closeTaskModal } from '../../../store/slices/taskModalSlice';
import { useEffect } from 'react';
import { updateTaskData } from '../../../api/updateTaskData';
import { alertError, alertSuccess } from '../../../store/slices/alertSlice';

export const TaskModal = () => {
  const {
    taskData: { title, description, open, isCreateType, taskId, complete },
  } = useSelector((state) => state.taskModalData);
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const { date } = useSelector((state) => state.date);
  const { id } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitleValue(title);
    setDescriptionValue(description);
  }, [description, title]);

  const onClose = () => {
    dispatch(closeTaskModal());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isCreateType) {
      try {
        setIsLoading(true);
        await writeUserData(id, date, titleValue, descriptionValue, false);
        dispatch(alertSuccess());
      } catch (err) {
        dispatch(alertError(err.message));
        throw new Error('writeData', err.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);
        await updateTaskData(id, taskId, date, titleValue, descriptionValue, complete);
        dispatch(alertSuccess());
      } catch (err) {
        dispatch(alertError(err.message));
        throw new Error('updateData', err.message);
      } finally {
        setIsLoading(false);
      }
    }

    onClose();
  };

  return (
    <ModalWindow onClose={onClose} open={open} title={isCreateType ? 'Create task' : 'Update task'}>
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
            <LoadingButton
              loading={isLoading}
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
            >
              {isCreateType ? 'Create task' : 'Update task'}
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
