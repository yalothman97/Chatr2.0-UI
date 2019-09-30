import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannelMsgs } from "../redux/actions";

class ChannelMsgs extends Component {
  // { channelNAME } = match.params;
  componentDidMount() {
    this.props.fetchChannelMsgs(this.props.match.params.channelID);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.channelID !== this.props.match.params.channelID
    ) {
      this.props.fetchChannelMsgs(this.props.match.params.channelID);
    }
  }

  render() {
    let messages = this.props.msgs.map(message => (
      <div key={message.id}>
        <h5>{message.username}</h5>
        <h2>message: {message.message}</h2>
        <small>time: {message.timestamp}</small>
      </div>
    ));
    return <div>{messages}</div>;
  }
}

const mapStateToProps = state => {
  return {
    msgs: state.channels.messages
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannelMsgs: channelID => dispatch(fetchChannelMsgs(channelID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelMsgs);
