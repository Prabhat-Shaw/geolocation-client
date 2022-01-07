/**
 *
 * Header
 *
 */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useAuthenticationSlice } from '../Authentication/slice';
import { selectAuthentication } from '../Authentication/slice/selectors';
import logo from './logo.png';

export function Header() {
  const { actions } = useAuthenticationSlice();

  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading } = useSelector(selectAuthentication);

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
  background-color: orange;
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

const Button = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
