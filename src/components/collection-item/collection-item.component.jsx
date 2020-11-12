import React from "react";

import {
  CollectionItemContainer,
  DateContainer,
  DatePoint,
  DateText,
  ContentContainer,
  Content,
  Title,
  EditorNameContainer,
  EditorName,
  Desciption,
  TitleContainer,
} from "./collection-item.styles";

const CollectionItem = ({
  title,
  description,
  linkUrl,
  editorName,
  collectionIdx,
  children,
  watch,
}) => (
  <CollectionItemContainer collectionIdx={collectionIdx}>
    <DateContainer />
    <ContentContainer>
    <Content collectionIdx={collectionIdx}>
      <TitleContainer>
        <DateText collectionIdx={collectionIdx}>{watch}</DateText>
        <DatePoint collectionIdx={collectionIdx} />
        <Title onClick={() => window.open(linkUrl)}>{title}</Title>
      </TitleContainer>
      <EditorNameContainer collectionIdx={collectionIdx}>
        by <EditorName>{editorName}</EditorName>
      </EditorNameContainer>
      <Desciption>{description.slice(0, 100)}...</Desciption>
    </Content>
    {children}

    </ContentContainer>
  </CollectionItemContainer>
);

export default CollectionItem;
