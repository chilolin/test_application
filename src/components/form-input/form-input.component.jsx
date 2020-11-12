import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, mobileEdit,  ...props }) => (
  <GroupContainer mobileEdit={mobileEdit}>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
