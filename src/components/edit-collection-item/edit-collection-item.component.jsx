import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteCollectionFromCollectionsItems } from "../../firebase/firebase.utils";

import { fetchCollectionsStartAsync } from "../../redux/menu/menu.actions";

import CollectionItem from "../collection-item/collection-item.component";

import { LogoContainer, EditLogoStyles, DeleteLogoStyles } from "./edit-collection-item.styles";

const EditCollectionItem = (props) => {
  const { docId, id } = props;
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const handleDeleteClick = async () => {
    try {
      if (window.confirm("削除しますか")) {
        await deleteCollectionFromCollectionsItems(docId, id);

        dispatch(fetchCollectionsStartAsync());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CollectionItem {...props} collectionIdx={0}>
      <LogoContainer>
        <EditLogoStyles onClick={() => history.push(`${match.url}/${id}`, props)} />
        <DeleteLogoStyles onClick={handleDeleteClick} />
      </LogoContainer>
    </CollectionItem>
  );
};

export default EditCollectionItem;
