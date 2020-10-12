import SignActionTypes from "./sign.types";

const INITIAL_STATE = {
  onSignIn: false,
  onSignUp: false,
  signList: null
};

const signReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignActionTypes.SHOW_SIGNIN_COMPONENT:
      return {
        ...state,
        onSignIn: true,
        onSignUp: false,
        signList: action.payload
      };
    case SignActionTypes.SHOW_SIGNUP_COMPONENT:
      return {
        ...state,
        onSignIn: false,
        onSignUp: true,
        signList: action.payload
      };
    case SignActionTypes.HIDDEN_SIGN_COMPONENT:
      return {
        ...state,
        onSignIn: false,
        onSignUp: false,
        signList: null
      };
    default:
      return state;
  }
};

export default signReducer;
