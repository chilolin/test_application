import React from "react";

import { default as EditHeader } from "../edit-header/edit-header.container";
import { default as EditAddForm } from "../edit-add-form/edit-add-form.container";
import EditCollectionItem from "../edit-collection-item/edit-collection-item.component";

import { EditCollectionReviewContainer } from "./edit-collection-review.styles";

const EditCollectionReview = ({ displayName, email, menu: { id, items } }) => (
  <EditCollectionReviewContainer>
    <EditHeader />
    <EditAddForm displayName={displayName} email={email} docId={id} />
    {items
      .filter(
        (item) => displayName === item.editorName && email === item.editorEmail
      )
      .map((item) => (
        <EditCollectionItem key={item.id} docId={id} {...item} />
      ))}
  </EditCollectionReviewContainer>
);

export default EditCollectionReview;
