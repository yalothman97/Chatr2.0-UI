import {
  FETCH_CHANNELS,
  FETCH_MESSAGES,
  SET_LOADING,
  SHUTUUUUUUUP
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  channels: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };

    case FETCH_CHANNELS:
      return { ...state, loading: false, ...payload };

    case FETCH_MESSAGES:
      return { ...state, channels: [...state.channels], loading: false };

    case SHUTUUUUUUUP:
      state.channels.forEach(
        channel =>
          (channel.messages = channel.messages.filter(
            message => message.username !== "hamsa"
          ))
      );
      return { ...state, channels: [...state.channels] };

    default:
      return state;
  }
};
