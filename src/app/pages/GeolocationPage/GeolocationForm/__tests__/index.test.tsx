import * as React from 'react';
import { render } from '@testing-library/react';

import { GeolocationForm } from '..';

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

describe('<GeolocationForm  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GeolocationForm />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
