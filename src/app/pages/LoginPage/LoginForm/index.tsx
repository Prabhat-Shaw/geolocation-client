/**
 *
 * LoginForm
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
import { Copyright } from 'app/components/Copyright';
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

export function LoginForm() {
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
    dispatch(actions.loginRequestAction({ ...data, history }));
  const { isLoading, error } = useSelector(selectAuthentication);

  const onRedirectToRegistration = () => history.push('/registration');

  return (
    <FormContainer>
      <FormWrapper>
        <Header />

        <Form onSubmit={handleSubmit(onSubmit)}>
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
            {...register('password', { required: true, minLength: 6 })}
          />

          <Button isLoading={isLoading} error={error} defaultText={'Log in'} />

          <FormAction>
            {t(...messages.youDoNotHaveAnAccount())}{' '}
            <span onClick={onRedirectToRegistration}>
              {t(...messages.registrarion())}
            </span>
            .
          </FormAction>
        </Form>
      </FormWrapper>

      <Copyright />
    </FormContainer>
  );
}
