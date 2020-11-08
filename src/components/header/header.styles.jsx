import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0 25px;
`;

export const Logo = styled.img`
  height: 70px;
  width: auto;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: grey;
  }
`;