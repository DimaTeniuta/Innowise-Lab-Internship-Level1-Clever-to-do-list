import React from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Notifier } from '../UI/Notifier/Notifier';
import { TaskModal } from '../UI/TaskModal/TaskModal';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Notifier />
      <TaskModal />
    </>
  );
};
