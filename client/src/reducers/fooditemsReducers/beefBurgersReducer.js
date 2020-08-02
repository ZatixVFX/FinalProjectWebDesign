import {
  GET_BEEFBURGERS,
  SET_LOADING,
  BEEFBURGERS_ERROR,
} from "../../actions/types";

const initialState = {
  beefburgers: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BEEFBURGERS:
      return {
        ...state,
        beefburgers: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case BEEFBURGERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
