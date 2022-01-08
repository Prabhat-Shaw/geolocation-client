/**
 *
 * RegistrationPage
 *
 */
import { Container } from 'app/components/Authentication/components/Container';
import * as React from 'react';
import { RegistrationForm } from './RegistrationForm';

export function RegistrationPage() {
  return (
    <Container>
      <RegistrationForm />
    </Container>
  );
}
