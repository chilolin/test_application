import React from "react";
import { useDispatch } from "react-redux";

import {
  showSignInComponent,
  showSignUpComponent,
} from "../../redux/sign/sign.actions";

import { auth } from "../../firebase/firebase.utils";

import logo from "../../assets/logo192.png";

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser }) => {
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <OptionsContainer>
        {currentUser ? (
          <>
            <OptionLink to="/edit"> 編集する </OptionLink>
            <OptionLink as="div" onClick={() => auth.signOut()}>
              ログアウト
            </OptionLink>
          </>
        ) : (
          <OptionLink as="div" onClick={() => dispatch(showSignInComponent())}>
            ログイン
          </OptionLink>
        )}
        <OptionLink as="div" onClick={() => dispatch(showSignUpComponent())} registration>
          新規登録
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
