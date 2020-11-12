import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const EditUpdateFormContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: inline-block;
  justify-content: center;
`;

export const UpdateButton = styled(CustomButton)`
  margin-right: 30px;
`;

export const DeleteButton = styled(CustomButton)`
  margin-left: 30px;
`;
