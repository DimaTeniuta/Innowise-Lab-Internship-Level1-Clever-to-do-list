import React from 'react';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { closeTaskPanel, selectTaskPanel } from '../../../store/slices/taskPanelSlice';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateButton } from '../UpdateButton/UpdateButton';
import { TrashBasket } from '../TrashBasket/TrashBasket';
import { setTaskData } from '../../../store/slices/taskModalSlice';
import { removeTaskData } from '../../../api/removeTaskData';
import { alertError } from '../../../store/slices/alertSlice';

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
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: { xs: 300, lg: 600 },
          minHeight: '100vh',
          boxShadow: 'none',
          pl: 1,
        }}
        onClick={handleStopPropagation}
      >
        <CardContent sx={{ mt: 4 }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: { xs: 10, md: 20 },
              top: { xs: 10, md: 20 },
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography sx={{ mb: 2 }}>Title</Typography>
          <Typography variant="h5" component="div" sx={{ mb: 4 }}>
            {title}
          </Typography>

          <Typography sx={{ mb: 2 }}>Description</Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              mb: 4,
              maxHeight: '50vh',
              overflowY: 'auto',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <UpdateButton onAction={handleUpdate} />
          <TrashBasket onAction={handleDelete} />
        </CardActions>
      </Card>
    </Drawer>
  );
};
