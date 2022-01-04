import { PayloadAction } from '@reduxjs/toolkit';
import { Geolocation } from 'types/Geolocation';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { geolocationSaga } from './saga';
import { GeolocationState } from './types';

export const initialState: GeolocationState = {
  geolocations: {
    data: [],
    meta: {
      page: 0,
      take: 0,
      item_count: 0,
      page_count: 0,
      has_previous_page: false,
      has_next_page: false,
    },
  },
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {
    createGeolocationRequestAction(state, action: PayloadAction<any>) {},
    createGeolocationSuccessAction(
      state,
      action: PayloadAction<Geolocation>,
    ) {},
    createGeolocationFailtureAction(state, action: PayloadAction<any>) {},

    removeGeolocationRequestAction(state, action: PayloadAction<any>) {},
    removeGeolocationSuccessAction(
      state,
      action: PayloadAction<Geolocation>,
    ) {},
    removeGeolocationFailtureAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: geolocationActions } = slice;

export const useGeolocationSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: geolocationSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useGeolocationSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
