import React from 'react';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { closeTaskPanel, selectTaskPanel } from '../../../store/slices/taskPanelSlice';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateButton } from '../UpdateButton/UpdateButton';
import { TrashBasket } from '../TrashBasket/TrashBasket';
import { setTaskData } from '../../../store/slices/taskModalSlice';
import { removeTaskData } from '../../../api/removeTaskData';
import { alertError } from '../../../store/slices/alertSlice';
import {
  CardTaskPanel,
  IconButtonTaskPanel,
  TypographyDescriptionTaskPanel,
} from './taskPanel.styles';

export const TaskPanel = () => {
  const {
    taskPanel: { title, description, complete, open, taskId, userId, taskDate },
  } = useSelector(selectTaskPanel);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeTaskPanel());
  };

  const handleUpdate = () => {
    const taskData = {
      title,
      description,
      complete: complete,
      open: true,
      isCreateType: false,
      taskId: taskId,
      userId,
      taskDate,
    };
    dispatch(setTaskData({ taskData }));
  };

  const handleDelete = async () => {
    try {
      await removeTaskData(userId, taskId, taskDate);
      handleClose();
    } catch (err) {
      dispatch(alertError(err.message));
      throw new Error('remove', err.message);
    }
  };

  const handleStopPropagation = (e) => e.stopPropagation();

  return (
    <Drawer anchor="right" open={open} disableEscapeKeyDown onClick={handleClose}>
      <CardTaskPanel onClick={handleStopPropagation}>
        <CardContent sx={{ mt: 4 }}>
          <IconButtonTaskPanel aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButtonTaskPanel>

          <Typography sx={{ mb: 2 }}>Title</Typography>
          <Typography variant="h5" component="div" sx={{ mb: 4 }}>
            {title}
          </Typography>

          <Typography sx={{ mb: 2 }}>Description</Typography>
          <TypographyDescriptionTaskPanel variant="h5" component="div">
            {description}
          </TypographyDescriptionTaskPanel>
        </CardContent>

        <CardActions>
          <UpdateButton onAction={handleUpdate} />
          <TrashBasket onAction={handleDelete} />
        </CardActions>
      </CardTaskPanel>
    </Drawer>
  );
};
