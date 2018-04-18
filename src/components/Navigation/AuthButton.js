import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// ACs
import { logout } from "../../store/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

class AuthButton extends Component {
  render() {
    const { user } = this.props;

    let buttons = [
      <li key="loginButton" className="nav-item">
        <Link to="/login" className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Link>
      </li>,
      <li key="signupButton" className="nav-item">
        <Link to="/signup" className="nav-link">
          <FontAwesomeIcon icon={faUserPlus} /> Signup
        </Link>
      </li>
    ];

    if (user) {
      buttons = (
        <>
          <span className="navbar-text">{user.username}</span>
          <li className="nav-item">
            <span onClick={this.props.logout} className="nav-link">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </span>
          </li>
        </>
      );
    }

    return <ul className="navbar-nav ml-auto">{buttons}</ul>;
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
