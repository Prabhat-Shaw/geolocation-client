/**
 *
 * LoginPage
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { LoginForm } from './LoginForm';

interface Props {}

export function LoginPage(props: Props) {
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      <LoginForm />
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
}

const Div = styled.div``;
