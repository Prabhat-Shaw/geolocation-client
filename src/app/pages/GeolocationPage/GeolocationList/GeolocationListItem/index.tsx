/**
 *
 * GeolocationListItem
 *
 */
import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Geolocation } from 'types/Geolocation';
import { useGeolocationListSlice } from '../slice';

interface Props {
  geolocation: Geolocation;
}

export function GeolocationListItem({ geolocation }: Props) {
  const [isExpanded, setExpanded] = useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded });
  const dispatch = useDispatch();
  const history = useHistory();
  const { actions } = useGeolocationListSlice();

  const onDeleteItem = (uuid: string) =>
    dispatch(actions.removeGeolocationRequestAction({ uuid, history }));

  return (
    <Div>
      <button onClick={() => onDeleteItem(geolocation.uuid)}>delete</button>

      <div {...getToggleProps({ onClick: () => setExpanded(x => !x) })}>
        {geolocation.ip}
        {geolocation.location.country_flag_emoji}

        <div {...getCollapseProps()}>
          {geolocation.user.authentication.email_address}

          <div>ip: {geolocation.ip}</div>

          <div>type: {geolocation.type}</div>

          <div>
            Continent name: {geolocation.continent_name} (
            {geolocation.continent_code})
          </div>

          <div>
            Region ame: {geolocation.region_name} ({geolocation.region_code})
          </div>

          <div>
            City: {geolocation.zip} {geolocation.city}
          </div>

          <div>
            Capital: {geolocation.location.capital}{' '}
            {geolocation.location.country_flag_emoji}
          </div>

          <div>Added by {geolocation.user.authentication.email_address}</div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  border: 1px solid silver;
  padding: 15px;
  max-width: 768px;
  margin: 0 auto;
  position: relative;
`;
