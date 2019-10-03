import React, { Component } from "react";

// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannelMsgs } from "../redux/actions";
import PostMsgForm from "./PostMsgForm";
import NavBar from "./Navigation/NavBar";

class ChannelMsgs extends Component {
  state = {
    interval: null,
    loading: false,
    tempMessage: ""
  };
  componentDidMount() {
    let timestamp = "";
    let channelID = this.props.match.params.channelID;
    let channel = this.props.msgs.find(channel => channel.id == channelID);
    if (channel) {
      let prevmsgs = channel.messages;
      if (prevmsgs.length !== 0) {
        timestamp = prevmsgs[prevmsgs.length - 1].timestamp;
      }
    }

    this.props.fetchChannelMsgs(this.props.match.params.channelID, timestamp);
    this.setState({
      interval: setInterval(() => {
        let timestamp = "";
        let channelID = this.props.match.params.channelID;
        let channel = this.props.msgs.find(channel => channel.id == channelID);
        if (channel) {
          let prevmsgs = channel.messages;
          if (prevmsgs.length !== 0) {
            timestamp = prevmsgs[prevmsgs.length - 1].timestamp;
          }
        }
        this.props.fetchChannelMsgs(
          this.props.match.params.channelID,
          timestamp
        );
        this.setState({ loading: false });
      }, 3000)
    });
  }
  setTempMessage = text => {
    this.setState({ tempMessage: text });
  };

  triggerLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.channelID !== this.props.match.params.channelID
    ) {
      clearInterval(this.state.interval);
      let timestamp = "";
      let channelID = this.props.match.params.channelID;
      let channel = this.props.msgs.find(channel => channel.id == channelID);
      if (channel) {
        let prevmsgs = channel.messages;
        if (prevmsgs.length !== 0) {
          timestamp = prevmsgs[prevmsgs.length - 1].timestamp;
        }
      }
      this.props.fetchChannelMsgs(this.props.match.params.channelID, timestamp);
      this.setState({
        interval: setInterval(() => {
          let timestamp = "";
          let channelID = this.props.match.params.channelID;
          let channel = this.props.msgs.find(
            channel => channel.id == channelID
          );
          if (channel) {
            let prevmsgs = channel.messages;
            if (prevmsgs.length !== 0) {
              timestamp = prevmsgs[prevmsgs.length - 1].timestamp;
            }
          }
          this.props.fetchChannelMsgs(
            this.props.match.params.channelID,
            timestamp
          );
          this.setState({ loading: false });
        }, 3000)
      });
    }
  }

  render() {
    let channelID = this.props.match.params.channelID;
    let channel = this.props.msgs.find(channel => channel.id == channelID);
    if (channel) {
      let divObj = document.getElementById("msgs");
      if (divObj) {
        divObj.scrollTop = divObj.scrollHeight;
      }
      let messages = channel.messages.map((message, idx) => (
        <div key={idx}>
          <div className="msg">
            <h2 className="bold">{message.message}</h2>
            <h6>From {message.username}</h6>
            <small>time: {message.timestamp}</small>
          </div>
        </div>
      ));

      return (
        <>
          <NavBar />
          <div>
            <div className="row">
              <div className="col-12" id="msgs">
                {messages}
                {this.state.loading && (
                  <div key={"loading"}>
                    <div className="msg">
                      <h2 className="bold">{this.state.tempMessage}</h2>
                      <h6>From {this.props.user.username}</h6>
                      <small>time: ----</small>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <footer>
              <div className="row my-2 mx-2 ">
                <div className=" col-12">
                  <PostMsgForm
                    setTempMessage={this.setTempMessage}
                    triggerLoading={this.triggerLoading}
                    channelID={channelID}
                  />
                </div>
              </div>
            </footer>
          </div>
        </>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    msgs: state.channels.messages
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannelMsgs: (channelID, timestamp) =>
    dispatch(fetchChannelMsgs(channelID, timestamp))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelMsgs);

// className = "form-control input-sm chat_input";
