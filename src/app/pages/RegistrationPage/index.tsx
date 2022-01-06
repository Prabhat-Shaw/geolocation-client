/**
 *
 * RegistrationPage
 *
 */
import { Container } from 'app/components/Authentication/components/Container';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RegistrationForm } from './RegistrationForm';

export function RegistrationPage() {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <RegistrationForm />
    </Container>
  );
}
