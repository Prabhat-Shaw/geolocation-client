import * as React from 'react';
import { render } from '@testing-library/react';

import { RegistrationPage } from '..';

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

describe('<RegistrationPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<RegistrationPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
