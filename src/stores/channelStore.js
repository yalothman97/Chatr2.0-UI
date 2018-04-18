import {decorate, observable, computed} from 'mobx';
import axios from 'axios';

class ChannelStore {
  constructor() {
    this.channels = [];
    this.loading = true;
    this.currentChannel = {};
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
    console.log(axios.defaults)
    if (this.currentChannel) {
      return axios.get(`/channels/${this.currentChannel.id}/`)
        .then(res => res.data)
        .then(messages => this.currentChannel.messages = messages)
        .catch(err => console.error(err));
    }
  }

  setCurrentChannel(channel) {
    this.currentChannel = channel;
    this.fetchMessagesForChannel();
  }
}

decorate(ChannelStore, {
  channels: observable,
  loading: observable,
  currentChannel: observable
});

const channelStore = new ChannelStore();
channelStore.fetchChannels()
  .then((channulusPrime) => channelStore.setCurrentChannel(channulusPrime))

export default channelStore;
