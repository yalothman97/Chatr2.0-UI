import axios from "axios";
import jwt_decode from "jwt-decode";

import {} from "./actionTypes";

import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

export const checkForExpiredToken = () => {};

export const login = userData => {};

export const signup = userData => {};

export const logout = () => {};

const setCurrentUser = token => {};
