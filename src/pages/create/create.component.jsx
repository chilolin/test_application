import React from "react";
import { useLocation } from "react-router-dom";

const CreatePage = () => {
  const location = useLocation();
  console.log(location)
  return <div>CREATE PAGE</div>;
};

export default CreatePage;