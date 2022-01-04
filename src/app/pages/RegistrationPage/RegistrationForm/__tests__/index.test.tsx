import * as React from 'react';
import { render } from '@testing-library/react';

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
    const loadingIndicator = render(<LoginForm />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
