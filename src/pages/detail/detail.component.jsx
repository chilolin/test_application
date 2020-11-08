import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { deleteCollectionFromCollectionsItems, updateCollectionOfCollectionsItems } from "../../firebase/firebase.utils";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

const DetailPage = ({ item, docId }) => {
  const { description, editor, id, linkUrl, title} = item;
  const [updateItem, setUpdateItem] = useState({
    description: description,
    editor: editor,
    id: id,
    imageUrl: "",
    linkUrl: linkUrl,
    title: title,
  });
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateCollectionOfCollectionsItems(docId, updateItem, id);
      
      history.push("/edit");
    } catch(error) {
      console.log(error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      if (window.confirm('削除しますか')){
        await deleteCollectionFromCollectionsItems(docId, id);
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
    <form onSubmit={handleSubmit}>
      <FormInput
        name="title"
        type="text"
        value={updateItem.title}
        handleChange={handleChange}
        label="タイトル名"
        required
      />
      <FormInput
        name="description"
        type="text"
        value={updateItem.description}
        handleChange={handleChange}
        label="説明文"
        required
      />
      <FormInput
        name="linkUrl"
        type="url"
        value={updateItem.linkUrl}
        handleChange={handleChange}
        label="リンク"
        required
      />
      <CustomButton type="submit"> 更新する </CustomButton>
      <CustomButton type="button" onClick={handleDeleteClick}>
        削除する
      </CustomButton>
    </form>
  );
};

export default DetailPage;
