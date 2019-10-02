import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Welcome = props => {
  return (
    <header className="center">
      <div className="">
        <h1 className="title">chatr</h1>
        <h3>
          <p className="subhead">connecting the world</p>
        </h3>
        {!props.user && (
          <Link
            to="/login"
            className="f6 grow no-underline br-pill ph3 pv2 mb2 dib black bg-white"
          >
            login
          </Link>
        )}
      </div>
      <div className="overlay z-0" />
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Welcome);
