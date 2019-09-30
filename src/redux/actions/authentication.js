import axios from "axios";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER, SET_ERRORS } from "./actionTypes";

import { setErrors } from "./errors";

// const instance = axios.create({
//   baseURL: "https://api-chatr.herokuapp.com/"
// });

const setCurrentUser = token => {
  let user = null;
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
    user = jwt_decode(token);
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
    user = null;
  }

  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const authorization = (userData, type, history) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `https://api-chatr.herokuapp.com/${type}/`,
        userData
      );
      const user = res.data;
      dispatch(setErrors());
      dispatch(setCurrentUser(user.token));
      if (history) history.goBack();
    } catch (err) {
      console.error(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};

export const logout = () => setCurrentUser();

export const checkForExpiredToken = () => {
  // Check for token expiration
  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;

    // Decode token and get user info
    user = jwt_decode(token);

    // Check token expiration
    if (user.exp >= currentTimeInSeconds) {
      // Set user
      return setCurrentUser(token);
    }
  }
  return logout();
};
