import { AppRoute } from './route/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './themes/mainTheme';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { setUser } from './store/slices/userSlice';
import { setData } from './store/slices/dataSlice';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const { id } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id) {
      const db = getDatabase();
      const dataRef = ref(db, id);
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setData({ data }));
      });
    }
  }, [dispatch, id]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <AppRoute />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
