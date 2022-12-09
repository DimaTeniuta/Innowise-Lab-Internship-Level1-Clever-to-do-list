import { createSlice } from '@reduxjs/toolkit';
import { notifierText } from '../../utils/notifireConstants';

const initialState = {
  alert: { type: 'success', open: false, text: 'Success' },
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    alertError: (state, action) => {
      state.alert = {
        type: notifierText.ERROR,
        text: action.payload ? action.payload : notifierText.ERROR_TEXT,
        open: true,
      };
    },
    alertSuccess: (state) => {
      state.alert = {
        type: notifierText.SUCCESS,
        text: notifierText.SUCCESS_TEXT,
        open: true,
      };
    },
    hideAlert: (state) => {
      state.alert.open = false;
    },
  },
});

export const { alertError, alertSuccess, hideAlert } = alertSlice.actions;
export const selectAlert = (state) => state.alert;
export default alertSlice.reducer;
