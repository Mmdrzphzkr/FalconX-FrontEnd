import axios from "axios";

export const FETCH_HEADER_REQUEST = "FETCH_HEADER_REQUEST";
export const FETCH_HEADER_SUCCESS = "FETCH_HEADER_SUCCESS";
export const FETCH_HEADER_FAILURE = "FETCH_HEADER_FAILURE";

// Action creators
export const fetchHeaderRequest = () => ({
  type: FETCH_HEADER_REQUEST,
});

export const fetchHeaderSuccess = (items) => ({
  type: FETCH_HEADER_SUCCESS,
  payload: items,
});

export const fetchHeaderFailure = (error) => ({
  type: FETCH_HEADER_FAILURE,
  payload: error,
});

// Async action to fetch header content
const fetchHeaderContent = () => async (dispatch) => {
  dispatch(fetchHeaderRequest());
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/headers`
    );
    dispatch(fetchHeaderSuccess(response.data));
  } catch (error) {
    dispatch(fetchHeaderFailure(error.message));
  }
};

export default fetchHeaderContent;
