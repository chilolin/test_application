import React from "react";
import { useHistory } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { TitleContainer, Title, ToCatalog } from "./homepage.styles";

const HomePage = ({ menuData }) => {
  const history = useHistory();

  return (
    <div className="home-page">
      {menuData.map((menu) => {
        const { id, title, items } = menu;
        return (
          <div className="menu-container" key={id}>
            <TitleContainer>
              <Title>{title}</Title>
              <ToCatalog onClick={() => history.push(`/catalog/${id}`, menu)}>
                一覧　<span>&#10095;</span>
              </ToCatalog>
            </TitleContainer>
            <CollectionOverview
              items={items}
              WrappedComponent={CollectionItem}
              num={3}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
