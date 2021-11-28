import { combineReducers } from "redux";
import user from "./user";

const reducers = combineReducers({
  currentUser: user,
});

export default reducers;
