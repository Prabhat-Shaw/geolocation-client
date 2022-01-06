/**
 *
 * RegistrationForm
 *
 */
import { Button } from 'app/components/Authentication/components/Button';
import { Footer } from 'app/components/Authentication/components/Footer';
import {
  Form,
  FormAction,
  FormContainer,
  FormWrapper,
} from 'app/components/Authentication/components/Form';
import { Header } from 'app/components/Authentication/components/Header';
import { Input } from 'app/components/Authentication/components/Input';
import { useAuthenticationSlice } from 'app/components/Authentication/slice';
import { selectAuthentication } from 'app/components/Authentication/slice/selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

type Inputs = {
  emailAddress: string;
  password: string;
};

export function RegistrationForm() {
  const { actions } = useAuthenticationSlice();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const onSubmit: SubmitHandler<Inputs> = data =>
    dispatch(actions.registrationRequestAction(data));
  const { isLoading, error } = useSelector(selectAuthentication);

  const onRedirectToLogin = () => history.push('/login');

  return (
    <FormContainer>
      <FormWrapper>
        <Header />

        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            errored={errors.emailAddress}
            placeholder="Email address"
            disabled={isLoading}
            {...register('emailAddress', { required: true })}
          />

          <Input
            errored={errors.password}
            disabled={isLoading}
            placeholder="Password"
            type="password"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />

          <Button disabled={isLoading} type="submit">
            {isLoading ? (
              <LoadingIndicator small />
            ) : error ? (
              error
            ) : (
              'Zarejestruj konto'
            )}
          </Button>

          <FormAction>
            Masz juz konto? <span onClick={onRedirectToLogin}>Zaloguj się</span>
            .
          </FormAction>
        </Form>
      </FormWrapper>

      <Footer />
    </FormContainer>
  );
}
