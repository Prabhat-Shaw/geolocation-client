import { call, put, takeLatest } from 'redux-saga/effects';
import { Geolocation } from 'types/Geolocation';
import { Pagination } from 'types/Pagination';
import { request } from 'utils/request';
import { geolocationActions as actions } from '.';

function* getGeolocations(action) {
  const requestURL = `http://localhost:9000/api/Geolocation/`;
  const requestParameters = { method: 'GET' };

  try {
    const geolocations: Pagination<Geolocation> = yield call(
      request,
      requestURL,
      {
        ...requestParameters,
        credentials: 'include',
      },
    );

    yield put(actions.getGeolocationsSuccessAction(geolocations));
  } catch (error) {
    yield put(actions.getGeolocationsFailtureAction('test'));
  }
}

function* createGeolocation(action) {
  const requestURL = `http://localhost:9000/api/Geolocation`;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ ip_address: action.payload.ipAddress }),
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

function* removeGeolocation(action) {
  const requestURL = `http://localhost:9000/api/Geolocation/${action.payload.uuid}`;
  const requestParameters = { method: 'DELETE' };

  try {
    const geolocation: Geolocation = yield call(request, requestURL, {
      ...requestParameters,
      credentials: 'include',
    });

    yield put(actions.removeGeolocationSuccessAction(geolocation));
  } catch (error) {
    yield put(actions.removeGeolocationFailtureAction('test'));
  }
}

export function* geolocationSaga() {
  yield takeLatest(actions.getGeolocationsRequestAction.type, getGeolocations);
  yield takeLatest(
    actions.createGeolocationRequestAction.type,
    createGeolocation,
  );
  yield takeLatest(
    actions.removeGeolocationRequestAction.type,
    removeGeolocation,
  );
}
