import React from "react";
import { observer } from "mobx-react";

// Fontawesome
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faSignOutAlt from "@fortawesome/fontawesome-free-solid/faSignOutAlt";
import faSignInAlt from "@fortawesome/fontawesome-free-solid/faSignInAlt";
import faUserPlus from "@fortawesome/fontawesome-free-solid/faUserPlus";

function AuthButton(props) {
  const authStore = props.authStore;
  return authStore.isLoggedIn ? (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" data-toggle="modal" data-target="#logoutModal">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </a>
      </li>
    </ul>
  ) : (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" data-toggle="modal" data-target="#loginModal">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </a>
      </li>
      <li>
        <a className="nav-link" data-toggle="modal" data-target="#signupModal">
          <FontAwesomeIcon icon={faUserPlus} /> Signup
        </a>
      </li>
    </ul>
  );
}

export default observer(AuthButton);
