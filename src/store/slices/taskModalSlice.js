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
    taskDate: null,
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
export const selectTaskModalDate = (state) => state.taskModalData;
export default taskModalSlice.reducer;
