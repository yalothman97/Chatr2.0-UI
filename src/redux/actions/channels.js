import axios from "axios";
import jwt_decode from "jwt-decode";

import {
  FETCH_CHANNELS,
  FETCH_CHANNEL_MSGS,
  ADD_CHANNEL,
  POST_MSG
} from "./actionTypes";

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

export const fetchChannelMsgs = (channelID, timestamp) => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `https://api-chatr.herokuapp.com/channels/${channelID}/?latest=${timestamp}`
      );
      let messages = res.data;
      let object = {
        id: channelID,
        messages: messages
      };
      dispatch({
        type: FETCH_CHANNEL_MSGS,
        payload: object
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
        "https://api-chatr.herokuapp.com/channels/create/",
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

export const postMsg = (message, channelID) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `https://api-chatr.herokuapp.com/channels/${channelID}/send/`,
        message
      );
    } catch (error) {
      console.error(error.response.data);
    }
  };
};
