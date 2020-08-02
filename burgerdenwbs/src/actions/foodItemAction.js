import {
  GET_BEEFBURGERS,
  BEEFBURGERS_ERROR,
  GET_CHICKENBURGERS,
  CHICKENBURGERS_ERROR,
  GET_GAZELLEBURGERS,
  GAZELLEBURGERS_ERROR,
  GET_BEVERAGES,
  BEVERAGES_ERROR,
  GET_DESERTS,
  DESERTS_ERROR,
  GET_HOTDRINKS,
  HOTDRINKS_ERROR,
  GET_SIDES,
  SIDES_ERROR,
  SET_LOADING,
} from "./types";

// Get BeefBurgers
export const getBeefBurgers = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/api/fooditems/beefburgers");
    const data = await res.json();

    dispatch({
      type: GET_BEEFBURGERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BEEFBURGERS_ERROR,
      payload: err.response.data,
    });
  }
};

// Get ChickenBurgers
export const getChickenBurgers = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/api/fooditems/chickenburgers");
    const data = await res.json();

    dispatch({
      type: GET_CHICKENBURGERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CHICKENBURGERS_ERROR,
      payload: err.response.data,
    });
  }
};

// Get GazelleBurgers
export const getGazelleBurgers = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/api/fooditems/gazelleburgers");
    const data = await res.json();

    dispatch({
      type: GET_GAZELLEBURGERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GAZELLEBURGERS_ERROR,
      payload: err.response.data,
    });
  }
};

// Get Beverages
export const getBeverages = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/api/fooditems/beverages");
    const data = await res.json();

    dispatch({
      type: GET_BEVERAGES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BEVERAGES_ERROR,
      payload: err.response.data,
    });
  }
};

// Get Deserts
export const getDeserts = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/api/fooditems/deserts");
    const data = await res.json();

    dispatch({
      type: GET_DESERTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DESERTS_ERROR,
      payload: err.response.data,
    });
  }
};

// Get Hot Drinks
export const getHotDrinks = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/api/fooditems/hot-drinks");
    const data = await res.json();

    dispatch({
      type: GET_HOTDRINKS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: HOTDRINKS_ERROR,
      payload: err.response.data,
    });
  }
};

// Get Sides
export const getSides = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/api/fooditems/sides");
    const data = await res.json();

    dispatch({
      type: GET_SIDES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SIDES_ERROR,
      payload: err.response.data,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
