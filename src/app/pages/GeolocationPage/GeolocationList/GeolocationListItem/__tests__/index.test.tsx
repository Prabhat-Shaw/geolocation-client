import * as React from 'react';
import { render } from '@testing-library/react';

import { GeolocationListItem } from '..';

describe('<GeolocationListItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GeolocationListItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
