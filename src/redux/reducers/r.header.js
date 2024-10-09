import initialState from "../store/initialState";
import {
  FETCH_HEADER_REQUEST,
  FETCH_HEADER_SUCCESS,
  FETCH_HEADER_FAILURE,
} from "../actions/a.header";

const headerReducer = (state = initialState.headerItems, action) => {
  switch (action.type) {
    case FETCH_HEADER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HEADER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null,
      };
    case FETCH_HEADER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
