import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 272px;
  padding: 5px 0 20px 0;
`;

export const HasErrorText = styled.span`
  margin-top: 8px;
  font-size: 0.7em;
  color: #cc3300;
`;

export const ContactUsContainer = styled.div`
  font-size: 11px;
  text-align: center;
  color: grey;
  margin-top: 8px;
`;

export const OrText = styled.div`
  padding: 20px 0;
  font-size: 11px;
  color: grey;
`;

export const ToggleContainer = styled.div`
  font-size: 11px;
  text-align: center;
  color: grey;
  margin-top: 30px;
`;

export const Text = styled.span``;

export const Button = styled.span`
  color: rgb(0, 112, 210);
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
