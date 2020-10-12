import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/menu/menu.actions";

import ArticlesPageContainer from '../articles/articles.container';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => !!state.menu.menuData);
 
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
     <ArticlesPageContainer isLoading={!isLoading} />
  )
};

export default HomePage;
