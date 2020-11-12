import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionReviewContainer,
  TitleContainer,
  Title,
} from "./collection-review.styles";

const CollectionReview = ({ menu: { title, items } }) => (
  <CollectionReviewContainer>
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
    {items.map((item) => (
      <CollectionItem key={item.id} {...item} collectionIdx={0} />
    ))}
  </CollectionReviewContainer>
);

export default CollectionReview;