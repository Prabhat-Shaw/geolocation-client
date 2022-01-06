/**
 *
 * Button
 *
 */
import styled from 'styled-components/macro';

export const Button = styled.button`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  border: none;
  color: white;
  margin: 10px 0 0;

  &:hover {
    cursor: pointer;
  }
`;
