import React, { useState } from 'react';
import { ModalWindow } from '../../../components/UI/ModalWindow';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { writeUserData } from '../../../api/writeUserData';
import { useAuth } from '../../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { closeTaskModal, selectTaskModalDate } from '../../../store/slices/taskModalSlice';
import { useEffect } from 'react';
import { updateTaskData } from '../../../api/updateTaskData';
import { alertError, alertSuccess } from '../../../store/slices/alertSlice';
import { selectDate } from '../../../store/slices/dateSlice';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { transformCalendarDate } from '../../../utils/transformDate';
import { removeTaskData } from '../../../api/removeTaskData';
import { closeTaskPanel } from '../../../store/slices/taskPanelSlice';

export const TaskModal = () => {
  const dispatch = useDispatch();
  const {
    taskData: { title, description, open, isCreateType, taskId, complete, taskDate },
  } = useSelector(selectTaskModalDate);
  const { date } = useSelector(selectDate);
  const { id } = useAuth();
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [isLoading, setIsLoading] = useState(false);
  const [dateValue, setDateValue] = useState(dayjs(new Date()));

  const handleChangeDate = (newValue) => {
    setDateValue(newValue);
  };

  const handleChangeTitle = (e) => {
    setTitleValue(e.target.value);
  };

  useEffect(() => {
    if (date) {
      setDateValue(date.split('-').reverse().join(''));
    }
  }, [date]);

  useEffect(() => {
    setTitleValue(title);
    setDescriptionValue(description);
  }, [description, title]);

  useEffect(() => {
    if (taskDate) {
      setDateValue(taskDate.split('-').reverse().join(''));
    }
  }, [taskDate]);

  const onClose = () => {
    dispatch(closeTaskModal());
    setTitleValue('');
    setDescriptionValue('');
  };

  const validateTitle = () => {
    if (!titleValue.trim()) {
      return 'This field is required';
    }
    return ' ';
  };

  const validateDate = () => {
    const date = transformCalendarDate(dateValue);
    const reg = /^\d{2}-\d{2}-\d{4}$/i;
    if (reg.test(date)) {
      const currentDate = new Date();
      if (new Date(date.split('-').reverse().join('/')) < currentDate.setHours(0, 0, 0, 0)) {
        return "The date mustn't be in the past";
      }
      return ' ';
    } else {
      return 'The date must be in format "DD-MM-YYYY"';
    }
  };

  const checkSuccessValidation = () => {
    const result = validateTitle() + validateDate();
    return !!result.trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkSuccessValidation()) {
      return;
    }

    if (isCreateType) {
      try {
        setIsLoading(true);
        let currentDate = transformCalendarDate(dateValue);
        await writeUserData(id, currentDate, titleValue, descriptionValue, false);
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
        let currentDate = transformCalendarDate(dateValue);
        await updateTaskData(id, taskId, currentDate, titleValue, descriptionValue, complete);
        if (currentDate !== date) {
          await removeTaskData(id, taskId, date);
        }
        dispatch(closeTaskPanel());
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
            error={!titleValue.trim()}
            helperText={validateTitle()}
            onChange={handleChangeTitle}
            value={titleValue}
            label={'Title'}
            margin="normal"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3} sx={{ mt: 1 }}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="DD-MM-YYYY"
                disablePast={true}
                error={!titleValue.trim()}
                helperText={validateTitle()}
                value={dateValue}
                onChange={handleChangeDate}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!validateDate().trim()}
                    helperText={validateDate()}
                  />
                )}
              />
            </Stack>
          </LocalizationProvider>

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
