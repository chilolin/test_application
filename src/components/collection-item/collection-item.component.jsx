import React from "react";

import {
  CollectionItemContainer,
  // ItemImageContainer,
  // Image,
  Name,
  Desciption
} from "./collection-item.styles";

const CollectionItem = (props) => {
  const { title, description, linkUrl } = props;

  return (
    <CollectionItemContainer onClick={() => window.open(linkUrl)}>
      {/* <ItemImageContainer> */}
        {/* <Image src={imageUrl} alt="item" /> */}
      {/* </ItemImageContainer> */}
      <div className="item-details">
        <Name>{title}</Name>
        <Desciption>　{description.slice(0, 50)}...</Desciption>
      </div>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
