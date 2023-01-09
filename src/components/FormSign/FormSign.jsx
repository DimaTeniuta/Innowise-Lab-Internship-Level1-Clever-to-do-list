import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/system/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { routePath } from '../../utils/routeVariables';
import { formFields, validateRule } from '../../utils/formVariables';
import {
  setMinMaxLengthError,
  validateEmail,
  validateMinLength,
  validatePassword,
} from '../../utils/validator';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { alertError, alertSuccess } from '../../store/slices/alertSlice';
import { convertError } from '../../utils/convertError';
import { auth } from '../../api/firebase';
import classes from './formSign.module.scss';

const validator = {
  [formFields.LOGIN]: [validateEmail(validateRule.EMAIL)],
  [formFields.PASSWORD]: [
    validateMinLength(validateRule.PASSWORD_MIN_LENGTH),
    validatePassword(validateRule.PASSWORD_RULE),
  ],
};

const err = {
  [formFields.LOGIN]: '',
  [formFields.PASSWORD]: '',
};

export const FormSign = ({ isSignUp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errStack, setErrStack] = useState(err);
  const [isDisabledSubmitBtn, setIsDisabledSubmitBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (typeof value === 'string') {
      err[name] = validator[name].reduce((acc, fn) => (acc += fn(value)), '');
      setErrStack({ ...err });
      if (Object.values(err).every((err) => !err)) {
        setIsDisabledSubmitBtn(false);
      } else {
        setIsDisabledSubmitBtn(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (const [name, value] of formData.entries()) {
      if (typeof value === 'string') {
        err[name] = validator[name].reduce((acc, fn) => (acc += fn(value)), '');
      }
      setErrStack(err);
    }

    const dataValues = Object.fromEntries(formData.entries());
    try {
      setIsLoading(true);
      const res = isSignUp
        ? await createUserWithEmailAndPassword(auth, dataValues.login, dataValues.password)
        : await signInWithEmailAndPassword(auth, dataValues.login, dataValues.password);
      dispatch(
        setUser({
          email: res.user.email,
          token: res.user.accessToken,
          id: res.user.uid,
        })
      );
      navigate(`/${routePath.CALENDAR}`, { replace: true });
      dispatch(alertSuccess());
    } catch (err) {
      dispatch(alertError(convertError(err.code)));
      throw new Error('Auth', err.message, err.code);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={classes.main}>
      <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xl={4}>
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <Typography variant="h3" component="h1" align="center">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Typography>

              <TextField
                error={!!errStack.login}
                name={formFields.LOGIN}
                fullWidth
                autoFocus={true}
                label="Email"
                defaultValue=""
                helperText={setMinMaxLengthError(errStack.login)}
                margin="normal"
              />
              <TextField
                error={!!errStack.password}
                name={formFields.PASSWORD}
                fullWidth
                label="Password"
                defaultValue=""
                helperText={setMinMaxLengthError(errStack.password)}
                margin="normal"
                type="password"
              />
              <LoadingButton
                loading={isLoading}
                loadingIndicator={<CircularProgress color="primary" size={25} />}
                type="submit"
                disabled={isDisabledSubmitBtn}
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </LoadingButton>
              <Button
                component={Link}
                to={routePath.HOME}
                color="primary"
                variant="outlined"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                {'Cancel'}
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                {isSignUp ? (
                  <>
                    <span>{'Do you have an account?'}</span>{' '}
                    <Link to={`/${routePath.SIGN_IN}`}>{'Sign in'}</Link>
                  </>
                ) : (
                  <>
                    <span>{"Don't have an account?"}</span>{' '}
                    <Link to={`/${routePath.SIGN_UP}`}>{'Sign up'}</Link>
                  </>
                )}
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
