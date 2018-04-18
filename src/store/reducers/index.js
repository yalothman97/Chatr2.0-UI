import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import channelReducer from "./channels";
import errorReducer from "./errors";

export default combineReducers({
  auth: authReducer,
  channels: channelReducer,
  errors: errorReducer
});
