import { GET_DESERTS, SET_LOADING, DESERTS_ERROR } from "../../actions/types";

const initialState = {
  deserts: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DESERTS:
      return {
        ...state,
        deserts: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DESERTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
