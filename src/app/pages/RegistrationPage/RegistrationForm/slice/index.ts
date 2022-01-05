import { PayloadAction } from '@reduxjs/toolkit';
import { authenticationActions } from 'app/components/Authentication/slice';
import { Exception } from 'types/Exception';
import { User } from 'types/User';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { RegistrationFormState } from './types';

export const initialState: RegistrationFormState = {
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'registrationForm',
  initialState,
  reducers: {},
  extraReducers: {
    [authenticationActions.registrationRequestAction.type]: (
      state,
      action: PayloadAction<any>,
    ) => {
      state.isLoading = true;
    },
    [authenticationActions.registrationSuccessAction.type]: (
      state,
      action: PayloadAction<User>,
    ) => {
      state.isLoading = false;
    },
    [authenticationActions.registrationFailtureAction.type]: (
      state,
      action: PayloadAction<Exception | any>,
    ) => {
      state.isLoading = false;
    },
  },
});

export const { actions: registerFormActions, reducer: registerFormReducer } =
  slice;

export const useRegistrationFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
