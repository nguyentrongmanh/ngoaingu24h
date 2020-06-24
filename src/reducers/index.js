import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  user: UserReducer,
});

export default appReducer;
