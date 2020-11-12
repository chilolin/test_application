import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { hiddenSignComponent } from "../../redux/sign/sign.actions";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import SignButton from "../sign-button/sign-button.component";

import { FormContainer, ErrorText } from "./sign-up.styles";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const [emailUmp, setEmailUmp] = useState(false);
  const [passwordUmp, setPasswordUmp] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password } = newUser;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });

      setNewUser({
        displayName: "",
        email: "",
        password: "",
      });
      dispatch(hiddenSignComponent());
    } catch (error) {
      console.log(error);

      if (
        error.message ===
        "The email address is already in use by another account."
      ) {
        setEmailUmp(true);
      } else {
        setEmailUmp(false);
      }

      if (error.message === "Password should be at least 6 characters") {
        setPasswordUmp(true);
      } else {
        setPasswordUmp(false);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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
      {emailUmp ? (
        <ErrorText emailText>このメールアドレスは既に使われています</ErrorText>
      ) : null}
      <FormInput
        name="password"
        type="password"
        handleChange={handleChange}
        value={newUser.password}
        label="パスワード"
        required
      />
      {passwordUmp ? <ErrorText>6文字以上で入力してください</ErrorText> : null}
      <SignButton> 新規登録 </SignButton>
    </FormContainer>
  );
};

export default SignUp;
