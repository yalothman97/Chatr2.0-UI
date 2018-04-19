import React from "react";
import { connect } from "react-redux";

// ACs
import { shutuuuuuuup } from "../store/actions";

const Footer = props => {
  return (
    <footer className="sticky-footer">
      <div className="container">
        <div className="text-center">
          <small>Copyright © CODED Chatr 2019</small>
          <button
            className="btn btn-xs btn-danger mx-5"
            onClick={props.shutuuuuuuup}
          >
            shutuuuuuuup
          </button>
        </div>
      </div>
    </footer>
  );
};

const mapDispatchToProps = {
  shutuuuuuuup
};

export default connect(
  null,
  mapDispatchToProps
)(Footer);
