import React, {Component} from 'react';
import {observer} from 'mobx-react';

// Components
import MessageCard from './MessageCard';

function MessageList(props) {
  const channelStore = props.channelStore;
  const messageCards = channelStore.currentChannel.messages && channelStore.currentChannel.messages.map(
    (message, idx) => <MessageCard key={message.username+message.message+idx} {...message} />
  );
  return (
    <div className="container-fluid message-list">
      {messageCards}
    </div>
  );
}

export default observer(MessageList);
