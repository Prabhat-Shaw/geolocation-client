/**
 *
 * GeolocationPage
 *
 */
import { useAuthenticationSlice } from 'app/components/Authentication/slice';
import { selectAuthentication } from 'app/components/Authentication/slice/selectors';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GeolocationForm } from './GeolocationForm';
import { GeolocationList } from './GeolocationList';

interface Props {}

export function GeolocationPage(props: Props) {
  const { actions } = useAuthenticationSlice();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading } = useSelector(selectAuthentication);

  const onLogout = () => dispatch(actions.logoutRequestAction({ history }));

  return (
    <div>
      <button disabled={isLoading} onClick={onLogout}>
        Logout
      </button>

      <GeolocationForm />

      <GeolocationList />
    </div>
  );
}
