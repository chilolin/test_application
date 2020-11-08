import MenuActionTypes from "./menu.types";

const INITIAL_STATE = {
  collectionNumber: 0,
  menuData: null,
  isFetching: false,
  errorMessage: undefined
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.FETCH_MENU_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case MenuActionTypes.FETCH_MENU_DATA_SUCCESS:
      return {
        ...state,
        menuData: action.payload,
        isFetching: false,
      };
    case MenuActionTypes.FETCH_MENU_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case MenuActionTypes.TOGGLE_MENU_DATA_TO_NOTE:
      return {
        ...state,
        collectionNumber: action.payload,
      };
    case MenuActionTypes.TOGGLE_MENU_DATA_TO_START_UP:
      return {
        ...state,
        collectionNumber: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
