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
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../store/userSlice';
// import { readUserData } from '../api/readUserData';
// import { setData } from '../store/dataSlice';

export const AppRoute = () => {
  // const dispatch = useDispatch();
  // const auth = getAuth();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(
  //         setUser({
  //           email: user.email,
  //           token: user.accessToken,
  //           id: user.uid,
  //         })
  //       );
  //       const data = readUserData(user.uid);
  //       dispatch(setData({ data }));
  //     }
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path={routePath.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        {isAuth ? (
          <Route path={routePath.CALENDAR} element={<CalendarPage />} />
        ) : (
          <Route path={routePath.CALENDAR} element={<Navigate to={routePath.HOME} replace />} />
        )}
        <Route path={routePath.SIGN_IN} element={<SignInPage />} />
        <Route path={routePath.SIGN_UP} element={<SignUpPage />} />
        <Route path={routePath.ERROR} element={<ErrorPage />} />
        <Route path={routePath.GENERAL} element={<Navigate to={routePath.ERROR} replace />} />
      </Route>
    </Routes>
  );
};
