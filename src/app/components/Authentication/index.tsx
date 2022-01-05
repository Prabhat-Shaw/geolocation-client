import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectAuthentication } from './slice/selectors';

export function AuthenticationGuard({ children, ...rest }) {
  const { isAuthenticated } = useSelector(selectAuthentication);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
