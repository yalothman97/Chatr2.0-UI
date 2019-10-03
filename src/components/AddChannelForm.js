import React, { Component } from "react";
import { connect } from "react-redux";
import { postChannel } from "../redux/actions";

class AddChannelForm extends Component {
  state = {
    name: "",
    image_url: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postChannel(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>

          <div class="input-group mb-3">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="image_url"
                placeholder="image url"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postChannel: channelData => dispatch(postChannel(channelData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddChannelForm);
