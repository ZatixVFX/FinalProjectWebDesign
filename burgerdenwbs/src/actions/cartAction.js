import axios from "axios";
import { GET_CART, ADD_TO_CART, DEL_CART_ITEM, CART_ERROR } from "./types";

// Get cart items
export const getCart = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": `${token}`,
      },
    };
    const res = await axios.get("/api/cart", config);

    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// add item to cart
export const addToCart = (token, item) => async (dispatch) => {
  try {
    const config = {
      header: {
        "x-auth-token": `${token}`,
      },
    };

    const res = await axios.post("/api/cart", item, config);

    dispatch({
      type: ADD_TO_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// delete item from cart
export const delCartItem = (token, id) => async (dispatch) => {
  try {
    const config = {
      header: {
        "x-auth-token": `${token}`,
      },
    };

    const res = await axios.delete(`/api/cart/${id}`, config);

    dispatch({
      type: DEL_CART_ITEM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: err.response.data.msg,
    });
  }
};
