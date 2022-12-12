import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectData } from '../../store/slices/dataSlice';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { UpdateButton } from '../../components/UI/UpdateButton/UpadateButton';
import { TrashBasket } from '../../components/UI/TrashBasket/TrashBasket';
import { CheckBox } from '../../components/UI/CheckBox';
import { updateTaskData } from '../../api/updateTaskData';
import { useAuth } from '../../hooks/useAuth';
import { selectDate } from '../../store/slices/dateSlice';
import { alertError } from '../../store/slices/alertSlice';
import { removeTaskData } from '../../api/removeTaskData';
import { setTaskData } from '../../store/slices/taskModalSlice';
import { Spinner } from '../../components/UI/Spinner/Spinner';
import { routePath } from '../../utils/routeVariables';
import { selectTask } from '../../store/slices/taskSlice';

export const TaskPage = () => {
  const { data } = useSelector(selectData);
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const { id } = useAuth();
  const { date } = useSelector(selectDate);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskId, setTaskId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { task } = useSelector(selectTask);

  const handleChange = async () => {
    try {
      await updateTaskData(id, taskId, date, title, description, !isChecked);
      setIsChecked(!isChecked);
    } catch (err) {
      dispatch(alertError(err.message));
      throw new Error(err.code, err.message);
    }
  };

  useEffect(() => {
    const taskId = location.pathname;
    const path = taskId.split('/');
    if (data && data[path[path.length - 2]] && task) {
      const currentObj = data[path[path.length - 2]];
      if (currentObj[path[path.length - 1]]) {
        const task = currentObj[path[path.length - 1]];
        setTitle(task.title);
        setDescription(task.description);
        setTaskId(task.taskId);
        setIsChecked(task.complete);
        setIsLoading(false);
      }
    } else {
      navigate(routePath.ERROR, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const taskId = location.pathname;
    const path = taskId.split('/');
    if (data && data[path[path.length - 2]]) {
      console.log(4444);
      const currentObj = data[path[path.length - 2]];
      if (currentObj[path[path.length - 1]]) {
        const task = currentObj[path[path.length - 1]];
        setTitle(task.title);
        setDescription(task.description);
        setTaskId(task.taskId);
        setIsChecked(task.complete);
      }
    } else {
      navigate(routePath.ERROR, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleDelete = async () => {
    try {
      await removeTaskData(id, taskId, date);
      navigate(-1, { replace: false });
    } catch (err) {
      dispatch(alertError(err.message));
      throw new Error('remove', err.message);
    }
  };

  const handleUpdate = () => {
    const taskData = {
      title: title,
      description: description,
      complete: isChecked,
      open: true,
      isCreateType: false,
      taskId: taskId,
      userId: id,
      taskDate: date,
    };
    dispatch(setTaskData({ taskData }));
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <main>
      <Container
        maxWidth="lx"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: 'calc(100vh - 64px - 32px)',
          py: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: 2,
            flexGrow: 1,
          }}
        >
          <Typography variant="h4" component="h4">
            {title}
          </Typography>
          <Box>{description}</Box>
        </Box>
        <Box sx={{ display: 'flex', columnGap: 2, flexGrow: 0 }}>
          <CheckBox checked={isChecked} onChange={handleChange} />
          <UpdateButton onAction={handleUpdate} />
          <TrashBasket onAction={handleDelete} />
        </Box>
      </Container>
    </main>
  );
};
