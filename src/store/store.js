import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import dateReducer from './slices/dateSlice';
import dataReducer from './slices/dataSlice';
import taskModalReducer from './slices/taskModalSlice';
import alertReducer from './slices/alertSlice';
import taskPanelSlice from './slices/taskPanelSlice';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    user: userReducer,
    data: dataReducer,
    taskModalData: taskModalReducer,
    alert: alertReducer,
    taskPanel: taskPanelSlice,
  },
});
