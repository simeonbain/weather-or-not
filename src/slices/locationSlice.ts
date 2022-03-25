import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LocationData from '../types/LocationData';

interface LocationState {
  data: LocationData;
}

const initialState: LocationState = {
  data: {}
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationData: (state, action: PayloadAction<LocationData | null>) => {
      if (action.payload !== null) {
        state.data = action.payload;
      } else {
        state.data = {};
      }
    }
  }
});

export const { setLocationData } = locationSlice.actions;

export default locationSlice.reducer;
