/**
 *
 * Input
 *
 */
import { FieldError } from 'react-hook-form';
import styled from 'styled-components/macro';

interface StyledButtonProps {
  errored?: FieldError;
}

export const Input = styled.input<StyledButtonProps>`
  padding: 10px;
  display: block;
  width: 100%;
  border: ${({ errored }) => (errored ? '1px solid red' : '1px solid silver')};

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
