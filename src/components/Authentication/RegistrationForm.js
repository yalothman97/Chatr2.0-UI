import React from "react";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";

function RegistationForm(props) {
  return (
    <div>
      <form>
        {authStore.error.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {authStore.error}
          </div>
        )}
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            required
            onChange={e => {
              authStore.username = e.target.value;
              authStore.error = [];
            }}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            required
            onChange={e => {
              authStore.password = e.target.value;
              authStore.error = [];
            }}
          />
        </div>
      </form>
      <div className="text-center">
        <button
          className="mx-auto mt-3 btn btn-small btn-link"
          data-dismiss="modal"
          data-toggle="modal"
          data-target={props.target}
          onClick={() => (authStore.error = [])}
        >
          {props.alternateLinkText}
        </button>
      </div>
    </div>
  );
}

export default observer(RegistationForm);
