import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCollectionsStartAsync } from '../../redux/menu/menu.actions';

import EditPage from "./edit.component";
import Spinner from "../../components/spinner/spinner.component";

const EditPageContainer = ({ currentUser }) => {
  const { displayName } = currentUser || false;
  const dispatch = useDispatch();
  const collectionNumber = useSelector(state => state.menu.collectionNumber);
  const menu = useSelector((state) => state.menu.menuData[collectionNumber]);

  console.log(collectionNumber)
  console.log(menu)

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);
  
  return (
    <div>
      {displayName && menu ? (
        <EditPage displayName={displayName} menu={menu} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default EditPageContainer;
