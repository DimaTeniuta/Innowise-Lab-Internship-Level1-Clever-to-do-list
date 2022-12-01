import { AppRoute } from './route/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { themeBlue } from './themes/themeBlue';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeBlue}>
        <AppRoute />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
