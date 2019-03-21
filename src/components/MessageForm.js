import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { sendMessage } from "../store/actions";

// Utils
import getRandomHamzaism from "../data/hamzaBotMessages";

class MessageForm extends Component {
  state = { message: "" };

  timer = null;

  componentDidMount() {
    this.invokeHamsa();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  submitMessage = e => {
    e.preventDefault();
    if (this.state.message)
      sendMessage(this.state, this.props.channel.id, this.resetForm);
  };

  resetForm = (message = "") => this.setState({ message });

  invokeHamsa = () => {
    const { user } = this.props;
    if (user.username === "hamsa") {
      let rand = Math.round(Math.random() * 30000 - 10000) + 10000;
      this.timer = setTimeout(async () => {
        await this.resetForm(getRandomHamzaism());
        sendMessage(this.state, this.props.channel.id, this.resetForm);
        this.invokeHamsa();
      }, rand);
    }
  };

  render() {
    const { message } = this.state;
    return (
      <div className="message-form float-right py-3">
        <div className="container-fluid">
          <form className="col-11 mx-auto" onSubmit={this.submitMessage}>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Type your message here"
              value={message}
              onChange={e => this.setState({ message: e.target.value })}
              onKeyUp={e => {
                if (!e.shiftKey && e.key === "Enter") this.submitMessage(e);
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapStateToProps)(MessageForm);
