import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { routePath } from '../../utils/routeVariables';
import Link from '@mui/material/Link';

export const ErrorPage = ({ isNotFound }) => {
  return (
    <main>
      <Container sx={{ pt: 5 }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            textAlign: 'center',
            fontSize: { xs: 22, sm: 34, md: 34, lg: 50 },
          }}
        >
          {isNotFound ? 'Sorry, page not found' : 'Something went wrong'}...
        </Typography>

        <Grid container justifyContent="center" gap={2} my={4}>
          <Grid item>
            <Button component={Link} variant="contained" href={routePath.HOME}>
              {'Back to Home'}
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              variant="contained"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              {'Refresh page'}
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <img style={{ display: 'block', width: '100%' }} src="./error404.svg" alt="error" />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
