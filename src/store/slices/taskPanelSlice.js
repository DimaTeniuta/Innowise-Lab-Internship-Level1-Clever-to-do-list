import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskPanel: {
    title: '',
    description: '',
    complete: false,
    open: false,
    taskId: null,
    userId: null,
    taskDate: null,
  },
};

const taskPanelSlice = createSlice({
  name: 'taskPanel',
  initialState,
  reducers: {
    openTaskPanel(state, action) {
      state.taskPanel = action.payload.taskPanel;
    },
    closeTaskPanel() {
      return initialState;
    },
  },
});

export const { openTaskPanel, closeTaskPanel } = taskPanelSlice.actions;
export const selectTaskPanel = (state) => state.taskPanel;
export default taskPanelSlice.reducer;
