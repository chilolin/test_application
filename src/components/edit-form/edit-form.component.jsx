import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addCollectionToCollectionsItems } from "../../firebase/firebase.utils";

import { fetchCollectionsStartAsync } from '../../redux/menu/menu.actions';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const EditForm = ({ displayName, itemId, docId }) => {
  const [newItem, setNewItem] = useState({
    description: "",
    editor: displayName,
    id: itemId,
    imageUrl: "",
    linkUrl: "",
    title: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addCollectionToCollectionsItems(docId, newItem);

      dispatch(fetchCollectionsStartAsync())

      setNewItem({
        description: "",
        editor: displayName,
        id: itemId,
        imageUrl: "",
        linkUrl: "",
        title: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="title"
        type="text"
        value={newItem.title}
        handleChange={handleChange}
        label="タイトル名"
        required
      />
      <FormInput
        name="description"
        type="text"
        value={newItem.description}
        handleChange={handleChange}
        label="説明文"
        required
      />
      <FormInput
        name="linkUrl"
        type="url"
        value={newItem.linkUrl}
        handleChange={handleChange}
        label="リンク"
        required
      />
      <CustomButton type="submit"> 追加する </CustomButton>
    </form>
  );
};

export default EditForm;
