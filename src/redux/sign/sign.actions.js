import SignActionTypes from "./sign.types";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

export const showSignInComponent = () => ({
  type: SignActionTypes.SHOW_SIGNIN_COMPONENT,
  payload: {
    title: "ログイン",
    FormComponent: SignIn,
  },
});

export const showSignUpComponent = () => ({
  type: SignActionTypes.SHOW_SIGNUP_COMPONENT,
  payload: {
    title: "アカウントを作成",
    FormComponent: SignUp,
  },
});

export const hiddenSignComponent = () => ({
  type: SignActionTypes.HIDDEN_SIGN_COMPONENT,
});
