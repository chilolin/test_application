import React from "react";
import { useDispatch } from "react-redux";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import {
  showSignInComponent,
  showSignUpComponent,
} from "../../redux/sign/sign.actions";

import CustomButton from "../custom-button/custom-button.component";

import {
  ButtonContainer,
  HasErrorText,
  ContactUsContainer,
  OrText,
  ToggleContainer,
  Text,
  Button,
} from "./sign-button.styles";

const SignButton = ({ children, hasError, onSignIn }) => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <CustomButton type="submit"> {children} </CustomButton>
      {hasError ? (
        <HasErrorText>
          メールアドレスもしくはパスワードが不正です。
        </HasErrorText>
      ) : null}
      {onSignIn ? (
        <ContactUsContainer>
          <Text>パスワードを忘れた場合は</Text>
          <Button>こちら</Button>
        </ContactUsContainer>
      ) : null}
      <OrText>---------------- 　　　または　　　----------------</OrText>
      <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
        Googleでログイン
      </CustomButton>
      {onSignIn ? (
        <ToggleContainer>
          <Text>アカウントをお持ちでないですか？ </Text>
          <Button onClick={() => dispatch(showSignUpComponent())}>
            新規登録
          </Button>
        </ToggleContainer>
      ) : (
        <ToggleContainer>
          <Text>すでにアカウントをお持ちですか？ </Text>
          <Button onClick={() => dispatch(showSignInComponent())}>
            ログイン
          </Button>
        </ToggleContainer>
      )}
    </ButtonContainer>
  );
};

export default SignButton;
