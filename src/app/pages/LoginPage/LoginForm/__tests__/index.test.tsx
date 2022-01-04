import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { LoginForm } from '..';

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

describe('<LoginForm  />', () => {
  it('should match snapshot', () => {
    const store = configureAppStore();

    const loadingIndicator = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
