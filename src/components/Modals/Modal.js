import React, { Component } from "react";

// Stores
import authStore from "../../stores/authStore";

class Modal extends Component {
  submitHandler() {
    const type = this.props.type;
    const thisModal = window.$(`#${this.props.type}Modal`);
    const response = authStore[type]();

    if (response) {
      response.then(() => !authStore.error.length && thisModal.modal("toggle"));
    } else {
      thisModal.modal("toggle");
    }
  }

  render() {
    const { type, title } = this.props;
    return (
      <div
        className="modal fade"
        tabIndex="-1"
        data-backdrop="static"
        id={`${type}Modal`}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
            </div>
            <div className="modal-body">{this.props.children}</div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
                onClick={() => authStore && authStore.resetForm()}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.submitHandler.bind(this)}
              >
                {type.replace(/^\w/, c => c.toUpperCase())}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
