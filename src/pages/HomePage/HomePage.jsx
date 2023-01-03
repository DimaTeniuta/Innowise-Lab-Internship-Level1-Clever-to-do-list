import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { routePath } from '../../utils/routeVariables';

export const HomePage = () => {
  const { isAuth } = useAuth();

  return (
    <main>
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 1, py: 3 }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 3 }}>
          <Box component="h1" sx={{ fontSize: { xs: 32, sm: 34, md: 34, lg: 50 } }}>
            Task Management
          </Box>

          <Box
            component="p"
            sx={{
              color: 'gray',
              textAlign: 'center',
              fontSize: 20,
            }}
          >
            This is an application for creating daily tasks. With a calendar, for dividing tasks by
            days.
          </Box>

          <Button
            variant="contained"
            component={Link}
            sx={{
              width: { xs: 200, sm: 200, md: 200, lg: 250 },
              height: { xs: 50, sm: 50, md: 50, lg: 56 },
              borderRadius: 22,
              color: 'secondary.main',
              fontSize: { xs: 18, sm: 18, md: 20, lg: 22 },
            }}
            to={isAuth ? routePath.CALENDAR : routePath.SIGN_IN}
          >
            Get started
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: 200, sm: 400, md: 500, lg: 550 },
            height: { xs: 200, sm: 400, md: 500, lg: 550 },
            backgroundImage: 'url(./calendar.svg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Container>
    </main>
  );
};
