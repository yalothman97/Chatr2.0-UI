import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

// Components
import SideNav from './SideNav';
import AuthButton from './AuthButton';

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <span className="navbar-brand" href="index.html">Chatr2.0</span>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <SideNav channelStore={props.channelStore}/>
        <ul className="navbar-nav ml-auto">
          <span className="navbar-text">
            {props.authStore.currentUser}
          </span>
          <AuthButton authStore={props.authStore} />
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(NavBar);
