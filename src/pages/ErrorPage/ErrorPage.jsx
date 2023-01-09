import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { routePath } from '../../utils/routeVariables';
import Link from '@mui/material/Link';
import { TypographyErrorPage } from './errorPage.styles';
import classes from './errorPage.module.scss';

export const ErrorPage = ({ isNotFound }) => {
  const refresh = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <main>
      <Container sx={{ pt: 5 }}>
        <TypographyErrorPage variant="h3" component="h3">
          {isNotFound ? 'Sorry, page not found' : 'Something went wrong'}...
        </TypographyErrorPage>

        <Grid container justifyContent="center" gap={2} my={4}>
          <Grid item>
            <Button component={Link} variant="contained" href={routePath.HOME}>
              {'Back to Home'}
            </Button>
          </Grid>

          <Grid item>
            <Button component={Link} variant="contained" href="#" onClick={refresh}>
              {'Refresh page'}
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <img className={classes.img} src="./error404.svg" alt="error" />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
