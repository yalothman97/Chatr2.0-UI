import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./Navigation/NavBar";

const SuperSecretPage = ({ user }) => {
  if (!user) return <Redirect to="/login" />;

  return (
    <>
      <NavBar />
      <div className="center">
        <h1 className="title">Welcome</h1>
        <p className="subhead">Start Chatting</p>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(SuperSecretPage);
