/**
 *
 * SidebarItem
 *
 */
import { GeolocationSorting } from 'app/pages/GeolocationPage/GeolocationSorting';
import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import styled from 'styled-components/macro';

interface Props {
  name: string;
}

export function SidebarItem({ name }: Props) {
  const [isExpanded, setExpanded] = useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded });

  return (
    <StyledSidebarItem
      {...getToggleProps({ onClick: () => setExpanded(x => !x) })}
    >
      {name}
      <div {...getCollapseProps()}>
        <GeolocationSorting />
      </div>
    </StyledSidebarItem>
  );
}

export const StyledSidebarItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  transition: 0.3s;
  border-left: 2px solid orange;

  &:hover {
    background-color: #eaeaea;
    cursor: pointer;
  }
`;
