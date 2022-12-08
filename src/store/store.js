import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import dateReducer from './slices/dateSlice';
import dataReducer from './slices/dataSlice';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    user: userReducer,
    data: dataReducer,
  },
});
