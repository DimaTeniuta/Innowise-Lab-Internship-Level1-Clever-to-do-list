import { AppRoute } from './route/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './themes/mainTheme';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <AppRoute />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
