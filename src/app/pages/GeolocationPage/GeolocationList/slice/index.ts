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
  geolocationsFilteringData: [],
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
  isFiltering: false,
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

      const regionFilter = state.filters.find(
        element => 'region_code' in element,
      ).region_code;

      for (const { region_code } of state.geolocations.data) {
        if (!regionFilter.includes(region_code)) {
          regionFilter.push(region_code);
        }
      }
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

      if (state.isFiltering) {
        state.geolocationsFilteringData =
          state.geolocationsFilteringData.filter(
            (geolocation: Geolocation) =>
              geolocation.uuid !== action.payload.uuid,
          );
      }
    },
    removeGeolocationFailtureAction(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    sortingAction(state) {
      state.sorting = state.sorting === Order.ASC ? Order.DESC : Order.ASC;
      state.geolocations.data = [...state.geolocations.data].reverse();
    },

    filteringAction(state, action: PayloadAction<any>) {
      if (!state.isFiltering) {
        state.isFiltering = true;

        state.geolocationsFilteringData = [...state.geolocations.data].filter(
          (geolocation: Geolocation) =>
            geolocation[action.payload.key] === action.payload.value,
        );
      } else {
        state.geolocationsFilteringData = [...state.geolocations.data];
        state.geolocationsFilteringData =
          state.geolocationsFilteringData.filter(
            (geolocation: Geolocation) =>
              geolocation[action.payload.key] === action.payload.value,
          );
      }
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
