import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/system/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { routePath } from '../../utils/routeVariables';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/userSlice';

export const Header = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(removeUser());
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters={true} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Button
              component={NavLink}
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'primary.contrastText',
                p: 1,
                fontSize: 14,
                textDecoration: 'none',
                '&.active': {
                  color: 'secondary.main',
                },
              }}
              to={routePath.HOME}
            >
              T.Mamagement
            </Button>
          </Box>
          {isAuth ? (
            <>
              <Box>
                <Button
                  component={NavLink}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'primary.contrastText',
                    p: 1,
                    fontSize: 14,
                    textDecoration: 'none',
                    '&.active': {
                      color: 'secondary.main',
                    },
                  }}
                  to={routePath.CALENDAR}
                >
                  Calendar
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'primary.contrastText',
                    p: 1,
                    fontSize: 14,
                    textDecoration: 'none',
                  }}
                  onClick={handleExit}
                >
                  Sign Out
                </Button>
              </Box>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
              <Button
                component={NavLink}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'primary.contrastText',
                  p: 1,
                  fontSize: 14,
                  textDecoration: 'none',
                  '&.active': {
                    color: 'secondary.main',
                  },
                }}
                to={routePath.SIGN_IN}
              >
                SignIn
              </Button>
              <Button
                component={NavLink}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'primary.contrastText',
                  p: 1,
                  fontSize: 14,
                  textDecoration: 'none',
                  '&.active': {
                    color: 'secondary.main',
                  },
                }}
                to={routePath.SIGN_UP}
              >
                SignUp
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
