import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import Spinner from "../../components/spinner/spinner.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = ({ isLoading, menuData }) => (
  <HomePageContainer>
    {isLoading ? (
      <Spinner />
    ) : (
      menuData.map((menu, idx) => <CollectionPreview menu={menu} collectionIdx={idx} key={menu.id} />)
    )}
  </HomePageContainer>
);

export default HomePage;
