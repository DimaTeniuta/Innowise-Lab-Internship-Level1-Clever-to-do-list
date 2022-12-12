import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  task: { title: null, description: null, taskId: null, complete: null },
};

const taskSlice = createSlice({
  name: 'taskData',
  initialState,
  reducers: {
    setTask(state, action) {
      state.task = action.payload.task;
    },
    removeTaskData() {
      return initialState;
    },
  },
});

export const { setTask, removeTask } = taskSlice.actions;
export const selectTask = (state) => state.task;
export default taskSlice.reducer;
