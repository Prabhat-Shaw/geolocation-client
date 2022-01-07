/**
 *
 * GeolocationPage
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeolocationList } from './GeolocationList';

interface Props {}

export function GeolocationPage(props: Props) {
  const { t, i18n } = useTranslation();

  return <GeolocationList />;
}
