/**
 *
 * Layout
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div>
      <Sidebar />

      <div>
        <Header />

        <Main>{children}</Main>
      </div>
    </div>
  );
}

const Main = styled.main`
  margin: 10px;

  ${media.medium`
    max-width: calc(100% - 250px);
    margin: 0 0 0 auto;
`}
`;
