import { PayloadAction } from '@reduxjs/toolkit';
import { Exception } from 'types/Exception';
import { User } from 'types/User';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { AuthenticationState } from './types';

export const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: null,
};

const slice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    registrationRequest(state, action: PayloadAction<any>) {},
    registrationSuccess(state) {},
    registrationFailture(state, action: PayloadAction<Exception | any>) {},

    loginRequest(state, action: PayloadAction<any>) {},
    loginSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailture(state, action: PayloadAction<Exception | any>) {},

    logoutRequest(state) {},
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    logoutFailture(state, action: PayloadAction<Exception | any>) {},
  },
});

export const {
  actions: authenticationActions,
  reducer: authenticationReducer,
} = slice;

export const useAuthenticationSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });

  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthenticationSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
