import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  task: null,
};

const taskSlice = createSlice({
  name: 'taskData',
  initialState,
  reducers: {
    setTask(state, action) {
      state.task = action.payload;
    },
    removeTaskData() {
      return initialState;
    },
  },
});

export const { setTask, removeTask } = taskSlice.actions;
export const selectTask = (state) => state.task;
export default taskSlice.reducer;
