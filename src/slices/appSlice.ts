import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isAppInStartup: boolean;
}

const initialState: AppState = {
  isAppInStartup: true
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStartup: (state, action: PayloadAction<boolean>) => {
      state.isAppInStartup = action.payload;
    }
  }
});

export const { setStartup } = appSlice.actions;

export default appSlice.reducer;
