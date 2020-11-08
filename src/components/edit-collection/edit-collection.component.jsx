import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteCollectionFromCollectionsItems } from "../../firebase/firebase.utils";

import { fetchCollectionsStartAsync } from "../../redux/menu/menu.actions";

import CollectionItem from "../collection-item/collection-item.component";
import CustomButton from "../custom-button/custom-button.component";

const EditCollection = ({docId, ...item}) => {
  const { id } = item;
  const history = useHistory();
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

  const props = { docId, item };

  return (
    <div className="edit-collection">
      <CollectionItem {...item} />
      <CustomButton
        type="button"
        onClick={() => history.push(`/detail/:${id}`, props)}
      >
        編集する
      </CustomButton>
      <CustomButton type="button" onClick={handleDeleteClick}>
        削除する
      </CustomButton>
    </div>
  );
};

export default EditCollection;
