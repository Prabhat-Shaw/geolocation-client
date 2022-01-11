/**
 *
 * Form
 *
 */
import styled from 'styled-components/macro';
import { BLACK } from 'styles/colors';

export const Form = styled.form`
  max-width: 330px;
  width: 100%;
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 370px;
  width: 90%;
  margin: 10px 10px 0;
  padding: 20px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0em 0.0625em 0.1875em 0em,
    rgba(0, 0, 0, 0.14) 0em 0.0625em 0.0625em 0em,
    rgba(0, 0, 0, 0.12) 0em 0.125em 0.0625em -0.0625em;
  border-radius: 5px;
  text-align: center;
  display: inline-block;
`;

export const FormContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

export const FormAction = styled.div`
  font-size: 13px;
  text-align: left;
  margin: 10px 0 0;

  span {
    color: ${BLACK};
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }
`;
