import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { RoutePath } from '../utils/routeVariables';

export const AppRoute = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth ? (
        <Route path={RoutePath.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={RoutePath.ERROR} element={<ErrorPage />} />
          <Route path={RoutePath.GENERAL} element={<Navigate to={RoutePath.ERROR} replace />} />
        </Route>
      ) : (
        <Route path={RoutePath.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={RoutePath.SIGN_IN} element={<SignInPage />} />
          <Route path={RoutePath.SIGN_UP} element={<SignUpPage />} />
          <Route path={RoutePath.ERROR} element={<ErrorPage />} />
          <Route path={RoutePath.GENERAL} element={<Navigate to={RoutePath.ERROR} replace />} />
        </Route>
      )}
    </Routes>
  );
};
