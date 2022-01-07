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
  Order,
  RemoveGeolocation,
} from './types';

export const initialState: GeolocationListState = {
  sorting: Order.ASC,
  filters: [{ region_code: [] }, { capital: [] }],
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

      // action.payload.data.forEach((geolocation: Geolocation) => {
      //   if (!state.filters.region_code.includes(geolocation.region_code)) {
      //     state.filters.region_code = [
      //       ...state.filters.region_code,
      //       geolocation.region_code,
      //     ];
      //   }

      //   if (!state.filters.capital.includes(geolocation.location.capital)) {
      //     state.filters.capital = [
      //       ...state.filters.capital,
      //       geolocation.location.capital,
      //     ];
      //   }
      // });
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

    sortingAction(state) {
      state.sorting = state.sorting === Order.ASC ? Order.DESC : Order.ASC;
      state.geolocations.data = state.geolocations.data.reverse();
    },

    filteringAction(state, action: PayloadAction<any>) {
      state.geolocations.data = state.geolocations.data.filter(
        (geolocation: Geolocation) =>
          geolocation[action.payload.key] === action.payload.value,
      );
    },
  },
  extraReducers: {
    [geolocationFormActions.createGeolocationSuccessAction.type]: (
      state,
      action: PayloadAction<Geolocation>,
    ) => {
      state.geolocations.data =
        state.sorting === Order.ASC
          ? [...state.geolocations.data, action.payload]
          : [action.payload, ...state.geolocations.data];
    },
  },
});

export const {
  actions: geolocationListActions,
  reducer: geolocationListReducer,
} = slice;

export const useGeolocationListSlice = () => {
  useInjectReducer({
    key: slice.name,
    reducer: slice.reducer,
  });
  useInjectSaga({ key: slice.name, saga: geolocationListSaga });
  return { actions: slice.actions };
};
