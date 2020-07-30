import { GET_BEEFBURGERS, SET_LOADING, BEEFBURGERS_ERROR } from "./types";

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

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
