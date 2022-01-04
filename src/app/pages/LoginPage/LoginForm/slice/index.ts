import { PayloadAction } from '@reduxjs/toolkit';
import { Exception } from 'types/Exception';
import { User } from 'types/User';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginFormSaga } from './saga';
import { LoginFormState } from './types';

export const initialState: LoginFormState = {
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
    },
    loginFailture(state, action: PayloadAction<Exception | any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: loginFormActions } = slice;

export const useLoginFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginFormSaga });
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
