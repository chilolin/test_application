import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  margin: 20px 20px 0 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
`

export const ToCatalog = styled.div`
  cursor: pointer;

  &:hover {
    color: blue;
    text-decoration: blue underline;
  }
`;