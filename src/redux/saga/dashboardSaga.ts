import {takeLatest} from 'redux-saga/effects';
import {dashboardActions} from '../reducer/dashboardSlice';

function* fetchDataDashboard() {}

export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.updateBanner.type, fetchDataDashboard);
}
