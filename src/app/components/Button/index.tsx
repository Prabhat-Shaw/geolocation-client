/**
 *
 * Button
 *
 */
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import styled from 'styled-components/macro';
import {
  ORANGE,
  ORANGE_ACTIVE,
  ORANGE_FOCUS,
  SILVER,
  WHITE,
} from 'styles/colors';

interface Props {
  isLoading?: boolean;
  error?: string | null;
  defaultText?: string;
  small?: boolean;
  onClick?: React.MouseEventHandler;
}

export function Button({
  onClick,
  isLoading,
  error,
  defaultText,
  small,
}: Props) {
  return (
    <StyledButton
      onClick={onClick}
      small={small}
      disabled={isLoading}
      type="submit"
    >
      {isLoading ? <LoadingIndicator small /> : error ? error : defaultText}
    </StyledButton>
  );
}

export const StyledButton = styled.button<Props>`
  align-items: center;
  background-clip: padding-box;
  background-color: ${ORANGE};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: ${WHITE};
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 10px 0;
  font-size: ${({ small }) => (small ? '10px' : '16px')}
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 100%;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${ORANGE_FOCUS};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: ${SILVER};
    pointer-events: none;
  }

  &:active {
    background-color: ${ORANGE_ACTIVE};
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
