import React, {Component} from 'react';

import getRandomMessage from '../data/welcomeMessages';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {welcomeMessage: getRandomMessage()}
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({welcomeMessage: getRandomMessage()}), 2500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <header className="masthead d-flex">
        <div className="container text-center my-auto z-1">
          <h1 className="mb-1">{this.state.welcomeMessage}</h1>
          <h3 className="mb-5">
            <em>You're gonna need to login to see the messages</em>
          </h3>
          <button className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#loginModal">Login</button>
        </div>
        <div className="overlay z-0"></div>
      </header>
    );
  }
}

export default Welcome;
