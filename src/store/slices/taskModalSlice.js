import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskData: {
    title: '',
    description: '',
    complete: false,
    open: false,
    isCreateType: true,
    taskId: null,
    userId: null,
    date: null,
  },
};

const taskModalSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskData(state, action) {
      state.taskData = action.payload.taskData;
    },
    closeTaskModal() {
      return initialState;
    },
  },
});

export const { setTaskData, closeTaskModal } = taskModalSlice.actions;
export default taskModalSlice.reducer;
