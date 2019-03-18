import { decorate, observable } from "mobx";
import axios from "axios";

import getRandomHamzaism from "../data/hamzaBotMessages";

class ChannelStore {
  constructor() {
    this.channels = [];
    this.currentChannel = {};
  }

  fetchChannels() {
    return axios
      .get("/channels/")
      .then(res => res.data)
      .then(channels => {
        channels.forEach(channel => {
          channel.messages = [];
          channel.newMessage = "";
          channel.timestamp = null;
        });
        this.channels = channels;
      })
      .catch(err => console.error(err));
  }

  fetchMessagesForChannel() {
    const { currentChannel } = this;
    if (this.currentChannel) {
      return axios
        .get(
          `/channels/${currentChannel.id}/?latest=${currentChannel.timestamp ||
            ""}`
        )
        .then(res => res.data)
        .then(messages => {
          if (messages.length) {
            currentChannel.timestamp = messages[messages.length - 1].timestamp;
            currentChannel.messages = currentChannel.messages
              .slice()
              .concat(messages);
          }
        })
        .catch(err => console.error(err));
    }
  }

  setCurrentChannel(channelName) {
    if (this.currentChannel.pollingInterval)
      clearInterval(this.currentChannel.pollingInterval);
    this.currentChannel = this.channels.find(
      channel => channel.name === channelName
    );
    this.fetchMessagesForChannel();
    this.currentChannel.pollingInterval = setInterval(
      () => this.fetchMessagesForChannel(),
      3000
    );
  }

  sendMessage(hamzaism) {
    axios
      .post(`/channels/${this.currentChannel.id}/send/`, {
        message: hamzaism || this.currentChannel.newMessage
      })
      .then(() => {
        if (!hamzaism) this.currentChannel.newMessage = "";
      })
      .catch(err => console.error(err));
  }

  startTheHamza() {
    if (localStorage.getItem("currentUser") === "hamsa") {
      let rand = Math.round(Math.random() * 30000 - 10000) + 10000;
      setTimeout(() => {
        this.sendMessage(getRandomHamzaism());
        this.startTheHamza();
      }, rand);
    }
  }

  shutuuuuuuup() {
    axios
      .get("/shutuuuuuuup/")
      .then(() =>
        this.channels.forEach(
          channel =>
            (channel.messages = channel.messages.filter(
              message => message.username !== "hamsa"
            ))
        )
      )
      .catch(err => console.error(err));
  }
}

decorate(ChannelStore, {
  channels: observable,
  loading: observable,
  currentChannel: observable
});

const channelStore = new ChannelStore();
channelStore.fetchChannels();
channelStore.startTheHamza();

export default channelStore;
