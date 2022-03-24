import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import WeatherData from '../types/WeatherData';

interface WeatherState {
  dataAvailable: boolean;
  data: WeatherData;
}

const initialState: WeatherState = {
  dataAvailable: false,
  data: { today: {}, forecast: [] }
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<WeatherData | null>) => {
      if (action.payload !== null) {
        state.data = action.payload;
        state.dataAvailable = true;
      } else {
        state.dataAvailable = false;
      }
    }
  }
});

export const { setWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
