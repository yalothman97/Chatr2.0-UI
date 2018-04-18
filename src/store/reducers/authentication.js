import { SET_CURRENT_USER } from "../actions/actionTypes";

const initialState = {
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
