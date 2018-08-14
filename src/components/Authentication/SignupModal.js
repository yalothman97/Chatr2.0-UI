import React from "react";
import { observer } from "mobx-react";

// Components
import Modal from "./Modal";
import RegistationForm from "./RegistrationForm";

// Stores
import authStore from "../../stores/authStore";

function SignupModal(props) {
  const body = (
    <RegistationForm
      target="#loginModal"
      alternateLinkText="login with an existing account"
      authStore={authStore}
    />
  );

  const signup = () => {
    const thisModal = window.$("#signupModal");
    authStore
      .signup()
      .then(() => !authStore.error.length && thisModal.modal("toggle"));
  };

  const modalProps = {
    id: "signupModal",
    title: "Register an account",
    body: body,
    clickHandler: signup,
    authStore: authStore,
    type: "Signup"
  };
  return <Modal {...modalProps} />;
}

export default observer(SignupModal);
