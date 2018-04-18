import { SET_ERRORS } from "../actions/actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERRORS:
      return payload;
    default:
      return state;
  }
};
