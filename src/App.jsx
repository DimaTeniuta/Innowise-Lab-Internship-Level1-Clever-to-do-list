import { AppRoute } from './route/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './themes/mainTheme';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { setUser } from './store/slices/userSlice';
import { setData } from './store/slices/dataSlice';
import { ref, onValue } from 'firebase/database';
import { useAuth } from './hooks/useAuth';
import { auth, db } from './api/firebase';
import { Spinner } from './components/UI/Spinner/Spinner';

const App = () => {
  const dispatch = useDispatch();
  const { id } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const dataRef = ref(db, id);
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setData({ data }));
      });
    }
  }, [dispatch, id]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>{isLoading ? <Spinner /> : <AppRoute />}</ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
