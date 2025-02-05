import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authorization, setErrors } from "../redux/actions";
import NavBar from "./Navigation/NavBar";

class RegistationForm extends Component {
  state = {
    username: "",
    password: ""
  };

  componentWillUnmount() {
    if (this.props.errors.length) this.props.setErrors();
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e, type) => {
    e.preventDefault();
    this.props.authorization(this.state, type, this.props.history);
  };

  render() {
    const type = this.props.match.url.substring(1);
    const errors = this.props.errors;
    if (this.props.user) return <Redirect to="/private" />;

    return (
      <>
        <NavBar />

        <div className="card col-6 mx-auto p-0 mt-5">
          <div className="card-body">
            <h5 className="card-title mb-4">
              {type === "login"
                ? "Login to send messages"
                : "Register an account"}
            </h5>
            <form onSubmit={event => this.submitHandler(event, type)}>
              {!!errors.length && (
                <div className="alert alert-danger" role="alert">
                  {errors.map(error => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              )}
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.changeHandler}
                />
              </div>
              <input
                className="btn btn-primary"
                type="submit"
                value={type.replace(/^\w/, c => c.toUpperCase())}
              />
            </form>
          </div>
          <div className="card-footer">
            <Link
              to={type === "login" ? "/signup" : "/login"}
              className="btn btn-small btn-link"
            >
              {type === "login"
                ? "register an account"
                : "login with an existing account"}
            </Link>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors.errors,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authorization: (userData, type, history) =>
      dispatch(authorization(userData, type, history)),
    setErrors: () => dispatch(setErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistationForm);
