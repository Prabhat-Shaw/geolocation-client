import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.registrationPage || initialState;

export const selectRegistrationPage = createSelector(
  [selectSlice],
  state => state,
);
