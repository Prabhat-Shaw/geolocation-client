/**
 *
 * Footer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { BLACK } from 'styles/colors';
import { Copyright } from '../Copyright';

export function Footer() {
  return (
    <StyledFooter>
      <Copyright />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  text-align: right;
  color: ${BLACK};
  font-size: 13px;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  a {
    text-decoration: none;
    color: ${BLACK};
    font-weight: bold;
  }
`;
