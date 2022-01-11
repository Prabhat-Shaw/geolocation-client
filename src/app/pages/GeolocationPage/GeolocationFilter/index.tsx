/**
 *
 * GeolocationFilter
 *
 */
import { StyledButton } from 'app/components/Button';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { ORANGE } from 'styles/colors';
import { useGeolocationListSlice } from '../GeolocationList/slice';
import { selectGeolocationList } from '../GeolocationList/slice/selectors';

export function GeolocationFilter() {
  const dispatch = useDispatch();
  const { actions } = useGeolocationListSlice();
  const { filters } = useSelector(selectGeolocationList);

  const onFilter = ({ key, value }) =>
    dispatch(actions.filterAction({ key, value }));

  const onResetFilter = () => dispatch(actions.resetFilterAction());

  return (
    <Div>
      <div>
        {filters.map((filter, index) => (
          <div key={index}>
            <div>Region code:</div>

            <Ul>
              {filter.region_code.map((option, index) => (
                <Option
                  onClick={() =>
                    onFilter({ key: 'region_code', value: option })
                  }
                  key={index}
                >
                  {option}
                </Option>
              ))}
            </Ul>
          </div>
        ))}
      </div>

      <Button onClick={onResetFilter}>Reset filter</Button>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Option = styled.li`
  color: ${ORANGE};
  font-weight: bold;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled(StyledButton)`
  width: auto;
  margin-left: 10px;
`;
