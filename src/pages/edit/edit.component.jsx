import React from "react";
import { useSelector } from "react-redux";

import EditCollectionReview from "../../components/edit-collection-review/edit-collection-review.component";
import Spinner from "../../components/spinner/spinner.component";

import { EditPageStyles } from "./edit.styles";

const EditPage = ({ currentUser }) => {
  const { displayName, email } = currentUser || false;
  const collectionNumber = useSelector((state) => state.menu.collectionNumber);
  const menu = useSelector((state) => state.menu.menuData[collectionNumber]);
  const isLoading = !(displayName && menu);

  return isLoading ? (
    <Spinner />
  ) : (
    <EditPageStyles>
      <EditCollectionReview
        displayName={displayName}
        email={email}
        menu={menu}
      />
    </EditPageStyles>
  );
};

export default EditPage;
