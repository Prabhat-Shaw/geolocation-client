/**
 *
 * LoginPage
 *
 */
import { Container } from 'app/components/Authentication/components/Container';
import * as React from 'react';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}
