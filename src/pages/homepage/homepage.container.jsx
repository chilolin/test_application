import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/menu/menu.actions";

import HomePage from "./homepage.component";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => !state.menu.menuData);
  const menuData = useSelector((state) => state.menu.menuData);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return <HomePage isLoading={isLoading} menuData={menuData} />;
};

export default HomePageContainer;
