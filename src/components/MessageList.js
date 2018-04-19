import React, {Component} from 'react';
import {observer} from 'mobx-react';

// Components
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';

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
        <MessageForm channelStore={channelStore}/>
        <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>
      </div>
    );
  }
}

export default observer(MessageList);
