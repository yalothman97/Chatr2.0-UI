import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Scripts
import main from "./assets/js/main";

// Components

import Footer from "./components/Footer";

import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import ChannelMsgs from "./components/ChannelMsgs";
import Home from "./components/Home";

class App extends Component {
  componentDidMount() {
    main();
  }

  render() {
    return (
      <div className="">
        <Route path="/home" component={Home} />
        <div className="content-wrapper bg-transparent ">
          <Switch>
            <Route path="/(login|signup)" component={RegistrationForm} />
            <Route path="/private" component={SuperSecretPage} />
            <Route path="/channels/:channelID" component={ChannelMsgs} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
