import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'types';

export function AuthenticationGuard({ children }) {
  const isAuthenticated = useSelector(
    (store: RootState) => store.authentication?.isAuthenticated,
  );

  if (isAuthenticated) {
    return children;
  } else {
    return <Redirect to="/login" />;
  }
}
