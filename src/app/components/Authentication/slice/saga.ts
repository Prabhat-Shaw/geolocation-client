import { call, put, takeLatest } from 'redux-saga/effects';
import { User } from 'types/User';
import { request } from 'utils/request';
import { authenticationActions as actions } from '.';

function* login(action) {
  console.log(action);

  const requestURL = `http://localhost:9000/api/Authentication/login`;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
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

    yield put(actions.loginSuccessAction(user));
    action.payload.history.push('/');
  } catch (error) {
    yield put(actions.loginFailtureAction('test'));
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

    yield put(actions.registrationSuccessAction());
  } catch (error) {
    yield put(actions.registrationFailtureAction('error'));
  }
}

function* logout(action) {
  const requestURL = `http://localhost:9000/api/Authentication/logout`;
  const requestParameters = {
    method: 'GET',
  };

  try {
    yield call(request, requestURL, {
      ...requestParameters,
      credentials: 'include',
    });

    yield put(actions.logoutSuccessAction());
    action.payload.history.push('/login');
  } catch (error) {
    yield put(actions.logoutFailtureAction('error'));
  }
}

export function* authenticationSaga() {
  yield takeLatest(actions.loginRequestAction.type, login);
  yield takeLatest(actions.registrationRequestAction.type, registration);
  yield takeLatest(actions.logoutRequestAction.type, logout);
}
