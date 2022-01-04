/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { authenticationReducer } from 'app/components/Authentication/slice';
import { AuthenticationState } from 'app/components/Authentication/slice/types';
import { loginFormReducer } from 'app/pages/LoginPage/LoginForm/slice';
import { LoginFormState } from 'app/pages/LoginPage/LoginForm/slice/types';
import { registerFormReducer } from 'app/pages/RegistrationPage/RegistrationForm/slice';
import { RegistrationFormState } from 'app/pages/RegistrationPage/RegistrationForm/slice/types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { InjectedReducersType } from 'utils/types/injector-typings';

const authenticationPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['isAuthenticated'],
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    ...injectedReducers,
    authentication: persistReducer(
      authenticationPersistConfig,
      authenticationReducer as Reducer<AuthenticationState>,
    ),
    loginForm: loginFormReducer as Reducer<LoginFormState>,
    registrationForm: registerFormReducer as Reducer<RegistrationFormState>,
  });
}
