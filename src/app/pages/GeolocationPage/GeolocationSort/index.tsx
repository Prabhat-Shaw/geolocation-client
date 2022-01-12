/**
 *
 * GeolocationSort
 *
 */
import { StyledButton } from 'app/components/Button';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useGeolocationListSlice } from '../GeolocationList/slice';
import { selectGeolocationList } from '../GeolocationList/slice/selectors';

export function GeolocationSort() {
  const { actions } = useGeolocationListSlice();
  const dispatch = useDispatch();
  const { sorting } = useSelector(selectGeolocationList);

  const onSort = () => dispatch(actions.sortAction());

  return <Button onClick={onSort}> Sorting: {sorting}</Button>;
}

const Button = styled(StyledButton)`
  width: auto;
`;
