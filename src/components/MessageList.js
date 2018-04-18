import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { fetchMessages } from "../store/actions";

// Components
import MessageCard from "./MessageCard";

class MessageList extends Component {
  channel = {};

  componentDidMount() {
    this.props.fetchMessages(this.findChannel());
  }

  componentDidUpdate(prevProps) {
    this.scrollToBottom(!!prevProps.channels.length ? "auto" : "smooth");
    if (
      prevProps.match.params.channelName !==
        this.props.match.params.channelName ||
      prevProps.channels.length !== this.props.channels.length
    ) {
      this.props.fetchMessages(this.findChannel());
    }
  }

  scrollToBottom = behavior => {
    if (this.messagesEnd)
      this.messagesEnd.scrollIntoView({ behavior: behavior });
  };

  findChannel = () => {
    const { channels } = this.props;
    const { channelName } = this.props.match.params;
    return (
      channels.find(channel => channel.name.slugify() === channelName) || {}
    );
  };

  getContent = () => {
    const { loading } = this.props;

    if (loading) return <h1 style={{ color: "white" }}>LOADING...</h1>;

    const { messages } = this.channel;

    return messages.map(message => (
      <MessageCard key={message.id} message={message} />
    ));
  };

  render() {
    const { user } = this.props;
    this.channel = this.findChannel();
    let image_url =
      this.channel.image_url || "https://picsum.photos/1280/720/?random";

    if (!user) return <Redirect to="/welcome" />;

    return (
      <div
        className="container-fluid message-list py-3"
        style={{
          backgroundImage: `url(${image_url})`
        }}
      >
        {this.getContent()}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ auth, channels }) => ({
  user: auth.user,
  channels: channels.channels,
  loading: channels.loading
});

const mapDispatchToProps = {
  fetchMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
