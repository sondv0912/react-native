import {all} from 'redux-saga/effects';
import dashboardSaga from './saga/dashboardSaga';

export default function* () {
  yield all([dashboardSaga()]);
}
