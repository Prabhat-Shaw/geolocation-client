import { call, put, takeLatest } from 'redux-saga/effects';
import { User } from 'types/User';
import { API_URL } from 'utils/endpoint';
import { request } from 'utils/request';
import { authenticationActions as actions } from '.';

function* login(action) {
  const { emailAddress: email_address, password, history } = action.payload;
  const requestURL = `${API_URL}/Authentication/login`;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ email_address, password }),
  };

  try {
    const user: User = yield call(request, requestURL, {
      ...requestParameters,
      credentials: 'include',
    });

    yield put(actions.loginSuccessAction(user));
    history.push('/');
  } catch (error) {
    yield put(actions.loginFailtureAction('test'));
  }
}

function* registration(action) {
  const { emailAddress: email_address, password } = action.payload;
  const requestURL = `${API_URL}/Authentication/registration`;
  const requestParameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email_address, password }),
  };

  try {
    yield call(request, requestURL, requestParameters);

    yield put(actions.registrationSuccessAction());
  } catch (error) {
    yield put(actions.registrationFailtureAction('error'));
  }
}

function* logout(action) {
  const { history } = action.payload;
  const requestURL = `${API_URL}/Authentication/logout`;
  const requestParameters = {
    method: 'GET',
  };

  try {
    yield call(request, requestURL, {
      ...requestParameters,
      credentials: 'include',
    });

    yield put(actions.logoutSuccessAction());
    history.push('/login');
  } catch (error) {
    yield put(actions.logoutFailtureAction('error'));
  }
}

export function* authenticationSaga() {
  yield takeLatest(actions.loginRequestAction.type, login);
  yield takeLatest(actions.registrationRequestAction.type, registration);
  yield takeLatest(actions.logoutRequestAction.type, logout);
}
