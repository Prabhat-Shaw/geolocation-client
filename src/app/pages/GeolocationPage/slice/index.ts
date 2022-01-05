import { PayloadAction } from '@reduxjs/toolkit';
import { Geolocation } from 'types/Geolocation';
import { Pagination } from 'types/Pagination';
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
    getGeolocationsRequestAction(state) {
      state.isLoading = true;
    },
    getGeolocationsSuccessAction(
      state,
      action: PayloadAction<Pagination<Geolocation>>,
    ) {
      state.isLoading = false;
      state.geolocations = action.payload;
    },
    getGeolocationsFailtureAction(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },

    createGeolocationRequestAction(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    createGeolocationSuccessAction(state, action: PayloadAction<Geolocation>) {
      state.isLoading = false;
    },
    createGeolocationFailtureAction(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },

    removeGeolocationRequestAction(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    removeGeolocationSuccessAction(state, action: PayloadAction<Geolocation>) {
      state.isLoading = false;
    },
    removeGeolocationFailtureAction(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
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
