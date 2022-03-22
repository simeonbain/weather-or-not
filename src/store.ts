import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './slices/itemSlice';

const store = configureStore({
  reducer: {
    item: itemReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
