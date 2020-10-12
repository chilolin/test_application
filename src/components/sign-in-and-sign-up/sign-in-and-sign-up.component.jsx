import React from "react";
import { useDispatch } from "react-redux";

import { hiddenSignComponent } from '../../redux/sign/sign.actions';

import SignBody from "../sign-body/sign-body.component";

import {
  SignInAndSignUpContainer,
  SignInAndSignUpBackground,
} from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = (props) => {
  const dispatch = useDispatch();

  return (
    <SignInAndSignUpContainer>
      <SignBody {...props} />
      <SignInAndSignUpBackground onClick={() => dispatch(hiddenSignComponent())} />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
