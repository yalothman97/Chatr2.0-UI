import React from "react";

// Components
import Modal from "./Modal";

// Stores
import authStore from "../../stores/authStore";

function LogoutModal(props) {
  const modalProps = {
    id: "logoutModal",
    title: "Ready to Leave?",
    body: 'Select "Logout" below if you are ready to end your current session.',
    clickHandler: () => {
      window.$("#logoutModal").modal("toggle");
      authStore.logout();
    },
    type: "Logout"
  };
  return <Modal {...modalProps} />;
}

export default LogoutModal;
