import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import getRandomMessage from "../data/welcomeMessages";

class Welcome extends Component {
  state = { welcomeMessage: getRandomMessage() };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ welcomeMessage: getRandomMessage() }),
      2500
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { user, channels } = this.props;
    if (user && channels.length)
      return <Redirect to={`/channels/${channels[0].name.slugify()}`} />;
    return (
      <header className="masthead d-flex">
        <div className="container text-center my-auto z-1">
          <h1 className="mb-1">{this.state.welcomeMessage}</h1>
          <h3 className="mb-5">
            <em>You're gonna need to login to see the messages</em>
          </h3>
          <Link to="/login" className="btn btn-primary btn-lg">
            Login
          </Link>
        </div>
        <div className="overlay z-0" />
      </header>
    );
  }
}

const mapStateToProps = ({ auth, channels }) => ({
  user: auth.user,
  channels: channels.channels
});

export default connect(mapStateToProps)(Welcome);
