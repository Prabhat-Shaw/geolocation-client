/**
 *
 * Header
 *
 */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ORANGE, ORANGE_ACTIVE, ORANGE_FOCUS, WHITE } from 'styles/colors';
import { RootState } from 'types';
import { useAuthenticationSlice } from '../Authentication/slice';
import logo from './logo.png';

export function Header() {
  const { actions } = useAuthenticationSlice();

  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(
    (store: RootState) => store.authentication?.isLoading,
  );

  const onLogout = () => dispatch(actions.logoutRequestAction({ history }));

  return (
    <StyledHeader>
      <div>
        <Img src={logo} alt="ipstack" />
      </div>

      <Button disabled={isLoading} onClick={onLogout}>
        Logout
      </Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  z-index: 2;
  background-color: ${WHITE};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  position: sticky;
  top: 0;
  box-shadow: rgb(0 0 0 / 20%) 0em 0.0625em 0.1875em 0em,
    rgb(0 0 0 / 14%) 0em 0.0625em 0.0625em 0em,
    rgb(0 0 0 / 12%) 0em 0.125em 0.0625em -0.0625em;
`;

const Img = styled.img`
  width: 130px;
  height: auto;
`;

export const Button = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: ${ORANGE};
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
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${ORANGE_FOCUS};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: ${ORANGE_ACTIVE};
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
