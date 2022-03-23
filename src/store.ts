import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './slices/itemSlice';
import weatherReducer from './slices/weatherSlice';

const store = configureStore({
  reducer: {
    item: itemReducer,
    weather: weatherReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
