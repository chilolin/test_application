import React, { useState } from "react";
import {useDispatch} from 'react-redux';

import {hiddenSignComponent} from '../../redux/sign/sign.actions';

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import SignButton from "../sign-button/sign-button.component";

import { FormContainer } from "./sign-up.styles";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password} = newUser;
    
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      createUserProfileDocument(user, {displayName});

      setNewUser({
        displayName: "",
        email: "",
        password: "",
      });
      dispatch(hiddenSignComponent());
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={newUser.displayName}
          label="ユーザー名"
          required
        />
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={newUser.email}
          label="メールアドレス"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={newUser.password}
          label="パスワード"
          required
        />
        <SignButton> 新規登録 </SignButton>
      </FormContainer>
    </form>
  );
};

export default SignUp;
