import * as React from 'react';
import { render } from '@testing-library/react';

import { GeolocationList } from '..';

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

describe('<GeolocationList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GeolocationList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
