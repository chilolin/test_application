import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import {
  deleteCollectionFromCollectionsItems,
  updateCollectionOfCollectionsItems,
} from "../../firebase/firebase.utils";

import { fetchCollectionsStartAsync } from '../../redux/menu/menu.actions';

import FormInput from "../form-input/form-input.component";

import {
  EditUpdateFormContainer,
  ButtonContainer,
  UpdateButton,
  DeleteButton,
} from "./edit-update-form.styles";

const EditUpdateForm = ({
  item: { description, id, linkUrl, title, docId },
}) => {
  const [updateItem, setUpdateItem] = useState({
    description: description,
    linkUrl: linkUrl,
    title: title,
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateCollectionOfCollectionsItems(docId, updateItem, id);
      dispatch(fetchCollectionsStartAsync());

      history.push("/edit");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      if (window.confirm("削除しますか")) {
        await deleteCollectionFromCollectionsItems(docId, id);
        dispatch(fetchCollectionsStartAsync());

        history.push("/edit");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUpdateItem({ ...updateItem, [name]: value });
  };

  return (
    <EditUpdateFormContainer onSubmit={handleSubmit}>
      <FormInput
        name="title"
        type="text"
        value={updateItem.title}
        handleChange={handleChange}
        label="タイトル名"
        mobileEdit
        required
      />
      <FormInput
        name="description"
        type="text"
        value={updateItem.description}
        handleChange={handleChange}
        label="説明文"
        style={{ height: "85px" }}
        as="textarea"
        mobileEdit
        required
      />
      <FormInput
        name="linkUrl"
        type="url"
        value={updateItem.linkUrl}
        handleChange={handleChange}
        label="リンク"
        mobileEdit
        required
      />
      <ButtonContainer>
        <UpdateButton type="submit"> 更新する </UpdateButton>
        <DeleteButton type="button" onClick={handleDeleteClick} delete>
          削除する
        </DeleteButton>
      </ButtonContainer>
    </EditUpdateFormContainer>
  );
};

export default EditUpdateForm;
