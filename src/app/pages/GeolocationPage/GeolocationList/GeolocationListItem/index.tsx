/**
 *
 * GeolocationListItem
 *
 */
import { selectAuthentication } from 'app/components/Authentication/slice/selectors';
import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import { useDispatch, useSelector } from 'react-redux';
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
  const { user } = useSelector(selectAuthentication);

  const onDeleteItem = (uuid: string) =>
    dispatch(actions.removeGeolocationRequestAction({ uuid, history }));

  return (
    <Div>
      <CloseButtonWrapper>
        <Button
          disabled={user?.uuid !== geolocation.user.uuid}
          onClick={() => onDeleteItem(geolocation.uuid)}
        >
          delete
        </Button>
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
  width: 70%;
`;

export const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 0;
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 10px 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;

const CloseButtonWrapper = styled.div`
  text-align: right;
`;
