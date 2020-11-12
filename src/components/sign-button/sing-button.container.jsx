import React from "react";
import { useSelector } from "react-redux";

import SignButton from "./sign-button.component";

const SignButtonContainer = (props) => {
  const onSignIn = useSelector((state) => state.sign.onSignIn);

  return <SignButton onSignIn={onSignIn} {...props} />;
};

export default SignButtonContainer;
