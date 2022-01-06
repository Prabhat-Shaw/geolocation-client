/**
 *
 * GeolocationList
 *
 */
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Geolocation } from 'types/Geolocation';
import { GeolocationListItem } from './GeolocationListItem';
import { useGeolocationListSlice } from './slice';
import { selectGeolocationList } from './slice/selectors';

interface Props {}

export function GeolocationList(props: Props) {
  const { actions } = useGeolocationListSlice();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const { geolocations, isLoading } = useSelector(selectGeolocationList);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    React.useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(
      actions.getGeolocationsRequestAction({ page: 1, order: 'DESC', history }),
    );
  });

  const onNextPage = () =>
    dispatch(
      actions.getGeolocationsRequestAction({
        page: geolocations.meta.page + 1,
        order: 'DESC',
        history,
      }),
    );

  const onPreviousPage = () =>
    dispatch(
      actions.getGeolocationsRequestAction({
        page: geolocations.meta.page - 1,
        order: 'DESC',
        history,
      }),
    );

  return (
    <Div>
      {geolocations.data.map((geolocation: Geolocation) => (
        <GeolocationListItem key={geolocation.uuid} geolocation={geolocation} />
      ))}

      {isLoading && <LoadingIndicator />}

      <div style={{ display: 'flex' }}>
        <button
          onClick={onPreviousPage}
          disabled={!geolocations.meta.has_previous_page}
        >
          previous
        </button>

        <div>
          {geolocations.meta.page} / {geolocations.meta.page_count}
        </div>

        <button
          onClick={onNextPage}
          disabled={!geolocations.meta.has_next_page}
        >
          Next
        </button>
      </div>
    </Div>
  );
}

const Div = styled.div``;
