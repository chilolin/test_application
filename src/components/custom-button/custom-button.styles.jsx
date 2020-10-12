import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: black;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid;
  }
`

const GoogleSignInStyles = css`
  background-color: rgb(221, 75, 57);
  
  &:hover {
    opacity: 0.8;
  }
`

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles
  }

  return ButtonStyles;
}

export const CustomButtonContainer = styled.button`
  width: 150px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-family: "Sawarabi Mincho", sans-serif; 

  ${getButtonStyles}
`;