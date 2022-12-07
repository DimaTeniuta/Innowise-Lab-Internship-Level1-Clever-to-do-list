import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import dateReducer from './dateSlice';
import dataReducer from './dataSlice';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    user: userReducer,
    data: dataReducer,
  },
});
