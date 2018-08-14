import React from "react";
import { decorate, observable, computed } from "mobx";
import axios from "axios";

class AuthStore {
  constructor() {
    this.currentUser = localStorage.getItem("currentUser");
    this.token = localStorage.getItem("token");
    this.error = [];
    this.username = "";
    this.password = "";
  }

  signup() {
    return this.storeUser("signup");
  }

  login() {
    return this.storeUser("login");
  }

  logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.currentUser = null;
    this.token = null;
  }

  storeUser(type) {
    return axios
      .post(`http://localhost:8000/${type}/`, {
        username: this.username,
        password: this.password
      })
      .then(res => res.data)
      .then(({ username, token }) => {
        localStorage.setItem("currentUser", username);
        localStorage.setItem("token", token);
        this.currentUser = username;
        this.token = token;
        this.resetForm();
      })
      .catch(err => {
        Object.entries(err.response.data).forEach(
          ([errType, errList]) =>
            (this.error = this.error.concat(
              errList.map(message => (
                <p key={errType + message}>
                  <strong>{errType}:</strong> {message}
                </p>
              ))
            ))
        );
      });
  }

  resetForm() {
    this.error = [];
    this.username = "";
    this.password = "";
  }

  get isLoggedIn() {
    return !!this.token;
  }
}

decorate(AuthStore, {
  currentUser: observable,
  token: observable,
  error: observable,
  username: observable,
  password: observable,
  isLoggedIn: computed
});

export default new AuthStore();
