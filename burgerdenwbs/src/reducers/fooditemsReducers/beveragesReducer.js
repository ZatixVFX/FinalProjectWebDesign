import {
  GET_BEVERAGES,
  SET_LOADING,
  BEVERAGES_ERROR,
} from "../../actions/types";

const initialState = {
  beverages: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BEVERAGES:
      return {
        ...state,
        beverages: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case BEVERAGES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
