/**
 *
 * Button
 *
 */
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  isLoading?: boolean;
  error?: string | null;
  defaultText?: string;
  small?: boolean;
}

export function Button({ isLoading, error, defaultText, small }: Props) {
  return (
    <StyledButton small={small} disabled={isLoading} type="submit">
      {isLoading ? <LoadingIndicator small /> : error ? error : defaultText}
    </StyledButton>
  );
}

export const StyledButton = styled.button<Props>`
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 10px 0;
  font-size: ${p => (p.small ? '10px' : '16px')}
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
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
