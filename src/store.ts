import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './slices/itemSlice';
import weatherReducer from './slices/weatherSlice';
import locationReducer from './slices/locationSlice';
import appReducer from './slices/appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    item: itemReducer,
    weather: weatherReducer,
    location: locationReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
