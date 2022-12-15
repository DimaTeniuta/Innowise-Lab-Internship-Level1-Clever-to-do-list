import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload.data;
    },
  },
});

export const { setData } = dataSlice.actions;
export const selectData = (state) => state.data;
export default dataSlice.reducer;
