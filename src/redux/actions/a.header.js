// actions/types.js
import queries from "../queries/queries";
import client from "../../lib/apollo-client";

// Action Types
export const FETCH_HEADER_ITEMS_REQUEST = "FETCH_HEADER_ITEMS_REQUEST";
export const FETCH_HEADER_ITEMS_SUCCESS = "FETCH_HEADER_ITEMS_SUCCESS";
export const FETCH_HEADER_ITEMS_FAILURE = "FETCH_HEADER_ITEMS_FAILURE";

const fetchHeaderItems = () => async (dispatch) => {
  // Dispatching request action
  dispatch({ type: FETCH_HEADER_ITEMS_REQUEST });

  try {
    // Use Apollo Client directly in action
    const { data } = await client.query({
      query: queries.GET_HEADER_ITEMS,
    });

    // Dispatch success action with the fetched data
    dispatch({
      type: FETCH_HEADER_ITEMS_SUCCESS,
      payload: data.menu[0].menuItemsList.menuItems,
    });
  } catch (error) {
    // Dispatch failure action with error
    console.error("Error fetching header items:", error);
    dispatch({ type: FETCH_HEADER_ITEMS_FAILURE, error });
  }
};

export default fetchHeaderItems;
