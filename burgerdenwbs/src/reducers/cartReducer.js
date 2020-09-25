import {
  GET_CART,
  ADD_TO_CART,
  DEL_CART_ITEM,
  CART_ERROR,
} from "../actions/types";

const initialState = {
  cart: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case DEL_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case CART_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
