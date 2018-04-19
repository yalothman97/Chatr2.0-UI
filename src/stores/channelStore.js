import {decorate, observable, computed} from 'mobx';
import axios from 'axios';

class ChannelStore {
  constructor() {
    this.channels = [];
    this.loading = true;
    this.currentChannel = {};
    this.newMessage = "";
  }

  fetchChannels() {
    return axios.get('/channels/')
      .then(res => res.data)
      .then(channels => {
        channels.forEach(channel => channel.messages = [])
        this.channels = channels;
        this.loading = false;
        return channels[0];
      })
      .catch(err => console.error(err));
  }

  fetchMessagesForChannel() {
    if (this.currentChannel) {
      return axios.get(`/channels/${this.currentChannel.id}/`)
        .then(res => res.data)
        .then(messages => this.currentChannel.messages = messages)
        .catch(err => console.error(err));
    }
  }

  setCurrentChannel(channelName) {
    this.newMessage = "";
    this.currentChannel = this.channels.find(channel => channel.name === channelName);
    this.fetchMessagesForChannel();
  }

  sendMessage() {
    console.log("hello")
    axios.post(`/channels/${this.currentChannel.id}/send/`, {message: this.newMessage})
      .then(() => this.newMessage = "")
      .catch(err => console.error(err));
  }
}

decorate(ChannelStore, {
  channels: observable,
  loading: observable,
  newMessage: observable,
  currentChannel: observable
});

const channelStore = new ChannelStore();
channelStore.fetchChannels()

export default channelStore;
