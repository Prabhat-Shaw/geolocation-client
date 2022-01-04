import { render } from '@testing-library/react';
import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import { LoadingIndicator } from '../index';

const renderWithTheme = (
  props: Parameters<typeof LoadingIndicator>[number] = {},
  theme?: DefaultTheme,
) => render(<LoadingIndicator {...props} />);

describe('<LoadingIndicator />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = renderWithTheme();
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when props changed', () => {
    const loadingIndicator = renderWithTheme({ small: true });
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
