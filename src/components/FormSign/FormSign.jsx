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

export const FormSign = ({ isSignUp, signFunc, user, loading, error }) => {
  const [errStack, setErrStack] = useState(err);
  const [isDisabledSubmitBtn, setIsDisabledSubmitBtn] = useState(false);
  const navigate = useNavigate();

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
    if (isSignUp) {
      try {
        const res = await signFunc(dataValues.login, dataValues.password);
        if (res) {
          console.log(res, user, error);
          navigate(`/${routePath.SIGN_IN}`, { replace: true });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await signFunc(dataValues.login, dataValues.password);
        if (res) {
          console.log(res, user, error);
          navigate(`/${routePath.CALENDAR}`, { replace: true });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <main style={{ display: 'flex', alignItems: 'center' }}>
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
                loading={loading}
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
