/**
 *
 * RegistrationPage
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

interface Props {}

export function RegistrationPage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
}

const Div = styled.div``;
