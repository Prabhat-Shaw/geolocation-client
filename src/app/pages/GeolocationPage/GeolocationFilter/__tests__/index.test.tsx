import * as React from 'react';
import { render } from '@testing-library/react';

import { GeolocationFilter } from '..';

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

describe('<GeolocationFilter  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GeolocationFilter />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
