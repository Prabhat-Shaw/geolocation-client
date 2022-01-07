/**
 *
 * GeolocationPage
 *
 */
import { Footer } from 'app/components/Footer';
import { Header } from 'app/components/Header';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { GeolocationFiltering } from './GeolocationFiltering';
import { GeolocationForm } from './GeolocationForm';
import { GeolocationList } from './GeolocationList';
import { GeolocationSorting } from './GeolocationSorting';

interface Props {}

export function GeolocationPage(props: Props) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />

      <Div>
        <GeolocationForm />

        <ActionContainer>
          <GeolocationSorting />
          <GeolocationFiltering />
        </ActionContainer>
      </Div>

      <GeolocationList />

      <Footer />
    </>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 768px;
  margin: 0 auto;
  padding: 20px 0;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`;
