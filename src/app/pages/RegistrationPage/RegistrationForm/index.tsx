/**
 *
 * RegistrationForm
 *
 */
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
import { Button } from 'app/components/Button';
import { Footer } from 'app/components/Footer';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { messages } from './messages';

type Inputs = {
  emailAddress: string;
  password: string;
};

export function RegistrationForm() {
  const { actions } = useAuthenticationSlice();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
            placeholder={t(...messages.emailAddress())}
            disabled={isLoading}
            {...register('emailAddress', { required: true })}
          />

          <Input
            errored={errors.password}
            disabled={isLoading}
            placeholder={t(...messages.password())}
            type="password"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />

          <Button
            isLoading={isLoading}
            error={error}
            defaultText={'Register an account'}
          />

          <FormAction>
            {t(...messages.alreadyHaveAnAccount())}{' '}
            <span onClick={onRedirectToLogin}>{t(...messages.login())}</span>.
          </FormAction>
        </Form>
      </FormWrapper>

      <Footer />
    </FormContainer>
  );
}
