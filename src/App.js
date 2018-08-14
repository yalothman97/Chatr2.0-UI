import React from "react";

// Components
import NavBar from "./components/Navigation/NavBar";
import LogoutModal from "./components/Authentication/LogoutModal";
import LoginModal from "./components/Authentication/LoginModal";
import SignupModal from "./components/Authentication/SignupModal";
import Footer from "./components/Footer";

function App(props) {
  const authStore = props.authStore;
  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore} />
      <LogoutModal authStore={authStore} />
      <LoginModal authStore={authStore} />
      <SignupModal authStore={authStore} />
      <Footer />
    </div>
  );
}

export default App;
