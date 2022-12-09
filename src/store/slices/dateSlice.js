import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: null,
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload.date;
    },
    removeDate() {
      return initialState;
    },
  },
});

export const { setDate, removeDate } = dateSlice.actions;
export const selectDate = (state) => state.date;
export default dateSlice.reducer;
