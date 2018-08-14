import React, { Component } from "react";
import { observer, renderReporter } from "mobx-react";

// Components
import Modal from "./Modal";
import RegistationForm from "./RegistrationForm";

// Stores
import authStore from "../../stores/authStore";

class SignupModal extends Component {
  signup() {
    const thisModal = window.$("#signupModal");
    authStore
      .signup()
      .then(() => !authStore.error.length && thisModal.modal("toggle"));
  }

  render() {
    const body = (
      <RegistationForm
        target="#loginModal"
        alternateLinkText="login with an existing account"
        authStore={authStore}
      />
    );

    const modalProps = {
      id: "signupModal",
      title: "Register an account",
      body: body,
      clickHandler: this.signup,
      authStore: authStore,
      type: "Signup"
    };
    return <Modal {...modalProps} />;
  }
}

export default observer(SignupModal);
