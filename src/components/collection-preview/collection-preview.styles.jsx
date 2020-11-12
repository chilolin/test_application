import styled, { css } from "styled-components";

const NoteStyles = css`
  background-color: white;
`;
const StartUpStyles = css`
  background-color: #ececec;
  padding-top: 10px
`;

const CollectionPreviewStyles = ({ title }) => {
  return title === "note記事" ? NoteStyles : StartUpStyles;
};

export const CollectionPreviewSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;

  ${CollectionPreviewStyles}

`;

export const CollectionPreviewContainer = styled.div`
  width: 70vw;
  padding: 20px 0 60px 0;

  @media screen and (max-width: 800px) {
    width: 95vw;
    padding-bottom: 40px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 20px 0;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  padding: 0;
`;

export const ToCatalog = styled.span`
  color: #0968ab;
  font-size: 0.875em;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
