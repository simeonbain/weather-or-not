import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import itemConstants from '../constants/itemConstants';

interface ItemState {
  name: string;
}

const initialState: ItemState = {
  name: itemConstants.UMBRELLA
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    changeItem: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
});

export const { changeItem } = itemSlice.actions;

export default itemSlice.reducer;
