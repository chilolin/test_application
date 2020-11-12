import React from "react";
import { useLocation } from "react-router-dom";

import EditUpdateForm from "../../components/edit-update-form/edit-update-form.component";

import { DetailPageStyles } from "./detail.styles";

const DetailPage = () => {
  const location = useLocation();
  const item = location.state;

  return (
    <DetailPageStyles>
      <EditUpdateForm item={item} />
    </DetailPageStyles>
  );
};

export default DetailPage;
