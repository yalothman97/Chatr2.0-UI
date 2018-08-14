import React from "react";
import { observer } from "mobx-react";

// Components
import Modal from "./Modal";
import RegistationForm from "./RegistrationForm";

// Stores
import authStore from "../../stores/authStore";

function LoginModal(props) {
  const body = (
    <RegistationForm
      target="#signupModal"
      alternateLinkText="register an account"
      authStore={authStore}
    />
  );

  const login = () => {
    const thisModal = window.$("#loginModal");
    authStore
      .login()
      .then(() => !authStore.error.length && thisModal.modal("toggle"));
  };

  const modalProps = {
    id: "loginModal",
    title: "Login to send messages",
    body: body,
    clickHandler: login,
    type: "Login",
    authStore: authStore
  };

  return <Modal {...modalProps} />;
}

export default observer(LoginModal);
