import { call, put, takeLatest } from 'redux-saga/effects';
import { Geolocation } from 'types/Geolocation';
import { Pagination } from 'types/Pagination';
import { API_URL } from 'utils/endpoint';
import { request } from 'utils/request';
import { geolocationListActions } from '.';
import { geolocationFormActions } from '../../GeolocationForm/slice';

function* getGeolocations(action) {
  const requestURL = `${API_URL}/Geolocation`;
  const requestParameters = { method: 'GET' };

  try {
    const geolocations: Pagination<Geolocation> = yield call(
      request,
      requestURL,
      { ...requestParameters, credentials: 'include' },
    );

    yield put(
      geolocationListActions.getGeolocationsSuccessAction(geolocations),
    );
  } catch (error) {
    yield put(geolocationListActions.getGeolocationsFailtureAction('test'));
  }
}

function* removeGeolocation(action) {
  const { uuid } = action.payload;
  const requestURL = `${API_URL}/Geolocation/${uuid}`;
  const requestParameters = { method: 'DELETE' };

  try {
    const geolocation: Geolocation = yield call(request, requestURL, {
      ...requestParameters,
      credentials: 'include',
    });

    yield put(
      geolocationListActions.removeGeolocationSuccessAction(geolocation),
    );
  } catch (error) {
    yield put(geolocationListActions.removeGeolocationFailtureAction('test'));
  }
}

export function* geolocationListSaga() {
  yield takeLatest(
    [
      geolocationListActions.getGeolocationsRequestAction.type,
      geolocationListActions.removeGeolocationSuccessAction.type,
      geolocationFormActions.createGeolocationSuccessAction.type,
    ],
    getGeolocations,
  );
  yield takeLatest(
    geolocationListActions.removeGeolocationRequestAction.type,
    removeGeolocation,
  );
}
