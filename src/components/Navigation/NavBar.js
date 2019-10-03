import React from "react";
import { Link } from "react-router-dom";

// Components
import SideNav from "./SideNav";
import AuthButton from "./AuthButton";
import { connect } from "react-redux";

const NavBar = props => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      id="mainNav"
    >
      <Link className="navbar-brand subhead" to="/home">
        Chatr2.0
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        {!!props.user ? <SideNav /> : <div />}
        <AuthButton />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(NavBar);
