import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { LoginPage } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<LoginPage  />', () => {
  it('should match snapshot', () => {
    const store = configureAppStore();

    const loadingIndicator = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
