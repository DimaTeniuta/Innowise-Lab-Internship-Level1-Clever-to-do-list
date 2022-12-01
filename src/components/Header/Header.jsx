import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/system/Container';
import Toolbar from '@mui/material/Toolbar';

export const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar disableGutters={true}></Toolbar>
      </Container>
    </AppBar>
  );
};
