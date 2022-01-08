/**
 *
 * Input
 *
 */
import { FieldError } from 'react-hook-form';
import styled from 'styled-components/macro';
import { RED, SILVER } from 'styles/colors';

interface StyledButtonProps {
  errored?: FieldError;
}

export const Input = styled.input<StyledButtonProps>`
  padding: 10px;
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border: ${({ errored }) =>
    errored ? `1px solid ${RED}` : `1px solid ${SILVER}`};

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  &:focus {
    outline: none;
  }
`;
