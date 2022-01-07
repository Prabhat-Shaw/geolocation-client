/**
 *
 * GeolocationPage
 *
 */
import { Header } from 'app/components/Header';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeolocationForm } from './GeolocationForm';
import { GeolocationList } from './GeolocationList';

interface Props {}

export function GeolocationPage(props: Props) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />

      <GeolocationForm />

      <GeolocationList />
    </>
  );
}
