import styled, { css } from "styled-components";

const EmailErrorText = css`
  top: 157px;
`;

const PasswordErrorText = css`
  top: 245px;
`;

const ErrorTextStyles = ({ emailText }) =>
  emailText ? EmailErrorText : PasswordErrorText;

export const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const ErrorText = styled.span`
  position: absolute;
  color: #cc3300;
  font-size: 0.7em;
  left: 50px;

  ${ErrorTextStyles}
`;
