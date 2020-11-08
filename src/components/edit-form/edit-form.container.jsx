import React from 'react';

import EditForm from './edit-form.component';

const EditFormContainer = (props) => {
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
    <EditForm itemId={itemId} {...props} />
  );
};

export default EditFormContainer;