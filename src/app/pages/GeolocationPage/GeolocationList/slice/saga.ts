import { call, put, takeLatest } from 'redux-saga/effects';
import { Geolocation } from 'types/Geolocation';
import { Pagination } from 'types/Pagination';
import { API_URL } from 'utils/endpoint';
import { request } from 'utils/request';
import { geolocationListActions as actions } from '.';

function* getGeolocations({
  payload: { page },
}: ReturnType<typeof actions.getGeolocationsRequestAction>) {
  const requestURL = `${API_URL}/Geolocation?page=${page}`;
  const requestParameters = { method: 'GET' };

  try {
    const geolocations: Pagination<Geolocation> = yield call(
      request,
      requestURL,
      { ...requestParameters, credentials: 'include' },
    );

    yield put(actions.getGeolocationsSuccessAction(geolocations));
  } catch (error) {
    yield put(actions.getGeolocationsFailtureAction('test'));
  }
}

function* removeGeolocation({
  payload: { uuid },
}: ReturnType<typeof actions.removeGeolocationRequestAction>) {
  const requestURL = `${API_URL}/Geolocation/${uuid}`;
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

export function* geolocationListSaga() {
  yield takeLatest(actions.getGeolocationsRequestAction.type, getGeolocations);
  yield takeLatest(
    actions.removeGeolocationRequestAction.type,
    removeGeolocation,
  );
}
