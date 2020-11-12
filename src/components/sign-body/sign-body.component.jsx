import React from "react";
import { useDispatch } from "react-redux";

import { hiddenSignComponent } from "../../redux/sign/sign.actions";

import {
  SignBodyContainer,
  MultiplicationButton,
  Title,
  SignForm,
} from "./sign-body.styles";

const SignBody = ({ title, FormComponent }) => {
  const dispatch = useDispatch();

  return (
    <SignBodyContainer>
      <MultiplicationButton onClick={() => dispatch(hiddenSignComponent())}>
        &#10006;
      </MultiplicationButton>
      <Title> {title} </Title>

      <SignForm>
        <FormComponent />
      </SignForm>
    </SignBodyContainer>
  );
};

export default SignBody;
