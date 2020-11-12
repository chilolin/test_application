import styled from "styled-components";

export const SignBodyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: white;
  width: 100%;
  max-height: 85%;
  line-height: 1.5;
  padding-top: 24px;
  text-align: left;
  transition: all 150ms ease-out 0s;
  opacity: 1;
  transform: traslate3d(0px, 0px, 0px);
  z-index: 999999;
  max-width: 352px !important;
`;

export const MultiplicationButton = styled.li`
  position: absolute;
  display: inline-block;
  padding: 6px;
  top: 3px;
  right: 6px;
  font-size: 1.23em;
  color: rgb(132, 145, 165);
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
`;

export const Title = styled.h2`
  font-size: 20px !important;
  width: 272px;
  padding-left: 0 !important;
  margin: 0 auto;
  color: rgb(43, 84, 106);
  line-height: 1.5;
`;

export const SignForm = styled.div`
  overflow-y: auto:
  margin: 0px 2px;

  @media screen and (max-width: 800px) {
    overflow-y: scroll;
  }
`;
