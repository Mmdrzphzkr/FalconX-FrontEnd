// reducers/headerReducer.js
import {
  FETCH_HEADER_ITEMS_REQUEST,
  FETCH_HEADER_ITEMS_SUCCESS,
  FETCH_HEADER_ITEMS_FAILURE,
} from "../actions/a.header";
import InitialState from "../store/initialState";

const headerReducer = (state = InitialState.headerItems, action) => {
  switch (action.type) {
    case FETCH_HEADER_ITEMS_REQUEST:
      return { ...state, loading: true };
    case FETCH_HEADER_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_HEADER_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default headerReducer;
