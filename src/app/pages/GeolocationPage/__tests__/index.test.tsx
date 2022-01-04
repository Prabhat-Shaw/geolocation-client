import * as React from 'react';
import { render } from '@testing-library/react';

import { GeolocationPage } from '..';

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

describe('<GeolocationPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GeolocationPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
