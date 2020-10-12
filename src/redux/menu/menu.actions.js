import MenuActionTypes from "./menu.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: MenuActionTypes.FETCH_MENU_DATA_START,
});

export const fetchCollectionsSuccess = (menuData) => ({
  type: MenuActionTypes.FETCH_MENU_DATA_SUCCESS,
  payload: menuData,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: MenuActionTypes.FETCH_MENU_DATA_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collections = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collections));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error)));
  };
};