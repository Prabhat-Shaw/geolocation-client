/**
 *
 * Footer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function Footer(props: Props) {
  return <StyledFooter>Made with ❤️</StyledFooter>;
}

const StyledFooter = styled.footer`
  padding: 10px;
  background: silver;
  color: white;
`;
