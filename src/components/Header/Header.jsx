import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/system/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
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
import { HeaderLink, HeaderButton, TextButton } from './header.styles';

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
          <HeaderLink component={NavLink} to={routePath.HOME}>
            <AssignmentIcon sx={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
            <TextButton>T.Management</TextButton>
          </HeaderLink>
          {isAuth ? (
            <>
              <HeaderLink component={NavLink} to={routePath.CALENDAR}>
                <EventAvailableIcon sx={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
                <TextButton>Calendar</TextButton>
              </HeaderLink>

              <HeaderButton onClick={handleExit}>
                <LogoutIcon sx={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
                <TextButton>Sign Out</TextButton>
              </HeaderButton>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
              <HeaderLink component={NavLink} to={routePath.SIGN_IN}>
                <LoginIcon sx={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
                <TextButton>SignIn</TextButton>
              </HeaderLink>

              <HeaderLink component={NavLink} to={routePath.SIGN_UP}>
                <HowToRegIcon sx={{ mb: 0.5, mr: { xs: 0, sm: 1 } }} />
                <TextButton>SignUp</TextButton>
              </HeaderLink>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
