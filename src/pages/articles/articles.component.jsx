import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { TitleContainer, Title, ToCatalog } from "./articles.styles";

const ArticlesPage = () => {
  const history = useHistory();
  const menuData = useSelector((state) => state.menu.menuData);

  return (
    <div className="home-page">
      {menuData.map((menu) => (
        <div className="menu-container" key={menu.id}>
          <TitleContainer>
            <Title>{menu.title}</Title>
            <ToCatalog
              onClick={() => history.push(`/catalog/${menu.id}`, menu)}
            >
              一覧　<span>&#10095;</span>
            </ToCatalog>
          </TitleContainer>
          <div className="collection-container">
            {menu.items
              .filter((item, idx) => idx < 3)
              .map((item) => (
                <CollectionItem key={item.id} {...item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesPage;
