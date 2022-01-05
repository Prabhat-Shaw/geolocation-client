/**
 *
 * GeolocationList
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useGeolocationListSlice } from './slice';

interface Props {}

export function GeolocationList(props: Props) {
  const { actions } = useGeolocationListSlice();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    React.useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.getGeolocationsRequestAction());
  });

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
}

const Div = styled.div``;
