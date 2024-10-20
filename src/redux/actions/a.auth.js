import axios from "axios";

// Action Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// Async Action to Handle Login
export const loginUser = (identifier, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
      {
        identifier,
        password,
      }
    );
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const registerUser = (username, email, password) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`,
      {
        username,
        email,
        password,
      }
    );
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};
