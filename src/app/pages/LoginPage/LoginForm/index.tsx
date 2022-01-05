/**
 *
 * LoginForm
 *
 */
import { useAuthenticationSlice } from 'app/components/Authentication/slice';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { selectLoginForm } from './slice/selectors';

interface Props {}

type Inputs = {
  emailAddress: string;
  password: string;
};

export function LoginForm(props: Props) {
  const { actions } = useAuthenticationSlice();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const onSubmit: SubmitHandler<Inputs> = data =>
    dispatch(actions.loginRequestAction(data));
  const { isLoading } = useSelector(selectLoginForm);

  return (
    <Div>
      {t('')}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('emailAddress', { required: true })} />
        {errors.password && <span>This field is required</span>}

        <input {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>

      {isLoading && <LoadingIndicator small />}

      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
}

const Div = styled.div``;
