import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999999;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
`;

export const SignInAndSignUpBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0px;
  left: 0px;
  transition: all 150ms ease-out 0s;
  opacity: 1;
`;
