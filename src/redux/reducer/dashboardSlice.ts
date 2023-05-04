import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppError} from '../../redux/types';
import {RootState} from '../store';
import {BannerItem} from '../../models';

type InitialState = {
  loading: boolean;
  error: AppError;
  banner?: BannerItem[];
};

const initialState: InitialState = {
  loading: false,
  error: AppError.NO_ERROR,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateBanner(state, action: PayloadAction<BannerItem[]>) {
      state.banner = action.payload;
    },
  },
});
// Actions
export const dashboardActions = dashboardSlice.actions;

// selectors
export const selectDashboardBanner = (state: RootState) =>
  state.dashboard.banner;
export const selectDashboardLoading = (state: RootState) =>
  state.dashboard.loading;
export const selectDashboardError = (state: RootState) => state.dashboard.error;

export default dashboardSlice.reducer;
