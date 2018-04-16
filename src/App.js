import React from 'react';

// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';

function App(props) {
  const {authStore, channelStore} = props;
  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore} channelStore={channelStore}/>
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal authStore={authStore}/>
      <Footer />
    </div>
  );
}

export default App;
