import {decorate, observable, computed} from 'mobx';
import axios from 'axios';

class ChannelStore {
  constructor() {
    this.channels = [];
  }

  fetchChannels() {
    axios.get('/channels/')
      .then(res => res.data)
      .then(channels => this.channels = channels)
      .catch(err => console.error(err));
  }
}

decorate(ChannelStore, {
  channels: observable
});

const channelStore = new ChannelStore();
channelStore.fetchChannels();

export default channelStore;
