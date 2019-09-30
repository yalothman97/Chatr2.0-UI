import axios from "axios";
import jwt_decode from "jwt-decode";

import { FETCH_CHANNELS, FETCH_CHANNEL_MSGS, ADD_CHANNEL } from "./actionTypes";

export const fetchChannels = () => {
  return async dispatch => {
    try {
      const res = await axios.get("https://api-chatr.herokuapp.com/channels/");
      const channels = res.data;
      dispatch({
        type: FETCH_CHANNELS,
        payload: channels
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchChannelMsgs = channelID => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `https://api-chatr.herokuapp.com/channels/${channelID}/`
      );
      let messages = res.data;
      dispatch({
        type: FETCH_CHANNEL_MSGS,
        payload: messages
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postChannel = channel => {
  return async dispatch => {
    try {
      const res = await axios.post(
        "https://api-chatr.herokuapp.com/channels/",
        channel
      );
      const newChannel = res.data;
      dispatch({
        type: ADD_CHANNEL,
        payload: newChannel
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };
};
