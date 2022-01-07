import * as React from 'react';
import { render } from '@testing-library/react';

import { GeolocationFiltering } from '..';

describe('<GeolocationFiltering  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GeolocationFiltering />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
