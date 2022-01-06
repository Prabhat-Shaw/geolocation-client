import { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types/User';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { AuthenticationState, Login, Logout, Registration } from './types';

export const initialState: AuthenticationState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
};

const slice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    registrationRequestAction(state, action: PayloadAction<Registration>) {
      state.isLoading = true;
    },
    registrationSuccessAction(state) {
      state.isLoading = false;
    },
    registrationFailtureAction(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    loginRequestAction(state, action: PayloadAction<Login>) {
      state.isLoading = true;
    },
    loginSuccessAction(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailtureAction(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    logoutRequestAction(state, action: PayloadAction<Logout>) {
      state.isLoading = true;
    },
    logoutSuccessAction(state) {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
    },
    logoutFailtureAction(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
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
