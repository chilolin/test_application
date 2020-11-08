import React from "react";

import { default as EditForm } from "../../components/edit-form/edit-form.container";
import EditCollection from "../../components/edit-collection/edit-collection.component";

const EditBody = ({ displayName, menu }) => {
  const { id, title, items } = menu;
  return (
    <div className="edit-collection-container" key={id}>
      <h2>{title}</h2>
      <EditForm displayName={displayName} docId={id} />
      <div className="collection-container">
        {items
          .filter((item) => displayName === item.editor)
          .map((item) => (
            <EditCollection key={item.id} docId={id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default EditBody;