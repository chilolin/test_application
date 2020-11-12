import React from "react";
import { useLocation } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";
import CollectionReview from "../../components/collection-review/collection-review.component";

import { CollectionPageContainer } from "./collection.styles";

const CollectionPage = () => {
  const location = useLocation();
  const menu = location.state;
  const isLoading = !!!menu;

  return (
    <CollectionPageContainer>
      {isLoading ? <Spinner /> : <CollectionReview menu={menu} />}
    </CollectionPageContainer>
  );
};

export default CollectionPage;
