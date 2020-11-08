import React from "react";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { CatalogContainer, CatalogTitle } from "./catalog.styles";

const CatalogPage = ({ menu }) => {
  const { title, items } = menu;

  return (
    <CatalogContainer>
      <CatalogTitle>{title}</CatalogTitle>
      <CollectionOverview
        items={items}
        WrappedComponent={CollectionItem}
        num={20}
      />
    </CatalogContainer>
  );
};

export default CatalogPage;
