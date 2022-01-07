import * as React from 'react';
import { render } from '@testing-library/react';

import { GeolocationSorting } from '..';

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

describe('<GeolocationSorting  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GeolocationSorting />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
