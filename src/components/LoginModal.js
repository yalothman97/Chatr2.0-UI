import React from "react";
import { observer } from "mobx-react";

// Components
import Modal from "./Modal";
import RegistationForm from "./RegistrationForm";

function LoginModal(props) {
  const authStore = props.authStore;
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
