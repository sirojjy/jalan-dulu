import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Create slice
const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    fetchActivitiesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchActivitiesSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchActivitiesFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchActivitiesStart, fetchActivitiesSuccess, fetchActivitiesFailure } = activitySlice.actions;
export default activitySlice.reducer;
