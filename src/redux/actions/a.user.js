import axios from "axios";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// Action creators
export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (items) => ({
  type: FETCH_USER_SUCCESS,
  payload: items,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

// Async action to fetch header content
const fetchUserContent = (email) => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users?filters[email][$eq]=${email}`;
    const response = await axios.get(url);
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};

export default fetchUserContent;
