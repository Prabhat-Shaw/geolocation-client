import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectAuthentication } from './slice/selectors';

export function AuthenticationGuard({ children }) {
  const { isAuthenticated } = useSelector(selectAuthentication);

  if (isAuthenticated) {
    return children;
  } else {
    return <Redirect to="/login" />;
  }
}
