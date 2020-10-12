import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { hiddenSignComponent } from "../../redux/sign/sign.actions";

import { auth } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import SignButton from "../sign-button/sign-button.component";

import { FormContainer } from "./sign-in.styles";

const SignIn = () => {
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = signInUser;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSignInUser({ email: "", password: "" });
      dispatch(hiddenSignComponent());
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setSignInUser({...signInUser, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={signInUser.email}
          label="メールアドレス"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={signInUser.password}
          handleChange={handleChange}
          label="パスワード"
          required
        />
        <SignButton> ログイン </SignButton>
      </FormContainer>
    </form>
  );
};

export default SignIn;
