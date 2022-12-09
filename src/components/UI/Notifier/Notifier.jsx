import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, selectAlert } from '../../../store/slices/alertSlice';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />;
});

function Transition(props) {
  return <Slide {...props} direction="up" />;
}

export const Notifier = () => {
  const dispatch = useDispatch();
  const {
    alert: { open, text, type },
  } = useSelector(selectAlert);
  const [transition, setTransition] = useState(undefined);

  useEffect(() => {
    if (open) {
      setTransition(() => Transition);
    }
  }, [open]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideAlert());
  };

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={transition}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {text}
        </Alert>
      </Snackbar>
    </>
  );
};
