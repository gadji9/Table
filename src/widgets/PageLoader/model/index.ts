import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ILoader {
  isLoading?: boolean;
}

const initialState: ILoader = {
  isLoading: false,
};

const loaderSlice = createSlice({
  initialState,
  name: 'loader',
  reducers: {
    setIsLoadingReducer: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoadingReducer } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
