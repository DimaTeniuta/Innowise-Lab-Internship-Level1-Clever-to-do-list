import { AppRoute } from './route/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './themes/mainTheme';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <AppRoute />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
