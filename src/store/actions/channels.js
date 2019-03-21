import axios from "axios";

import {
  FETCH_CHANNELS,
  FETCH_MESSAGES,
  SHUTUUUUUUUP,
  SET_LOADING
} from "./actionTypes";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

export const setLoading = () => ({ type: SET_LOADING });

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

export const fetchMessages = channel => async dispatch => {
  const timestamp = channel.messages.length
    ? channel.messages[channel.messages.length - 1].timestamp
    : "";

  try {
    const res = await instance.get(
      `/channels/${channel.id}/?latest=${timestamp}`
    );
    const messages = res.data;
    if (
      !messages.some(
        newMessage =>
          !!channel.messages.find(
            originalMessage => newMessage.id === originalMessage.id
          )
      )
    ) {
      channel.messages = channel.messages.concat(messages);
      dispatch({
        type: FETCH_MESSAGES
      });
    }
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
    if (error.response) console.error(error.response.data);
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
