/**
 *
 * Copyright
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

export function Copyright() {
  return (
    <Div>
      Copyright &copy; {new Date().getFullYear()}{' '}
      <a
        href="https://pietrzakadrian.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Adrian Pietrzak
      </a>
    </Div>
  );
}

export const Div = styled.div`
  text-align: right;
  padding: 12px;
  font-size: 12px;
  opacity: 0.8;
  text-align: center;
  width: 100%;

  a {
    text-decoration: none;
  }
`;
