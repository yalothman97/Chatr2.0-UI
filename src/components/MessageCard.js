import React from 'react';

function MessageCard(props) {
  const {username, message} = props;
  return (
    <div className="card col-10">
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
}

export default MessageCard;
