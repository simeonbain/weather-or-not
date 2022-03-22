import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Weather from '../types/Weather';
import fetchLocationData from '../utilities/fetchLocationData';
import fetchWeatherData from '../utilities/fetchWeatherData';

interface WeatherState {
  dataAvailable: boolean;
  weather: Weather;
}

const initialState: WeatherState = {
  dataAvailable: false,
  weather: { today: {}, forecast: [] }
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherData: (state, action: PayloadAction<string>) => {
      const location = action.payload;

      fetchLocationData(location)
        .then(({ lat, lon }) => {
          return fetchWeatherData(lat, lon);
        })
        .then((weather) => {
          state.weather = weather;
          state.dataAvailable = true;
        })
        .catch((error) => {
          console.log(error);
          state = initialState;
        });
    }
  }
});

export const { getWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
