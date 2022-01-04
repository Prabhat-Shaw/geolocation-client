/**
 *
 * RegistrationForm
 *
 */
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useRegistrationFormSlice } from './slice';
import { selectRegistrationForm } from './slice/selectors';

interface Props {}

type Inputs = {
  emailAddress: string;
  password: string;
};

export function RegistrationForm(props: Props) {
  const { actions } = useRegistrationFormSlice();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const onSubmit: SubmitHandler<Inputs> = data =>
    dispatch(actions.registrationRequest(data));
  const { isLoading } = useSelector(selectRegistrationForm);

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
