import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/system/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../../utils/routeVariables';

export const Header = () => {
  const isAuth = false;

  const handleExit = () => {};

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
              to={RoutePath.HOME}
            >
              T.Mamagement
            </Button>
          </Box>
          {isAuth ? (
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
                to={RoutePath.SIGN_IN}
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
                to={RoutePath.SIGN_UP}
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
