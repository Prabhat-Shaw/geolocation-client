/**
 *
 * Sidebar
 *
 */

import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { Footer } from '../Footer';
import { StyledSidebarItem } from './SidebarItem';

interface Props {}

export function Sidebar(props: Props) {
  return (
    <Div>
      <div>
        <StyledSidebarItem>Panel</StyledSidebarItem>

        <div>
          <StyledSidebarItem>Filters</StyledSidebarItem>

          {/* <GeolocationFiltering /> */}
        </div>
      </div>

      <Footer />
    </Div>
  );
}

const Div = styled.div`
  display: none;
  width: 250px;
  border: 1px solid silver;
  position: fixed;
  height: 100vh;
  padding-top: 80px;

  ${media.medium`
    display: block;
  `}
`;
