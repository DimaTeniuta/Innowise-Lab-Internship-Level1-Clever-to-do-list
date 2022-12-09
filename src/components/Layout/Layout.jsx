import React from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Notifier } from '../UI/Notifier/Notifier';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Notifier />
    </>
  );
};
