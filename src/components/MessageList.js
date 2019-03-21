import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { fetchMessages, setLoading } from "../store/actions";

// Components
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";

class MessageList extends Component {
  channel = null;
  interval = null;

  componentDidMount() {
    this.fetchMessages();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.channelName !==
        this.props.match.params.channelName ||
      prevProps.channels.length !== this.props.channels.length
    ) {
      this.fetchMessages();
    }
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  scrollToBottom = (behavior = "smooth") => {
    if (this.messagesEnd)
      this.messagesEnd.scrollIntoView({ behavior: behavior });
  };

  fetchMessages = async () => {
    const { channel } = this;
    if (channel) {
      this.props.setLoading();
      await this.props.fetchMessages(channel);
      this.scrollToBottom("auto");
      if (this.interval) clearInterval(this.interval);
      this.interval = setInterval(async () => {
        await this.props.fetchMessages(channel);
        this.scrollToBottom();
      }, 3000);
    }
  };

  findChannel = () => {
    const { channels } = this.props;
    const { channelName } = this.props.match.params;
    return channels.find(channel => channel.name.slugify() === channelName);
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
    const { user, loading } = this.props;
    this.channel = this.findChannel();
    let image_url = "https://picsum.photos/1280/720/?random";

    if (!user) return <Redirect to="/welcome" />;
    if (!this.channel && !loading) return <Redirect to="/" />;
    if (this.channel) image_url = this.channel.image_url || image_url;

    return (
      <div
        className="container-fluid message-list py-3"
        style={{
          backgroundImage: `url(${image_url})`
        }}
      >
        {this.getContent()}
        <MessageForm channel={this.channel} />
        <div className="overlay" />
        <div
          style={{ height: "130px" }}
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
  fetchMessages,
  setLoading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

const isInViewport = function(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
