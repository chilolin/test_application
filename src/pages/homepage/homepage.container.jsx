import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/menu/menu.actions";

import HomePage from './homepage.component';
import Spinner from "../../components/spinner/spinner.component";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => !!state.menu.menuData);
  const menuData = useSelector((state) => state.menu.menuData);
 
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  if (!isLoading) {
    return <Spinner />
  } else {
    return <HomePage menuData={menuData}/>
  }
};

export default HomePageContainer;
