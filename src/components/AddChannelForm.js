import React, { Component } from "react";
import { connect } from "react-redux";
import { postChannel } from "../redux/actions";

class AddChannelForm extends Component {
  state = {
    name: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.postChannel(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postChannel: channelData => dispatch(postChannel(channelData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChannelForm);
