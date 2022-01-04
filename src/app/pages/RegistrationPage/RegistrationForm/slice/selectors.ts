import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.registrationForm || initialState;

export const selectRegistrationForm = createSelector(
  [selectSlice],
  state => state,
);
