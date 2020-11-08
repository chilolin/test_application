import React from "react";
import { useDispatch } from "react-redux";

import { toggleToNoteCollection, toggleToStartUpCollection } from '../../redux/menu/menu.actions';

import EditBody from "../../components/edit-body/edit-body.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const EditPage = ({ displayName, menu }) => {
  const dispatch = useDispatch();

  return (
    <div className="edit-page">
      <CustomButton type="button" onClick={() => dispatch(toggleToNoteCollection())}>
        note記事
      </CustomButton>
      <CustomButton type="button" onClick={() => dispatch(toggleToStartUpCollection())}>
        スタートアップ企業
      </CustomButton>
      <EditBody
        menu={menu}
        displayName={displayName}
        key={menu.id + menu.title}
      />
    </div>
  );
};

export default EditPage;
