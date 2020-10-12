import React from "react";

import {
  CollectionItemContainer,
  ItemImageContainer,
  Image,
  Name,
  Desciption
} from "./collection-item.styles";

const CollectionItem = (props) => {
  const { name, description, imageUrl, linkUrl } = props;

  return (
    <CollectionItemContainer onClick={() => window.open(linkUrl)}>
      <ItemImageContainer>
        <Image src={imageUrl} alt="item" />
      </ItemImageContainer>
      <div className="item-details">
        <Name>{name}</Name>
        <Desciption>　{description.slice(0, 50)}...</Desciption>
      </div>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
