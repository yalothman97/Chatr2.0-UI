import React, {Component} from 'react';
import {observer} from 'mobx-react';

// Components
import MessageCard from './MessageCard';

class MessageList extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const channelStore = this.props.channelStore;
    const messageCards = channelStore.currentChannel.messages && channelStore.currentChannel.messages.map(
      (message, idx) => <MessageCard key={message.username+message.message+idx} {...message} />
    );
    return (
      <div className="container-fluid message-list py-3">
        {messageCards}
        <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}

export default observer(MessageList);
