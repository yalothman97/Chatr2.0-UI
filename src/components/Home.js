import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./Footer";

const Home = props => {
  return (
    <>
      <header className="center">
        <div className="">
          <h1 className="title">solif</h1>
          <h3>
            <p className="subhead">swalif all around</p>
          </h3>
          {!props.user ? (
            <div>
              <Link
                to="/login"
                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib black bg-white"
              >
                login
              </Link>{" "}
              <br />
              <Link
                to="/signup"
                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white"
              >
                sign up
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/private"
                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib black bg-white"
              >
                my account
              </Link>
            </div>
          )}
        </div>
        <div className="overlay z-0" />
      </header>

      {/* <Footer /> */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);
