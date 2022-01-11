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
import { GeolocationForm } from '../GeolocationForm';
import { GeolocationListItem } from './GeolocationListItem';
import { useGeolocationListSlice } from './slice';
import { selectGeolocationList } from './slice/selectors';

interface Props {}

export function GeolocationList(props: Props) {
  const { actions } = useGeolocationListSlice();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const { geolocations, isLoading, sorting } = useSelector(
    selectGeolocationList,
  );

  const useEffectOnMount = (effect: React.EffectCallback) => {
    React.useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(
      actions.getGeolocationsRequestAction({
        page: 1,
        order: sorting,
        history,
      }),
    );
  });

  const handleScroll = e => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom && geolocations.meta.has_next_page) {
      dispatch(
        actions.getGeolocationsRequestAction({
          page: geolocations.meta.page + 1,
          order: sorting,
          history,
        }),
      );
    }
  };

  return (
    <Div onScroll={handleScroll}>
      <GeolocationForm />

      {(geolocations.dataFilter?.length
        ? geolocations.dataFilter
        : geolocations.data
      ).map((geolocation: Geolocation) => (
        <GeolocationListItem key={geolocation.uuid} geolocation={geolocation} />
      ))}

      {isLoading && (
        <LoadingIndicatorWrapper>
          <LoadingIndicator />
        </LoadingIndicatorWrapper>
      )}
    </Div>
  );
}

const Div = styled.div`
  overflow-y: scroll;
  max-height: 1000px;
  padding: 10px 0;
`;

const LoadingIndicatorWrapper = styled.div`
  text-align: center;
`;
