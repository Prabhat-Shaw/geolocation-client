import * as React from 'react';
import { render } from '@testing-library/react';

import { GeolocationSort } from '..';

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

describe('<GeolocationSort  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GeolocationSort />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
