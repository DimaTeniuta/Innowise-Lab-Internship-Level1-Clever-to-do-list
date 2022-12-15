import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/system/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { routePath } from '../../utils/routeVariables';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slices/userSlice';
import { auth } from '../../api/firebase';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const Header = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExit = () => {
    navigate(routePath.HOME, { replace: true });
    auth.signOut();
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
              <AssignmentIcon sx={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}> T.Management</Box>
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
                  <EventAvailableIcon sx={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Calendar</Box>
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: { sm: 160 },
                    p: 1,
                    color: 'primary.contrastText',
                    fontSize: 14,
                    textDecoration: 'none',
                  }}
                  onClick={handleExit}
                >
                  <LogoutIcon sx={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Sign Out</Box>
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
                <LoginIcon x={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>SignIn</Box>
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
                <HowToRegIcon x={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>SignUp</Box>
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
