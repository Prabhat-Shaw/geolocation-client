/**
 *
 * Sidebar
 *
 */

import styled from 'styled-components/macro';
import { ORANGE_ACTIVE, SILVER } from 'styles/colors';
import { media } from 'styles/media';
import { Footer } from '../Footer';

export function Sidebar() {
  return (
    <Div>
      <div>
        <Item>Panel</Item>
      </div>

      <Footer />
    </Div>
  );
}

const Div = styled.div`
  display: none;
  width: 250px;
  border: 1px solid ${SILVER};
  position: fixed;
  height: 100vh;
  padding-top: 80px;

  ${media.medium`
    display: block;
  `}
`;

const Item = styled.div`
  border-left: 2px solid ${ORANGE_ACTIVE};
  padding: 10px 20px;
  transition: 0.3s;

  &:hover {
    background-color: ${SILVER};
    cursor: pointer;
  }
`;
