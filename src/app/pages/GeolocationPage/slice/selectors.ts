import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.geolocation || initialState;

export const selectGeolocation = createSelector([selectSlice], state => state);
