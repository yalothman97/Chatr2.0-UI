import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./Footer";
import anime from "animejs/lib/anime.es.js";

const Home = props => {
  var textWrapper = document.querySelector(".ml13");
  if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".ml13 .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el, i) => 0 + 30 * i
    });
  }

  return (
    <>
      <header className="center">
        <div className="">
          <h1 className="title ml13">solif</h1>
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
