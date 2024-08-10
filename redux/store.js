// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './activitySlice';

export const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
});

// Optional: setup for redux devtools
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  window.__REDUX_DEVTOOLS_EXTENSION__();
}
