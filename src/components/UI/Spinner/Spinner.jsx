import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <CircularProgress />
    </div>
  );
};
