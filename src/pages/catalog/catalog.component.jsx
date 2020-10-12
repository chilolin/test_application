import React from "react";
import { useLocation } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { CatalogContainer, CatalogTitle } from "./catalog.styles";

const CatalogPage = () => {
  const location = useLocation();

  console.log(location);

  const { title, items } = location.state;

  return (
    <CatalogContainer>
      <CatalogTitle>{title}</CatalogTitle>
      {items.map((item) => (
        <CollectionItem key={item.id} {...item} />
      ))}
    </CatalogContainer>
  );
};

export default CatalogPage;
