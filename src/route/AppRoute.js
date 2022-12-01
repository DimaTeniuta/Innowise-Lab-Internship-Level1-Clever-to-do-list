import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { RoutePath } from '../utils/routeVariables';

export const AppRoute = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={RoutePath.ERROR} element={<ErrorPage />} />
        <Route path={RoutePath.GENERAL} element={<Navigate to={RoutePath.ERROR} replace />} />
      </Route>
    </Routes>
  );
};
