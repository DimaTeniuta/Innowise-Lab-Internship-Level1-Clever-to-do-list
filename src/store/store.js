import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import dateReducer from './dateSlice';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    user: userReducer,
  },
});
