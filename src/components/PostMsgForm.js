import React, { Component } from "react";
import { connect } from "react-redux";
import { postMsg } from "../redux/actions";

class PostMsgForm extends Component {
  state = {
    message: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

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
          <div className="form-group ">
            <input
              type="text"
              className="form-control msgSize"
              id="name"
              name="message"
              placeholder="type your message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            post
          </button>
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
