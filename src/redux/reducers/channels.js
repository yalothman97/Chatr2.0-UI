import {
  FETCH_CHANNELS,
  FETCH_CHANNEL_MSGS,
  ADD_CHANNEL,
  POST_MSG
} from "../actions/actionTypes";

const initialState = {
  channels: [],
  messages: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHANNELS:
      const channels = action.payload;
      return {
        ...state,
        channels: channels,
        loading: false
      };

    case FETCH_CHANNEL_MSGS:
      let prevMsg = state.messages.find(
        channel => channel.id == action.payload.id
      );
      let messages = [...state.messages];
      if (prevMsg) {
        prevMsg.messages = prevMsg.messages.concat(action.payload.messages);
        messages = [...state.messages];
      } else {
        messages = state.messages.concat(action.payload);
      }
      return {
        ...state,
        messages: messages,
        loading: false
      };

    case ADD_CHANNEL:
      const newChannel = action.payload;
      return {
        ...state,
        channels: [newChannel, ...state.channels]
      };

    case POST_MSG:
      const newMsg = action.payload;
      return {
        ...state,
        messages: newMsg
      };

    default:
      return state;
  }
};

export default reducer;
