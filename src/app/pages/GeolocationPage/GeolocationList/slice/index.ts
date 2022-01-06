import { PayloadAction } from '@reduxjs/toolkit';
import { Geolocation } from 'types/Geolocation';
import { Pagination } from 'types/Pagination';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { geolocationFormActions } from '../../GeolocationForm/slice';
import { geolocationListSaga } from './saga';
import {
  GeolocationListState,
  GetGeolocations,
  RemoveGeolocation,
} from './types';

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
    getGeolocationsRequestAction(
      state,
      action: PayloadAction<GetGeolocations>,
    ) {
      state.isLoading = true;
    },
    getGeolocationsSuccessAction(
      state,
      action: PayloadAction<Pagination<Geolocation>>,
    ) {
      state.isLoading = false;
      state.geolocations.data = [
        ...state.geolocations.data,
        ...action.payload.data,
      ];
      state.geolocations.meta = action.payload.meta;
    },
    getGeolocationsFailtureAction(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    removeGeolocationRequestAction(
      state,
      action: PayloadAction<RemoveGeolocation>,
    ) {
      state.isLoading = true;
    },
    removeGeolocationSuccessAction(state, action: PayloadAction<Geolocation>) {
      state.isLoading = false;
      state.geolocations.data = state.geolocations.data.filter(
        (geolocation: Geolocation) => geolocation.uuid !== action.payload.uuid,
      );
    },
    removeGeolocationFailtureAction(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [geolocationFormActions.createGeolocationSuccessAction.type]: (
      state,
      action: PayloadAction<Geolocation>,
    ) => {
      state.geolocations.data = [...state.geolocations.data, action.payload];
    },
  },
});

export const { actions: geolocationListActions } = slice;

export const useGeolocationListSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: geolocationListSaga });
  return { actions: slice.actions };
};
