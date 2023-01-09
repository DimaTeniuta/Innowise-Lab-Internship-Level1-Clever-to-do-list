import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { useAuth } from '../hooks/useAuth';
import { CalendarPage } from '../pages/CalendarPage';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { routePath } from '../utils/routeVariables';

export const AppRoute = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path={routePath.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        {isAuth ? (
          <Route path={routePath.CALENDAR} element={<CalendarPage />} />
        ) : (
          <>
            <Route path={routePath.SIGN_IN} element={<SignInPage />} />
            <Route path={routePath.SIGN_UP} element={<SignUpPage />} />
          </>
        )}
        <Route path={routePath.ERROR} element={<ErrorPage isNotFound={true} />} />
        <Route path={routePath.GENERAL} element={<Navigate to={routePath.ERROR} replace />} />
      </Route>
    </Routes>
  );
};
