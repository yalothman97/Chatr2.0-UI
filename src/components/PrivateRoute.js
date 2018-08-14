import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import authStore from "../stores/authStore";

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    console.log(authStore.isLoggedIn);
    return (
      <Route
        {...rest}
        render={props =>
          authStore.isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to="/welcome" />
          )
        }
      />
    );
  }
}

export default withRouter(observer(PrivateRoute));
