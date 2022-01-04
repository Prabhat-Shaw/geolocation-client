import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectAuthentication } from './slice/selectors';

export function AuthGuard({ children }) {
  const { isAuthenticated } = useSelector(selectAuthentication);

  // console.log(isAuthenticated);

  // return children;

  if (isAuthenticated) {
    return children;
  } else {
    return <Redirect to="/login" />;
  }
}
