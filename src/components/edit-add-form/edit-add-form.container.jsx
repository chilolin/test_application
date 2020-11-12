import React from 'react';

import EditAddForm from './edit-add-form.component';

const EditAddFormContainer = (props) => {
  const idCreater = (len) => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const name = [];
    for (let i = 0; i < len; i++) {
      const num = Math.floor(chars.length * Math.random());
      name.push(chars[num]);
    }
    return name.join("");
  };

  const itemId = idCreater(16);

  return (
    <EditAddForm itemId={itemId} {...props} />
  );
};

export default EditAddFormContainer;