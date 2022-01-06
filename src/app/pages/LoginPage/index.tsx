/**
 *
 * LoginPage
 *
 */
import { Container } from 'app/components/Authentication/components/Container';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}
