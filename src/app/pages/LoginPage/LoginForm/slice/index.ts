import { PayloadAction } from '@reduxjs/toolkit';
import { authenticationActions } from 'app/components/Authentication/slice';
import { Exception } from 'types/Exception';
import { User } from 'types/User';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { LoginFormState } from './types';

export const initialState: LoginFormState = {
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {},
  extraReducers: {
    [authenticationActions.loginRequest.type]: (
      state,
      action: PayloadAction<any>,
    ) => {
      state.isLoading = true;
    },
    [authenticationActions.loginSuccess.type]: (
      state,
      action: PayloadAction<User>,
    ) => {
      state.isLoading = false;
    },
    [authenticationActions.loginFailture.type]: (
      state,
      action: PayloadAction<Exception | any>,
    ) => {
      state.isLoading = false;
    },
  },
});

export const { actions: loginFormActions, reducer: loginFormReducer } = slice;

export const useLoginFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
