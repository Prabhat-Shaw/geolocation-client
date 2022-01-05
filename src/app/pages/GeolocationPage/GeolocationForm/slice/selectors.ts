import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.geolocationForm || initialState;

export const selectGeolocationForm = createSelector(
  [selectSlice],
  state => state,
);
