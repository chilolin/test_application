import React from "react";
import { useDispatch } from "react-redux";

import { toggleCollection } from "../../redux/menu/menu.actions";

import CustomButton from "../custom-button/custom-button.component";

import { EditHeaderContainer, TabContainer } from "./edit-header.styles";

const EditHeader = ({ menuData, collectionNumber }) => {
  const dispatch = useDispatch();

  return (
    <EditHeaderContainer>
      <TabContainer>
        {menuData.map((menu, idx) => {
          const { title, id } = menu;

          if (collectionNumber === idx) {
            return (
              <CustomButton
                key={id + `${idx}`}
                type="button"
                onClick={() => dispatch(toggleCollection(idx))}
                clickTab
              >
                {title}
              </CustomButton>
            );
          }

          return (
            <CustomButton
              key={id + `${idx}`}
              type="button"
              onClick={() => dispatch(toggleCollection(idx))}
              basicTab
            >
              {title}
            </CustomButton>
          );
        })}
      </TabContainer>
    </EditHeaderContainer>
  );
};

export default EditHeader;
