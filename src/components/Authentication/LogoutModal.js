import React, { Component } from "react";

// Components
import Modal from "./Modal";

// Stores
import authStore from "../../stores/authStore";

class LogoutModal extends Component {
  logout() {
    window.$("#logoutModal").modal("toggle");
    authStore.logout();
  }

  render() {
    const modalProps = {
      id: "logoutModal",
      title: "Ready to Leave?",
      body:
        'Select "Logout" below if you are ready to end your current session.',
      clickHandler: this.logout,
      type: "Logout"
    };
    return <Modal {...modalProps} />;
  }
}

export default LogoutModal;
