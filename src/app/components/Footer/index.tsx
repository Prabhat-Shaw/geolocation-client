/**
 *
 * Footer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function Footer(props: Props) {
  return (
    <StyledFooter>
      Copyright &copy; {new Date().getFullYear()}{' '}
      <a
        href="https://pietrzakadrian.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Adrian Pietrzak
      </a>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  text-align: right;
  padding: 10px;
  color: grey;
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
    color: grey;
    font-weight: bold;
  }
`;
