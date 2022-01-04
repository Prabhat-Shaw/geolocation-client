/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { authenticationReducer } from 'app/components/Authentication/slice';
import { AuthenticationState } from 'app/components/Authentication/slice/types';
import { InjectedReducersType } from 'utils/types/injector-typings';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    ...injectedReducers,
    authentication: authenticationReducer as Reducer<AuthenticationState>,
  });
}
