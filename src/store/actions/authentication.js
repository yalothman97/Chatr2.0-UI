import axios from "axios";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER } from "./actionTypes";

import { setErrors, fetchChannels } from "./index";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

const setAuthToken = token => dispatch => {
  if (token) {
    const user = jwt_decode(token);
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
    dispatch(setCurrentUser(user));
    dispatch(fetchChannels());
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
    dispatch(logout());
  }
};

export const checkForExpiredToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = jwt_decode(token);
    if (user.exp > Date.now() / 1000) return setAuthToken(token);
  }
  return setAuthToken();
};

export const registerUser = (userData, type) => async dispatch => {
  try {
    const res = await instance.post(`/${type}/`, userData);
    const { token } = res.data;
    dispatch(setAuthToken(token));
  } catch (error) {
    if (error.response) dispatch(setErrors(error.response.data));
    else console.error(error);
  }
};

export const logout = () => setCurrentUser(null);

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: { user }
});
