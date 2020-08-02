import {
  GET_CHICKENBURGERS,
  SET_LOADING,
  CHICKENBURGERS_ERROR,
} from "../../actions/types";

const initialState = {
  chickenburgers: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHICKENBURGERS:
      return {
        ...state,
        chickenburgers: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHICKENBURGERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
