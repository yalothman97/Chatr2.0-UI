import React from "react";
import { connect } from "react-redux";

// ACs
import { shutuuuuuuup } from "../store/actions";

function MessageCard(props) {
  const { username, message, timestamp } = props.message;
  const date = new Date(timestamp);

  return (
    <div className="card col-10 mx-auto mb-3">
      <div className="card-body">
        <h5
          className="card-title"
          onClick={username === "hamsa" && props.shutuuuuuuup}
        >
          {username}
        </h5>
        <h6 className="card-subtitle mb-3 text-muted">
          {date.toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
          })}
        </h6>
        <div className="card-text">
          {message.split("\n").map((line, idx) => (
            <p key={line + idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  shutuuuuuuup
};

export default connect(
  null,
  mapDispatchToProps
)(MessageCard);
