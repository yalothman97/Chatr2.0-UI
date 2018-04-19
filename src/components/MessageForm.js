import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { sendMessage } from "../store/actions";

class MessageForm extends Component {
  state = { message: "" };

  submitMessage = e => {
    e.preventDefault();
    if (this.state.message)
      sendMessage(this.state, this.props.channel.id, () =>
        this.setState({ message: "" })
      );
  };

  render() {
    const { message } = this.state;
    return (
      <div className="message-form float-right py-3">
        <div className="container-fluid">
          <form className="col-11 mx-auto">
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

export default MessageForm;
