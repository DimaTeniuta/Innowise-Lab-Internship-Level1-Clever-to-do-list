import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { routePath } from '../../utils/routeVariables';
import {
  ButtonHomePage,
  ContainerHomePage,
  H1HomePage,
  ImageHomePage,
  PHomePage,
  WrapperHomePage,
} from './homePage.styles';

export const HomePage = () => {
  const { isAuth } = useAuth();

  return (
    <main>
      <ContainerHomePage maxWidth="xl">
        <WrapperHomePage>
          <H1HomePage>Task Management</H1HomePage>

          <PHomePage>
            This is an application for creating daily tasks. With a calendar, for dividing tasks by
            days.
          </PHomePage>

          <ButtonHomePage
            variant="contained"
            component={Link}
            to={isAuth ? routePath.CALENDAR : routePath.SIGN_IN}
          >
            Get started
          </ButtonHomePage>
        </WrapperHomePage>

        <ImageHomePage />
      </ContainerHomePage>
    </main>
  );
};
