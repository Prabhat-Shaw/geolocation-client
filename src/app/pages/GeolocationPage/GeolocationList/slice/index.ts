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
  filters: [{ region_code: [] }],
  geolocations: {
    data: [],
    dataFilter: [],
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

      const regionFilterElement = state.filters.find(
        element => 'region_code' in element,
      );
      const regions = new Set(regionFilterElement.region_code);

      for (const { region_code } of state.geolocations.data) {
        regions.add(region_code);
      }

      regionFilterElement.region_code = [...regions];
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

      state.geolocations.dataFilter = state.geolocations.dataFilter?.filter(
        (geolocation: Geolocation) => geolocation.uuid !== action.payload.uuid,
      );
    },
    removeGeolocationFailtureAction(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    sortAction(state) {
      state.sorting = state.sorting === Order.ASC ? Order.DESC : Order.ASC;
      state.geolocations.data = state.geolocations.data.reverse();
      state.geolocations.dataFilter = state.geolocations.dataFilter?.reverse();
    },

    filterAction(state, action: PayloadAction<any>) {
      state.geolocations.dataFilter = [...state.geolocations.data].filter(
        (geolocation: Geolocation) =>
          geolocation[action.payload.key] === action.payload.value,
      );
    },

    resetFilterAction(state) {
      state.geolocations.dataFilter = [];
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

      const regionFilterElement = state.filters.find(
        element => 'region_code' in element,
      );
      const regions = new Set(regionFilterElement.region_code);

      for (const { region_code } of state.geolocations.data) {
        regions.add(region_code);
      }

      regionFilterElement.region_code = [...regions];
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
