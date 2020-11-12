import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionLinkBasicStyles = css`
  color: black;
  background-color: white;
`;

const OptionLinkRegistration = css`
  color: white;
  background-color: #0968ab;
  border-radius: 5px;
`;

const OptionLinkStyles = (props) => {
  if (props.registration) {
    return OptionLinkRegistration;
  }

  return OptionLinkBasicStyles;
};

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid #aab6aa;
  z-index: 999999;

  @media screen and (max-width: 800px) {
    height: 60px;
    margin-bottom: 20px;
    padding: 5px;
    padding-left: 0px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0 25px;

  :hover {
    opacity: 0.8px;
  }

  @media screen and (max-width: 800px) {
    height: 50px;
    padding: 5px 0 5px 10px;
  }
`;

export const Logo = styled.img`
  height: 70px;
  width: auto;

  @media screen and (max-width: 800px) {
    height: 50px;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;

  @media screen and (max-width: 800px) {
    width: auto;
    padding-right: 10px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  margin: 0 3px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  ${OptionLinkStyles}

  @media screen and (max-width: 800px) {
    padding: 10px;
    margin: 0 1px;
  }
`;
