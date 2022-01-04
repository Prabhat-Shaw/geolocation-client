import { call, put, takeLatest } from 'redux-saga/effects';
import { User } from 'types/User';
import { request } from 'utils/request';
import { loginFormActions as actions } from '.';

function* registration(take) {
  const requestURL = `http://localhost:9000/api/Authentication/registration`;
  const requestParameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: take.payload.emailAddress,
      password: take.payload.password,
    }),
  };

  try {
    const user: User = yield call(request, requestURL, requestParameters);

    yield put(actions.registrationSuccess(user));
  } catch ({ response }) {
    yield put(actions.registrationFailture(response));
  }
}

export function* registrationFormSaga() {
  yield takeLatest(actions.registrationRequest.type, registration);
}
