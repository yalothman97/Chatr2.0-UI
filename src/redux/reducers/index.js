import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import channelReducer from "./channels";

export default combineReducers({
  user: authReducer,
  errors: errorReducer,
  channels: channelReducer
});
