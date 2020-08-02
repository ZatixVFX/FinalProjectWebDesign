import {
  GET_HOTDRINKS,
  SET_LOADING,
  HOTDRINKS_ERROR,
} from "../../actions/types";

const initialState = {
  hotdrinks: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTDRINKS:
      return {
        ...state,
        hotdrinks: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HOTDRINKS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
