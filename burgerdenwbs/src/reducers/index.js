import { combineReducers } from "redux";
import beefBurgersReducer from "./beefBurgersReducer";

export default combineReducers({
  beefburger: beefBurgersReducer,
});
