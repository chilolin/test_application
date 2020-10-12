import React from "react";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import CustomButton from "../custom-button/custom-button.component";

import { ButtonContainer, OrText } from "./sign-button.styles";

const SignButton = ({ children }) => (
  <ButtonContainer>
    <CustomButton type="submit"> {children} </CustomButton>
    <OrText>---------------- 　　　または　　　----------------</OrText>
    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
      Googleでログイン
    </CustomButton>
  </ButtonContainer>
);

export default SignButton;
