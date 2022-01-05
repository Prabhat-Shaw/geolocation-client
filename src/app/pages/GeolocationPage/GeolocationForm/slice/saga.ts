import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { geolocationFormActions as actions } from '.';

function* createGeolocation(action) {
  const { ipAddress: ip_address } = action.payload;
  const requestURL = `${API_URL}/Geolocation`;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ ip_address }),
  };

  try {
    const geolocation: Geolocation = yield call(request, requestURL, {
      ...requestParameters,
      credentials: 'include',
    });

    yield put(actions.createGeolocationSuccessAction(geolocation));
  } catch (error) {
    yield put(actions.createGeolocationFailtureAction('test'));
  }
}

export function* geolocationFormSaga() {
  yield takeLatest(
    actions.createGeolocationRequestAction.type,
    createGeolocation,
  );
}
