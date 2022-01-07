/**
 *
 * GeolocationFiltering
 *
 */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGeolocationListSlice } from '../GeolocationList/slice';
import { selectGeolocationList } from '../GeolocationList/slice/selectors';

interface Props {}

export function GeolocationFiltering(props: Props) {
  const { actions } = useGeolocationListSlice();
  const { filters } = useSelector(selectGeolocationList);
  const dispatch = useDispatch();

  const onChangeFiltering = (key, value) =>
    dispatch(actions.filteringAction({ key, value }));

  return (
    <div>
      <div>Filtering:</div>

      {filters.map((filter, index) => (
        <div key={index}>
          {filter.region_code && (
            <>
              <div>Region code:</div>

              <ul>
                {filter.region_code?.map((item, index) => (
                  <li
                    onClick={() => onChangeFiltering('region_code', item)}
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}