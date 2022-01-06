import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { geolocationFormSaga } from './saga';
import { GeolocationFormState } from './types';

export const initialState: GeolocationFormState = {
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'geolocationForm',
  initialState,
  reducers: {
    createGeolocationRequestAction(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    createGeolocationSuccessAction(state, action: PayloadAction<Geolocation>) {
      state.isLoading = false;
    },
    createGeolocationFailtureAction(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: geolocationFormActions } = slice;

export const useGeolocationFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: geolocationFormSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useGeolocationFormSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
