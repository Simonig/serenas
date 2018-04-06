import { takeLatest, all } from 'redux-saga/effects';
import API from '../Utils/Api';

import { SEND_FORM_REQUEST } from '../Redux/FormReducer';
import { sendForm } from './FormSagas';

export default function* root() {
  const api = API.create();

  yield all([
    takeLatest(SEND_FORM_REQUEST, sendForm, api),
  ]);
}
