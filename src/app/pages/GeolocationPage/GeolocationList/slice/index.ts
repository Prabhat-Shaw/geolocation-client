import { PayloadAction } from '@reduxjs/toolkit';
import { Geolocation } from 'types/Geolocation';
import { Pagination } from 'types/Pagination';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { geolocationListSaga } from './saga';
import { GeolocationListState } from './types';

export const initialState: GeolocationListState = {
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
  name: 'geolocationList',
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

export const { actions: geolocationListActions } = slice;

export const useGeolocationListSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: geolocationListSaga });
  return { actions: slice.actions };
};
