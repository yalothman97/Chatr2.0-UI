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

let interval = null;

export const fetchMessages = channel => {
  return dispatch => {
    if (channel) {
      dispatch({ type: SET_LOADING });
      if (interval) clearInterval(interval);
      interval = setInterval(async () => {
        try {
          const timestamp = channel.messages.length
            ? channel.messages[channel.messages.length - 1].timestamp
            : "";
          const res = await instance.get(
            `/channels/${channel.id}/?latest=${timestamp}`
          );
          const messages = res.data;
          channel.messages.push(...messages);
          dispatch({
            type: FETCH_MESSAGES
          });
        } catch (error) {
          console.error(error);
        }
      }, 3000);
    }
  };
};
