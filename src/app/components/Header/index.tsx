/**
 *
 * Header
 *
 */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { WHITE } from 'styles/colors';
import { RootState } from 'types';
import { useAuthenticationSlice } from '../Authentication/slice';
import { Button } from '../Button';
import logo from './logo.png';

export function Header() {
  const { actions } = useAuthenticationSlice();
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(
    (state: RootState) => state.authentication?.isLoading,
  );

  const onLogout = () => dispatch(actions.logoutRequestAction({ history }));

  return (
    <StyledHeader>
      <Img src={logo} alt="ipstack" />

      <div>
        <Button isLoading={isLoading} onClick={onLogout} defaultText="Logout" />
      </div>
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
