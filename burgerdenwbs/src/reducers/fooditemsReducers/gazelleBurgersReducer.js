import {
  GET_GAZELLEBURGERS,
  SET_LOADING,
  GAZELLEBURGERS_ERROR,
} from "../../actions/types";

const initialState = {
  gazelleburgers: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAZELLEBURGERS:
      return {
        ...state,
        gazelleburgers: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GAZELLEBURGERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
