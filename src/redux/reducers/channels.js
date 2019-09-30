import { FETCH_CHANNELS, FETCH_CHANNEL_MSGS } from "../actions/actionTypes";

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
      const messages = action.payload;
      return {
        ...state,
        messages: messages,
        loading: false
      };

    // case ADD_AUTHOR:
    //   const newAuthor = action.payload;
    //   return {
    //     ...state,
    //     authors: [newAuthor, ...state.authors]
    //   };

    default:
      return state;
  }
};

export default reducer;
