/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authenticationReducer } from './components/Authentication/slice';
import { authenticationSaga } from './components/Authentication/slice/saga';
import { Layout } from './components/Layout';
import { GeolocationPage } from './pages/GeolocationPage/Loadable';
import { LoginPage } from './pages/LoginPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { RegistrationPage } from './pages/RegistrationPage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  useInjectSaga({ key: 'authentication', saga: authenticationSaga });
  useInjectReducer({ key: 'authentication', reducer: authenticationReducer });

  return (
    <BrowserRouter forceRefresh>
      <Helmet
        titleTemplate="%s - Geolocation"
        defaultTitle="Geolocation"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Geolocation application" />
      </Helmet>

      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/registration" component={RegistrationPage} />

        <Layout>
          <Route exact path="/" component={GeolocationPage} />
        </Layout>

        <Route component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </BrowserRouter>
  );
}
