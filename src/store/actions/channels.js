import axios from "axios";

import {
  FETCH_CHANNELS,
  FETCH_MESSAGES,
  SET_LOADING,
  SHUTUUUUUUUP
} from "./actionTypes";

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

export const fetchMessages = channel => dispatch => {
  if (channel) {
    dispatch({ type: SET_LOADING });
    if (interval) clearInterval(interval);
    _fetchMessages(channel, dispatch);
    interval = setInterval(() => _fetchMessages(channel, dispatch), 3000);
  }
};

const _fetchMessages = async (channel, dispatch) => {
  try {
    const timestamp = channel.messages.length
      ? channel.messages[channel.messages.length - 1].timestamp
      : "";
    const res = await instance.get(
      `/channels/${channel.id}/?latest=${timestamp}`
    );
    const messages = res.data;
    channel.messages = channel.messages.concat(messages);
    dispatch({
      type: FETCH_MESSAGES
    });
  } catch (error) {
    console.error(error);
  }
};

export const sendMessage = async (message, channelID, reset = () => {}) => {
  try {
    reset();
    await instance.post(`/channels/${channelID}/send/`, message);
  } catch (error) {
    reset(message.message);
    console.error(error);
  }
};

export const shutuuuuuuup = () => async dispatch => {
  try {
    await instance.get("/shutuuuuuuup/");
    dispatch({
      type: SHUTUUUUUUUP
    });
  } catch (error) {
    console.error(error);
  }
};
