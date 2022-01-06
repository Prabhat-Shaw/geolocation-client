/**
 *
 * Footer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

export function Footer() {
  return (
    <footer>
      <Copyright>
        Copyright &copy; {new Date().getFullYear()}{' '}
        <a
          href="https://pietrzakadrian.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Adrian Pietrzak
        </a>
      </Copyright>
    </footer>
  );
}

export const Copyright = styled.div`
  text-align: right;
  padding: 12px 24px;
  font-size: 12px;
  opacity: 0.8;
  text-align: center;
`;
