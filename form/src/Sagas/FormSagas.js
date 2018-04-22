import { call, put } from 'redux-saga/effects';
import { formActions } from '../Redux/FormReducer';
import { convertStatusToError } from '../Utils/Transforms';

export function* sendForm(api, { routerHistory }, action) {
  try {
    const response = yield call(api.sendForm, action.data);

    yield put(formActions.sendSuccess(response.data));
    routerHistory.push('/success')
  } catch (err) {
    const statusCode = err.response && err.response.status;
    const msg = convertStatusToError(statusCode);
    yield put(formActions.sendFailure(msg));
  }
}
