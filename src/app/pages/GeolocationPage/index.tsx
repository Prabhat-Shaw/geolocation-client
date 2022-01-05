/**
 *
 * GeolocationPage
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { GeolocationForm } from './GeolocationForm';
import { GeolocationList } from './GeolocationList';
import { useGeolocationListSlice } from './GeolocationList/slice';

interface Props {}

export function GeolocationPage(props: Props) {
  const { actions } = useGeolocationListSlice();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div>
      <GeolocationForm />

      <GeolocationList />
    </div>
  );
}
