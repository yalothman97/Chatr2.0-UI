import React, { Component } from "react";

// Stores
import authStore from "../../stores/authStore";

class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        tabIndex="-1"
        data-backdrop="static"
        id={this.props.id}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
            </div>
            <div className="modal-body">{this.props.body}</div>
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
                onClick={this.props.clickHandler}
              >
                {this.props.type}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
