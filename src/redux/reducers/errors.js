import { SET_ERRORS } from "../actions/actionTypes";

const initialState = {
  errors: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERRORS:
      const error = payload;
      return {
        ...state,
        errors: Object.keys(error).map(key => `${key}: ${error[key]}`)
      };
    default:
      return state;
  }
};

export default reducer;
