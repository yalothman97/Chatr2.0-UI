import React from "react";
import { observer } from "mobx-react";

function MessageForm(props) {
  const { channelStore } = props;
  return (
    <div className="message-form float-right py-3">
      <div className="container-fluid">
        <form className="col-11 mx-auto">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Type your message here"
            value={channelStore.currentChannel.newMessage}
            onChange={e => {
              channelStore.currentChannel.newMessage = e.target.value;
            }}
            onKeyUp={e => {
              if (!e.shiftKey && e.key === "Enter") {
                e.preventDefault();
                channelStore.sendMessage();
              }
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default observer(MessageForm);
