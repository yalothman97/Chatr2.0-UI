import React from "react";

function Modal(props) {
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      data-backdrop="static"
      id={props.id}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
          </div>
          <div className="modal-body">{props.body}</div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              type="button"
              data-dismiss="modal"
              onClick={() => props.authStore && props.authStore.resetForm()}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={props.clickHandler}
            >
              {props.type}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
