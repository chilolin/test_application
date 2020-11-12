import styled from "styled-components";

const CollectionItemColor = ({ collectionIdx }) =>
  collectionIdx % 2 === 0 ? "#e8e8e8" : "#c0c0c0";

const PointColor = ({ collectionIdx }) =>
  collectionIdx % 2 === 0 ? "#d2d3d2" : "#a9a9a9";

const PointBackGroundColor = ({ collectionIdx }) =>
  collectionIdx % 2 === 0 ? "#f9f9f9" : "#f5f5f5";

export const CollectionItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  align-items: center;
  border-bottom: 2px solid ${CollectionItemColor};

  @media screen and (max-width: 800px) {
    font-size: 1em;
    border-bottom: 1px solid ${CollectionItemColor};
  }
`;

export const DateContainer = styled.div`
  width: 150px;
  height: 100%;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const DatePoint = styled.span`
  position: absolute;
  top: 3px;
  left: -31px;
  width: 14px;
  height: 14px;
  background-color: ${PointBackGroundColor};
  border-radius: 14px;
  border: 3px solid ${PointColor};

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const DateText = styled.span`
  position: absolute;
  top: -1px;
  left: -145px;
  font-size: 0.8em;
  background-color: ${CollectionItemColor};
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  padding: 5px 15px 5px 5px;

  @media screen and (max-width: 800px) {
    font-size: 0.75em;
    font-weight: 400;
    background-color: unset;
    border: unset;
    font-size: .8em
    padding: 0;
    top: unset;
    bottom: -27.5px;
    left: -1px;
    color: ${PointColor}
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  border-left: 2px solid ${CollectionItemColor};
  padding: 10px 15px 20px 20px;

  @media screen and (max-width: 800px) {
    border-left: 0;
    padding: 10px 0 4px 0;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0;
`;

export const Title = styled.h2`
  margin: 0;

  :hover {
    color: #0968ab;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    font-size: 1em;
    padding-left: 2px;
  }
`;

export const EditorNameContainer = styled.div`
  padding: 5px 0 2px 0;
  font-family: alright_sansmediumitalic, HelveticaNeue, Helvetica, Arial,
    sans-serif;
  font-style: italic;
  font-size: 0.9375em;
  line-height: 1.3;
  color: ${PointColor};

  @media screen and (max-width: 800px) {
    padding: 5px 0 0 0;
    font-size: 0.75em;
    font-weight: 400;
    margin-left: 97px;
  }
`;

export const EditorName = styled.span`
  color: #0968ab;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

export const Desciption = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.875em;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

