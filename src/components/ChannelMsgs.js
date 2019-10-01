import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannelMsgs } from "../redux/actions";

class ChannelMsgs extends Component {
  state = {
    interval: null
  };
  componentDidMount() {
    let timestamp = "";
    let channelID = this.props.match.params.channelID;
    let channel = this.props.msgs.find(channel => channel.id == channelID);
    if (channel) {
      let prevmsgs = channel.messages;
      if (prevmsgs.length !== 0) {
        timestamp = prevmsgs[prevmsgs.length - 1].timestamp;
      }
    }

    this.props.fetchChannelMsgs(this.props.match.params.channelID, timestamp);
    this.setState({
      interval: setInterval(
        () =>
          this.props.fetchChannelMsgs(
            this.props.match.params.channelID,
            timestamp
          ),
        3000
      )
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.channelID !== this.props.match.params.channelID
    ) {
      clearInterval(this.state.interval);
      let timestamp = "";
      let channelID = this.props.match.params.channelID;
      let channel = this.props.msgs.find(channel => channel.id == channelID);
      if (channel) {
        let prevmsgs = channel.messages;
        if (prevmsgs.length !== 0) {
          timestamp = prevmsgs[prevmsgs.length - 1].timestamp;
        }
      }
      this.props.fetchChannelMsgs(this.props.match.params.channelID, timestamp);
      this.setState({
        interval: setInterval(
          () =>
            this.props.fetchChannelMsgs(
              this.props.match.params.channelID,
              timestamp
            ),
          3000
        )
      });
    }
  }

  render() {
    let channelID = this.props.match.params.channelID;
    let channel = this.props.msgs.find(channel => channel.id == channelID);
    if (channel) {
      let messages = channel.messages.map((message, idx) => (
        <div key={idx}>
          <div className="msg">
            <h2 className="bold">{message.message}</h2>
            <h6>From {message.username}</h6>
            <small>time: {message.timestamp}</small>
          </div>
        </div>
      ));
      return <div>{messages}</div>;
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    msgs: state.channels.messages
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannelMsgs: (channelID, timestamp) =>
    dispatch(fetchChannelMsgs(channelID, timestamp))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelMsgs);
