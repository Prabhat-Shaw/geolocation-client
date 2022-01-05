/**
 *
 * GeolocationPage
 *
 */
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useGeolocationSlice } from './slice';

interface Props {}

export function GeolocationPage(props: Props) {
  const { actions } = useGeolocationSlice();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.getGeolocationsRequestAction());
  });

  return (
    <div>
      {t('')}
      test
      {/*  {t(...messages.someThing())}  */}
    </div>
  );
}
