import React, { Component } from "react";
import { connect } from "react-redux";
import { postMsg } from "../redux/actions";

class PostMsgForm extends Component {
  state = {
    message: ""
  };

  handleChange = event => {
    this.props.setTempMessage(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event, channelID) => {
    event.preventDefault();
    this.props.postMsg(this.state, channelID);
    this.props.triggerLoading();
    this.setState({ message: "" });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={event => this.handleSubmit(event, this.props.channelID)}
        >
          <div className="input-group mb-3 mx-auto ">
            <input
              type="text"
              className="form-control msgSize"
              id="name"
              name="message"
              placeholder="type your message"
              aria-describedby="button-addon2"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                type="submit"
                id="button-addon2"
                className="btn btn-success"
              >
                post
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postMsg: (message, channelID) => dispatch(postMsg(message, channelID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostMsgForm);
