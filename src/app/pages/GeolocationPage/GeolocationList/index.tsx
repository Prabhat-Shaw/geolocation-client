/**
 *
 * GeolocationList
 *
 */
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useGeolocationListSlice } from './slice';
import { selectGeolocationList } from './slice/selectors';

interface Props {}

export function GeolocationList(props: Props) {
  const { actions } = useGeolocationListSlice();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { geolocations, isLoading } = useSelector(selectGeolocationList);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    React.useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.getGeolocationsRequestAction({ page: 1 }));
  });

  const onNextPage = () =>
    dispatch(
      actions.getGeolocationsRequestAction({
        page: geolocations.meta.page + 1,
      }),
    );

  const onPreviousPage = () =>
    dispatch(
      actions.getGeolocationsRequestAction({
        page: geolocations.meta.page - 1,
      }),
    );

  return (
    <Div>
      {t('')}

      <div>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          geolocations.data.map(geolocation => (
            <div key={geolocation.uuid}>{geolocation.ip}</div>
          ))
        )}
      </div>

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
