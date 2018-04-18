import axios from "axios";

import { FETCH_CHANNELS, FETCH_MESSAGES, SET_LOADING } from "./actionTypes";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

export const fetchChannels = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/channels/");
      const channels = res.data.map(channel => ({ ...channel, messages: [] }));
      dispatch({
        type: FETCH_CHANNELS,
        payload: { channels }
      });
    } catch (error) {
      console.error(error);
    }
  };
};

let timestamp = "";

export const fetchMessages = channel => {
  return async dispatch => {
    dispatch({
      type: SET_LOADING
    });
    try {
      const res = await instance.get(
        `/channels/${channel.id}/?latest=${timestamp}`
      );
      const messages = res.data;
      channel.messages = messages;
      dispatch({
        type: FETCH_MESSAGES
      });
    } catch (error) {
      console.error(error);
    }
  };
};
