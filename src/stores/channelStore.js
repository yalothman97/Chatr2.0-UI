import {decorate, observable} from 'mobx';
import axios from 'axios';

class ChannelStore {
  constructor() {
    this.channels = [];
    this.currentChannel = {};
  }

  fetchChannels() {
    return axios.get('/channels/')
      .then(res => res.data)
      .then(channels => {
        channels.forEach(channel => {
          channel.messages = [];
          channel.newMessage = "";
          channel.timestamp = null;
        })
        this.channels = channels;
      })
      .catch(err => console.error(err));
  }

  fetchMessagesForChannel() {
    const {currentChannel} = this;
    if (this.currentChannel) {
      return axios.get(`/channels/${currentChannel.id}/?latest=${currentChannel.timestamp || ''}`)
        .then(res => res.data)
        .then(messages => {
          console.log(messages)
          if(messages.length) {
            currentChannel.timestamp = messages[messages.length-1].timestamp;
            currentChannel.messages = currentChannel.messages.slice().concat(messages);
          }
        })
        .catch(err => console.error(err));
    }
  }

  setCurrentChannel(channelName) {
    if (this.currentChannel.pollingInterval) clearInterval(this.currentChannel.pollingInterval)
    this.currentChannel = this.channels.find(channel => channel.name === channelName);
    this.fetchMessagesForChannel()
    this.currentChannel.pollingInterval = setInterval(() => this.fetchMessagesForChannel(), 3000);
  }

  sendMessage() {
    axios.post(
      `/channels/${this.currentChannel.id}/send/`,
      {message: this.currentChannel.newMessage}
    )
      .then(() => this.currentChannel.newMessage = "")
      .catch(err => console.error(err));
  }
}

decorate(ChannelStore, {
  channels: observable,
  loading: observable,
  currentChannel: observable
});

const channelStore = new ChannelStore();
channelStore.fetchChannels()

export default channelStore;
