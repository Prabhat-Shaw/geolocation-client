/**
 *
 * GeolocationForm
 *
 */
import { Input } from 'app/components/Authentication/components/Input';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useGeolocationListSlice } from '../GeolocationList/slice';
import { selectGeolocationList } from '../GeolocationList/slice/selectors';
import { useGeolocationFormSlice } from './slice';
import { selectGeolocationForm } from './slice/selectors';

interface Props {}

type Inputs = {
  ipAddress: string;
};

export function GeolocationForm(props: Props) {
  const dispatch = useDispatch();
  const { actions } = useGeolocationFormSlice();
  const { actions: actionsList } = useGeolocationListSlice();

  const { sorting } = useSelector(selectGeolocationList);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data =>
    dispatch(actions.createGeolocationRequestAction({ ...data, history }));

  const onChangeSorting = () => dispatch(actionsList.sortingAction());

  const onChangeFiltering = () =>
    dispatch(
      actionsList.filteringAction({ key: 'region_name', value: 'California' }),
    );

  const { isLoading } = useSelector(selectGeolocationForm);
  const { filters } = useSelector(selectGeolocationList);
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Enter ip address"
            errored={errors.ipAddress}
            disabled={isLoading}
            {...register('ipAddress', { required: true })}
          />

          <button disabled={isLoading} type="submit">
            Dodaj
          </button>
        </form>
      </FormWrapper>

      <div>
        Sorting
        <button onClick={onChangeSorting}>Sorting {sorting}</button>
      </div>

      <div>
        <div>region_code:</div>
        {/* {filters.region_code.map(region_code => (
          <div>{region_code}</div>
        ))}
        <div>capital:</div>
        {filters.capital.map(capital => (
          <div>{capital}</div>
        ))} */}
        <button onClick={onChangeFiltering}>Filtering</button>
      </div>
    </Div>
  );
}

const Div = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FormWrapper = styled.div``;
