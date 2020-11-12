import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: #0968ab;
  color: white;
  border: none;
  border-radius: 5px;

  :hover {
    opacity: 0.8;
  }
`;

const GoogleSignInStyles = css`
  background-color: rgb(221, 75, 57);
  color: white;
  border: none;
  border-radius: 5px;

  :hover {
    opacity: 0.8;
  }
`;

const DeleteStyles = css`
  background-color: #cc3300;
  color: white;
  border: none;
  border-radius: 5px;  

  :hover {
    opacity: 0.8;
  }
`;

const TabBasicStyles = css`
  background-color: #ececec;
  color: #a9a9a9;
  border: 1px solid #a9a9a9;
  width: 150px;

  :hover {
    color: #1a2b80;
    box-shadow: 0px -5px 3px #1a2b80;
  }

  @media screen and (max-width: 800px) {
    font-size: .75em;
    width: 80px;
  }
`;

const TabOnClickStyles = css`
  background-color: #ffffff;
  color: #1a2b80;
  border: none;
  box-shadow: 0px -5px 3px #1a2b80;
  border-radius: 0px;
  width: 150px;

  @media screen and (max-width: 800px) {
    font-size: .75em;
    width: 80px;
  }
`;


const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }

  if (props.delete) {
    return DeleteStyles;
  }

  if (props.basicTab) {
    return TabBasicStyles;
  }

  return props.clickTab ? TabOnClickStyles : ButtonStyles;
};

export const CustomButtonContainer = styled.button`
  width: 150px;
  height: 50px;
  font-size: 15px;
  cursor: pointer;
  outline: none;

  ${getButtonStyles}
`;
