import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.geolocationList || initialState;

export const selectGeolocationList = createSelector(
  [selectSlice],
  state => state,
);
