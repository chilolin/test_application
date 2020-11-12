import styled from "styled-components";
import { ReactComponent as EditLogo } from "../../assets/edit-black-36dp.svg";
import { ReactComponent as DeleteLogo } from "../../assets/delete-black-36dp.svg";

export const LogoContainer = styled.div`
  display: flex;
  padding-left: 60px;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    padding-left: 20px;
  }
`;

export const EditLogoStyles = styled(EditLogo)`
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`

export const DeleteLogoStyles = styled(DeleteLogo)`
  padding-left: 40px;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`;
