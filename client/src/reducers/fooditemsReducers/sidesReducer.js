import { GET_SIDES, SET_LOADING, SIDES_ERROR } from "../../actions/types";

const initialState = {
  sides: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SIDES:
      return {
        ...state,
        sides: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIDES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
