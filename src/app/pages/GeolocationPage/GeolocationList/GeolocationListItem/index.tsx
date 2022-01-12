/**
 *
 * GeolocationListItem
 *
 */
import { StyledButton } from 'app/components/Button';
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
      <CloseButtonWrapper>
        <Button onClick={() => onDeleteItem(geolocation.uuid)}>Delete</Button>
      </CloseButtonWrapper>

      <DivContainer
        {...getToggleProps({ onClick: () => setExpanded(x => !x) })}
      >
        <div>
          <div>
            <strong>IP</strong>: {geolocation.ip}
          </div>

          <div>
            <strong>City</strong>: {geolocation.zip} {geolocation.city}
          </div>
        </div>

        <div>
          <div>
            <strong>Capital</strong>: {geolocation.location.capital}{' '}
            {geolocation.location.country_flag_emoji}
          </div>

          <div>
            <strong>Added by</strong>:{' '}
            {geolocation.user.authentication.email_address}
          </div>
        </div>
      </DivContainer>

      <div {...getCollapseProps()}>
        <div>
          <strong>Type</strong>: {geolocation.type}
        </div>

        <div>
          <strong>Continent</strong>: {geolocation.continent_name} (
          {geolocation.continent_code})
        </div>
        <div>
          <strong>Latitude</strong>: {geolocation.latitude}
        </div>

        <div>
          <strong>Longitude</strong>: {geolocation.longitude}
        </div>
      </div>
    </Div>
  );
}

const Button = styled(StyledButton)`
  width: auto;
`;

const Div = styled.div`
  border: 0.5px solid rgb(0 0 0 / 20%);
  padding: 15px;
  max-width: 768px;
  margin: 0 auto;
  position: relative;
  box-shadow: rgb(0 0 0 / 20%) 0em 0.0625em 0.1875em 0em,
    rgb(0 0 0 / 14%) 0em 0.0625em 0.0625em 0em,
    rgb(0 0 0 / 12%) 0em 0.125em 0.0625em -0.0625em;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px);
`;

const CloseButtonWrapper = styled.div`
  text-align: right;
`;
