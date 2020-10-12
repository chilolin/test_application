import MenuActionTypes from './menu.types';

const INITIAL_STATE = {
  menuData: null,
  isFetching: false,
  errorMessage: undefined
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.FETCH_MENU_DATA_START:
      return {
        ...state,
        isFetching: true
      }
    case MenuActionTypes.FETCH_MENU_DATA_SUCCESS:
      return {
        ...state,
        menuData: action.payload,
        isFetching: false
      }
    case MenuActionTypes.FETCH_MENU_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default menuReducer;