import { AppRoute } from './route/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './themes/mainTheme';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <AppRoute />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
