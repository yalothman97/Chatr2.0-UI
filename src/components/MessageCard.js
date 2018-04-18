import React from "react";

function MessageCard(props) {
  const { username, message } = props.message;
  return (
    <div className="card col-10">
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <div className="card-text">
          {message.split("\n").map(line => (
            <p>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
