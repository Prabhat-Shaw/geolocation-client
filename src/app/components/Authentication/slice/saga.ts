import { call, put, takeLatest } from 'redux-saga/effects';
import { User } from 'types/User';
import { request } from 'utils/request';
import { authenticationActions as actions } from '.';

function* login(action) {
  const requestURL = `http://localhost:9000/api/Authentication/login`;
  const requestParameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: action.payload.emailAddress,
      password: action.payload.password,
    }),
  };

  try {
    const user: User = yield call(request, requestURL, {
      ...requestParameters,
      credentials: 'include',
    });

    yield put(actions.loginSuccess(user));
  } catch (error) {
    yield put(actions.loginFailture('test'));
  }
}

function* registration(action) {
  const requestURL = `http://localhost:9000/api/Authentication/registration`;
  const requestParameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: action.payload.emailAddress,
      password: action.payload.password,
    }),
  };

  try {
    yield call(request, requestURL, requestParameters);

    yield put(actions.registrationSuccess());
  } catch (error) {
    yield put(actions.registrationFailture('error'));
  }
}

function* logout() {
  const requestURL = `http://localhost:9000/api/Authentication/logout`;
  const requestParameters = {
    method: 'GET',
  };

  try {
    yield call(request, requestURL, {
      ...requestParameters,
      credentials: 'include',
    });

    yield put(actions.logoutSuccess());
  } catch (error) {
    yield put(actions.logoutFailture('error'));
  }
}

export function* authenticationSaga() {
  yield takeLatest(actions.loginRequest.type, login);
  yield takeLatest(actions.registrationRequest.type, registration);
  yield takeLatest(actions.logoutRequest.type, logout);
}
