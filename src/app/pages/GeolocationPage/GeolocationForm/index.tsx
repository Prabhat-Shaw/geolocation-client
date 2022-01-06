/**
 *
 * GeolocationForm
 *
 */
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useGeolocationFormSlice } from './slice';
import { selectGeolocationForm } from './slice/selectors';

interface Props {}

type Inputs = {
  ipAddress: string;
};

export function GeolocationForm(props: Props) {
  const dispatch = useDispatch();
  const { actions } = useGeolocationFormSlice();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data =>
    dispatch(actions.createGeolocationRequestAction({ ...data, history }));
  const { isLoading } = useSelector(selectGeolocationForm);
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          disabled={isLoading}
          {...register('ipAddress', { required: true })}
        />

        {errors.ipAddress && <span>This field is required</span>}

        <input disabled={isLoading} type="submit" />
      </form>
    </Div>
  );
}

const Div = styled.div``;
