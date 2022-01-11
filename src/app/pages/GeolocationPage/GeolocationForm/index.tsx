/**
 *
 * GeolocationForm
 *
 */
import { Input } from 'app/components/Authentication/components/Input';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ORANGE, ORANGE_ACTIVE, ORANGE_FOCUS, WHITE } from 'styles/colors';
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
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data =>
    dispatch(actions.createGeolocationRequestAction({ ...data, history }));

  const { isLoading, error } = useSelector(selectGeolocationForm);

  const { t, i18n } = useTranslation();

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Enter ip address"
          errored={errors.ipAddress}
          disabled={isLoading}
          {...register('ipAddress', { required: true })}
        />

        <Button disabled={isLoading} type="submit">
          {isLoading ? (
            <LoadingIndicator small />
          ) : error ? (
            error
          ) : (
            'Add IP address'
          )}
        </Button>
      </Form>
    </FormWrapper>
  );
}

const Form = styled.form``;

const FormWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export const Button = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: ${ORANGE};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: ${WHITE};
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 10px 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 100%;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${ORANGE_FOCUS};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: ${ORANGE_ACTIVE};
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
