import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.authentication || initialState;

export const selectAuthentication = createSelector(
  [selectSlice],
  state => state,
);
