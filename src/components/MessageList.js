import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { fetchMessages } from "../store/actions";

// Components
import MessageCard from "./MessageCard";

class MessageList extends Component {
  componentDidMount() {
    if (this.props.channels.channels.length)
      this.props.fetchMessages(this.findChannel());
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.channelName !==
        this.props.match.params.channelName ||
      this.props.channels.channels.length !== prevProps.channels.channels.length
    ) {
      this.props.fetchMessages(this.findChannel());
    }
  }

  findChannel = () => {
    const { channels } = this.props.channels;
    const { channelName } = this.props.match.params;
    return channels.find(channel => channel.name.slugify() === channelName);
  };

  render() {
    const { channels, user } = this.props;

    if (channels.loading) return <h1>LOADING...</h1>;
    if (!user) return <Redirect to="/welcome" />;

    const { messages } = this.findChannel() || { messages: [] };
    const messageCards = messages.map(message => (
      <MessageCard key={message.id} message={message} />
    ));
    return <div className="container-fluid message-list">{messageCards}</div>;
  }
}

const mapStateToProps = ({ auth, channels }) => ({
  user: auth.user,
  channels
});

const mapDispatchToProps = {
  fetchMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
