/**
 *
 * GeolocationPage
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { GeolocationFilter } from './GeolocationFilter';
import { GeolocationList } from './GeolocationList';
import { GeolocationSort } from './GeolocationSort';

export function GeolocationPage() {
  return (
    <>
      <Div>
        <GeolocationSort />

        <GeolocationFilter />
      </Div>

      <GeolocationList />
    </>
  );
}

const Div = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
