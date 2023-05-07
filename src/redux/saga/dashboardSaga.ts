import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchBanner,
  fetchBannerError,
  fetchBannerSuccess,
} from '../reducer/dashboardSlice';
import {getBannerDashboard} from '../api';
import {BannerItem} from '../../models';
import {AppError} from '../types';

function* fetchDataDashboard() {
  const value: BannerItem[] | undefined = yield call(getBannerDashboard);

  if (value) {
    yield put(fetchBannerSuccess(value));
  } else {
    yield put(fetchBannerError(AppError.NO_ERROR));
  }
}

export default function* dashboardSaga() {
  yield takeLatest(fetchBanner.type, fetchDataDashboard);
}
