import React from 'react';

function MessageCard(props) {
  const {username, message, timestamp} = props;
  const date = new Date(timestamp);
  return (
    <div className="card col-10 mx-auto mb-3">
      <div className="card-body">
        <h5 className="card-title" onClick={() => {if(username === "hamsa") props.channelStore.shutuuuuuuup()}}>{username}</h5>
        <h6 className="card-subtitle mb-3">{date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</h6>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
}

export default MessageCard;
