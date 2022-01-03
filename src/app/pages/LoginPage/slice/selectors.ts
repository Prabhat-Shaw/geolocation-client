import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.loginPage || initialState;

export const selectLoginPage = createSelector([selectSlice], state => state);
