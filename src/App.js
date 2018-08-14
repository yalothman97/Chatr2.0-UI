import React, { Component } from "react";

// Components
import NavBar from "./components/Navigation/NavBar";
import LogoutModal from "./components/Authentication/LogoutModal";
import LoginModal from "./components/Authentication/LoginModal";
import SignupModal from "./components/Authentication/SignupModal";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <LogoutModal />
        <LoginModal />
        <SignupModal />
        <Footer />
      </div>
    );
  }
}

export default App;
