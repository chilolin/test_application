import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  display: flex;
  height: 100px;
  margin-bottom: 15px;
  align-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }
`;

export const ItemImageContainer = styled.div`
  display: flex;
  width: 120px;
  height: 80px;
  margin: 0 20px 0 15px;
  border: 1px solid;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Desciption = styled.div`
  margin-top: 10px;
`