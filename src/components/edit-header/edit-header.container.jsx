import React from "react";
import { useSelector } from "react-redux";

import EditHeader from "./edit-header.component";

const EditHeaderContainer = () => {
  const menuData = useSelector((state) => state.menu.menuData);
  const collectionNumber = useSelector((state) => state.menu.collectionNumber);

  return <EditHeader menuData={menuData} collectionNumber={collectionNumber} />;
};

export default EditHeaderContainer;
