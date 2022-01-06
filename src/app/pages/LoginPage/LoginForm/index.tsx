/**
 *
 * LoginForm
 *
 */
import { useAuthenticationSlice } from 'app/components/Authentication/slice';
import { selectAuthentication } from 'app/components/Authentication/slice/selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

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
  const history = useHistory();

  const onSubmit: SubmitHandler<Inputs> = data =>
    dispatch(actions.loginRequestAction({ ...data, history }));
  const { isLoading } = useSelector(selectAuthentication);

  return (
    <Div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          disabled={isLoading}
          {...register('emailAddress', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input
          disabled={isLoading}
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input disabled={isLoading} type="submit" />
      </form>

      {isLoading && <LoadingIndicator small />}
    </Div>
  );
}

const Div = styled.div``;
