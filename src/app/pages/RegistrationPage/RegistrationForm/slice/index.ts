import { PayloadAction } from '@reduxjs/toolkit';
import { Exception } from 'types/Exception';
import { User } from 'types/User';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { registrationFormSaga } from './saga';
import { RegistrationFormState } from './types';

export const initialState: RegistrationFormState = {
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'registrationForm',
  initialState,
  reducers: {
    registrationRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    registrationSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
    },
    registrationFailture(state, action: PayloadAction<Exception | any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: loginFormActions } = slice;

export const useRegistrationFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: registrationFormSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLoginFormSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
