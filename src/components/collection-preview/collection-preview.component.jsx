import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewSection,
  CollectionPreviewContainer,
  TitleContainer,
  Title,
  ToCatalog,
} from "./collection-preview.styles";

const CollectionPreview = ({ menu, collectionIdx }) => {
  const { title, id, items } = menu;
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <CollectionPreviewSection title={title} >
      <CollectionPreviewContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <ToCatalog onClick={() => history.push(`${match.url}catalog/${id}`, menu)}>
            すべてを表示
          </ToCatalog>
        </TitleContainer>
        {items
          .filter((_, idx) => idx < 3)
          .map((item) => (
            <CollectionItem key={item.id} collectionIdx={collectionIdx} {...item} />
          ))}
      </CollectionPreviewContainer>
    </CollectionPreviewSection>
  );
};

export default CollectionPreview;
