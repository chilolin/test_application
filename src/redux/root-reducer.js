import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import menuReducer from "./menu/menu.reducer";
import signReducer from './sign/sign.reducer';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["menu"],
};

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
  sign: signReducer
});

export default persistReducer(persistConfig, rootReducer);
