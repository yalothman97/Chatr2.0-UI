import axios from "axios";
import jwt_decode from "jwt-decode";

import { FETCH_CHANNELS, FETCH_CHANNEL_MSGS } from "./actionTypes";

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

//   export const postAuthor = author => {
//     return async dispatch => {
//       try {
//         const res = await instance.post("/api/authors/", author);
//         const newAuthor = res.data;
//         dispatch({
//           type: ADD_AUTHOR,
//           payload: newAuthor
//         });
//       } catch (error) {
//         console.error(error.response.data);
//       }
//     };
//   };
