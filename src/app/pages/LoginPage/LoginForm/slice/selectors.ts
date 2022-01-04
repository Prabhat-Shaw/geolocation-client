import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.loginForm || initialState;

export const selectLoginForm = createSelector([selectSlice], state => state);
