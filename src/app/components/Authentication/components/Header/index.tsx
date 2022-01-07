/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import logo from './logo.png';

export function Header() {
  return (
    <header>
      <Div>
        <Image src={logo} alt="ipstack" />
      </Div>
    </header>
  );
}

export const Div = styled.div`
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
  margin: 10px;
`;
