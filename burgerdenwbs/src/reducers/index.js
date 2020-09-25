import { combineReducers } from "redux";
import beefBurgersReducer from "./fooditemsReducers/beefBurgersReducer";
import chickeBurgersReducer from "./fooditemsReducers/chickenBurgersReducer";
import gazelleBurgersReducer from "./fooditemsReducers/gazelleBurgersReducer";
import beveragesReducer from "./fooditemsReducers/beveragesReducer";
import desertsReducer from "./fooditemsReducers/desertsReducers";
import hotdrinksReducer from "./fooditemsReducers/hotdrinksReducer";
import sidesReducer from "./fooditemsReducers/sidesReducer";

import alertsReducer from "./alertsReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  // food items reducers
  beefburger: beefBurgersReducer,
  chickenburger: chickeBurgersReducer,
  gazelleburger: gazelleBurgersReducer,
  beverage: beveragesReducer,
  desert: desertsReducer,
  hotdrink: hotdrinksReducer,
  side: sidesReducer,

  // alerts
  alerts: alertsReducer,

  // auth
  auth: authReducer,

  // cart
  cart: cartReducer,
});
